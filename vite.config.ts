import { execFileSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { defineConfig, loadEnv, mergeConfig, type PluginOption } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Server-side env vars (no VITE_ prefix) for server routes/functions — never exposed to the client.
const serverEnv = loadEnv(
  process.env["NODE_ENV"] === "production" ? "production" : "development",
  process.cwd(),
  "",
);
Object.assign(process.env, serverEnv);

/** Fails the build when a translation key is missing in any of the 5 locales. */
const i18nCheck = {
  name: "i18n-key-check",
  apply: "build" as const,
  buildStart() {
    execFileSync(process.execPath, ["scripts/check-i18n.mjs"], { stdio: "inherit" });
  },
};

export default defineConfig(async ({ command, mode }) => {
  const isDevBuild = command === "build" && mode === "development";

  const plugins: PluginOption[] = [];

  if (mode === "development") {
    const { devtools } = await import("@tanstack/devtools-vite");
    plugins.push(
      devtools({
        logging: false,
        eventBusConfig: { enabled: false },
        enhancedLogs: { enabled: false },
        consolePiping: { enabled: false },
        removeDevtoolsOnBuild: false,
        injectSource: { enabled: true },
      }),
    );
  }

  plugins.push(tailwindcss());
  plugins.push(tsConfigPaths({ projects: ["./tsconfig.json"] }));

  plugins.push(
    tanstackStart({
      // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
      server: { entry: "server" },
      importProtection: {
        behavior: "error",
        client: { files: ["**/server/**"], specifiers: ["server-only"] },
      },
    }),
  );

  if (command === "build") {
    const { nitro } = await import("nitro/vite");
    plugins.push(nitro({ defaultPreset: "cloudflare-module" }));
  }

  plugins.push(react());
  plugins.push(i18nCheck);

  // Inject VITE_*-prefixed env vars as import.meta.env.* defines (client + SSR builds).
  const loadedEnv = loadEnv(mode, process.cwd(), "VITE_");
  const envDefine: Record<string, string> = {};
  for (const [key, value] of Object.entries(loadedEnv)) {
    envDefine[`import.meta.env.${key}`] = JSON.stringify(value);
  }

  const config = {
    define: envDefine,
    environments: {
      // Rolldown's automatic chunk splitting can produce circular chunk
      // imports for the SSR helper runtime (e.g. `__exportAll`), which
      // crashes at module-evaluation time depending on chunk load order.
      // A single SSR bundle avoids that class of bug entirely.
      ssr: { build: { rolldownOptions: { output: { codeSplitting: false } } } },
      ...(isDevBuild
        ? { client: { define: { "process.env.NODE_ENV": JSON.stringify("development") } } }
        : {}),
    },
    ...(isDevBuild ? { esbuild: { keepNames: true } } : {}),
    css: { transformer: "lightningcss" as const },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "entities/lib/decode.js": path.resolve(__dirname, "node_modules/entities/lib/decode.js"),
        "entities/lib/encode.js": path.resolve(__dirname, "node_modules/entities/lib/encode.js"),
        entities: path.resolve(__dirname, "node_modules/entities"),
      },
      dedupe: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@tanstack/react-query",
        "@tanstack/query-core",
      ],
    },
    optimizeDeps: {
      include: [
        "react",
        "react-dom",
        "react-dom/client",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
      ],
      ignoreOutdatedRequests: true,
    },
    server: { host: "::" as const, port: 8080 },
    plugins,
  };

  return mergeConfig(config, {});
});
