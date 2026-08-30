import { i as __toESM } from "../_runtime.mjs";
import { n as toResponse, t as H3Event } from "../_libs/h3-v2+rou3+srvx.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { A as isResolvedRedirect, D as resolveManifestCssLink, E as resolveManifestAssetLink, I as invariant, M as redirect, N as rootRouteId, O as executeRewriteInput, P as isNotFound, T as getStylesheetHref, _ as Link, a as replaceSsrResponse, c as Scripts, d as RouterProvider, f as createRouter, g as createRootRouteWithContext, h as createFileRoute, i as normalizeSsrResponse, j as parseRedirect, k as isRedirect, l as HeadContent, m as lazyRouteComponent, n as defineHandlerCallback, o as stripSsrResponseBody, p as Outlet, r as isSsrResponse, t as renderRouterToStream, u as useRouterState, v as useNavigate, w as getScriptPreloadAttrs, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as createMemoryHistory } from "../_libs/tanstack__history.mjs";
import { a as defaultSerovalPlugins, c as makeSerovalPlugin, d as toCrossJSONStream, i as getOrigin, l as fromJSON, n as attachRouterServerSsrUtils, o as createRawStreamRPCPlugin, r as getNormalizedURL, s as createSerializationAdapter, t as mergeHeaders, u as toCrossJSONAsync } from "../_libs/@tanstack/router-core+[...].mjs";
import { a as Trigger2, h as Slot, i as Root2, n as Header, r as Item, t as Content2, v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as objectType, r as stringType, t as arrayType } from "../_libs/zod.mjs";
import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
import { n as render } from "../_libs/@react-email/render+[...].mjs";
import { t as Resend } from "../_libs/resend+standardwebhooks.mjs";
import { t as Body } from "../_libs/react-email__body.mjs";
import { t as Container } from "../_libs/react-email__container.mjs";
import { t as Head } from "../_libs/react-email__head.mjs";
import { t as Heading } from "../_libs/react-email__heading.mjs";
import { t as Hr } from "../_libs/react-email__hr.mjs";
import { t as Html } from "../_libs/react-email__html.mjs";
import { t as Link$1 } from "../_libs/react-email__link.mjs";
import { t as Preview } from "../_libs/react-email__preview.mjs";
import { t as Section } from "../_libs/react-email__section.mjs";
import { t as Text } from "../_libs/react-email__text.mjs";
import { i as useQueryClient, n as useQuery, r as QueryClientProvider, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion+[...].mjs";
import { A as Eye, B as ChevronUp, C as LayoutDashboard, D as FileText, E as Globe, F as Clock, G as Calendar, H as ChevronDown, I as Circle, J as ArrowLeft, K as ArrowUpRight, L as CircleUserRound, M as ExternalLink, N as Download, O as FilePenLine, P as CreditCard, R as CircleDot, S as LifeBuoy, T as Handshake, U as Check, V as ChevronRight, W as ChartLine, _ as MessageCircle, a as Sun, b as Lock, c as ShieldCheck, d as Rocket, f as Pencil, g as MessageSquare, h as Moon, i as Trash2, j as EyeOff, k as FileCheckCorner, l as Send, m as Paperclip, n as User, o as Star, p as PartyPopper, q as ArrowRight, r as Upload, s as Sparkles, t as X, u as RotateCcw, v as Mail, w as History, x as LoaderCircle, y as LogOut, z as CircleAlert } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
import { a as Label2, c as Root2$1, d as SubTrigger2, f as Trigger, i as ItemIndicator2, l as Separator2, n as Content2$1, o as Portal2, r as Item2, s as RadioItem2, t as CheckboxItem2, u as SubContent2 } from "../_libs/@radix-ui/react-dropdown-menu+[...].mjs";
import { n as CheckboxIndicator, t as Checkbox$1 } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { a as SelectItemIndicator, c as SelectPortal, d as SelectSeparator$1, f as SelectTrigger$1, i as SelectItem$1, l as SelectScrollDownButton$1, m as SelectViewport, n as SelectContent$1, o as SelectItemText, p as SelectValue$1, r as SelectIcon, s as SelectLabel$1, t as Select$1, u as SelectScrollUpButton$1 } from "../_libs/@radix-ui/react-select+[...].mjs";
import { n as Root$1, t as Indicator } from "../_libs/radix-ui__react-progress.mjs";
import { AsyncLocalStorage } from "node:async_hooks";
//#region node_modules/.nitro/vite/services/ssr/index.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __esmMin = (fn, res, err) => () => {
	if (err) throw err[0];
	try {
		return fn && (res = fn(fn = 0)), res;
	} catch (e) {
		throw err = [e], e;
	}
};
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var lastCapturedError;
var TTL_MS = 5e3;
function record(error) {
	lastCapturedError = {
		error,
		at: Date.now()
	};
}
var CAUSE_DEPTH_LIMIT = 5;
var DESCRIPTION_LENGTH_LIMIT = 8e3;
function describeError(error) {
	const parts = [];
	let current = error;
	for (let depth = 0; depth < CAUSE_DEPTH_LIMIT && current != null; depth++) {
		if (!(current instanceof Error)) {
			parts.push(typeof current === "string" ? current : safeStringify(current));
			break;
		}
		const label = depth === 0 ? "" : "caused by: ";
		const status = describeStatus(current);
		parts.push(`${label}${current.stack ?? `${current.name}: ${current.message}`}${status}`);
		current = current.cause;
	}
	return parts.join("\n").slice(0, DESCRIPTION_LENGTH_LIMIT);
}
function describeStatus(error) {
	const { status, statusCode } = error;
	const value = status ?? statusCode;
	return typeof value === "number" ? ` (status ${value})` : "";
}
function safeStringify(value) {
	try {
		return JSON.stringify(value) ?? String(value);
	} catch {
		return String(value);
	}
}
function isErrorLike(value) {
	return value instanceof Error;
}
var originalConsoleError = console.error.bind(console);
console.error = (...args) => {
	originalConsoleError(...args.map((arg) => {
		if (!isErrorLike(arg)) return arg;
		record(arg);
		return describeError(arg);
	}));
};
if (typeof globalThis.addEventListener === "function") {
	globalThis.addEventListener("error", (event) => record(event.error ?? event));
	globalThis.addEventListener("unhandledrejection", (event) => record(event.reason));
}
function consumeLastCapturedError() {
	if (!lastCapturedError) return void 0;
	if (Date.now() - lastCapturedError.at > TTL_MS) {
		lastCapturedError = void 0;
		return;
	}
	const { error } = lastCapturedError;
	lastCapturedError = void 0;
	return error;
}
function renderErrorPage() {
	return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>This page didn't load</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font: 15px/1.5 system-ui, -apple-system, sans-serif; background: #fafafa; color: #111; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2rem; }
      h1 { font-size: 1.25rem; margin: 0 0 0.5rem; }
      p { color: #4b5563; margin: 0 0 1.5rem; }
      .actions { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.5rem 1rem; border-radius: 0.375rem; font: inherit; cursor: pointer; text-decoration: none; border: 1px solid transparent; }
      .primary { background: #111; color: #fff; }
      .secondary { background: #fff; color: #111; border-color: #d1d5db; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>This page didn't load</h1>
      <p>Something went wrong on our end. You can try refreshing or head back home.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Try again</button>
        <a class="secondary" href="/">Go home</a>
      </div>
    </div>
  </body>
</html>`;
}
var init_error_page = __esmMin((() => {}));
function StartServer(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouterProvider, { router: props.router });
}
var init_StartServer = __esmMin((() => {}));
var defaultStreamHandler;
var init_defaultStreamHandler = __esmMin((() => {
	init_StartServer();
	defaultStreamHandler = defineHandlerCallback(({ request, router, responseHeaders }) => renderRouterToStream({
		request,
		router,
		responseHeaders,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StartServer, { router })
	}));
}));
function isPromiseLike(value) {
	return typeof value.then === "function";
}
function getSetCookieValues(headers) {
	const headersWithSetCookie = headers;
	if (typeof headersWithSetCookie.getSetCookie === "function") return headersWithSetCookie.getSetCookie();
	const value = headers.get("set-cookie");
	return value ? [value] : [];
}
function mergeEventResponseHeaders(response, event) {
	if (response.ok) return;
	const eventSetCookies = getSetCookieValues(event.res.headers);
	if (eventSetCookies.length === 0) return;
	const responseSetCookies = getSetCookieValues(response.headers);
	response.headers.delete("set-cookie");
	for (const cookie of responseSetCookies) response.headers.append("set-cookie", cookie);
	for (const cookie of eventSetCookies) response.headers.append("set-cookie", cookie);
}
function attachResponseHeaders(value, event) {
	if (isPromiseLike(value)) return value.then((resolved) => {
		if (resolved instanceof Response) mergeEventResponseHeaders(resolved, event);
		return resolved;
	});
	if (value instanceof Response) mergeEventResponseHeaders(value, event);
	return value;
}
function requestHandler(handler) {
	return (request, requestOpts) => {
		let h3Event;
		try {
			h3Event = new H3Event(request);
		} catch (error) {
			if (error instanceof URIError) return new Response(null, {
				status: 400,
				statusText: "Bad Request"
			});
			throw error;
		}
		return toResponse(attachResponseHeaders(eventStorage.run({ h3Event }, () => handler(request, requestOpts)), h3Event), h3Event);
	};
}
function getH3Event() {
	const event = eventStorage.getStore();
	if (!event) throw new Error(`No StartEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.`);
	return event.h3Event;
}
function getRequest() {
	return getH3Event().req;
}
function getResponse() {
	return getH3Event().res;
}
var GLOBAL_EVENT_STORAGE_KEY;
var globalObj$1;
var eventStorage;
var init_request_response = __esmMin((() => {
	GLOBAL_EVENT_STORAGE_KEY = Symbol.for("tanstack-start:event-storage");
	globalObj$1 = globalThis;
	if (!globalObj$1[GLOBAL_EVENT_STORAGE_KEY]) globalObj$1[GLOBAL_EVENT_STORAGE_KEY] = new AsyncLocalStorage();
	eventStorage = globalObj$1[GLOBAL_EVENT_STORAGE_KEY];
}));
var HEADERS;
var init_constants$1 = __esmMin((() => {
	HEADERS = { TSS_SHELL: "X-TSS_SHELL" };
}));
var _tanstack_start_manifest_v_exports = /* @__PURE__ */ __exportAll({ tsrStartManifest: () => tsrStartManifest });
var tsrStartManifest;
var init__tanstack_start_manifest_v = __esmMin((() => {
	tsrStartManifest = () => ({ routes: {
		__root__: {
			filePath: "/Users/mathieu_pro/Empire/logiciels/onboarding_customer/Wayne Project Navigator/src/routes/__root.tsx",
			children: [
				"/",
				"/_authenticated",
				"/auth"
			],
			preloads: [
				"/assets/index-KhRaA-lQ.js",
				"/assets/jsx-runtime-Cltr0gcK.js",
				"/assets/react-dom-c8CiVcdp.js",
				"/assets/useStore-_X7btxmK.js",
				"/assets/qss-Bqk2G4CH.js",
				"/assets/matchContext-qESg7g4D.js",
				"/assets/link-DyzXrFNW.js",
				"/assets/useRouter-CwjitLz4.js"
			],
			scripts: [{ attrs: {
				type: "module",
				async: !0,
				src: "/assets/index-KhRaA-lQ.js"
			} }]
		},
		"/": {
			filePath: "/Users/mathieu_pro/Empire/logiciels/onboarding_customer/Wayne Project Navigator/src/routes/index.tsx",
			children: void 0,
			preloads: [
				"/assets/routes-DjlO_4B0.js",
				"/assets/createLucideIcon-CEGepnBf.js",
				"/assets/arrow-right-D5pQCwSL.js",
				"/assets/credit-card-T4PSeN2q.js",
				"/assets/file-pen-line-KpYqzlGF.js",
				"/assets/sparkles-C-wfMPnb.js",
				"/assets/GlassCard-C1KyozWU.js",
				"/assets/proxy-utI4Q_p1.js"
			]
		},
		"/_authenticated": {
			filePath: "/Users/mathieu_pro/Empire/logiciels/onboarding_customer/Wayne Project Navigator/src/routes/_authenticated/route.tsx",
			children: [
				"/_authenticated/_admin",
				"/_authenticated/_portal",
				"/_authenticated/onboarding"
			],
			preloads: ["/assets/route-DPxfjQ3l.js"]
		},
		"/auth": {
			filePath: "/Users/mathieu_pro/Empire/logiciels/onboarding_customer/Wayne Project Navigator/src/routes/auth.tsx",
			children: void 0,
			preloads: [
				"/assets/auth-B5qUsEKK.js",
				"/assets/GlassCard-C1KyozWU.js",
				"/assets/button-D7QR-IB4.js",
				"/assets/input-CzT-vIc5.js",
				"/assets/proxy-utI4Q_p1.js"
			]
		},
		"/_authenticated/_admin": {
			filePath: "/Users/mathieu_pro/Empire/logiciels/onboarding_customer/Wayne Project Navigator/src/routes/_authenticated/_admin.tsx",
			children: ["/_authenticated/_admin/admin", "/_authenticated/_admin/admin_/$projectId"],
			preloads: [
				"/assets/_admin-SpLOlUrp.js",
				"/assets/arrow-left-BEErJzv1.js",
				"/assets/PreferenceControls-B1O2Tk8o.js",
				"/assets/shield-check-DxYS0T48.js",
				"/assets/button-D7QR-IB4.js"
			]
		},
		"/_authenticated/_portal": {
			filePath: "/Users/mathieu_pro/Empire/logiciels/onboarding_customer/Wayne Project Navigator/src/routes/_authenticated/_portal.tsx",
			children: [
				"/_authenticated/_portal/agreement",
				"/_authenticated/_portal/billing",
				"/_authenticated/_portal/brief",
				"/_authenticated/_portal/dashboard",
				"/_authenticated/_portal/delivery",
				"/_authenticated/_portal/documents",
				"/_authenticated/_portal/profile",
				"/_authenticated/_portal/project",
				"/_authenticated/_portal/services",
				"/_authenticated/_portal/support",
				"/_authenticated/_portal/welcome",
				"/_authenticated/_portal/invoice/$invoiceId"
			],
			preloads: [
				"/assets/_portal-wbZVoPuX.js",
				"/assets/createLucideIcon-CEGepnBf.js",
				"/assets/PreferenceControls-B1O2Tk8o.js",
				"/assets/credit-card-T4PSeN2q.js",
				"/assets/file-text-CqU2cU6J.js",
				"/assets/rocket-Dqd7v-lh.js",
				"/assets/shield-check-DxYS0T48.js",
				"/assets/sparkles-C-wfMPnb.js",
				"/assets/utils-DojpP95n.js",
				"/assets/useAdmin-QNggZ_Ci.js"
			]
		},
		"/_authenticated/onboarding": {
			filePath: "/Users/mathieu_pro/Empire/logiciels/onboarding_customer/Wayne Project Navigator/src/routes/_authenticated/onboarding.tsx",
			children: void 0,
			preloads: [
				"/assets/onboarding-D_mi9Vbk.js",
				"/assets/arrow-right-D5pQCwSL.js",
				"/assets/rocket-Dqd7v-lh.js",
				"/assets/shield-check-DxYS0T48.js",
				"/assets/GlassCard-C1KyozWU.js",
				"/assets/button-D7QR-IB4.js",
				"/assets/input-CzT-vIc5.js",
				"/assets/proxy-utI4Q_p1.js",
				"/assets/AnimatePresence-5GdHqWv3.js",
				"/assets/usePortal-B3gK_-TH.js"
			]
		},
		"/_authenticated/_admin/admin": {
			filePath: "/Users/mathieu_pro/Empire/logiciels/onboarding_customer/Wayne Project Navigator/src/routes/_authenticated/_admin.admin.tsx",
			children: void 0,
			preloads: [
				"/assets/_admin.admin-KVp6yBcr.js",
				"/assets/createLucideIcon-CEGepnBf.js",
				"/assets/arrow-up-right-Dl8303pE.js",
				"/assets/select-D4WZMZNj.js",
				"/assets/send-C1wOFq8M.js",
				"/assets/GlassCard-C1KyozWU.js",
				"/assets/skeleton-6aQPJUfg.js",
				"/assets/useAdmin-QNggZ_Ci.js",
				"/assets/brief-flow-j2QtfU_K.js",
				"/assets/journey-Hp6vfxXd.js"
			]
		},
		"/_authenticated/_portal/agreement": {
			filePath: "/Users/mathieu_pro/Empire/logiciels/onboarding_customer/Wayne Project Navigator/src/routes/_authenticated/_portal.agreement.tsx",
			children: void 0,
			preloads: [
				"/assets/_portal.agreement-i53rgbHv.js",
				"/assets/check-CCy2ox4b.js",
				"/assets/file-pen-line-KpYqzlGF.js",
				"/assets/GlassCard-C1KyozWU.js",
				"/assets/button-D7QR-IB4.js",
				"/assets/journey-Hp6vfxXd.js",
				"/assets/input-CzT-vIc5.js",
				"/assets/Celebration-Dz7WmoPr.js",
				"/assets/checkbox-CESlZGFN.js",
				"/assets/usePortal-B3gK_-TH.js"
			]
		},
		"/_authenticated/_portal/billing": {
			filePath: "/Users/mathieu_pro/Empire/logiciels/onboarding_customer/Wayne Project Navigator/src/routes/_authenticated/_portal.billing.tsx",
			children: void 0,
			preloads: [
				"/assets/_portal.billing-Db9iolAc.js",
				"/assets/arrow-up-right-Dl8303pE.js",
				"/assets/check-CCy2ox4b.js",
				"/assets/clock-CBB2sXtE.js",
				"/assets/external-link-mgTtif6e.js",
				"/assets/lock-DQv38yl8.js",
				"/assets/GlassCard-C1KyozWU.js",
				"/assets/button-D7QR-IB4.js",
				"/assets/dist-BAwytWxS.js",
				"/assets/dist-Dm9nGp3J.js",
				"/assets/journey-Hp6vfxXd.js",
				"/assets/usePortal-B3gK_-TH.js"
			]
		},
		"/_authenticated/_portal/brief": {
			filePath: "/Users/mathieu_pro/Empire/logiciels/onboarding_customer/Wayne Project Navigator/src/routes/_authenticated/_portal.brief.tsx",
			children: void 0,
			preloads: [
				"/assets/_portal.brief-9sd0NRno.js",
				"/assets/check-CCy2ox4b.js",
				"/assets/select-D4WZMZNj.js",
				"/assets/download-COkJtfav.js",
				"/assets/loader-circle-LmZjNfAe.js",
				"/assets/GlassCard-C1KyozWU.js",
				"/assets/button-D7QR-IB4.js",
				"/assets/brief-flow-j2QtfU_K.js",
				"/assets/journey-Hp6vfxXd.js",
				"/assets/input-CzT-vIc5.js",
				"/assets/textarea-BEznb6nu.js",
				"/assets/useAttachments-BOncWtrj.js",
				"/assets/proxy-utI4Q_p1.js",
				"/assets/AnimatePresence-5GdHqWv3.js",
				"/assets/Celebration-Dz7WmoPr.js",
				"/assets/usePortal-B3gK_-TH.js",
				"/assets/PrintSheet-DUUNGpg_.js"
			]
		},
		"/_authenticated/_portal/dashboard": {
			filePath: "/Users/mathieu_pro/Empire/logiciels/onboarding_customer/Wayne Project Navigator/src/routes/_authenticated/_portal.dashboard.tsx",
			children: void 0,
			preloads: [
				"/assets/_portal.dashboard-D5YSHQ2s.js",
				"/assets/arrow-right-D5pQCwSL.js",
				"/assets/arrow-up-right-Dl8303pE.js",
				"/assets/clock-CBB2sXtE.js",
				"/assets/GlassCard-C1KyozWU.js",
				"/assets/button-D7QR-IB4.js",
				"/assets/skeleton-6aQPJUfg.js",
				"/assets/journey-Hp6vfxXd.js",
				"/assets/proxy-utI4Q_p1.js",
				"/assets/usePortal-B3gK_-TH.js",
				"/assets/JourneyTimeline-BSjrXrUK.js",
				"/assets/ProgressCard-CnMTbxWe.js"
			]
		},
		"/_authenticated/_portal/delivery": {
			filePath: "/Users/mathieu_pro/Empire/logiciels/onboarding_customer/Wayne Project Navigator/src/routes/_authenticated/_portal.delivery.tsx",
			children: void 0,
			preloads: [
				"/assets/_portal.delivery-zyjdS_6H.js",
				"/assets/external-link-mgTtif6e.js",
				"/assets/GlassCard-C1KyozWU.js",
				"/assets/button-D7QR-IB4.js",
				"/assets/textarea-BEznb6nu.js",
				"/assets/Celebration-Dz7WmoPr.js",
				"/assets/checkbox-CESlZGFN.js",
				"/assets/usePortal-B3gK_-TH.js"
			]
		},
		"/_authenticated/_portal/documents": {
			filePath: "/Users/mathieu_pro/Empire/logiciels/onboarding_customer/Wayne Project Navigator/src/routes/_authenticated/_portal.documents.tsx",
			children: void 0,
			preloads: [
				"/assets/_portal.documents-ygWU9FQm.js",
				"/assets/download-COkJtfav.js",
				"/assets/GlassCard-C1KyozWU.js",
				"/assets/journey-Hp6vfxXd.js",
				"/assets/usePortal-B3gK_-TH.js"
			]
		},
		"/_authenticated/_portal/profile": {
			filePath: "/Users/mathieu_pro/Empire/logiciels/onboarding_customer/Wayne Project Navigator/src/routes/_authenticated/_portal.profile.tsx",
			children: void 0,
			preloads: [
				"/assets/_portal.profile-BrWghsIa.js",
				"/assets/GlassCard-C1KyozWU.js",
				"/assets/button-D7QR-IB4.js",
				"/assets/input-CzT-vIc5.js",
				"/assets/usePortal-B3gK_-TH.js"
			]
		},
		"/_authenticated/_portal/project": {
			filePath: "/Users/mathieu_pro/Empire/logiciels/onboarding_customer/Wayne Project Navigator/src/routes/_authenticated/_portal.project.tsx",
			children: void 0,
			preloads: [
				"/assets/_portal.project-BSA8PUvQ.js",
				"/assets/external-link-mgTtif6e.js",
				"/assets/GlassCard-C1KyozWU.js",
				"/assets/journey-Hp6vfxXd.js",
				"/assets/usePortal-B3gK_-TH.js",
				"/assets/JourneyTimeline-BSjrXrUK.js",
				"/assets/ProgressCard-CnMTbxWe.js"
			]
		},
		"/_authenticated/_portal/services": {
			filePath: "/Users/mathieu_pro/Empire/logiciels/onboarding_customer/Wayne Project Navigator/src/routes/_authenticated/_portal.services.tsx",
			children: void 0,
			preloads: [
				"/assets/_portal.services-Bx1qGqzv.js",
				"/assets/GlassCard-C1KyozWU.js",
				"/assets/button-D7QR-IB4.js",
				"/assets/skeleton-6aQPJUfg.js",
				"/assets/journey-Hp6vfxXd.js",
				"/assets/usePortal-B3gK_-TH.js"
			]
		},
		"/_authenticated/_portal/support": {
			filePath: "/Users/mathieu_pro/Empire/logiciels/onboarding_customer/Wayne Project Navigator/src/routes/_authenticated/_portal.support.tsx",
			children: void 0,
			preloads: [
				"/assets/_portal.support-DmAJxJGl.js",
				"/assets/chevron-down-rEyn4Kve.js",
				"/assets/mail-DUe2Erw0.js",
				"/assets/GlassCard-C1KyozWU.js",
				"/assets/dist-BW95bD-6.js",
				"/assets/dist-CEPK3Mge.js",
				"/assets/dist-BAwytWxS.js",
				"/assets/dist-Dfjpqmcs.js",
				"/assets/dist-Dm9nGp3J.js"
			]
		},
		"/_authenticated/_portal/welcome": {
			filePath: "/Users/mathieu_pro/Empire/logiciels/onboarding_customer/Wayne Project Navigator/src/routes/_authenticated/_portal.welcome.tsx",
			children: void 0,
			preloads: [
				"/assets/_portal.welcome-BZvqj66O.js",
				"/assets/arrow-left-BEErJzv1.js",
				"/assets/arrow-right-D5pQCwSL.js",
				"/assets/check-CCy2ox4b.js",
				"/assets/download-COkJtfav.js",
				"/assets/loader-circle-LmZjNfAe.js",
				"/assets/GlassCard-C1KyozWU.js",
				"/assets/button-D7QR-IB4.js",
				"/assets/journey-Hp6vfxXd.js",
				"/assets/input-CzT-vIc5.js",
				"/assets/textarea-BEznb6nu.js",
				"/assets/proxy-utI4Q_p1.js",
				"/assets/AnimatePresence-5GdHqWv3.js",
				"/assets/Celebration-Dz7WmoPr.js",
				"/assets/usePortal-B3gK_-TH.js",
				"/assets/PrintSheet-DUUNGpg_.js",
				"/assets/JourneyTimeline-BSjrXrUK.js"
			]
		},
		"/_authenticated/_admin/admin_/$projectId": {
			filePath: "/Users/mathieu_pro/Empire/logiciels/onboarding_customer/Wayne Project Navigator/src/routes/_authenticated/_admin.admin_.$projectId.tsx",
			children: void 0,
			preloads: [
				"/assets/_admin.admin_._projectId-D7iPAEeF.js",
				"/assets/createLucideIcon-CEGepnBf.js",
				"/assets/check-CCy2ox4b.js",
				"/assets/external-link-mgTtif6e.js",
				"/assets/file-text-CqU2cU6J.js",
				"/assets/mail-DUe2Erw0.js",
				"/assets/send-C1wOFq8M.js",
				"/assets/GlassCard-C1KyozWU.js",
				"/assets/skeleton-6aQPJUfg.js",
				"/assets/useAdmin-QNggZ_Ci.js",
				"/assets/brief-flow-j2QtfU_K.js",
				"/assets/journey-Hp6vfxXd.js",
				"/assets/input-CzT-vIc5.js",
				"/assets/textarea-BEznb6nu.js",
				"/assets/useAttachments-BOncWtrj.js"
			]
		},
		"/_authenticated/_portal/invoice/$invoiceId": {
			filePath: "/Users/mathieu_pro/Empire/logiciels/onboarding_customer/Wayne Project Navigator/src/routes/_authenticated/_portal.invoice.$invoiceId.tsx",
			children: void 0,
			preloads: [
				"/assets/_portal.invoice._invoiceId-B3EipxSU.js",
				"/assets/arrow-left-BEErJzv1.js",
				"/assets/check-CCy2ox4b.js",
				"/assets/clock-CBB2sXtE.js",
				"/assets/download-COkJtfav.js",
				"/assets/external-link-mgTtif6e.js",
				"/assets/lock-DQv38yl8.js",
				"/assets/GlassCard-C1KyozWU.js",
				"/assets/button-D7QR-IB4.js",
				"/assets/journey-Hp6vfxXd.js",
				"/assets/proxy-utI4Q_p1.js",
				"/assets/usePortal-B3gK_-TH.js",
				"/assets/PrintSheet-DUUNGpg_.js"
			]
		}
	} });
}));
/**
* @description Returns the router manifest data that should be sent to the client.
* This includes only the assets and preloads for the current route and any
* special assets that are needed for the client. It does not include relationships
* between routes or any other data that is not needed for the client.
*
* @param matchedRoutes - In dev mode, the matched routes are used to build
* the dev styles URL for route-scoped CSS collection.
*/
async function getStartManifest(matchedRoutes) {
	const { tsrStartManifest } = await Promise.resolve().then(() => (init__tanstack_start_manifest_v(), _tanstack_start_manifest_v_exports));
	const startManifest = tsrStartManifest();
	let routes = startManifest.routes;
	routes[rootRouteId];
	const manifestRoutes = {};
	for (const k in routes) {
		const v = routes[k];
		const result = {};
		if (v.preloads && v.preloads.length > 0) result.preloads = v.preloads;
		if (v.scripts && v.scripts.length > 0) result.scripts = v.scripts;
		if (v.css?.length) result.css = v.css;
		if (result.preloads || result.scripts || result.css) manifestRoutes[k] = result;
	}
	return {
		...startManifest.scriptFormat ? { scriptFormat: startManifest.scriptFormat } : {},
		...startManifest.inlineCss ? { inlineCss: startManifest.inlineCss } : {},
		routes: manifestRoutes
	};
}
var init_router_manifest = __esmMin((() => {}));
var TSS_FORMDATA_CONTEXT;
var TSS_SERVER_FUNCTION;
var TSS_SERVER_FUNCTION_FACTORY;
var X_TSS_SERIALIZED;
var X_TSS_RAW_RESPONSE;
var TSS_CONTENT_TYPE_FRAMED;
var FrameType;
var TSS_CONTENT_TYPE_FRAMED_VERSIONED;
var init_constants = __esmMin((() => {
	TSS_FORMDATA_CONTEXT = "__TSS_CONTEXT";
	TSS_SERVER_FUNCTION = Symbol.for("TSS_SERVER_FUNCTION");
	TSS_SERVER_FUNCTION_FACTORY = Symbol.for("TSS_SERVER_FUNCTION_FACTORY");
	X_TSS_SERIALIZED = "x-tss-serialized";
	X_TSS_RAW_RESPONSE = "x-tss-raw";
	TSS_CONTENT_TYPE_FRAMED = "application/x-tss-framed";
	FrameType = {
		/** Seroval JSON chunk (NDJSON line) */
		JSON: 0,
		/** Raw stream data chunk */
		CHUNK: 1,
		/** Raw stream end (EOF) */
		END: 2,
		/** Raw stream error */
		ERROR: 3
	};
	TSS_CONTENT_TYPE_FRAMED_VERSIONED = `${TSS_CONTENT_TYPE_FRAMED}; v=1`;
}));
function isSafeKey(key) {
	return key !== "__proto__" && key !== "constructor" && key !== "prototype";
}
/**
* Merge target and source into a new null-proto object, filtering dangerous keys.
*/
function safeObjectMerge(target, source) {
	const result = Object.create(null);
	if (target) {
		for (const key of Object.keys(target)) if (isSafeKey(key)) result[key] = target[key];
	}
	if (source && typeof source === "object") {
		for (const key of Object.keys(source)) if (isSafeKey(key)) result[key] = source[key];
	}
	return result;
}
/**
* Create a null-prototype object, optionally copying from source.
*/
function createNullProtoObject(source) {
	if (!source) return Object.create(null);
	const obj = Object.create(null);
	for (const key of Object.keys(source)) if (isSafeKey(key)) obj[key] = source[key];
	return obj;
}
var init_safeObjectMerge = __esmMin((() => {}));
async function runWithStartContext(context, fn) {
	return startStorage.run(context, fn);
}
function getStartContext(opts) {
	const context = startStorage.getStore();
	if (!context && opts?.throwIfNotFound !== false) throw new Error(`No Start context found in AsyncLocalStorage. Make sure you are using the function within the server runtime.`);
	return context;
}
var GLOBAL_STORAGE_KEY;
var globalObj;
var startStorage;
var init_async_local_storage = __esmMin((() => {
	GLOBAL_STORAGE_KEY = Symbol.for("tanstack-start:start-storage-context");
	globalObj = globalThis;
	if (!globalObj[GLOBAL_STORAGE_KEY]) globalObj[GLOBAL_STORAGE_KEY] = new AsyncLocalStorage();
	startStorage = globalObj[GLOBAL_STORAGE_KEY];
}));
var init_esm$4 = __esmMin((() => {
	init_async_local_storage();
}));
var getStartOptions;
var init_getStartOptions = __esmMin((() => {
	init_esm$4();
	getStartOptions = () => getStartContext().startOptions;
}));
var getStartContextServerOnly;
var init_getStartContextServerOnly = __esmMin((() => {
	init_esm$4();
	getStartContextServerOnly = getStartContext;
}));
async function executeMiddleware$1(middlewares, env, opts) {
	let flattenedMiddlewares = flattenMiddlewares([...getStartOptions()?.functionMiddleware || [], ...middlewares]);
	if (env === "server") {
		const startContext = getStartContextServerOnly({ throwIfNotFound: false });
		if (startContext?.executedRequestMiddlewares) flattenedMiddlewares = flattenedMiddlewares.filter((m) => !startContext.executedRequestMiddlewares.has(m));
	}
	const callNextMiddleware = async (ctx) => {
		const nextMiddleware = flattenedMiddlewares.shift();
		if (!nextMiddleware) return ctx;
		try {
			let validator = "validator" in nextMiddleware.options ? nextMiddleware.options.validator : void 0;
			if (!validator && "inputValidator" in nextMiddleware.options) validator = nextMiddleware.options.inputValidator;
			if (validator && env === "server") ctx.data = await execValidator(validator, ctx.data);
			let middlewareFn = void 0;
			if (env === "client") {
				if ("client" in nextMiddleware.options) middlewareFn = nextMiddleware.options.client;
			} else if ("server" in nextMiddleware.options) middlewareFn = nextMiddleware.options.server;
			if (middlewareFn) {
				const userNext = async (userCtx = {}) => {
					const result = await callNextMiddleware({
						...ctx,
						...userCtx,
						context: safeObjectMerge(ctx.context, userCtx.context),
						sendContext: safeObjectMerge(ctx.sendContext, userCtx.sendContext),
						headers: mergeHeaders(ctx.headers, userCtx.headers),
						_callSiteFetch: ctx._callSiteFetch,
						fetch: ctx._callSiteFetch ?? userCtx.fetch ?? ctx.fetch,
						result: userCtx.result !== void 0 ? userCtx.result : userCtx instanceof Response ? userCtx : ctx.result,
						error: userCtx.error ?? ctx.error
					});
					if (result.error) throw result.error;
					return result;
				};
				const result = await middlewareFn({
					...ctx,
					next: userNext
				});
				if (isRedirect(result)) return {
					...ctx,
					error: result
				};
				if (result instanceof Response) return {
					...ctx,
					result
				};
				if (!result) throw new Error("User middleware returned undefined. You must call next() or return a result in your middlewares.");
				return result;
			}
			return callNextMiddleware(ctx);
		} catch (error) {
			return {
				...ctx,
				error
			};
		}
	};
	return callNextMiddleware({
		...opts,
		headers: opts.headers || {},
		sendContext: opts.sendContext || {},
		context: opts.context || createNullProtoObject(),
		_callSiteFetch: opts.fetch
	});
}
function flattenMiddlewares(middlewares, maxDepth = 100) {
	const seen = /* @__PURE__ */ new Set();
	const flattened = [];
	const recurse = (middleware, depth) => {
		if (depth > maxDepth) throw new Error(`Middleware nesting depth exceeded maximum of ${maxDepth}. Check for circular references.`);
		middleware.forEach((m) => {
			if (m.options.middleware) recurse(m.options.middleware, depth + 1);
			if (!seen.has(m)) {
				seen.add(m);
				flattened.push(m);
			}
		});
	};
	recurse(middlewares, 0);
	return flattened;
}
async function execValidator(validator, input) {
	if (validator == null) return {};
	if ("~standard" in validator) {
		const result = await validator["~standard"].validate(input);
		if (result.issues) throw new Error(JSON.stringify(result.issues, void 0, 2));
		return result.value;
	}
	if ("parse" in validator) return validator.parse(input);
	if (typeof validator === "function") return validator(input);
	throw new Error("Invalid validator type!");
}
function serverFnBaseToMiddleware(options) {
	return {
		"~types": void 0,
		options: {
			inputValidator: options.validator ?? options.inputValidator,
			client: async ({ next, sendContext, fetch, ...ctx }) => {
				const payload = {
					...ctx,
					context: sendContext,
					fetch
				};
				return next(await options.extractedFn?.(payload));
			},
			server: async ({ next, ...ctx }) => {
				const result = await options.serverFn?.(ctx);
				return next({
					...ctx,
					result
				});
			}
		}
	};
}
var createServerFn;
var init_createServerFn = __esmMin((() => {
	init_constants();
	init_getStartOptions();
	init_getStartContextServerOnly();
	init_safeObjectMerge();
	createServerFn = (options, __opts) => {
		const resolvedOptions = __opts || options || {};
		if (typeof resolvedOptions.method === "undefined") resolvedOptions.method = "GET";
		const setValidator = (validator) => {
			return createServerFn(void 0, {
				...resolvedOptions,
				validator,
				inputValidator: validator
			});
		};
		const res = {
			options: resolvedOptions,
			middleware: (middleware) => {
				const newMiddleware = [...resolvedOptions.middleware || []];
				middleware.map((m) => {
					if (TSS_SERVER_FUNCTION_FACTORY in m) {
						if (m.options.middleware) newMiddleware.push(...m.options.middleware);
					} else newMiddleware.push(m);
				});
				const res = createServerFn(void 0, {
					...resolvedOptions,
					middleware: newMiddleware
				});
				res[TSS_SERVER_FUNCTION_FACTORY] = true;
				return res;
			},
			validator: setValidator,
			inputValidator: setValidator,
			handler: (...args) => {
				const [extractedFn, serverFn] = args;
				const newOptions = {
					...resolvedOptions,
					extractedFn,
					serverFn
				};
				const resolvedMiddleware = [...newOptions.middleware || [], serverFnBaseToMiddleware(newOptions)];
				extractedFn.method = resolvedOptions.method;
				return Object.assign(async (opts) => {
					const result = await executeMiddleware$1(resolvedMiddleware, "client", {
						...extractedFn,
						...newOptions,
						data: opts?.data,
						headers: opts?.headers,
						signal: opts?.signal,
						fetch: opts?.fetch,
						context: createNullProtoObject()
					});
					const redirect = parseRedirect(result.error);
					if (redirect) throw redirect;
					if (result.error) throw result.error;
					return result.result;
				}, {
					...extractedFn,
					method: resolvedOptions.method,
					__executeServer: async (opts) => {
						const startContext = getStartContextServerOnly();
						const serverContextAfterGlobalMiddlewares = startContext.contextAfterGlobalMiddlewares;
						return await executeMiddleware$1(resolvedMiddleware, "server", {
							...extractedFn,
							...opts,
							serverFnMeta: extractedFn.serverFnMeta,
							context: safeObjectMerge(opts.context, serverContextAfterGlobalMiddlewares),
							request: startContext.request
						}).then((d) => ({
							result: d.result,
							error: d.error,
							context: d.sendContext
						}));
					}
				});
			}
		};
		const fun = (options) => {
			return createServerFn(void 0, {
				...resolvedOptions,
				...options
			});
		};
		return Object.assign(fun, res);
	};
}));
var createMiddleware;
var init_createMiddleware = __esmMin((() => {
	createMiddleware = (options, __opts) => {
		const resolvedOptions = {
			type: "request",
			...__opts || options
		};
		const setValidator = (validator) => {
			return createMiddleware({}, Object.assign(resolvedOptions, {
				validator,
				inputValidator: validator
			}));
		};
		return {
			options: resolvedOptions,
			middleware: (middleware) => {
				return createMiddleware({}, Object.assign(resolvedOptions, { middleware }));
			},
			validator: setValidator,
			inputValidator: setValidator,
			client: (client) => {
				return createMiddleware({}, Object.assign(resolvedOptions, { client }));
			},
			server: (server) => {
				return createMiddleware({}, Object.assign(resolvedOptions, { server }));
			}
		};
	};
}));
async function isCsrfRequestAllowed(opts, ctx) {
	const result = await getCsrfRequestValidationResult(opts, ctx);
	return result === true || result === void 0 && opts.allowRequestsWithoutOriginCheck === true;
}
async function getCsrfRequestValidationResult(opts, ctx) {
	const fetchSite = ctx.request.headers.get("Sec-Fetch-Site");
	if (fetchSite !== null) return matchValue(opts.secFetchSite ?? "same-origin", fetchSite, ctx);
	const origin = ctx.request.headers.get("Origin");
	if (origin !== null) {
		if (opts.origin) return matchValue(opts.origin, origin, ctx);
		return origin === new URL(ctx.request.url).origin;
	}
	const referer = ctx.request.headers.get("Referer");
	if (referer === null || opts.referer === false) return;
	if (typeof opts.referer === "function") return opts.referer(referer, ctx);
	if (opts.origin) {
		const refererOrigin = getOriginFromUrl(referer);
		return refererOrigin !== void 0 && matchValue(opts.origin, refererOrigin, ctx);
	}
	return isRefererSameOrigin(referer, new URL(ctx.request.url).origin);
}
async function matchValue(matcher, value, ctx) {
	if (typeof matcher === "function") return matcher(value, ctx);
	if (Array.isArray(matcher)) return matcher.includes(value);
	return value === matcher;
}
function getOriginFromUrl(url) {
	try {
		return new URL(url).origin;
	} catch {
		return;
	}
}
function isRefererSameOrigin(referer, requestOrigin) {
	if (referer === requestOrigin) return true;
	if (!referer.startsWith(requestOrigin)) return false;
	if (referer.length === requestOrigin.length) return true;
	const code = referer.charCodeAt(requestOrigin.length);
	return code === 47 || code === 63 || code === 35;
}
async function getFailureResponse(opts, ctx) {
	if (typeof opts.failureResponse === "function") return opts.failureResponse(ctx);
	return opts.failureResponse?.clone() ?? new Response("Forbidden", { status: 403 });
}
var innerCreateCsrfMiddleware;
var createCsrfMiddleware;
var init_createCsrfMiddleware = __esmMin((() => {
	init_createMiddleware();
	innerCreateCsrfMiddleware = (opts = {}) => {
		return createMiddleware().server(async (ctx) => {
			const csrfCtx = ctx;
			if (opts.filter && !await opts.filter(csrfCtx)) return ctx.next();
			if (await isCsrfRequestAllowed(opts, csrfCtx)) return ctx.next();
			return getFailureResponse(opts, csrfCtx);
		});
	};
	createCsrfMiddleware = innerCreateCsrfMiddleware;
}));
function dedupeSerializationAdapters(deduped, serializationAdapters) {
	for (let i = 0, len = serializationAdapters.length; i < len; i++) {
		const current = serializationAdapters[i];
		if (!deduped.has(current)) {
			deduped.add(current);
			if (current.extends) dedupeSerializationAdapters(deduped, current.extends);
		}
	}
}
var createStart;
var init_createStart = __esmMin((() => {
	init_createMiddleware();
	createStart = (getOptions) => {
		return {
			getOptions: async () => {
				const options = await getOptions();
				if (options.serializationAdapters) {
					const deduped = /* @__PURE__ */ new Set();
					dedupeSerializationAdapters(deduped, options.serializationAdapters);
					options.serializationAdapters = Array.from(deduped);
				}
				return options;
			},
			createMiddleware
		};
	};
}));
function getDefaultSerovalPlugins() {
	return [...(getStartOptions()?.serializationAdapters)?.map(makeSerovalPlugin) ?? [], ...defaultSerovalPlugins];
}
var init_getDefaultSerovalPlugins = __esmMin((() => {
	init_getStartOptions();
}));
var init_esm$3 = __esmMin((() => {
	init_constants();
	init_safeObjectMerge();
	init_createServerFn();
	init_createMiddleware();
	init_createCsrfMiddleware();
	init_createStart();
	init_getDefaultSerovalPlugins();
}));
var createServerRpc;
var init_createServerRpc = __esmMin((() => {
	init_esm$3();
	createServerRpc = (serverFnMeta, splitImportFn) => {
		const url = "/_serverFn/" + serverFnMeta.id;
		return Object.assign(splitImportFn, {
			url,
			serverFnMeta,
			[TSS_SERVER_FUNCTION]: true
		});
	};
}));
var init_server_rpc = __esmMin((() => {
	init_createServerRpc();
}));
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
var init_useServerFn = __esmMin((() => {}));
var init_esm$2 = __esmMin((() => {
	init_useServerFn();
	init_esm$3();
	init_esm$3();
}));
function isNewSupabaseApiKey$1(value) {
	return value.startsWith("sb_publishable_") || value.startsWith("sb_secret_");
}
function createSupabaseFetch$1(supabaseKey) {
	return (input, init) => {
		const headers = new Headers(typeof Request !== "undefined" && input instanceof Request ? input.headers : void 0);
		if (init?.headers) new Headers(init.headers).forEach((value, key) => headers.set(key, value));
		if (isNewSupabaseApiKey$1(supabaseKey) && headers.get("Authorization") === `Bearer ${supabaseKey}`) headers.delete("Authorization");
		headers.set("apikey", supabaseKey);
		return fetch(input, {
			...init,
			headers
		});
	};
}
var requireSupabaseAuth;
var init_auth_middleware = __esmMin((() => {
	init_esm$2();
	init_server$1();
	requireSupabaseAuth = createMiddleware({ type: "function" }).server(async ({ next }) => {
		const SUPABASE_URL = process.env["SUPABASE_URL"];
		const SUPABASE_PUBLISHABLE_KEY = process.env["SUPABASE_PUBLISHABLE_KEY"];
		if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
			const message = `Missing Supabase environment variable(s): ${[...!SUPABASE_URL ? ["SUPABASE_URL"] : [], ...!SUPABASE_PUBLISHABLE_KEY ? ["SUPABASE_PUBLISHABLE_KEY"] : []].join(", ")}. Configure them in your environment.`;
			console.error(`[Supabase] ${message}`);
			throw new Error(message);
		}
		const request = getRequest();
		if (!request?.headers) throw new Error("Unauthorized: No request headers available");
		const authHeader = request.headers.get("authorization");
		if (!authHeader) throw new Error("Unauthorized: No authorization header provided");
		if (!authHeader.startsWith("Bearer ")) throw new Error("Unauthorized: Only Bearer tokens are supported");
		const token = authHeader.replace("Bearer ", "");
		if (!token) throw new Error("Unauthorized: No token provided");
		if (token.split(".").length !== 3) throw new Error("Unauthorized: Invalid token");
		const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
			global: {
				fetch: createSupabaseFetch$1(SUPABASE_PUBLISHABLE_KEY),
				headers: { Authorization: `Bearer ${token}` }
			},
			auth: {
				storage: void 0,
				persistSession: false,
				autoRefreshToken: false
			}
		});
		const { data, error } = await supabase.auth.getClaims(token);
		if (error || !data?.claims) throw new Error("Unauthorized: Invalid token");
		if (!data.claims.sub) throw new Error("Unauthorized: No user ID found in token");
		return next({ context: {
			supabase,
			userId: data.claims.sub,
			claims: data.claims
		} });
	});
}));
function ClientMessageEmail({ subject = "A message from the Wayne-Web team", body = "", name, portalUrl, links = [] }) {
	const paragraphs = body.split(/\n{2,}/).filter(Boolean);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Html, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Preview, { children: subject }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, {
			style: styles.body,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				style: styles.container,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
						style: styles.brand,
						children: "WAYNE-WEB"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
						style: styles.heading,
						children: subject
					}),
					name ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
						style: styles.text,
						children: name
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: paragraphs.length > 0 ? paragraphs.map((paragraph, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
						style: styles.text,
						children: paragraph
					}, index)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
						style: styles.text,
						children: body
					}) }),
					links.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
						style: styles.linkBox,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
							style: styles.linkTitle,
							children: "Documents"
						}), links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
							style: styles.text,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
								href: link.url,
								style: styles.link,
								children: link.label
							})
						}, link.url))]
					}) : null,
					portalUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
						style: styles.text,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
							href: portalUrl,
							style: styles.link,
							children: "Open your client portal"
						})
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hr, { style: styles.hr }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
						style: styles.footer,
						children: "Wayne-Web — your project, step by step."
					})
				]
			})
		})
	] });
}
var styles;
var template;
var init_client_message = __esmMin((() => {
	styles = {
		body: {
			backgroundColor: "#0b0c10",
			margin: 0,
			padding: "32px 0",
			fontFamily: "Helvetica, Arial, sans-serif"
		},
		container: {
			backgroundColor: "#14161c",
			border: "1px solid #24262f",
			borderRadius: "18px",
			padding: "32px",
			maxWidth: "560px"
		},
		brand: {
			color: "#8b8f9c",
			fontSize: "11px",
			letterSpacing: "3px",
			margin: "0 0 12px"
		},
		heading: {
			color: "#ffffff",
			fontSize: "22px",
			lineHeight: "30px",
			margin: "0 0 18px"
		},
		text: {
			color: "#d5d7de",
			fontSize: "15px",
			lineHeight: "24px",
			margin: "0 0 14px",
			whiteSpace: "pre-line"
		},
		linkBox: {
			backgroundColor: "#1b1e26",
			borderRadius: "12px",
			padding: "16px",
			margin: "8px 0 16px"
		},
		linkTitle: {
			color: "#8b8f9c",
			fontSize: "11px",
			letterSpacing: "2px",
			margin: "0 0 10px"
		},
		link: {
			color: "#8ab4ff",
			textDecoration: "underline"
		},
		hr: {
			borderColor: "#24262f",
			margin: "24px 0 12px"
		},
		footer: {
			color: "#71747f",
			fontSize: "12px",
			margin: 0
		}
	};
	template = {
		component: ClientMessageEmail,
		displayName: "Client message",
		subject: (data) => data["subject"] || "A message from the Wayne-Web team",
		previewData: {
			subject: "Your project Aurora — we have received your request",
			name: "Hello Camille,",
			body: "Thank you for your trust: our team is already on your project.\n\nYou can follow every step live in your Wayne portal.",
			links: [{
				label: "Project brief (PDF)",
				url: "https://example.com/brief.pdf"
			}]
		}
	};
}));
var TEMPLATES;
var init_registry = __esmMin((() => {
	init_client_message();
	TEMPLATES = { "client-message": template };
}));
var send_email_exports = /* @__PURE__ */ __exportAll({ sendTemplateEmail: () => sendTemplateEmail });
function resendClient() {
	const apiKey = process.env["RESEND_API_KEY"];
	if (!apiKey) throw new Error("RESEND_API_KEY is not configured");
	if (!_resend) _resend = new Resend(apiKey);
	return _resend;
}
/**
* Renders a registered template and sends it through Resend.
* A suppressed recipient (bounced/complained, per Resend's account-level
* suppression list) is an expected outcome ({ sent: false }); any other
* failure throws.
*/
async function sendTemplateEmail(templateName, to, options = {}) {
	const template = TEMPLATES[templateName];
	if (!template) throw new Error(`Template '${templateName}' not found. Available: ${Object.keys(TEMPLATES).join(", ")}`);
	const recipient = template.to || to;
	if (!recipient) throw new Error("Recipient is required (the template defines no fixed recipient)");
	const templateData = options.templateData ?? {};
	const element = import_react.createElement(template.component, templateData);
	const html = await render(element);
	const text = await render(element, { plainText: true });
	const subject = typeof template.subject === "function" ? template.subject(templateData) : template.subject;
	const { error } = await resendClient().emails.send({
		to: recipient,
		from: `${SITE_NAME} <noreply@${FROM_DOMAIN}>`,
		subject,
		html,
		text,
		...options.replyTo ? { replyTo: options.replyTo } : {}
	}, { idempotencyKey: options.idempotencyKey || crypto.randomUUID() });
	if (error) {
		if (error.message.toLowerCase().includes("suppress")) return {
			sent: false,
			reason: "recipient_suppressed"
		};
		throw new Error(`[Resend] ${error.name}: ${error.message}`);
	}
	return { sent: true };
}
var SITE_NAME;
var FROM_DOMAIN;
var _resend;
var init_send_email = __esmMin((() => {
	init_registry();
	SITE_NAME = "Wayne Project Navigator";
	FROM_DOMAIN = "flux-wayne.com";
}));
var admin_email_functions_exports = /* @__PURE__ */ __exportAll({ sendClientMessage_createServerFn_handler: () => sendClientMessage_createServerFn_handler });
var schema$1;
var sendClientMessage_createServerFn_handler;
var sendClientMessage$1;
var init_admin_email_functions$1 = __esmMin((() => {
	init_server_rpc();
	init_esm$2();
	init_auth_middleware();
	schema$1 = objectType({
		projectId: stringType().uuid(),
		to: stringType().email(),
		subject: stringType().min(1).max(200),
		body: stringType().min(1).max(8e3),
		greeting: stringType().max(200).optional(),
		links: arrayType(objectType({
			label: stringType().min(1).max(160),
			url: stringType().url()
		})).max(10).optional()
	});
	sendClientMessage_createServerFn_handler = createServerRpc({
		id: "0e902064f300e5b47662beed54121570be6c03af8d2be405909091f8c01cb1b4",
		name: "sendClientMessage",
		filename: "src/lib/admin-email.functions.ts"
	}, (opts) => sendClientMessage$1.__executeServer(opts));
	sendClientMessage$1 = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((data) => schema$1.parse(data)).handler(sendClientMessage_createServerFn_handler, async ({ data, context }) => {
		const { data: isAdmin, error: roleError } = await context.supabase.rpc("has_role", {
			_user_id: context.userId,
			_role: "admin"
		});
		if (roleError) throw new Error(roleError.message);
		if (!isAdmin) throw new Error("Forbidden");
		const { sendTemplateEmail } = await Promise.resolve().then(() => (init_send_email(), send_email_exports));
		const result = await sendTemplateEmail("client-message", data.to, {
			templateData: {
				subject: data.subject,
				body: data.body,
				name: data.greeting,
				links: data.links ?? []
			},
			idempotencyKey: `client-message-${data.projectId}-${Date.now()}`
		});
		if (result.sent) {
			const { error } = await context.supabase.from("project_notes").insert({
				project_id: data.projectId,
				author_id: context.userId,
				kind: "email",
				body: `${data.subject}\n\n${data.body}`
			});
			if (error) console.error("[admin-email] note log failed", error.message);
		}
		return result;
	});
}));
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
var manifest;
var init___23tanstack_start_server_fn_resolver = __esmMin((() => {
	manifest = { "0e902064f300e5b47662beed54121570be6c03af8d2be405909091f8c01cb1b4": {
		functionName: "sendClientMessage_createServerFn_handler",
		importer: () => Promise.resolve().then(() => (init_admin_email_functions$1(), admin_email_functions_exports))
	} };
}));
var init_getServerFnById = __esmMin((() => {
	init___23tanstack_start_server_fn_resolver();
}));
/**
* Encodes a single frame with header and payload.
*/
function encodeFrame(type, streamId, payload) {
	const frame = new Uint8Array(9 + payload.length);
	frame[0] = type;
	frame[1] = streamId >>> 24 & 255;
	frame[2] = streamId >>> 16 & 255;
	frame[3] = streamId >>> 8 & 255;
	frame[4] = streamId & 255;
	frame[5] = payload.length >>> 24 & 255;
	frame[6] = payload.length >>> 16 & 255;
	frame[7] = payload.length >>> 8 & 255;
	frame[8] = payload.length & 255;
	frame.set(payload, 9);
	return frame;
}
/**
* Encodes a JSON frame (type 0, streamId 0).
*/
function encodeJSONFrame(json) {
	return encodeFrame(FrameType.JSON, 0, textEncoder.encode(json));
}
/**
* Encodes a raw stream chunk frame.
*/
function encodeChunkFrame(streamId, chunk) {
	return encodeFrame(FrameType.CHUNK, streamId, chunk);
}
/**
* Encodes a raw stream end frame.
*/
function encodeEndFrame(streamId) {
	return encodeFrame(FrameType.END, streamId, EMPTY_PAYLOAD);
}
/**
* Encodes a raw stream error frame.
*/
function encodeErrorFrame(streamId, error) {
	const message = error instanceof Error ? error.message : String(error ?? "Unknown error");
	return encodeFrame(FrameType.ERROR, streamId, textEncoder.encode(message));
}
/**
* Creates a multiplexed ReadableStream from JSON stream and raw streams.
*
* The JSON stream emits NDJSON lines (from seroval's toCrossJSONStream).
* Raw streams are pumped concurrently, interleaved with JSON frames.
*
* Supports late stream registration for RawStreams discovered after initial
* serialization (e.g., from resolved Promises).
*
* @param jsonStream Stream of JSON strings (each string is one NDJSON line)
* @param rawStreams Map of stream IDs to raw binary streams (known at start)
* @param lateStreamSource Optional stream of late registrations for streams discovered later
*/
function createMultiplexedStream(jsonStream, rawStreams, lateStreamSource) {
	let controller;
	let cancelled = false;
	const readers = [];
	const enqueue = (frame) => {
		if (cancelled) return false;
		try {
			controller.enqueue(frame);
			return true;
		} catch {
			return false;
		}
	};
	const errorOutput = (error) => {
		if (cancelled) return;
		cancelled = true;
		try {
			controller.error(error);
		} catch {}
		for (const reader of readers) reader.cancel().catch(() => {});
	};
	async function pumpRawStream(streamId, stream) {
		const reader = stream.getReader();
		readers.push(reader);
		try {
			while (!cancelled) {
				const { done, value } = await reader.read();
				if (done) {
					enqueue(encodeEndFrame(streamId));
					return;
				}
				if (!enqueue(encodeChunkFrame(streamId, value))) return;
			}
		} catch (error) {
			enqueue(encodeErrorFrame(streamId, error));
		} finally {
			reader.releaseLock();
		}
	}
	async function pumpJSON() {
		const reader = jsonStream.getReader();
		readers.push(reader);
		try {
			while (!cancelled) {
				const { done, value } = await reader.read();
				if (done) return;
				if (!enqueue(encodeJSONFrame(value))) return;
			}
		} catch (error) {
			errorOutput(error);
			throw error;
		} finally {
			reader.releaseLock();
		}
	}
	async function pumpLateStreams() {
		if (!lateStreamSource) return [];
		const lateStreamPumps = [];
		const reader = lateStreamSource.getReader();
		readers.push(reader);
		try {
			while (!cancelled) {
				const { done, value } = await reader.read();
				if (done) break;
				lateStreamPumps.push(pumpRawStream(value.id, value.stream));
			}
		} finally {
			reader.releaseLock();
		}
		return lateStreamPumps;
	}
	return new ReadableStream({
		async start(ctrl) {
			controller = ctrl;
			const pumps = [pumpJSON()];
			for (const [streamId, stream] of rawStreams) pumps.push(pumpRawStream(streamId, stream));
			if (lateStreamSource) pumps.push(pumpLateStreams());
			try {
				const latePumps = (await Promise.all(pumps)).find(Array.isArray);
				if (latePumps && latePumps.length > 0) await Promise.all(latePumps);
				if (!cancelled) try {
					controller.close();
				} catch {}
			} catch {}
		},
		cancel() {
			cancelled = true;
			for (const reader of readers) reader.cancel().catch(() => {});
			readers.length = 0;
		}
	});
}
var textEncoder;
var EMPTY_PAYLOAD;
var init_frame_protocol = __esmMin((() => {
	init_esm$3();
	textEncoder = new TextEncoder();
	EMPTY_PAYLOAD = /* @__PURE__ */ new Uint8Array(0);
}));
function isNotFoundResponse(error) {
	const { headers, ...rest } = error;
	return new Response(JSON.stringify(rest), {
		status: 404,
		headers: {
			"Content-Type": "application/json",
			...headers || {}
		}
	});
}
var serovalPlugins;
var FORM_DATA_CONTENT_TYPES;
var MAX_PAYLOAD_SIZE;
var handleServerAction;
var init_server_functions_handler = __esmMin((() => {
	init_request_response();
	init_getServerFnById();
	init_frame_protocol();
	init_esm$3();
	serovalPlugins = void 0;
	FORM_DATA_CONTENT_TYPES = ["multipart/form-data", "application/x-www-form-urlencoded"];
	MAX_PAYLOAD_SIZE = 1e6;
	handleServerAction = async ({ request, context, serverFnId }) => {
		const methodUpper = request.method.toUpperCase();
		const url = new URL(request.url);
		const action = await getServerFnById(serverFnId, { origin: "client" });
		if (action.method && methodUpper !== action.method) return new Response(`expected ${action.method} method. Got ${methodUpper}`, {
			status: 405,
			headers: { Allow: action.method }
		});
		const isServerFn = request.headers.get("x-tsr-serverFn") === "true";
		if (!serovalPlugins) serovalPlugins = getDefaultSerovalPlugins();
		const contentType = request.headers.get("Content-Type");
		function parsePayload(payload) {
			return fromJSON(payload, { plugins: serovalPlugins });
		}
		return await (async () => {
			try {
				let res = await (async () => {
					if (FORM_DATA_CONTENT_TYPES.some((type) => contentType && contentType.includes(type))) {
						if (methodUpper === "GET") invariant();
						const formData = await request.formData();
						const serializedContext = formData.get(TSS_FORMDATA_CONTEXT);
						formData.delete(TSS_FORMDATA_CONTEXT);
						const params = {
							context,
							data: formData,
							method: methodUpper
						};
						if (typeof serializedContext === "string") try {
							const deserializedContext = fromJSON(JSON.parse(serializedContext), { plugins: serovalPlugins });
							if (typeof deserializedContext === "object" && deserializedContext) params.context = safeObjectMerge(deserializedContext, context);
						} catch (e) {}
						return await action(params);
					}
					if (methodUpper === "GET") {
						const payloadParam = url.searchParams.get("payload");
						if (payloadParam && payloadParam.length > MAX_PAYLOAD_SIZE) throw new Error("Payload too large");
						const payload = payloadParam ? parsePayload(JSON.parse(payloadParam)) : {};
						payload.context = safeObjectMerge(payload.context, context);
						payload.method = methodUpper;
						return await action(payload);
					}
					let jsonPayload;
					if (contentType?.includes("application/json")) jsonPayload = await request.json();
					const payload = jsonPayload ? parsePayload(jsonPayload) : {};
					payload.context = safeObjectMerge(payload.context, context);
					payload.method = methodUpper;
					return await action(payload);
				})();
				const unwrapped = res.result || res.error;
				if (isNotFound(res)) res = isNotFoundResponse(res);
				if (!isServerFn) return unwrapped;
				if (unwrapped instanceof Response) {
					if (isRedirect(unwrapped)) return unwrapped;
					unwrapped.headers.set(X_TSS_RAW_RESPONSE, "true");
					return unwrapped;
				}
				return serializeResult(res);
				function serializeResult(res) {
					let nonStreamingBody = void 0;
					const alsResponse = getResponse();
					if (res !== void 0) {
						const rawStreams = /* @__PURE__ */ new Map();
						let initialPhase = true;
						let lateStreamWriter;
						let lateStreamReadable = void 0;
						const pendingLateStreams = [];
						const plugins = [createRawStreamRPCPlugin((id, stream) => {
							if (initialPhase) {
								rawStreams.set(id, stream);
								return;
							}
							if (lateStreamWriter) {
								lateStreamWriter.write({
									id,
									stream
								}).catch(() => {});
								return;
							}
							pendingLateStreams.push({
								id,
								stream
							});
						}), ...serovalPlugins || []];
						let done = false;
						const callbacks = {
							onParse: (value) => {
								nonStreamingBody = value;
							},
							onDone: () => {
								done = true;
							},
							onError: (error) => {
								throw error;
							}
						};
						toCrossJSONStream(res, {
							refs: /* @__PURE__ */ new Map(),
							plugins,
							onParse(value) {
								callbacks.onParse(value);
							},
							onDone() {
								callbacks.onDone();
							},
							onError: (error) => {
								callbacks.onError(error);
							}
						});
						initialPhase = false;
						if (done && rawStreams.size === 0) return new Response(nonStreamingBody ? JSON.stringify(nonStreamingBody) : void 0, {
							status: alsResponse.status,
							statusText: alsResponse.statusText,
							headers: {
								"Content-Type": "application/json",
								[X_TSS_SERIALIZED]: "true"
							}
						});
						const { readable, writable } = new TransformStream();
						lateStreamReadable = readable;
						lateStreamWriter = writable.getWriter();
						for (const registration of pendingLateStreams) lateStreamWriter.write(registration).catch(() => {});
						pendingLateStreams.length = 0;
						const multiplexedStream = createMultiplexedStream(new ReadableStream({
							start(controller) {
								callbacks.onParse = (value) => {
									controller.enqueue(JSON.stringify(value) + "\n");
								};
								callbacks.onDone = () => {
									try {
										controller.close();
									} catch {}
									lateStreamWriter?.close().catch(() => {}).finally(() => {
										lateStreamWriter = void 0;
									});
								};
								callbacks.onError = (error) => {
									controller.error(error);
									lateStreamWriter?.abort(error).catch(() => {}).finally(() => {
										lateStreamWriter = void 0;
									});
								};
								if (nonStreamingBody !== void 0) callbacks.onParse(nonStreamingBody);
								if (done) callbacks.onDone();
							},
							cancel() {
								lateStreamWriter?.abort().catch(() => {});
								lateStreamWriter = void 0;
							}
						}), rawStreams, lateStreamReadable);
						return new Response(multiplexedStream, {
							status: alsResponse.status,
							statusText: alsResponse.statusText,
							headers: {
								"Content-Type": TSS_CONTENT_TYPE_FRAMED_VERSIONED,
								[X_TSS_SERIALIZED]: "true"
							}
						});
					}
					return new Response(void 0, {
						status: alsResponse.status,
						statusText: alsResponse.statusText
					});
				}
			} catch (error) {
				if (error instanceof Response) return error;
				if (isNotFound(error)) return isNotFoundResponse(error);
				console.info();
				console.info("Server Fn Error!");
				console.info();
				console.error(error);
				console.info();
				const serializedError = JSON.stringify(await Promise.resolve(toCrossJSONAsync(error, {
					refs: /* @__PURE__ */ new Map(),
					plugins: serovalPlugins
				})));
				const response = getResponse();
				return new Response(serializedError, {
					status: response.status ?? 500,
					statusText: response.statusText,
					headers: {
						"Content-Type": "application/json",
						[X_TSS_SERIALIZED]: "true"
					}
				});
			}
		})();
	};
}));
function buildLinkParam(name, value) {
	if (value === void 0) return name;
	if (LINK_PARAM_TOKEN_RE.test(value)) return `${name}=${value}`;
	return `${name}=${JSON.stringify(value)}`;
}
function serializeEarlyHint(hint) {
	const parts = [`<${hint.href}>`, buildLinkParam("rel", hint.rel)];
	if (hint.as) parts.push(buildLinkParam("as", hint.as));
	if (hint.crossOrigin !== void 0) parts.push(buildLinkParam("crossorigin", hint.crossOrigin || void 0));
	if (hint.type) parts.push(buildLinkParam("type", hint.type));
	if (hint.integrity) parts.push(buildLinkParam("integrity", hint.integrity));
	if (hint.referrerPolicy) parts.push(buildLinkParam("referrerpolicy", hint.referrerPolicy));
	if (hint.fetchPriority) parts.push(buildLinkParam("fetchpriority", hint.fetchPriority));
	return parts.join("; ");
}
function getStringAttr(attrs, name, fallbackName) {
	const value = attrs?.[name] ?? (fallbackName ? attrs?.[fallbackName] : void 0);
	return typeof value === "string" ? value : void 0;
}
function getPreloadAs(attrs) {
	const as = getStringAttr(attrs, "as");
	return as && PRELOAD_AS_VALUES.has(as) ? as : void 0;
}
function addEarlyHintFetchAttrs(hint, attrs) {
	const crossOrigin = getStringAttr(attrs, "crossOrigin", "crossorigin");
	const type = getStringAttr(attrs, "type");
	const integrity = getStringAttr(attrs, "integrity");
	const referrerPolicy = getStringAttr(attrs, "referrerPolicy", "referrerpolicy");
	const fetchPriority = getStringAttr(attrs, "fetchPriority", "fetchpriority");
	if (crossOrigin !== void 0) hint.crossOrigin = crossOrigin;
	if (type) hint.type = type;
	if (integrity) hint.integrity = integrity;
	if (referrerPolicy) hint.referrerPolicy = referrerPolicy;
	if (fetchPriority) hint.fetchPriority = fetchPriority;
}
function linkAttrsToEarlyHint(attrs) {
	const href = getStringAttr(attrs, "href");
	const rel = getStringAttr(attrs, "rel");
	if (!href || !rel) return void 0;
	const relTokens = rel.split(/\s+/);
	let hintRel;
	let hintAs;
	if (relTokens.includes("modulepreload")) {
		hintRel = "modulepreload";
		hintAs = "script";
	} else if (relTokens.includes("stylesheet")) {
		hintRel = "preload";
		hintAs = "style";
	} else if (relTokens.includes("preload")) {
		hintAs = getPreloadAs(attrs);
		if (!hintAs) return void 0;
		hintRel = "preload";
	} else if (relTokens.includes("preconnect")) {
		hintRel = "preconnect";
		hintAs = void 0;
	} else if (relTokens.includes("dns-prefetch")) {
		hintRel = "dns-prefetch";
		hintAs = void 0;
	}
	if (!hintRel) return void 0;
	const hint = {
		href,
		rel: hintRel
	};
	if (hintAs) hint.as = hintAs;
	addEarlyHintFetchAttrs(hint, attrs);
	return hint;
}
function collectStaticHintsFromManifest(manifest, matchedRoutes) {
	const hints = [];
	for (const route of matchedRoutes) {
		const routeManifest = manifest.routes[route.id];
		if (!routeManifest) continue;
		for (const link of routeManifest.preloads ?? []) {
			const attrs = getScriptPreloadAttrs(manifest, link);
			const hint = {
				href: attrs.href,
				rel: attrs.rel,
				as: "script"
			};
			if (attrs.crossOrigin !== void 0) hint.crossOrigin = attrs.crossOrigin;
			hints.push(hint);
		}
		for (const link of routeManifest.css ?? []) {
			const stylesheetHref = getStylesheetHref(link);
			if (manifest.inlineCss?.styles[stylesheetHref] !== void 0) continue;
			const resolvedLink = resolveManifestCssLink(link);
			const hint = {
				href: stylesheetHref,
				rel: "preload",
				as: "style"
			};
			if (resolvedLink.crossOrigin !== void 0) hint.crossOrigin = resolvedLink.crossOrigin;
			hints.push(hint);
		}
	}
	return hints;
}
function collectDynamicHintsFromMatches(matches) {
	const hints = [];
	for (const match of matches) {
		const links = match.links;
		if (!Array.isArray(links)) continue;
		for (const link of links) {
			const hint = linkAttrsToEarlyHint(link);
			if (hint) hints.push(hint);
		}
	}
	return hints;
}
function createEarlyHintsEvent(opts) {
	const nextHints = [];
	const nextLinks = [];
	for (const hint of opts.hints) {
		const link = serializeEarlyHint(hint);
		if (opts.sentLinks.has(link)) continue;
		opts.sentLinks.add(link);
		opts.sentHints.push(hint);
		nextHints.push(hint);
		nextLinks.push(link);
	}
	if (!nextHints.length && opts.phase !== "dynamic") return void 0;
	return {
		phase: opts.phase,
		hints: nextHints,
		links: nextLinks,
		allHints: opts.sentHints.slice(),
		allLinks: Array.from(opts.sentLinks)
	};
}
function createResponseLinkHeaderEntries(opts) {
	for (const hint of opts.hints) {
		const link = serializeEarlyHint(hint);
		if (opts.sentLinks.has(link)) continue;
		opts.sentLinks.add(link);
		opts.entries.push({
			phase: opts.phase,
			hint,
			link
		});
	}
}
function getResponseLinkHeaderEntries(opts) {
	if (!opts.filter) return opts.entries.map((entry) => entry.link);
	try {
		const links = [];
		for (const entry of opts.entries) if (opts.filter(entry)) links.push(entry.link);
		return links;
	} catch (err) {
		console.error("Error filtering response Link headers:", err);
		return [];
	}
}
function notifyEarlyHints(phase, event, onEarlyHints) {
	try {
		const result = onEarlyHints(event);
		if (result) Promise.resolve(result).catch((err) => {
			console.error(`Error sending ${phase} early hints:`, err);
		});
	} catch (err) {
		console.error(`Error sending ${phase} early hints:`, err);
	}
}
function getResponseLinkHeaderFilter(responseLinkHeader) {
	if (typeof responseLinkHeader !== "object") return;
	return responseLinkHeader.filter;
}
function appendResponseLinkHeaders(opts) {
	for (const link of getResponseLinkHeaderEntries(opts)) opts.responseHeaders.append("Link", link);
}
function collectResponseLinkHeaderEntries(opts) {
	for (let index = 0; index < opts.event.hints.length; index++) opts.entries.push({
		phase: opts.phase,
		hint: opts.event.hints[index],
		link: opts.event.links[index]
	});
}
function collectEarlyHintsPhase(opts) {
	const event = opts.onEarlyHints ? createEarlyHintsEvent({
		phase: opts.phase,
		hints: opts.hints,
		sentLinks: opts.sentLinks,
		sentHints: opts.sentHints
	}) : void 0;
	if (event) notifyEarlyHints(opts.phase, event, opts.onEarlyHints);
	if (!opts.responseLinkHeaderEntries) return;
	if (event) {
		collectResponseLinkHeaderEntries({
			phase: opts.phase,
			event,
			entries: opts.responseLinkHeaderEntries
		});
		return;
	}
	createResponseLinkHeaderEntries({
		phase: opts.phase,
		hints: opts.hints,
		sentLinks: opts.sentLinks,
		entries: opts.responseLinkHeaderEntries
	});
}
function createEarlyHintsCollector(opts) {
	if (!opts?.onEarlyHints && !opts?.responseLinkHeader) return;
	const sentLinks = /* @__PURE__ */ new Set();
	const sentHints = opts.onEarlyHints ? new Array() : void 0;
	const responseLinkHeaderEntries = opts.responseLinkHeader ? new Array() : void 0;
	const responseLinkHeaderFilter = getResponseLinkHeaderFilter(opts.responseLinkHeader);
	return {
		collectStatic: ({ manifest, matchedRoutes }) => {
			if (!matchedRoutes?.length) return;
			collectEarlyHintsPhase({
				phase: "static",
				hints: collectStaticHintsFromManifest(manifest, matchedRoutes),
				sentLinks,
				sentHints,
				onEarlyHints: opts.onEarlyHints,
				responseLinkHeaderEntries
			});
		},
		collectDynamic: (matches) => {
			collectEarlyHintsPhase({
				phase: "dynamic",
				hints: collectDynamicHintsFromMatches(matches),
				sentLinks,
				sentHints,
				onEarlyHints: opts.onEarlyHints,
				responseLinkHeaderEntries
			});
		},
		appendResponseHeaders: (headers) => {
			if (!responseLinkHeaderEntries?.length) return;
			appendResponseLinkHeaders({
				responseHeaders: headers,
				entries: responseLinkHeaderEntries,
				filter: responseLinkHeaderFilter
			});
		}
	};
}
var LINK_PARAM_TOKEN_RE;
var PRELOAD_AS_VALUES;
var init_early_hints = __esmMin((() => {
	LINK_PARAM_TOKEN_RE = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
	PRELOAD_AS_VALUES = /* @__PURE__ */ new Set([
		"fetch",
		"font",
		"image",
		"script",
		"style",
		"track"
	]);
}));
function normalizeTransformAssetResult(result) {
	if (typeof result === "string") return { href: result };
	return result;
}
function escapeCssString(value) {
	return value.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\n/g, "\\a ").replace(/\r/g, "\\d ").replace(/\f/g, "\\c ");
}
async function transformInlineCssTemplate(options) {
	const { strings, urls } = options.template;
	if (strings.length !== urls.length + 1) throw new Error(`TanStack Start inlineCss template for ${options.stylesheetHref} is invalid`);
	let css = strings[0];
	for (let index = 0; index < urls.length; index++) {
		const transformed = normalizeTransformAssetResult(await options.transformFn({
			kind: "css-url",
			url: urls[index],
			stylesheetHref: options.stylesheetHref
		}));
		css += escapeCssString(transformed.href) + strings[index + 1];
	}
	return css;
}
async function transformInlineCssStyles(inlineCss, transformFn) {
	const transformedStyles = {};
	const transformedEntries = await Promise.all(Object.entries(inlineCss.styles).map(async ([stylesheetHref, css]) => {
		const template = inlineCss.templates?.[stylesheetHref];
		return [stylesheetHref, template ? await transformInlineCssTemplate({
			stylesheetHref,
			template,
			transformFn
		}) : css];
	}));
	for (const [stylesheetHref, css] of transformedEntries) transformedStyles[stylesheetHref] = css;
	return {
		styles: transformedStyles,
		...inlineCss.templates ? { templates: inlineCss.templates } : {}
	};
}
function resolveTransformAssetsCrossOrigin(config, kind) {
	if (!config) return void 0;
	if (typeof config === "string") return config;
	return config[kind];
}
function isObjectShorthand(transform) {
	return "prefix" in transform;
}
function resolveTransformAssetsConfig(transform) {
	if (typeof transform === "string") {
		const prefix = transform;
		return {
			type: "transform",
			transformFn: ({ url }) => ({ href: `${prefix}${url}` }),
			cache: true
		};
	}
	if (typeof transform === "function") return {
		type: "transform",
		transformFn: transform,
		cache: true
	};
	if (isObjectShorthand(transform)) {
		const { prefix, crossOrigin } = transform;
		return {
			type: "transform",
			transformFn: ({ url, kind }) => {
				const href = `${prefix}${url}`;
				if (kind === "css-url") return { href };
				const co = resolveTransformAssetsCrossOrigin(crossOrigin, kind);
				return co ? {
					href,
					crossOrigin: co
				} : { href };
			},
			cache: true
		};
	}
	if ("createTransform" in transform && transform.createTransform) return {
		type: "createTransform",
		createTransform: transform.createTransform,
		cache: transform.cache !== false
	};
	return {
		type: "transform",
		transformFn: typeof transform.transform === "string" ? (({ url }) => ({ href: `${transform.transform}${url}` })) : transform.transform,
		cache: transform.cache !== false
	};
}
function assignManifestLink(link, next) {
	if (typeof link === "string") return next.crossOrigin ? next : next.href;
	const nextLink = {
		...link,
		href: next.href
	};
	if (next.crossOrigin) nextLink.crossOrigin = next.crossOrigin;
	else delete nextLink.crossOrigin;
	return nextLink;
}
async function transformManifestAssets(source, transformFn, _opts) {
	const manifest = structuredClone(source);
	const inlineCssEnabled = _opts?.inlineCss !== false;
	const scriptTransforms = /* @__PURE__ */ new Map();
	const transformScript = (url) => {
		const cached = scriptTransforms.get(url);
		if (cached) return cached;
		const transformed = Promise.resolve(transformFn({
			url,
			kind: "script"
		})).then(normalizeTransformAssetResult);
		scriptTransforms.set(url, transformed);
		return transformed;
	};
	if (!inlineCssEnabled) delete manifest.inlineCss;
	else if (manifest.inlineCss) manifest.inlineCss = await transformInlineCssStyles(manifest.inlineCss, transformFn);
	for (const route of Object.values(manifest.routes)) {
		if (route.preloads?.length) route.preloads = await Promise.all(route.preloads.map(async (link) => {
			const result = await transformScript(resolveManifestAssetLink(link).href);
			return assignManifestLink(link, {
				href: result.href,
				crossOrigin: result.crossOrigin
			});
		}));
		if (route.css?.length && !manifest.inlineCss) route.css = await Promise.all(route.css.map(async (link) => {
			const result = normalizeTransformAssetResult(await transformFn({
				url: resolveManifestCssLink(link).href,
				kind: "stylesheet"
			}));
			return assignManifestLink(link, {
				href: result.href,
				crossOrigin: result.crossOrigin
			});
		}));
		if (route.scripts?.length) for (const script of route.scripts) {
			const src = script.attrs?.src;
			if (typeof src !== "string") continue;
			const result = await transformScript(src);
			script.attrs = {
				...script.attrs,
				src: result.href
			};
			if (result.crossOrigin) script.attrs.crossOrigin = result.crossOrigin;
			else delete script.attrs.crossOrigin;
		}
	}
	return manifest;
}
/**
* Builds a final ServerManifest without URL transforms. Used when no
* transformAssets option is provided.
*
* Returns a new manifest object so the cached base manifest is never mutated.
*/
function buildManifest(source, opts) {
	return {
		...source.scriptFormat ? { scriptFormat: source.scriptFormat } : {},
		...opts?.inlineCss !== false && source.inlineCss ? { inlineCss: structuredClone(source.inlineCss) } : {},
		routes: { ...source.routes }
	};
}
var init_transformAssetUrls = __esmMin((() => {}));
function getStaticHandlerInlineCssDefault(handlerInlineCss) {
	if (typeof handlerInlineCss === "function") return;
	return handlerInlineCss ?? true;
}
async function resolveInlineCssForRequest(opts) {
	if (opts.requestInlineCss !== void 0) return opts.requestInlineCss;
	if (typeof opts.handlerInlineCss === "function") return await opts.handlerInlineCss({ request: opts.request });
	return opts.handlerInlineCss ?? true;
}
var init_inlineCss = __esmMin((() => {}));
function createCachedBaseManifestLoader(loadBaseManifest) {
	let baseManifestPromise;
	return () => {
		if (!baseManifestPromise) baseManifestPromise = loadBaseManifest().catch((error) => {
			baseManifestPromise = void 0;
			throw error;
		});
		return baseManifestPromise;
	};
}
function createFinalManifestTransformResolver(transformAssets, opts) {
	const transformConfig = transformAssets !== void 0 ? resolveTransformAssetsConfig(transformAssets) : void 0;
	const cache = transformConfig ? transformConfig.cache : true;
	const warmup = !!transformAssets && typeof transformAssets === "object" && "warmup" in transformAssets && transformAssets.warmup === true;
	let cachedCreateTransformPromise;
	const clearCachedCreateTransform = () => {
		cachedCreateTransformPromise = void 0;
	};
	return {
		cache,
		warmup,
		clearCachedCreateTransform,
		getTransformFn: async (ctx) => {
			if (!transformConfig) return void 0;
			if (transformConfig.type !== "createTransform") return transformConfig.transformFn;
			if (!cache || !opts.cacheCreateTransform) return transformConfig.createTransform(ctx);
			if (!cachedCreateTransformPromise) cachedCreateTransformPromise = Promise.resolve(transformConfig.createTransform(ctx)).catch((error) => {
				clearCachedCreateTransform();
				throw error;
			});
			return cachedCreateTransformPromise;
		}
	};
}
function createFinalManifestResolver(opts) {
	const finalManifestCache = /* @__PURE__ */ new Map();
	const transformResolver = createFinalManifestTransformResolver(opts.transformAssets, { cacheCreateTransform: opts.cacheCreateTransform });
	const handlerDefaultInlineCss = getStaticHandlerInlineCssDefault(opts.inlineCss);
	const getRequestManifestOptions = async (requestOpts) => {
		const transformFn = await transformResolver.getTransformFn({
			warmup: false,
			request: requestOpts.request
		});
		const inlineCss = await resolveInlineCssForRequest({
			request: requestOpts.request,
			handlerInlineCss: opts.inlineCss,
			requestInlineCss: requestOpts.requestInlineCss
		});
		return {
			getBaseManifest: requestOpts.getBaseManifest,
			transformFn,
			cache: transformResolver.cache,
			inlineCss
		};
	};
	const resolveRequest = async (requestOpts, cache) => {
		return resolveFinalManifest({
			...await getRequestManifestOptions(requestOpts),
			finalManifestCache: cache
		});
	};
	return {
		warmup: ({ getBaseManifest }) => warmupFinalManifest({
			enabled: transformResolver.warmup,
			handlerDefaultInlineCss,
			cache: transformResolver.cache,
			finalManifestCache,
			getBaseManifest,
			getTransformFn: () => transformResolver.getTransformFn({ warmup: true }),
			onError: transformResolver.clearCachedCreateTransform
		}),
		resolveCached: (requestOpts) => resolveRequest(requestOpts, finalManifestCache),
		resolveUncached: (requestOpts) => resolveRequest(requestOpts, void 0)
	};
}
function getFinalManifestCacheKey(inlineCss) {
	return inlineCss ? "inline-css" : "linked-css";
}
function cacheFinalManifestPromise(cachedFinalManifestPromises, cacheKey, promise) {
	const cachedFinalManifestPromise = promise.catch((error) => {
		if (cachedFinalManifestPromises.get(cacheKey) === cachedFinalManifestPromise) cachedFinalManifestPromises.delete(cacheKey);
		throw error;
	});
	cachedFinalManifestPromises.set(cacheKey, cachedFinalManifestPromise);
	return cachedFinalManifestPromise;
}
function getOrCreateCachedFinalManifestPromise(cachedFinalManifestPromises, cacheKey, computeFinalManifest) {
	const cachedFinalManifestPromise = cachedFinalManifestPromises.get(cacheKey);
	if (cachedFinalManifestPromise) return cachedFinalManifestPromise;
	return cacheFinalManifestPromise(cachedFinalManifestPromises, cacheKey, Promise.resolve().then(computeFinalManifest));
}
async function buildFinalManifest(opts) {
	return opts.transformFn ? await transformManifestAssets(opts.base, opts.transformFn, { inlineCss: opts.inlineCss }) : buildManifest(opts.base, { inlineCss: opts.inlineCss });
}
async function resolveFinalManifest(opts) {
	const computeFinalManifest = async () => {
		return buildFinalManifest({
			base: await opts.getBaseManifest(),
			transformFn: opts.transformFn,
			inlineCss: opts.inlineCss
		});
	};
	if (opts.finalManifestCache && (!opts.transformFn || opts.cache)) return getOrCreateCachedFinalManifestPromise(opts.finalManifestCache, getFinalManifestCacheKey(opts.inlineCss), computeFinalManifest);
	return computeFinalManifest();
}
function warmupFinalManifest(opts) {
	if (!opts.enabled || opts.handlerDefaultInlineCss === void 0 || !opts.cache) return;
	const inlineCss = opts.handlerDefaultInlineCss;
	const warmupPromise = getOrCreateCachedFinalManifestPromise(opts.finalManifestCache, getFinalManifestCacheKey(inlineCss), async () => {
		const [base, transformFn] = await Promise.all([opts.getBaseManifest(), opts.getTransformFn()]);
		return buildFinalManifest({
			base,
			transformFn,
			inlineCss
		});
	});
	if (opts.onError) warmupPromise.catch(opts.onError);
	return warmupPromise;
}
var init_finalManifest = __esmMin((() => {
	init_transformAssetUrls();
	init_inlineCss();
}));
var ServerFunctionSerializationAdapter;
var init_ServerFunctionSerializationAdapter = __esmMin((() => {
	init_getServerFnById();
	init_esm$3();
	ServerFunctionSerializationAdapter = createSerializationAdapter({
		key: "$TSS/serverfn",
		test: (v) => {
			if (typeof v !== "function") return false;
			if (!(TSS_SERVER_FUNCTION in v)) return false;
			return !!v[TSS_SERVER_FUNCTION];
		},
		toSerializable: ({ serverFnMeta }) => ({ functionId: serverFnMeta.id }),
		fromSerializable: ({ functionId }) => {
			const fn = async (opts, signal) => {
				return (await (await getServerFnById(functionId, { origin: "client" }))(opts ?? {}, signal)).result;
			};
			return fn;
		}
	});
}));
var init_styles$1 = __esmMin((() => {}));
var styles_default;
var init_styles = __esmMin((() => {
	init_styles$1();
	styles_default = "/assets/styles-BwUMTIhy.css";
}));
var Toaster$1;
var init_sonner = __esmMin((() => {
	Toaster$1 = ({ ...props }) => {
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
			className: "toaster group",
			toastOptions: { classNames: {
				toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
				description: "group-[.toast]:text-muted-foreground",
				actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
				cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
			} },
			...props
		});
	};
}));
function isNewSupabaseApiKey(value) {
	return value.startsWith("sb_publishable_") || value.startsWith("sb_secret_");
}
function createSupabaseFetch(supabaseKey) {
	return (input, init) => {
		const headers = new Headers(typeof Request !== "undefined" && input instanceof Request ? input.headers : void 0);
		if (init?.headers) new Headers(init.headers).forEach((value, key) => headers.set(key, value));
		if (isNewSupabaseApiKey(supabaseKey) && headers.get("Authorization") === `Bearer ${supabaseKey}`) headers.delete("Authorization");
		headers.set("apikey", supabaseKey);
		return fetch(input, {
			...init,
			headers
		});
	};
}
function createSupabaseClient() {
	const SUPABASE_URL = {
		"BASE_URL": "/",
		"DEV": false,
		"MODE": "production",
		"PROD": true,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/",
		"VITE_SUPABASE_PROJECT_ID": "gkuizkdgmltgmfykggrx",
		"VITE_SUPABASE_PUBLISHABLE_KEY": "sb_publishable_yGgePjA-9Gym0G77Vhbp-A_TcDA5mBT",
		"VITE_SUPABASE_URL": "https://gkuizkdgmltgmfykggrx.supabase.co"
	}["VITE_SUPABASE_URL"] || process.env["SUPABASE_URL"];
	const SUPABASE_PUBLISHABLE_KEY = {
		"BASE_URL": "/",
		"DEV": false,
		"MODE": "production",
		"PROD": true,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/",
		"VITE_SUPABASE_PROJECT_ID": "gkuizkdgmltgmfykggrx",
		"VITE_SUPABASE_PUBLISHABLE_KEY": "sb_publishable_yGgePjA-9Gym0G77Vhbp-A_TcDA5mBT",
		"VITE_SUPABASE_URL": "https://gkuizkdgmltgmfykggrx.supabase.co"
	}["VITE_SUPABASE_PUBLISHABLE_KEY"] || process.env["SUPABASE_PUBLISHABLE_KEY"];
	if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
		const message = `Missing Supabase environment variable(s): ${[...!SUPABASE_URL ? ["SUPABASE_URL"] : [], ...!SUPABASE_PUBLISHABLE_KEY ? ["SUPABASE_PUBLISHABLE_KEY"] : []].join(", ")}. Configure them in your environment.`;
		console.error(`[Supabase] ${message}`);
		throw new Error(message);
	}
	return createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
		global: { fetch: createSupabaseFetch(SUPABASE_PUBLISHABLE_KEY) },
		auth: {
			persistSession: true,
			autoRefreshToken: true
		}
	});
}
var _supabase;
var supabase;
var init_client = __esmMin((() => {
	supabase = new Proxy({}, { get(_, prop, receiver) {
		if (!_supabase) _supabase = createSupabaseClient();
		return Reflect.get(_supabase, prop, receiver);
	} });
}));
var admin;
var init_admin = __esmMin((() => {
	admin = {
		en: {
			"nav.link": "Super admin",
			title: "Super admin",
			subtitle: "Wayne control room",
			backToPortal: "Back to the portal",
			"list.title": "All client accounts",
			"list.subtitle": "Every journey, every fiche, every proposal — at a glance.",
			"list.empty": "No account matches this filter.",
			"filter.all": "All",
			"filter.wayne": "Waiting on us",
			"filter.client": "Waiting on the client",
			"filter.brief": "Brief submitted",
			"filter.offer": "Proposal to send",
			"filter.software": "Software",
			"filter.hardware": "Hardware",
			"filter.hybrid": "Hybrid",
			"filter.category": "Category",
			"type.software": "Software",
			"type.hardware": "Hardware",
			"type.hybrid": "Software + Hardware",
			"row.phase": "Step",
			"row.waitingClient": "Waiting on the client",
			"row.waitingWayne": "Waiting on us",
			"row.fiche": "Fiche",
			"row.briefDone": "Brief validated",
			"row.briefPending": "Brief pending",
			"row.offerPublished": "Proposal sent",
			"row.offerDraft": "Proposal draft",
			"row.offerNone": "No proposal",
			"row.paid": "{paid} paid of {total}",
			"row.open": "Open the file",
			"detail.eyebrow": "Client file",
			"detail.back": "Back to the list",
			"detail.notFound": "This project is not available.",
			"view.eyebrow": "Client journey",
			"view.readOnly": "Read-only view",
			"action.advance": "Move to next step",
			"offer.title": "Proposal",
			"offer.hint": "The client never sees a price here — only your Stripe checkout does.",
			"offer.field.title": "Title shown to the client",
			"offer.field.titlePlaceholder": "Proposal",
			"offer.field.description": "Scope / what is included",
			"offer.field.descriptionPlaceholder": "Describe what the client gets, without pricing.",
			"offer.field.stripe": "Stripe payment link",
			"offer.save": "Save as draft",
			"offer.publish": "Publish to the client",
			"offer.unpublish": "Hide from the client",
			"offer.published": "Proposal published",
			"offer.saved": "Proposal saved",
			"offer.error": "Could not save the proposal",
			"invoices.title": "Invoices",
			"invoices.markPaid": "Mark as paid",
			"invoices.hint": "Set the amount and the Stripe link, then publish: the client receives the invoice to pay.",
			"invoices.amount": "Amount (EUR)",
			"invoices.link": "Stripe payment link for this invoice",
			"invoices.save": "Save the invoice",
			"invoices.saved": "Invoice updated",
			"invoices.error": "Could not update the invoice",
			"invoices.sent": "Payment link sent to the client",
			"notes.title": "Internal notes",
			"notes.hint": "Private to the Wayne team — the client never sees these notes.",
			"notes.placeholder": "Call summary, next action, internal reminder...",
			"notes.add": "Add the note",
			"notes.empty": "No note yet on this file.",
			"notes.delete": "Delete the note",
			"notes.saved": "Note added",
			"notes.error": "Could not save the note",
			"message.title": "Message to the client",
			"message.hint": "Write a polished message; it is sent from the app and logged below.",
			"message.error": "The message could not be sent",
			"message.suppressed": "This address can no longer receive our emails",
			"message.subject": "Subject",
			"message.body": "Message",
			"message.send": "Send to {email}",
			"message.sent": "Message prepared and logged",
			"message.noEmail": "No email address on this account yet.",
			"message.defaultSubject": "Your project {project} — we have received your request",
			"message.defaultBody": "Hello {name},\n\nThank you for your trust: we have received your request for {project} and our team is already on it.\n\nYou can follow every step live in your Wayne portal — agreement, welcome fiche, brief, invoices and delivery are all there.\n\nWe will come back to you shortly with the next step.\n\nWarm regards,\nThe Wayne-Web team",
			"fiche.title": "Business fiche",
			"brief.title": "Project brief",
			"brief.submitted": "Validated on {date}",
			"brief.history": "History",
			"brief.attachments.title": "Attachments",
			"brief.attachments.empty": "No files were attached.",
			"brief.attachments.open": "Open",
			"brief.eventSubmitted": "Validated",
			"brief.eventReopened": "Reopened",
			"documents.title": "Documents",
			"documents.signed": "Agreement signed by {name} on {date}"
		},
		fr: {
			"nav.link": "Super admin",
			title: "Super admin",
			subtitle: "Poste de commande Wayne",
			backToPortal: "Retour au portail",
			"list.title": "Tous les comptes clients",
			"list.subtitle": "Chaque parcours, chaque fiche, chaque proposition — d'un coup d'œil.",
			"list.empty": "Aucun compte ne correspond à ce filtre.",
			"filter.all": "Tous",
			"filter.wayne": "En attente de nous",
			"filter.client": "En attente du client",
			"filter.brief": "Brief soumis",
			"filter.offer": "Proposition à envoyer",
			"filter.software": "Software",
			"filter.hardware": "Hardware",
			"filter.hybrid": "Hybride",
			"filter.category": "Catégorie",
			"type.software": "Software",
			"type.hardware": "Hardware",
			"type.hybrid": "Software + Hardware",
			"row.phase": "Étape",
			"row.waitingClient": "En attente du client",
			"row.waitingWayne": "En attente de nous",
			"row.fiche": "Fiche",
			"row.briefDone": "Brief validé",
			"row.briefPending": "Brief en attente",
			"row.offerPublished": "Proposition envoyée",
			"row.offerDraft": "Proposition en brouillon",
			"row.offerNone": "Aucune proposition",
			"row.paid": "{paid} payés sur {total}",
			"row.open": "Ouvrir la fiche",
			"detail.eyebrow": "Fiche client",
			"detail.back": "Retour à la liste",
			"detail.notFound": "Ce projet n'est pas disponible.",
			"view.eyebrow": "Parcours du client",
			"view.readOnly": "Vue en lecture seule",
			"action.advance": "Passer à l'étape suivante",
			"offer.title": "Proposition",
			"offer.hint": "Le client ne voit aucun prix ici — seul votre checkout Stripe l'affiche.",
			"offer.field.title": "Titre affiché au client",
			"offer.field.titlePlaceholder": "Proposition",
			"offer.field.description": "Périmètre / ce qui est inclus",
			"offer.field.descriptionPlaceholder": "Décrivez ce que le client obtient, sans tarif.",
			"offer.field.stripe": "Lien de paiement Stripe",
			"offer.save": "Enregistrer en brouillon",
			"offer.publish": "Publier au client",
			"offer.unpublish": "Masquer au client",
			"offer.published": "Proposition publiée",
			"offer.saved": "Proposition enregistrée",
			"offer.error": "Impossible d'enregistrer la proposition",
			"invoices.title": "Factures",
			"invoices.markPaid": "Marquer comme payée",
			"invoices.hint": "Renseignez le montant et le lien Stripe, puis publiez : le client reçoit la facture à payer.",
			"invoices.amount": "Montant (EUR)",
			"invoices.link": "Lien de paiement Stripe pour cette facture",
			"invoices.save": "Enregistrer la facture",
			"invoices.saved": "Facture mise à jour",
			"invoices.error": "Impossible de mettre à jour la facture",
			"invoices.sent": "Lien de paiement envoyé au client",
			"notes.title": "Notes internes",
			"notes.hint": "Réservé à l'équipe Wayne — le client ne voit jamais ces notes.",
			"notes.placeholder": "Compte-rendu d'appel, prochaine action, rappel interne...",
			"notes.add": "Ajouter la note",
			"notes.empty": "Aucune note sur cette fiche.",
			"notes.delete": "Supprimer la note",
			"notes.saved": "Note ajoutée",
			"notes.error": "Impossible d'enregistrer la note",
			"message.title": "Message au client",
			"message.hint": "Rédigez un beau message : il est envoyé depuis l'application et tracé ci-dessous.",
			"message.error": "Le message n'a pas pu être envoyé",
			"message.suppressed": "Cette adresse ne peut plus recevoir nos emails",
			"message.subject": "Objet",
			"message.body": "Message",
			"message.send": "Envoyer à {email}",
			"message.sent": "Message préparé et tracé",
			"message.noEmail": "Aucune adresse email sur ce compte pour l'instant.",
			"message.defaultSubject": "Votre projet {project} — nous avons bien reçu votre demande",
			"message.defaultBody": "Bonjour {name},\n\nMerci pour votre confiance : nous avons bien reçu votre demande pour {project} et notre équipe s'en occupe déjà.\n\nVous pouvez suivre chaque étape en direct dans votre portail Wayne — agrément, fiche de bienvenue, brief, factures et livraison y sont réunis.\n\nNous revenons très vite vers vous avec la prochaine étape.\n\nBien à vous,\nL'équipe Wayne-Web",
			"fiche.title": "Fiche entreprise",
			"brief.title": "Brief du projet",
			"brief.submitted": "Validé le {date}",
			"brief.history": "Historique",
			"brief.attachments.title": "Pièces jointes",
			"brief.attachments.empty": "Aucun fichier n'a été joint.",
			"brief.attachments.open": "Ouvrir",
			"brief.eventSubmitted": "Validé",
			"brief.eventReopened": "Réouvert",
			"documents.title": "Documents",
			"documents.signed": "Agrément signé par {name} le {date}"
		},
		de: {
			"nav.link": "Super-Admin",
			title: "Super-Admin",
			subtitle: "Wayne Leitstand",
			backToPortal: "Zurück zum Portal",
			"list.title": "Alle Kundenkonten",
			"list.subtitle": "Jeder Verlauf, jedes Profil, jedes Angebot — auf einen Blick.",
			"list.empty": "Kein Konto entspricht diesem Filter.",
			"filter.all": "Alle",
			"filter.wayne": "Wartet auf uns",
			"filter.client": "Wartet auf den Kunden",
			"filter.brief": "Briefing eingereicht",
			"filter.offer": "Angebot zu senden",
			"filter.software": "Software",
			"filter.hardware": "Hardware",
			"filter.hybrid": "Hybrid",
			"filter.category": "Kategorie",
			"type.software": "Software",
			"type.hardware": "Hardware",
			"type.hybrid": "Software + Hardware",
			"row.phase": "Schritt",
			"row.waitingClient": "Wartet auf den Kunden",
			"row.waitingWayne": "Wartet auf uns",
			"row.fiche": "Profil",
			"row.briefDone": "Briefing bestätigt",
			"row.briefPending": "Briefing offen",
			"row.offerPublished": "Angebot gesendet",
			"row.offerDraft": "Angebotsentwurf",
			"row.offerNone": "Kein Angebot",
			"row.paid": "{paid} bezahlt von {total}",
			"row.open": "Akte öffnen",
			"detail.eyebrow": "Kundenakte",
			"detail.back": "Zurück zur Liste",
			"detail.notFound": "Dieses Projekt ist nicht verfügbar.",
			"view.eyebrow": "Kundenverlauf",
			"view.readOnly": "Nur-Lese-Ansicht",
			"action.advance": "Zum nächsten Schritt",
			"offer.title": "Angebot",
			"offer.hint": "Der Kunde sieht hier keinen Preis — nur Ihr Stripe-Checkout zeigt ihn.",
			"offer.field.title": "Für den Kunden sichtbarer Titel",
			"offer.field.titlePlaceholder": "Angebot",
			"offer.field.description": "Leistungsumfang",
			"offer.field.descriptionPlaceholder": "Beschreiben Sie die Leistung ohne Preisangabe.",
			"offer.field.stripe": "Stripe-Zahlungslink",
			"offer.save": "Als Entwurf speichern",
			"offer.publish": "Für den Kunden veröffentlichen",
			"offer.unpublish": "Vor dem Kunden verbergen",
			"offer.published": "Angebot veröffentlicht",
			"offer.saved": "Angebot gespeichert",
			"offer.error": "Angebot konnte nicht gespeichert werden",
			"invoices.title": "Rechnungen",
			"invoices.markPaid": "Als bezahlt markieren",
			"invoices.hint": "Betrag und Stripe-Link eintragen, dann veröffentlichen: der Kunde erhält die Rechnung.",
			"invoices.amount": "Betrag (EUR)",
			"invoices.link": "Stripe-Zahlungslink für diese Rechnung",
			"invoices.save": "Rechnung speichern",
			"invoices.saved": "Rechnung aktualisiert",
			"invoices.error": "Rechnung konnte nicht aktualisiert werden",
			"invoices.sent": "Zahlungslink an den Kunden gesendet",
			"notes.title": "Interne Notizen",
			"notes.hint": "Nur für das Wayne-Team — der Kunde sieht diese Notizen nie.",
			"notes.placeholder": "Gesprächsnotiz, nächster Schritt, interne Erinnerung...",
			"notes.add": "Notiz hinzufügen",
			"notes.empty": "Noch keine Notiz in dieser Akte.",
			"notes.delete": "Notiz löschen",
			"notes.saved": "Notiz hinzugefügt",
			"notes.error": "Notiz konnte nicht gespeichert werden",
			"message.title": "Nachricht an den Kunden",
			"message.hint": "Schreiben Sie eine schöne Nachricht: sie wird aus der App gesendet und unten protokolliert.",
			"message.error": "Die Nachricht konnte nicht gesendet werden",
			"message.suppressed": "Diese Adresse kann unsere E-Mails nicht mehr empfangen",
			"message.subject": "Betreff",
			"message.body": "Nachricht",
			"message.send": "An {email} senden",
			"message.sent": "Nachricht vorbereitet und protokolliert",
			"message.noEmail": "Für dieses Konto liegt noch keine E-Mail-Adresse vor.",
			"message.defaultSubject": "Ihr Projekt {project} — wir haben Ihre Anfrage erhalten",
			"message.defaultBody": "Hallo {name},\n\nvielen Dank für Ihr Vertrauen: Wir haben Ihre Anfrage zu {project} erhalten und unser Team ist schon dran.\n\nJeden Schritt verfolgen Sie live in Ihrem Wayne-Portal — Vereinbarung, Willkommensprofil, Briefing, Rechnungen und Lieferung an einem Ort.\n\nWir melden uns in Kürze mit dem nächsten Schritt.\n\nHerzliche Grüße,\nIhr Wayne-Web Team",
			"fiche.title": "Unternehmensprofil",
			"brief.title": "Projekt-Briefing",
			"brief.submitted": "Bestätigt am {date}",
			"brief.history": "Verlauf",
			"brief.attachments.title": "Anhänge",
			"brief.attachments.empty": "Es wurden keine Dateien angehängt.",
			"brief.attachments.open": "Öffnen",
			"brief.eventSubmitted": "Bestätigt",
			"brief.eventReopened": "Wieder geöffnet",
			"documents.title": "Dokumente",
			"documents.signed": "Vereinbarung unterschrieben von {name} am {date}"
		},
		es: {
			"nav.link": "Súper admin",
			title: "Súper admin",
			subtitle: "Centro de control Wayne",
			backToPortal: "Volver al portal",
			"list.title": "Todas las cuentas de clientes",
			"list.subtitle": "Cada recorrido, cada ficha, cada propuesta — de un vistazo.",
			"list.empty": "Ninguna cuenta coincide con este filtro.",
			"filter.all": "Todas",
			"filter.wayne": "Esperando por nosotros",
			"filter.client": "Esperando al cliente",
			"filter.brief": "Brief enviado",
			"filter.offer": "Propuesta por enviar",
			"filter.software": "Software",
			"filter.hardware": "Hardware",
			"filter.hybrid": "Híbrido",
			"filter.category": "Categoría",
			"type.software": "Software",
			"type.hardware": "Hardware",
			"type.hybrid": "Software + Hardware",
			"row.phase": "Etapa",
			"row.waitingClient": "Esperando al cliente",
			"row.waitingWayne": "Esperando por nosotros",
			"row.fiche": "Ficha",
			"row.briefDone": "Brief validado",
			"row.briefPending": "Brief pendiente",
			"row.offerPublished": "Propuesta enviada",
			"row.offerDraft": "Propuesta en borrador",
			"row.offerNone": "Sin propuesta",
			"row.paid": "{paid} pagados de {total}",
			"row.open": "Abrir la ficha",
			"detail.eyebrow": "Ficha del cliente",
			"detail.back": "Volver a la lista",
			"detail.notFound": "Este proyecto no está disponible.",
			"view.eyebrow": "Recorrido del cliente",
			"view.readOnly": "Vista de solo lectura",
			"action.advance": "Pasar a la siguiente etapa",
			"offer.title": "Propuesta",
			"offer.hint": "El cliente no ve ningún precio aquí — solo tu checkout de Stripe.",
			"offer.field.title": "Título visible para el cliente",
			"offer.field.titlePlaceholder": "Propuesta",
			"offer.field.description": "Alcance / qué incluye",
			"offer.field.descriptionPlaceholder": "Describe lo que recibe el cliente, sin precio.",
			"offer.field.stripe": "Enlace de pago de Stripe",
			"offer.save": "Guardar como borrador",
			"offer.publish": "Publicar para el cliente",
			"offer.unpublish": "Ocultar al cliente",
			"offer.published": "Propuesta publicada",
			"offer.saved": "Propuesta guardada",
			"offer.error": "No se pudo guardar la propuesta",
			"invoices.title": "Facturas",
			"invoices.markPaid": "Marcar como pagada",
			"invoices.hint": "Indica el importe y el enlace de Stripe, luego publica: el cliente recibe la factura a pagar.",
			"invoices.amount": "Importe (EUR)",
			"invoices.link": "Enlace de pago Stripe para esta factura",
			"invoices.save": "Guardar la factura",
			"invoices.saved": "Factura actualizada",
			"invoices.error": "No se pudo actualizar la factura",
			"invoices.sent": "Enlace de pago enviado al cliente",
			"notes.title": "Notas internas",
			"notes.hint": "Privado para el equipo Wayne — el cliente nunca ve estas notas.",
			"notes.placeholder": "Resumen de llamada, próxima acción, recordatorio interno...",
			"notes.add": "Añadir la nota",
			"notes.empty": "Todavía no hay notas en esta ficha.",
			"notes.delete": "Eliminar la nota",
			"notes.saved": "Nota añadida",
			"notes.error": "No se pudo guardar la nota",
			"message.title": "Mensaje al cliente",
			"message.hint": "Escribe un mensaje cuidado: se envía desde la app y queda registrado abajo.",
			"message.error": "No se pudo enviar el mensaje",
			"message.suppressed": "Esta dirección ya no puede recibir nuestros correos",
			"message.subject": "Asunto",
			"message.body": "Mensaje",
			"message.send": "Enviar a {email}",
			"message.sent": "Mensaje preparado y registrado",
			"message.noEmail": "Esta cuenta aún no tiene dirección de correo.",
			"message.defaultSubject": "Tu proyecto {project} — hemos recibido tu solicitud",
			"message.defaultBody": "Hola {name}:\n\nGracias por tu confianza: hemos recibido tu solicitud de {project} y nuestro equipo ya está en ello.\n\nPuedes seguir cada etapa en directo en tu portal Wayne — acuerdo, ficha de bienvenida, brief, facturas y entrega, todo en un mismo lugar.\n\nVolvemos contigo muy pronto con el siguiente paso.\n\nUn saludo,\nEl equipo Wayne-Web",
			"fiche.title": "Ficha de empresa",
			"brief.title": "Brief del proyecto",
			"brief.submitted": "Validado el {date}",
			"brief.history": "Historial",
			"brief.attachments.title": "Archivos adjuntos",
			"brief.attachments.empty": "No se adjuntó ningún archivo.",
			"brief.attachments.open": "Abrir",
			"brief.eventSubmitted": "Validado",
			"brief.eventReopened": "Reabierto",
			"documents.title": "Documentos",
			"documents.signed": "Acuerdo firmado por {name} el {date}"
		},
		ru: {
			"nav.link": "Супер-админ",
			title: "Супер-админ",
			subtitle: "Центр управления Wayne",
			backToPortal: "Вернуться в портал",
			"list.title": "Все клиентские аккаунты",
			"list.subtitle": "Каждый путь, каждая карточка, каждое предложение — на одном экране.",
			"list.empty": "Нет аккаунтов по этому фильтру.",
			"filter.all": "Все",
			"filter.wayne": "Ждут нас",
			"filter.client": "Ждём клиента",
			"filter.brief": "Бриф отправлен",
			"filter.offer": "Нужно отправить предложение",
			"filter.software": "Software",
			"filter.hardware": "Hardware",
			"filter.hybrid": "Гибрид",
			"filter.category": "Категория",
			"type.software": "Software",
			"type.hardware": "Hardware",
			"type.hybrid": "Software + Hardware",
			"row.phase": "Этап",
			"row.waitingClient": "Ждём клиента",
			"row.waitingWayne": "Ждут нас",
			"row.fiche": "Карточка",
			"row.briefDone": "Бриф подтверждён",
			"row.briefPending": "Бриф не заполнен",
			"row.offerPublished": "Предложение отправлено",
			"row.offerDraft": "Черновик предложения",
			"row.offerNone": "Предложения нет",
			"row.paid": "Оплачено {paid} из {total}",
			"row.open": "Открыть карточку",
			"detail.eyebrow": "Карточка клиента",
			"detail.back": "Назад к списку",
			"detail.notFound": "Этот проект недоступен.",
			"view.eyebrow": "Путь клиента",
			"view.readOnly": "Только просмотр",
			"action.advance": "Перейти к следующему этапу",
			"offer.title": "Предложение",
			"offer.hint": "Клиент не видит здесь цену — она только на странице оплаты Stripe.",
			"offer.field.title": "Заголовок для клиента",
			"offer.field.titlePlaceholder": "Предложение",
			"offer.field.description": "Объём работ / что входит",
			"offer.field.descriptionPlaceholder": "Опишите, что получает клиент, без цены.",
			"offer.field.stripe": "Ссылка на оплату Stripe",
			"offer.save": "Сохранить черновик",
			"offer.publish": "Опубликовать клиенту",
			"offer.unpublish": "Скрыть от клиента",
			"offer.published": "Предложение опубликовано",
			"offer.saved": "Предложение сохранено",
			"offer.error": "Не удалось сохранить предложение",
			"invoices.title": "Счета",
			"invoices.markPaid": "Отметить оплаченным",
			"invoices.hint": "Укажите сумму и ссылку Stripe, затем опубликуйте: клиент получит счёт к оплате.",
			"invoices.amount": "Сумма (EUR)",
			"invoices.link": "Ссылка Stripe для оплаты этого счёта",
			"invoices.save": "Сохранить счёт",
			"invoices.saved": "Счёт обновлён",
			"invoices.error": "Не удалось обновить счёт",
			"invoices.sent": "Ссылка на оплату отправлена клиенту",
			"notes.title": "Внутренние заметки",
			"notes.hint": "Только для команды Wayne — клиент этих заметок не видит.",
			"notes.placeholder": "Итог звонка, следующее действие, внутреннее напоминание...",
			"notes.add": "Добавить заметку",
			"notes.empty": "В этой карточке пока нет заметок.",
			"notes.delete": "Удалить заметку",
			"notes.saved": "Заметка добавлена",
			"notes.error": "Не удалось сохранить заметку",
			"message.title": "Сообщение клиенту",
			"message.hint": "Напишите красивое письмо: оно отправляется из приложения и сохраняется в истории ниже.",
			"message.error": "Не удалось отправить письмо",
			"message.suppressed": "Этот адрес больше не может получать наши письма",
			"message.subject": "Тема",
			"message.body": "Сообщение",
			"message.send": "Отправить на {email}",
			"message.sent": "Письмо подготовлено и записано",
			"message.noEmail": "У этого аккаунта пока нет email.",
			"message.defaultSubject": "Ваш проект {project} — мы получили заявку",
			"message.defaultBody": "Здравствуйте, {name}!\n\nСпасибо за доверие: мы получили вашу заявку по проекту {project}, команда уже приступила к работе.\n\nВсе этапы видны в реальном времени в вашем портале Wayne — соглашение, карточка компании, бриф, счета и запуск собраны в одном месте.\n\nСкоро вернёмся с следующим шагом.\n\nС уважением,\nкоманда Wayne-Web",
			"fiche.title": "Карточка компании",
			"brief.title": "Бриф проекта",
			"brief.submitted": "Подтверждён {date}",
			"brief.history": "История",
			"brief.attachments.title": "Вложения",
			"brief.attachments.empty": "Файлы не были прикреплены.",
			"brief.attachments.open": "Открыть",
			"brief.eventSubmitted": "Подтверждён",
			"brief.eventReopened": "Открыт заново",
			"documents.title": "Документы",
			"documents.signed": "Соглашение подписано {name} — {date}"
		}
	};
}));
var agreement;
var init_agreement = __esmMin((() => {
	agreement = {
		en: {
			step: "Step 1",
			title: "Your agreement",
			subtitle: "Clear scope, clear price, no surprises. Nothing is charged at this step.",
			totalAmount: "{amount} total · {client}",
			defaultClient: "Your company",
			"terms.p1": "Wayne-Web will design and build the project described above, with an agreed number of revision rounds and a defined delivery window communicated in your roadmap.",
			"terms.p2": "A deposit reserves your production slot. The remaining balance is due on delivery. You own the final product and all delivered assets.",
			"terms.p3": "Either party can pause the project with written notice. Work completed remains payable.",
			signedBy: "Signed by {name}",
			signedThanks: "Thank you — we have everything we need.",
			"signature.label": "Type your full name to sign",
			"signature.placeholder": "Marc Dupont",
			"accept.label": "I have read and accept the terms of this agreement.",
			submit: "Sign and start my project",
			submitting: "Signing…",
			"error.default": "Could not sign the agreement",
			"celebration.title": "Agreement signed",
			"celebration.subtitle": "Your project is officially underway."
		},
		fr: {
			step: "Étape 1",
			title: "Votre accord",
			subtitle: "Un périmètre clair, un prix clair, aucune surprise. Rien n'est facturé à cette étape.",
			totalAmount: "{amount} au total · {client}",
			defaultClient: "Votre entreprise",
			"terms.p1": "Wayne-Web concevra et réalisera le projet décrit ci-dessus, avec un nombre convenu de cycles de révision et un délai de livraison défini communiqué dans votre feuille de route.",
			"terms.p2": "Un acompte réserve votre créneau de production. Le solde restant est dû à la livraison. Vous êtes propriétaire du produit final et de tous les livrables.",
			"terms.p3": "Chaque partie peut suspendre le projet avec préavis écrit. Le travail déjà réalisé reste dû.",
			signedBy: "Signé par {name}",
			signedThanks: "Merci — nous avons tout ce qu'il nous faut.",
			"signature.label": "Saisissez votre nom complet pour signer",
			"signature.placeholder": "Marc Dupont",
			"accept.label": "J'ai lu et j'accepte les termes de cet accord.",
			submit: "Signer et démarrer mon projet",
			submitting: "Signature en cours…",
			"error.default": "Impossible de signer l'accord",
			"celebration.title": "Accord signé",
			"celebration.subtitle": "Votre projet démarre officiellement."
		},
		de: {
			step: "Schritt 1",
			title: "Ihre Vereinbarung",
			subtitle: "Klarer Umfang, klarer Preis, keine Überraschungen. In diesem Schritt wird nichts berechnet.",
			totalAmount: "{amount} insgesamt · {client}",
			defaultClient: "Ihr Unternehmen",
			"terms.p1": "Wayne-Web wird das oben beschriebene Projekt entwerfen und umsetzen, mit einer vereinbarten Anzahl an Überarbeitungsrunden und einem in Ihrer Roadmap festgelegten Lieferfenster.",
			"terms.p2": "Eine Anzahlung reserviert Ihren Produktionsslot. Der Restbetrag ist bei Lieferung fällig. Sie besitzen das Endprodukt und alle gelieferten Assets.",
			"terms.p3": "Jede Partei kann das Projekt mit schriftlicher Mitteilung pausieren. Bereits geleistete Arbeit bleibt zahlbar.",
			signedBy: "Unterschrieben von {name}",
			signedThanks: "Vielen Dank — wir haben alles, was wir brauchen.",
			"signature.label": "Geben Sie Ihren vollständigen Namen ein, um zu unterschreiben",
			"signature.placeholder": "Marc Dupont",
			"accept.label": "Ich habe die Bedingungen dieser Vereinbarung gelesen und akzeptiere sie.",
			submit: "Unterschreiben und mein Projekt starten",
			submitting: "Wird unterschrieben…",
			"error.default": "Die Vereinbarung konnte nicht unterschrieben werden",
			"celebration.title": "Vereinbarung unterschrieben",
			"celebration.subtitle": "Ihr Projekt ist offiziell gestartet."
		},
		es: {
			step: "Paso 1",
			title: "Tu acuerdo",
			subtitle: "Alcance claro, precio claro, sin sorpresas. En este paso no se cobra nada.",
			totalAmount: "{amount} en total · {client}",
			defaultClient: "Tu empresa",
			"terms.p1": "Wayne-Web diseñará y construirá el proyecto descrito anteriormente, con un número acordado de rondas de revisión y una ventana de entrega definida comunicada en tu hoja de ruta.",
			"terms.p2": "Un depósito reserva tu espacio de producción. El saldo restante se paga en la entrega. Eres propietario del producto final y de todos los archivos entregados.",
			"terms.p3": "Cualquiera de las partes puede pausar el proyecto con aviso por escrito. El trabajo realizado sigue siendo pagadero.",
			signedBy: "Firmado por {name}",
			signedThanks: "Gracias — tenemos todo lo que necesitamos.",
			"signature.label": "Escribe tu nombre completo para firmar",
			"signature.placeholder": "Marc Dupont",
			"accept.label": "He leído y acepto los términos de este acuerdo.",
			submit: "Firmar e iniciar mi proyecto",
			submitting: "Firmando…",
			"error.default": "No se pudo firmar el acuerdo",
			"celebration.title": "Acuerdo firmado",
			"celebration.subtitle": "Tu proyecto está oficialmente en marcha."
		},
		ru: {
			step: "Шаг 1",
			title: "Ваше соглашение",
			subtitle: "Понятный объём работ, понятная цена, никаких сюрпризов. На этом этапе оплата не взимается.",
			totalAmount: "{amount} всего · {client}",
			defaultClient: "Ваша компания",
			"terms.p1": "Wayne-Web разработает и реализует описанный выше проект с согласованным числом раундов правок и сроком поставки, указанным в вашей дорожной карте.",
			"terms.p2": "Депозит бронирует ваш производственный слот. Оставшаяся сумма оплачивается при сдаче. Вы становитесь владельцем конечного продукта и всех переданных материалов.",
			"terms.p3": "Любая сторона может приостановить проект, письменно уведомив об этом. Выполненная работа подлежит оплате.",
			signedBy: "Подписано {name}",
			signedThanks: "Спасибо — у нас есть всё необходимое.",
			"signature.label": "Введите своё полное имя, чтобы подписать",
			"signature.placeholder": "Marc Dupont",
			"accept.label": "Я прочитал(а) и принимаю условия этого соглашения.",
			submit: "Подписать и начать мой проект",
			submitting: "Подписание…",
			"error.default": "Не удалось подписать соглашение",
			"celebration.title": "Соглашение подписано",
			"celebration.subtitle": "Ваш проект официально начат."
		}
	};
}));
var auth;
var init_auth$2 = __esmMin((() => {
	auth = {
		en: {
			"title.signup": "Create your space",
			"title.signin": "Welcome back",
			"subtitle.signup": "Your project journey starts here.",
			"subtitle.signin": "Pick up exactly where you left off.",
			"field.fullName": "Full name",
			"field.fullName.placeholder": "Marc Dupont",
			"field.company": "Company",
			"field.company.placeholder": "Studio Marc",
			"field.email": "Email",
			"field.email.placeholder": "you@company.com",
			"field.password": "Password",
			"submit.loading": "Please wait…",
			"submit.signup": "Create my space",
			"submit.signin": "Sign in",
			"switch.toSignin": "Already have an account?",
			"switch.toSignup": "First time here?",
			"switch.signinAction": "Sign in",
			"switch.signupAction": "Create your space",
			"toast.accountCreated": "Account created. Check your email to confirm, then sign in.",
			"toast.error": "Something went wrong"
		},
		fr: {
			"title.signup": "Créez votre espace",
			"title.signin": "Content de vous revoir",
			"subtitle.signup": "Le voyage de votre projet commence ici.",
			"subtitle.signin": "Reprenez exactement là où vous vous étiez arrêté.",
			"field.fullName": "Nom complet",
			"field.fullName.placeholder": "Marc Dupont",
			"field.company": "Entreprise",
			"field.company.placeholder": "Studio Marc",
			"field.email": "E-mail",
			"field.email.placeholder": "vous@entreprise.com",
			"field.password": "Mot de passe",
			"submit.loading": "Veuillez patienter…",
			"submit.signup": "Créer mon espace",
			"submit.signin": "Se connecter",
			"switch.toSignin": "Vous avez déjà un compte ?",
			"switch.toSignup": "Première visite ?",
			"switch.signinAction": "Se connecter",
			"switch.signupAction": "Créer votre espace",
			"toast.accountCreated": "Compte créé. Vérifiez votre e-mail pour confirmer, puis connectez-vous.",
			"toast.error": "Une erreur est survenue"
		},
		de: {
			"title.signup": "Erstellen Sie Ihren Bereich",
			"title.signin": "Willkommen zurück",
			"subtitle.signup": "Ihre Projektreise beginnt hier.",
			"subtitle.signin": "Machen Sie genau dort weiter, wo Sie aufgehört haben.",
			"field.fullName": "Vollständiger Name",
			"field.fullName.placeholder": "Marc Dupont",
			"field.company": "Unternehmen",
			"field.company.placeholder": "Studio Marc",
			"field.email": "E-Mail",
			"field.email.placeholder": "sie@unternehmen.com",
			"field.password": "Passwort",
			"submit.loading": "Bitte warten…",
			"submit.signup": "Meinen Bereich erstellen",
			"submit.signin": "Anmelden",
			"switch.toSignin": "Haben Sie bereits ein Konto?",
			"switch.toSignup": "Zum ersten Mal hier?",
			"switch.signinAction": "Anmelden",
			"switch.signupAction": "Ihren Bereich erstellen",
			"toast.accountCreated": "Konto erstellt. Prüfen Sie Ihre E-Mails zur Bestätigung und melden Sie sich dann an.",
			"toast.error": "Etwas ist schiefgelaufen"
		},
		es: {
			"title.signup": "Crea tu espacio",
			"title.signin": "Bienvenido de nuevo",
			"subtitle.signup": "El viaje de tu proyecto comienza aquí.",
			"subtitle.signin": "Continúa exactamente donde lo dejaste.",
			"field.fullName": "Nombre completo",
			"field.fullName.placeholder": "Marc Dupont",
			"field.company": "Empresa",
			"field.company.placeholder": "Studio Marc",
			"field.email": "Correo electrónico",
			"field.email.placeholder": "tu@empresa.com",
			"field.password": "Contraseña",
			"submit.loading": "Espera, por favor…",
			"submit.signup": "Crear mi espacio",
			"submit.signin": "Iniciar sesión",
			"switch.toSignin": "¿Ya tienes una cuenta?",
			"switch.toSignup": "¿Primera vez aquí?",
			"switch.signinAction": "Iniciar sesión",
			"switch.signupAction": "Crea tu espacio",
			"toast.accountCreated": "Cuenta creada. Revisa tu correo para confirmar y luego inicia sesión.",
			"toast.error": "Algo salió mal"
		},
		ru: {
			"title.signup": "Создайте своё пространство",
			"title.signin": "С возвращением",
			"subtitle.signup": "Здесь начинается путь вашего проекта.",
			"subtitle.signin": "Продолжите ровно с того места, где остановились.",
			"field.fullName": "Полное имя",
			"field.fullName.placeholder": "Марк Дюпон",
			"field.company": "Компания",
			"field.company.placeholder": "Studio Marc",
			"field.email": "Эл. почта",
			"field.email.placeholder": "you@company.com",
			"field.password": "Пароль",
			"submit.loading": "Пожалуйста, подождите…",
			"submit.signup": "Создать пространство",
			"submit.signin": "Войти",
			"switch.toSignin": "Уже есть аккаунт?",
			"switch.toSignup": "Впервые здесь?",
			"switch.signinAction": "Войти",
			"switch.signupAction": "Создать своё пространство",
			"toast.accountCreated": "Аккаунт создан. Проверьте почту для подтверждения, затем войдите.",
			"toast.error": "Что-то пошло не так"
		}
	};
}));
var billing;
var init_billing = __esmMin((() => {
	billing = {
		en: {
			"offer.eyebrow": "Proposal",
			"offer.title": "Your proposal is ready",
			"offer.cta": "Open secure payment",
			"offer.linkSoon": "The payment link is being finalised.",
			"offer.note": "You are redirected to our secure Stripe checkout — the amount is shown there.",
			"offer.waiting.title": "No proposal yet",
			"offer.waiting.body": "Once we have reviewed your brief, your proposal and its secure payment link appear here.",
			"invoice.awaitingOffer": "Available once your proposal is sent",
			"invoice.deposit": "Deposit — 1/2",
			"invoice.view": "View invoice",
			"invoice.statusPaid": "Paid",
			"invoice.statusUnpaid": "Awaiting payment",
			"detail.eyebrow": "Invoice",
			"detail.subtitle": "Everything about this payment, in one place.",
			"detail.summary": "Summary",
			"detail.reference": "Reference",
			"detail.billedTo": "Billed to",
			"detail.issuer": "Issued by",
			"detail.project": "Project",
			"detail.package": "Package",
			"detail.amount": "Amount",
			"detail.total": "Total due",
			"detail.dueDate": "Due date",
			"detail.paidDate": "Payment date",
			"detail.download": "Download the PDF",
			"detail.back": "Back to billing",
			"detail.notFound": "This invoice is not available.",
			"detail.paidNote": "Paid in full — thank you. Nothing else is needed on your side.",
			"detail.unpaidNote": "Pay this invoice to unlock the next step of your project.",
			"detail.printedOn": "Document generated on {date}",
			"invoice.balance": "Final balance — 2/2",
			title: "Billing",
			subtitle: "Transparent by design: you always see what's paid and what's left.",
			paidSoFar: "Paid so far",
			ofTotal: "of {total} total",
			paidOn: "Paid {date}",
			dueOn: "Due {date}",
			securityNote: "Payments are processed securely. Card details never touch our servers."
		},
		fr: {
			"offer.eyebrow": "Proposition",
			"offer.title": "Votre proposition est prête",
			"offer.cta": "Ouvrir le paiement sécurisé",
			"offer.linkSoon": "Le lien de paiement est en cours de finalisation.",
			"offer.note": "Vous êtes redirigé vers notre paiement sécurisé Stripe — le montant y est affiché.",
			"offer.waiting.title": "Aucune proposition pour le moment",
			"offer.waiting.body": "Dès que nous aurons étudié votre brief, votre proposition et son lien de paiement sécurisé apparaîtront ici.",
			"invoice.awaitingOffer": "Disponible dès l’envoi de votre proposition",
			"invoice.deposit": "Acompte — 1/2",
			"invoice.view": "Voir la facture",
			"invoice.statusPaid": "Payée",
			"invoice.statusUnpaid": "En attente de paiement",
			"detail.eyebrow": "Facture",
			"detail.subtitle": "Tout sur ce paiement, au même endroit.",
			"detail.summary": "Récapitulatif",
			"detail.reference": "Référence",
			"detail.billedTo": "Facturé à",
			"detail.issuer": "Émise par",
			"detail.project": "Projet",
			"detail.package": "Formule",
			"detail.amount": "Montant",
			"detail.total": "Total à payer",
			"detail.dueDate": "Échéance",
			"detail.paidDate": "Date de paiement",
			"detail.download": "Télécharger le PDF",
			"detail.back": "Retour à la facturation",
			"detail.notFound": "Cette facture n'est pas disponible.",
			"detail.paidNote": "Payée intégralement — merci. Rien d'autre à faire de votre côté.",
			"detail.unpaidNote": "Réglez cette facture pour débloquer la prochaine étape de votre projet.",
			"detail.printedOn": "Document généré le {date}",
			"invoice.balance": "Solde final — 2/2",
			title: "Facturation",
			subtitle: "Transparence totale : vous voyez toujours ce qui est payé et ce qu'il reste.",
			paidSoFar: "Payé à ce jour",
			ofTotal: "sur {total} au total",
			paidOn: "Payée le {date}",
			dueOn: "Échéance le {date}",
			securityNote: "Les paiements sont traités en toute sécurité. Vos coordonnées bancaires ne transitent jamais par nos serveurs."
		},
		de: {
			"offer.eyebrow": "Angebot",
			"offer.title": "Ihr Angebot ist bereit",
			"offer.cta": "Sichere Zahlung öffnen",
			"offer.linkSoon": "Der Zahlungslink wird noch fertiggestellt.",
			"offer.note": "Sie werden zu unserer sicheren Stripe-Zahlung weitergeleitet — der Betrag wird dort angezeigt.",
			"offer.waiting.title": "Noch kein Angebot",
			"offer.waiting.body": "Sobald wir Ihr Briefing geprüft haben, erscheinen hier Ihr Angebot und der sichere Zahlungslink.",
			"invoice.awaitingOffer": "Verfügbar, sobald Ihr Angebot gesendet ist",
			"invoice.deposit": "Anzahlung — 1/2",
			"invoice.view": "Rechnung ansehen",
			"invoice.statusPaid": "Bezahlt",
			"invoice.statusUnpaid": "Zahlung ausstehend",
			"detail.eyebrow": "Rechnung",
			"detail.subtitle": "Alles zu dieser Zahlung an einem Ort.",
			"detail.summary": "Übersicht",
			"detail.reference": "Referenz",
			"detail.billedTo": "Rechnung an",
			"detail.issuer": "Ausgestellt von",
			"detail.project": "Projekt",
			"detail.package": "Paket",
			"detail.amount": "Betrag",
			"detail.total": "Gesamtbetrag",
			"detail.dueDate": "Fälligkeit",
			"detail.paidDate": "Zahlungsdatum",
			"detail.download": "PDF herunterladen",
			"detail.back": "Zurück zur Abrechnung",
			"detail.notFound": "Diese Rechnung ist nicht verfügbar.",
			"detail.paidNote": "Vollständig bezahlt — vielen Dank. Von Ihrer Seite ist nichts weiter nötig.",
			"detail.unpaidNote": "Bezahlen Sie diese Rechnung, um den nächsten Projektschritt freizuschalten.",
			"detail.printedOn": "Dokument erstellt am {date}",
			"invoice.balance": "Restbetrag — 2/2",
			title: "Abrechnung",
			subtitle: "Von Natur aus transparent: Sie sehen jederzeit, was bezahlt ist und was noch aussteht.",
			paidSoFar: "Bisher bezahlt",
			ofTotal: "von {total} insgesamt",
			paidOn: "Bezahlt am {date}",
			dueOn: "Fällig am {date}",
			securityNote: "Zahlungen werden sicher verarbeitet. Kartendaten erreichen unsere Server nie."
		},
		es: {
			"offer.eyebrow": "Propuesta",
			"offer.title": "Tu propuesta está lista",
			"offer.cta": "Abrir el pago seguro",
			"offer.linkSoon": "El enlace de pago se está finalizando.",
			"offer.note": "Te redirigimos a nuestro pago seguro con Stripe — el importe se muestra allí.",
			"offer.waiting.title": "Aún no hay propuesta",
			"offer.waiting.body": "En cuanto revisemos tu brief, aquí aparecerán tu propuesta y su enlace de pago seguro.",
			"invoice.awaitingOffer": "Disponible cuando se envíe tu propuesta",
			"invoice.deposit": "Anticipo — 1/2",
			"invoice.view": "Ver la factura",
			"invoice.statusPaid": "Pagada",
			"invoice.statusUnpaid": "Pendiente de pago",
			"detail.eyebrow": "Factura",
			"detail.subtitle": "Todo sobre este pago, en un solo lugar.",
			"detail.summary": "Resumen",
			"detail.reference": "Referencia",
			"detail.billedTo": "Facturado a",
			"detail.issuer": "Emitida por",
			"detail.project": "Proyecto",
			"detail.package": "Paquete",
			"detail.amount": "Importe",
			"detail.total": "Total a pagar",
			"detail.dueDate": "Vencimiento",
			"detail.paidDate": "Fecha de pago",
			"detail.download": "Descargar el PDF",
			"detail.back": "Volver a facturación",
			"detail.notFound": "Esta factura no está disponible.",
			"detail.paidNote": "Pagada por completo — gracias. No necesitas hacer nada más.",
			"detail.unpaidNote": "Paga esta factura para desbloquear la siguiente etapa de tu proyecto.",
			"detail.printedOn": "Documento generado el {date}",
			"invoice.balance": "Saldo final — 2/2",
			title: "Facturación",
			subtitle: "Transparencia por diseño: siempre ves lo que está pagado y lo que queda.",
			paidSoFar: "Pagado hasta ahora",
			ofTotal: "de {total} en total",
			paidOn: "Pagada el {date}",
			dueOn: "Vence el {date}",
			securityNote: "Los pagos se procesan de forma segura. Los datos de tu tarjeta nunca pasan por nuestros servidores."
		},
		ru: {
			"offer.eyebrow": "Предложение",
			"offer.title": "Ваше предложение готово",
			"offer.cta": "Открыть безопасную оплату",
			"offer.linkSoon": "Ссылка на оплату готовится.",
			"offer.note": "Вы перейдёте на безопасную оплату Stripe — сумма указана там.",
			"offer.waiting.title": "Предложения пока нет",
			"offer.waiting.body": "Как только мы изучим ваш бриф, здесь появится предложение и ссылка на безопасную оплату.",
			"invoice.awaitingOffer": "Появится после отправки предложения",
			"invoice.deposit": "Аванс — 1/2",
			"invoice.view": "Открыть счёт",
			"invoice.statusPaid": "Оплачен",
			"invoice.statusUnpaid": "Ожидает оплаты",
			"detail.eyebrow": "Счёт",
			"detail.subtitle": "Всё об этом платеже в одном месте.",
			"detail.summary": "Сводка",
			"detail.reference": "Номер",
			"detail.billedTo": "Плательщик",
			"detail.issuer": "Выставил",
			"detail.project": "Проект",
			"detail.package": "Пакет",
			"detail.amount": "Сумма",
			"detail.total": "Итого к оплате",
			"detail.dueDate": "Срок оплаты",
			"detail.paidDate": "Дата оплаты",
			"detail.download": "Скачать PDF",
			"detail.back": "Назад к оплате",
			"detail.notFound": "Этот счёт недоступен.",
			"detail.paidNote": "Оплачен полностью — спасибо. С вашей стороны больше ничего не требуется.",
			"detail.unpaidNote": "Оплатите счёт, чтобы открыть следующий этап проекта.",
			"detail.printedOn": "Документ создан {date}",
			"invoice.balance": "Итоговый остаток — 2/2",
			title: "Оплата",
			subtitle: "Прозрачность по умолчанию: вы всегда видите, что оплачено, а что осталось.",
			paidSoFar: "Оплачено на сегодня",
			ofTotal: "из {total} всего",
			paidOn: "Оплачено {date}",
			dueOn: "Срок оплаты {date}",
			securityNote: "Платежи обрабатываются безопасно. Данные карты никогда не попадают на наши серверы."
		}
	};
}));
var brief;
var init_brief = __esmMin((() => {
	brief = {
		en: {
			"section.type.title": "What are we building?",
			"section.ecommerce.title": "Your online store",
			"section.showcase.title": "Your showcase site",
			"section.app.title": "Your application",
			"section.maintenance.title": "Your maintenance need",
			"section.other.title": "Your project",
			"section.business.title": "Your business",
			"section.goals.title": "Your goals",
			"section.style.title": "Style & references",
			"section.content.title": "Content & practical",
			"section.recap.title": "Review and validate",
			"type.subtitle": "Pick the closest match — the next questions adapt to your answer.",
			"type.ecommerce.label": "E-commerce",
			"type.ecommerce.desc": "Sell products or services online, with payments and orders.",
			"type.showcase.label": "Showcase site",
			"type.showcase.desc": "Present your business, build trust, collect enquiries.",
			"type.app.label": "Application",
			"type.app.desc": "A tool or platform with accounts, data and custom features.",
			"type.maintenance.label": "Maintenance",
			"type.maintenance.desc": "Keep an existing site or app healthy, fast and up to date.",
			"type.other.label": "Something else",
			"type.other.desc": "Describe it in your own words — we'll shape it together.",
			"type.required": "Choose a project type to continue.",
			"section.kind.title": "What are we building?",
			"section.software_categories.title": "Your software categories",
			"section.hardware_categories.title": "Your hardware categories",
			"section.hardware_fields.title": "Your hardware project",
			"section.unsure.title": "Tell us about your idea",
			"kind.subtitle": "Choose the project type — the next questions adapt to your choice.",
			"kind.software.label": "Software",
			"kind.software.desc": "Digital development, software and digital solutions.",
			"kind.hardware.label": "Hardware",
			"kind.hardware.desc": "Robotics, electronics, machines, equipment and physical solutions.",
			"kind.hybrid.label": "Software + Hardware",
			"kind.hybrid.desc": "A hybrid project combining hardware and software.",
			"kind.unsure.label": "I'm not sure which technology to use",
			"kind.unsure.desc": "Just describe your idea or problem — we'll qualify the project together.",
			"kind.required": "Choose a project type to continue.",
			"category.subtitle": "Select one or more categories — you can pick several.",
			"category.required": "Select at least one category to continue.",
			"category.app_web.label": "Web application",
			"category.app_mobile.label": "Mobile application",
			"category.saas.label": "SaaS",
			"category.logiciel_metier.label": "Business software",
			"category.ia.label": "Artificial intelligence",
			"category.automatisation.label": "Automation",
			"category.api_integration.label": "API / integration",
			"category.dashboard.label": "Dashboard",
			"category.base_donnees.label": "Database",
			"category.infra_cloud.label": "Infrastructure / Cloud",
			"category.cybersecurite.label": "Cybersecurity",
			"category.iot_logiciel_embarque.label": "IoT / embedded software",
			"hwgroup.robotique.label": "Robotics",
			"hwgroup.domotique_iot.label": "Home automation & IoT",
			"hwgroup.electronique.label": "Electronics",
			"hwgroup.machines_industrie.label": "Machines & industry",
			"hwgroup.construction_chantier.label": "Construction & job sites",
			"hwgroup.prototypage_fabrication.label": "Prototyping & manufacturing",
			"hwgroup.autre_hardware.label": "Other",
			"category.bras_robotique.label": "Robotic arm",
			"category.robot_industriel.label": "Industrial robot",
			"category.robot_mobile.label": "Mobile robot",
			"category.robot_autonome.label": "Autonomous robot",
			"category.robot_manutention.label": "Handling robot",
			"category.cobot.label": "Collaborative robot / cobot",
			"category.robot_sur_mesure.label": "Custom robot",
			"category.prototype_robotique.label": "Robotics prototype",
			"category.maison_connectee.label": "Connected home",
			"category.batiment_connecte.label": "Connected building",
			"category.capteurs_domotique.label": "Sensors",
			"category.controle_acces.label": "Access control",
			"category.automatisation_domotique.label": "Automation",
			"category.monitoring.label": "Monitoring",
			"category.systemes_iot.label": "IoT systems",
			"category.gestion_energetique.label": "Energy management",
			"category.carte_electronique.label": "Electronic board",
			"category.pcb.label": "PCB",
			"category.microcontroleur.label": "Microcontroller",
			"category.esp32_arduino_stm32.label": "ESP32 / Arduino / STM32",
			"category.systeme_embarque.label": "Embedded system",
			"category.capteurs_electronique.label": "Sensors",
			"category.prototype_electronique.label": "Electronics prototype",
			"category.objet_connecte.label": "Connected device",
			"category.machine_industrielle.label": "Industrial machine",
			"category.machine_automatisee.label": "Automated machine",
			"category.ligne_production.label": "Production line",
			"category.convoyeur.label": "Conveyor",
			"category.systeme_manutention.label": "Handling system",
			"category.machine_cnc.label": "CNC machine",
			"category.equipement_industriel.label": "Industrial equipment",
			"category.automatisation_industrielle.label": "Industrial automation",
			"category.gros_outils_chantier.label": "Heavy job-site tools",
			"category.machines_chantier.label": "Job-site machinery",
			"category.equipements_professionnels.label": "Professional equipment",
			"category.outillage_specialise.label": "Specialized tooling",
			"category.systemes_automatises_chantier.label": "Automated systems",
			"category.solutions_levage.label": "Lifting solutions",
			"category.solutions_manutention_chantier.label": "Handling solutions",
			"category.equipements_sur_mesure.label": "Custom equipment",
			"category.prototype_fonctionnel.label": "Functional prototype",
			"category.impression_3d.label": "3D printing",
			"category.usinage.label": "Machining",
			"category.pieces_mecaniques.label": "Mechanical parts",
			"category.assemblage.label": "Assembly",
			"category.boitier_chassis.label": "Enclosure / chassis",
			"category.petite_serie.label": "Small batch",
			"category.industrialisation.label": "Industrialization",
			"category.projet_hardware_sur_mesure.label": "Custom hardware project",
			"category.ne_sait_pas_categorie.label": "I don't know which category to pick",
			"field.hw_description.label": "Describe what you want to build",
			"field.hw_description.hint": "Example: We want to build a robotic arm able to automatically move parts between two production stations.",
			"field.hw_objectif.label": "What problem do you want to solve?",
			"field.hw_objectif.hint": "The main goal of this project.",
			"field.hw_environnement.label": "Environment",
			"field.hw_environnement.option.interieur": "Indoor",
			"field.hw_environnement.option.exterieur": "Outdoor",
			"field.hw_environnement.option.industriel": "Industrial",
			"field.hw_environnement.option.chantier": "Job site",
			"field.hw_environnement.option.bureau": "Office",
			"field.hw_environnement.option.commerce": "Retail",
			"field.hw_environnement.option.entrepot": "Warehouse",
			"field.hw_environnement.option.maison": "Home",
			"field.hw_environnement.option.autre": "Other",
			"field.hw_etat_projet.label": "Project stage",
			"field.hw_etat_projet.option.idee": "Just an idea",
			"field.hw_etat_projet.option.cahier_des_charges": "Existing specification",
			"field.hw_etat_projet.option.prototype_existant": "Existing prototype",
			"field.hw_etat_projet.option.produit_a_ameliorer": "Existing product to improve",
			"field.hw_etat_projet.option.produit_a_industrialiser": "Product to industrialize",
			"field.hw_etat_projet.option.besoin_fabrication": "Manufacturing need",
			"field.hw_quantite.label": "Quantity",
			"field.hw_quantite.option.1_prototype": "1 prototype",
			"field.hw_quantite.option.2_10": "2 to 10 units",
			"field.hw_quantite.option.10_100": "10 to 100 units",
			"field.hw_quantite.option.100_1000": "100 to 1,000 units",
			"field.hw_quantite.option.1000_plus": "1,000+ units",
			"field.hw_quantite.option.inconnu": "Not sure yet",
			"field.hw_budget.label": "Estimated budget",
			"field.hw_budget.option.moins_5k": "Under €5,000",
			"field.hw_budget.option.5k_15k": "€5,000 – €15,000",
			"field.hw_budget.option.15k_50k": "€15,000 – €50,000",
			"field.hw_budget.option.50k_150k": "€50,000 – €150,000",
			"field.hw_budget.option.plus_150k": "Over €150,000",
			"field.hw_budget.option.a_definir": "To be defined",
			"field.hw_delai.label": "Desired timeline",
			"field.hw_delai.hint": "A date or a rough timeframe.",
			"field.hw_attachments.label": "Documents",
			"field.hw_attachments.hint": "PDF, specifications, plans, photos, videos, diagrams, CAD/3D files, technical documentation.",
			"field.unsure_description.label": "Tell us about your idea or problem",
			"field.unsure_description.hint": "No technical terms required — just describe what you want to do.",
			"attachments.upload": "Drag files here or click to browse",
			"attachments.uploading": "Uploading…",
			"attachments.remove": "Remove",
			"attachments.empty": "No files added yet.",
			"attachments.tooLarge": "{name} exceeds the maximum allowed size (50MB).",
			"attachments.invalidType": "This file could not be uploaded.",
			"pdf.download": "Download the PDF",
			"pdf.title": "Project brief",
			"pdf.client": "Client",
			"pdf.project": "Project",
			"pdf.status": "Status",
			"pdf.status.submitted": "Validated",
			"pdf.status.draft": "Draft",
			"pdf.printedOn": "Document generated on {date}",
			"pdf.section.type": "Project type",
			"field.ecom_products.label": "What do you sell?",
			"field.ecom_products.hint": "Product families and roughly how many references.",
			"field.ecom_payments.label": "How should customers pay?",
			"field.ecom_payments.hint": "Card, bank transfer, instalments…",
			"field.ecom_shipping.label": "How do you deliver?",
			"field.ecom_shipping.hint": "Carriers, zones, pickup, digital delivery.",
			"field.ecom_stock.label": "Who manages stock and orders?",
			"field.ecom_stock.hint": "You, a team, an existing tool.",
			"field.ecom_migration.label": "Is there an existing store to migrate?",
			"field.ecom_migration.hint": "Platform, URL, what must be kept.",
			"field.show_pages.label": "Which pages do you need?",
			"field.show_pages.hint": "Home, services, about, blog, contact…",
			"field.show_contact.label": "How should visitors reach you?",
			"field.show_contact.hint": "Form, phone, booking, WhatsApp.",
			"field.show_seo.label": "Which searches should find you?",
			"field.show_seo.hint": "Two or three phrases your clients would type.",
			"field.show_existing.label": "Do you already have a site?",
			"field.show_existing.hint": "The address, and what you dislike about it.",
			"field.app_users.label": "Who will use the app?",
			"field.app_users.hint": "Roles: clients, staff, admins.",
			"field.app_features.label": "What must it do?",
			"field.app_features.hint": "List the essential actions, one per line.",
			"field.app_data.label": "What data does it handle?",
			"field.app_data.hint": "Accounts, bookings, documents, payments…",
			"field.app_integrations.label": "What must it connect to?",
			"field.app_integrations.hint": "Existing tools, APIs, accounting, CRM.",
			"field.maint_platform.label": "What are we maintaining?",
			"field.maint_platform.hint": "Technology and hosting, if you know them.",
			"field.maint_access.label": "Do you have the access?",
			"field.maint_access.hint": "Hosting, domain, admin, repository.",
			"field.maint_issues.label": "What is going wrong today?",
			"field.maint_issues.hint": "Bugs, slowness, security, outdated content.",
			"field.maint_level.label": "What level of care do you want?",
			"field.maint_level.hint": "Updates only, monthly care, on-call support.",
			"field.other_describe.label": "Tell us about your project",
			"field.other_describe.hint": "As much detail as you like — we read every word.",
			"field.business.label": "What does your business do?",
			"field.business.hint": "In one or two sentences.",
			"field.audience.label": "Who are your customers?",
			"field.audience.hint": "Who should feel at home on your site?",
			"field.goal.label": "What must this project achieve?",
			"field.goal.hint": "More leads, more bookings, more credibility…",
			"field.success.label": "How will you measure success?",
			"field.success.hint": "A number or a feeling — both are valid.",
			"field.style.label": "How should it feel?",
			"field.style.hint": "Premium, warm, technical, minimal…",
			"field.references.label": "Sites you admire",
			"field.references.hint": "Two or three links.",
			"field.content.label": "What content do you already have?",
			"field.content.hint": "Text, photos, logo, brand guide…",
			"field.deadline.label": "Any date to work towards?",
			"field.deadline.hint": "An event, a launch, a campaign.",
			"recap.subtitle": "Check your answers. Validate when it reflects your project.",
			"recap.projectType": "Project type",
			"recap.edit": "Edit this section",
			title: "Your brief",
			sectionProgress: "Step {current} of {total}",
			subtitle: "Save anytime — your answers are kept as you go.",
			"received.title": "Brief received — thank you.",
			"received.body": "Our team is turning your answers into a roadmap. You'll find your submitted brief in Documents.",
			"received.editable": "You can still adjust your brief until the deposit is paid.",
			"received.edit": "Reopen my brief",
			"locked.title": "Brief locked",
			"locked.body": "Your deposit is paid and production has started. Message us and we'll update it with you.",
			empty: "—",
			"history.title": "Brief history",
			"history.subtitle": "Every version you validated, and every time the brief was reopened.",
			"history.empty": "Nothing yet — your first validation will appear here.",
			"history.event.submitted": "Brief validated",
			"history.event.reopened": "Brief reopened for editing",
			"history.version": "Version {n}",
			"history.show": "See the answers",
			"history.hide": "Hide the answers",
			back: "Back",
			submit: "Validate my brief",
			continue: "Save and continue",
			"error.default": "Could not save your brief",
			"error.reopen": "Could not reopen your brief",
			"celebration.title": "Brief complete",
			"celebration.subtitle": "Wayne is taking it from here."
		},
		fr: {
			"section.type.title": "Que construisons-nous ?",
			"section.ecommerce.title": "Votre boutique en ligne",
			"section.showcase.title": "Votre site vitrine",
			"section.app.title": "Votre application",
			"section.maintenance.title": "Votre besoin de maintenance",
			"section.other.title": "Votre projet",
			"section.business.title": "Votre entreprise",
			"section.goals.title": "Vos objectifs",
			"section.style.title": "Style & références",
			"section.content.title": "Contenu & aspects pratiques",
			"section.recap.title": "Relire et valider",
			"type.subtitle": "Choisissez ce qui s'en rapproche le plus — les questions suivantes s'adaptent.",
			"type.ecommerce.label": "E-commerce",
			"type.ecommerce.desc": "Vendre des produits ou services en ligne, avec paiements et commandes.",
			"type.showcase.label": "Site vitrine",
			"type.showcase.desc": "Présenter votre activité, rassurer, recevoir des demandes.",
			"type.app.label": "Application",
			"type.app.desc": "Un outil ou une plateforme avec comptes, données et fonctions sur mesure.",
			"type.maintenance.label": "Maintenance",
			"type.maintenance.desc": "Garder un site ou une app existante saine, rapide et à jour.",
			"type.other.label": "Autre chose",
			"type.other.desc": "Décrivez-le avec vos mots — nous le cadrerons ensemble.",
			"type.required": "Choisissez un type de projet pour continuer.",
			"section.kind.title": "Que souhaitez-vous réaliser ?",
			"section.software_categories.title": "Vos catégories logicielles",
			"section.hardware_categories.title": "Vos catégories matérielles",
			"section.hardware_fields.title": "Votre projet Hardware",
			"section.unsure.title": "Parlez-nous de votre idée",
			"kind.subtitle": "Choisissez le type de projet — les questions suivantes s'adaptent à votre choix.",
			"kind.software.label": "Software",
			"kind.software.desc": "Développement numérique, logiciels et solutions digitales.",
			"kind.hardware.label": "Hardware",
			"kind.hardware.desc": "Robotique, électronique, machines, équipements et solutions physiques.",
			"kind.hybrid.label": "Software + Hardware",
			"kind.hybrid.desc": "Un projet hybride qui combine matériel et logiciel.",
			"kind.unsure.label": "Je ne sais pas exactement quelle technologie utiliser",
			"kind.unsure.desc": "Décrivez simplement votre idée ou votre problème — nous qualifierons le projet ensemble.",
			"kind.required": "Choisissez un type de projet pour continuer.",
			"category.subtitle": "Sélectionnez une ou plusieurs catégories — vous pouvez en choisir plusieurs.",
			"category.required": "Sélectionnez au moins une catégorie pour continuer.",
			"category.app_web.label": "Application web",
			"category.app_mobile.label": "Application mobile",
			"category.saas.label": "SaaS",
			"category.logiciel_metier.label": "Logiciel métier",
			"category.ia.label": "Intelligence artificielle",
			"category.automatisation.label": "Automatisation",
			"category.api_integration.label": "API / intégration",
			"category.dashboard.label": "Dashboard",
			"category.base_donnees.label": "Base de données",
			"category.infra_cloud.label": "Infrastructure / Cloud",
			"category.cybersecurite.label": "Cybersécurité",
			"category.iot_logiciel_embarque.label": "IoT / logiciel embarqué",
			"hwgroup.robotique.label": "Robotique",
			"hwgroup.domotique_iot.label": "Domotique & IoT",
			"hwgroup.electronique.label": "Électronique",
			"hwgroup.machines_industrie.label": "Machines & industrie",
			"hwgroup.construction_chantier.label": "Construction & chantier",
			"hwgroup.prototypage_fabrication.label": "Prototypage & fabrication",
			"hwgroup.autre_hardware.label": "Autre",
			"category.bras_robotique.label": "Bras robotique",
			"category.robot_industriel.label": "Robot industriel",
			"category.robot_mobile.label": "Robot mobile",
			"category.robot_autonome.label": "Robot autonome",
			"category.robot_manutention.label": "Robot de manutention",
			"category.cobot.label": "Robot collaboratif / cobot",
			"category.robot_sur_mesure.label": "Robot sur mesure",
			"category.prototype_robotique.label": "Prototype robotique",
			"category.maison_connectee.label": "Maison connectée",
			"category.batiment_connecte.label": "Bâtiment connecté",
			"category.capteurs_domotique.label": "Capteurs",
			"category.controle_acces.label": "Contrôle d'accès",
			"category.automatisation_domotique.label": "Automatisation",
			"category.monitoring.label": "Monitoring",
			"category.systemes_iot.label": "Systèmes IoT",
			"category.gestion_energetique.label": "Gestion énergétique",
			"category.carte_electronique.label": "Carte électronique",
			"category.pcb.label": "PCB",
			"category.microcontroleur.label": "Microcontrôleur",
			"category.esp32_arduino_stm32.label": "ESP32 / Arduino / STM32",
			"category.systeme_embarque.label": "Système embarqué",
			"category.capteurs_electronique.label": "Capteurs",
			"category.prototype_electronique.label": "Prototype électronique",
			"category.objet_connecte.label": "Objet connecté",
			"category.machine_industrielle.label": "Machine industrielle",
			"category.machine_automatisee.label": "Machine automatisée",
			"category.ligne_production.label": "Ligne de production",
			"category.convoyeur.label": "Convoyeur",
			"category.systeme_manutention.label": "Système de manutention",
			"category.machine_cnc.label": "Machine CNC",
			"category.equipement_industriel.label": "Équipement industriel",
			"category.automatisation_industrielle.label": "Automatisation industrielle",
			"category.gros_outils_chantier.label": "Gros outils de chantier",
			"category.machines_chantier.label": "Machines de chantier",
			"category.equipements_professionnels.label": "Équipements professionnels",
			"category.outillage_specialise.label": "Outillage spécialisé",
			"category.systemes_automatises_chantier.label": "Systèmes automatisés",
			"category.solutions_levage.label": "Solutions de levage",
			"category.solutions_manutention_chantier.label": "Solutions de manutention",
			"category.equipements_sur_mesure.label": "Équipements sur mesure",
			"category.prototype_fonctionnel.label": "Prototype fonctionnel",
			"category.impression_3d.label": "Impression 3D",
			"category.usinage.label": "Usinage",
			"category.pieces_mecaniques.label": "Pièces mécaniques",
			"category.assemblage.label": "Assemblage",
			"category.boitier_chassis.label": "Boîtier / châssis",
			"category.petite_serie.label": "Petite série",
			"category.industrialisation.label": "Industrialisation",
			"category.projet_hardware_sur_mesure.label": "Projet Hardware sur mesure",
			"category.ne_sait_pas_categorie.label": "Je ne sais pas quelle catégorie choisir",
			"field.hw_description.label": "Décrivez ce que vous souhaitez construire",
			"field.hw_description.hint": "Exemple : Nous souhaitons développer un bras robotique capable de déplacer automatiquement des pièces entre deux postes de production.",
			"field.hw_objectif.label": "Quel problème souhaitez-vous résoudre ?",
			"field.hw_objectif.hint": "L'objectif principal de ce projet.",
			"field.hw_environnement.label": "Environnement",
			"field.hw_environnement.option.interieur": "Intérieur",
			"field.hw_environnement.option.exterieur": "Extérieur",
			"field.hw_environnement.option.industriel": "Industriel",
			"field.hw_environnement.option.chantier": "Chantier",
			"field.hw_environnement.option.bureau": "Bureau",
			"field.hw_environnement.option.commerce": "Commerce",
			"field.hw_environnement.option.entrepot": "Entrepôt",
			"field.hw_environnement.option.maison": "Maison",
			"field.hw_environnement.option.autre": "Autre",
			"field.hw_etat_projet.label": "État du projet",
			"field.hw_etat_projet.option.idee": "Simple idée",
			"field.hw_etat_projet.option.cahier_des_charges": "Cahier des charges existant",
			"field.hw_etat_projet.option.prototype_existant": "Prototype existant",
			"field.hw_etat_projet.option.produit_a_ameliorer": "Produit existant à améliorer",
			"field.hw_etat_projet.option.produit_a_industrialiser": "Produit à industrialiser",
			"field.hw_etat_projet.option.besoin_fabrication": "Besoin de fabrication",
			"field.hw_quantite.label": "Quantité",
			"field.hw_quantite.option.1_prototype": "1 prototype",
			"field.hw_quantite.option.2_10": "2 à 10 unités",
			"field.hw_quantite.option.10_100": "10 à 100 unités",
			"field.hw_quantite.option.100_1000": "100 à 1 000 unités",
			"field.hw_quantite.option.1000_plus": "1 000+ unités",
			"field.hw_quantite.option.inconnu": "Je ne sais pas encore",
			"field.hw_budget.label": "Budget estimé",
			"field.hw_budget.option.moins_5k": "Moins de 5 000 €",
			"field.hw_budget.option.5k_15k": "5 000 – 15 000 €",
			"field.hw_budget.option.15k_50k": "15 000 – 50 000 €",
			"field.hw_budget.option.50k_150k": "50 000 – 150 000 €",
			"field.hw_budget.option.plus_150k": "Plus de 150 000 €",
			"field.hw_budget.option.a_definir": "À définir",
			"field.hw_delai.label": "Délai souhaité",
			"field.hw_delai.hint": "Une date ou un délai approximatif.",
			"field.hw_attachments.label": "Documents",
			"field.hw_attachments.hint": "PDF, cahier des charges, plans, photos, vidéos, schémas, fichiers CAD/CAO, fichiers 3D, documentation technique.",
			"field.unsure_description.label": "Expliquez-nous votre idée ou votre problème",
			"field.unsure_description.hint": "Aucun terme technique requis — décrivez simplement ce que vous voulez faire.",
			"attachments.upload": "Glissez vos fichiers ici ou cliquez pour parcourir",
			"attachments.uploading": "Envoi en cours…",
			"attachments.remove": "Retirer",
			"attachments.empty": "Aucun fichier ajouté pour le moment.",
			"attachments.tooLarge": "{name} dépasse la taille maximale autorisée (50 Mo).",
			"attachments.invalidType": "Ce fichier n'a pas pu être envoyé.",
			"pdf.download": "Télécharger le PDF",
			"pdf.title": "Brief projet",
			"pdf.client": "Client",
			"pdf.project": "Projet",
			"pdf.status": "Statut",
			"pdf.status.submitted": "Validé",
			"pdf.status.draft": "Brouillon",
			"pdf.printedOn": "Document généré le {date}",
			"pdf.section.type": "Type de projet",
			"field.ecom_products.label": "Que vendez-vous ?",
			"field.ecom_products.hint": "Familles de produits et nombre approximatif de références.",
			"field.ecom_payments.label": "Comment vos clients doivent-ils payer ?",
			"field.ecom_payments.hint": "Carte, virement, paiement en plusieurs fois…",
			"field.ecom_shipping.label": "Comment livrez-vous ?",
			"field.ecom_shipping.hint": "Transporteurs, zones, retrait, livraison numérique.",
			"field.ecom_stock.label": "Qui gère le stock et les commandes ?",
			"field.ecom_stock.hint": "Vous, une équipe, un outil existant.",
			"field.ecom_migration.label": "Y a-t-il une boutique existante à migrer ?",
			"field.ecom_migration.hint": "Plateforme, adresse, ce qu'il faut conserver.",
			"field.show_pages.label": "De quelles pages avez-vous besoin ?",
			"field.show_pages.hint": "Accueil, services, à propos, blog, contact…",
			"field.show_contact.label": "Comment vous contacter ?",
			"field.show_contact.hint": "Formulaire, téléphone, réservation, WhatsApp.",
			"field.show_seo.label": "Sur quelles recherches veut-on vous trouver ?",
			"field.show_seo.hint": "Deux ou trois expressions que vos clients taperaient.",
			"field.show_existing.label": "Avez-vous déjà un site ?",
			"field.show_existing.hint": "L'adresse, et ce qui ne vous plaît pas.",
			"field.app_users.label": "Qui utilisera l'application ?",
			"field.app_users.hint": "Rôles : clients, équipe, administrateurs.",
			"field.app_features.label": "Que doit-elle faire ?",
			"field.app_features.hint": "Listez les actions essentielles, une par ligne.",
			"field.app_data.label": "Quelles données gère-t-elle ?",
			"field.app_data.hint": "Comptes, réservations, documents, paiements…",
			"field.app_integrations.label": "À quoi doit-elle se connecter ?",
			"field.app_integrations.hint": "Outils existants, API, comptabilité, CRM.",
			"field.maint_platform.label": "Que devons-nous maintenir ?",
			"field.maint_platform.hint": "Technologie et hébergement, si vous les connaissez.",
			"field.maint_access.label": "Avez-vous les accès ?",
			"field.maint_access.hint": "Hébergement, domaine, administration, dépôt de code.",
			"field.maint_issues.label": "Qu'est-ce qui ne va pas aujourd'hui ?",
			"field.maint_issues.hint": "Bugs, lenteurs, sécurité, contenus obsolètes.",
			"field.maint_level.label": "Quel niveau de suivi souhaitez-vous ?",
			"field.maint_level.hint": "Mises à jour seules, suivi mensuel, astreinte.",
			"field.other_describe.label": "Parlez-nous de votre projet",
			"field.other_describe.hint": "Aussi détaillé que vous voulez — nous lisons tout.",
			"field.business.label": "Que fait votre entreprise ?",
			"field.business.hint": "En une ou deux phrases.",
			"field.audience.label": "Qui sont vos clients ?",
			"field.audience.hint": "Qui doit se sentir chez lui sur votre site ?",
			"field.goal.label": "Que doit accomplir ce projet ?",
			"field.goal.hint": "Plus de prospects, plus de réservations, plus de crédibilité…",
			"field.success.label": "Comment mesurerez-vous le succès ?",
			"field.success.hint": "Un chiffre ou un ressenti — les deux sont valables.",
			"field.style.label": "Quelle ambiance souhaitez-vous ?",
			"field.style.hint": "Premium, chaleureux, technique, minimaliste…",
			"field.references.label": "Des sites que vous admirez",
			"field.references.hint": "Deux ou trois liens.",
			"field.content.label": "Quel contenu avez-vous déjà ?",
			"field.content.hint": "Textes, photos, logo, charte graphique…",
			"field.deadline.label": "Une date à viser ?",
			"field.deadline.hint": "Un événement, un lancement, une campagne.",
			"recap.subtitle": "Vérifiez vos réponses. Validez quand cela reflète votre projet.",
			"recap.projectType": "Type de projet",
			"recap.edit": "Modifier cette section",
			title: "Votre brief",
			sectionProgress: "Étape {current} sur {total}",
			subtitle: "Enregistrez à tout moment — vos réponses sont conservées au fur et à mesure.",
			"received.title": "Brief reçu — merci.",
			"received.body": "Notre équipe transforme vos réponses en feuille de route. Vous retrouverez votre brief soumis dans Documents.",
			"received.editable": "Vous pouvez encore ajuster votre brief tant que l'acompte n'est pas payé.",
			"received.edit": "Rouvrir mon brief",
			"locked.title": "Brief verrouillé",
			"locked.body": "Votre acompte est réglé et la production a démarré. Écrivez-nous et nous le mettrons à jour avec vous.",
			empty: "—",
			"history.title": "Historique du brief",
			"history.subtitle": "Chaque version validée, et chaque réouverture du brief.",
			"history.empty": "Rien pour l'instant — votre première validation apparaîtra ici.",
			"history.event.submitted": "Brief validé",
			"history.event.reopened": "Brief réouvert pour modification",
			"history.version": "Version {n}",
			"history.show": "Voir les réponses",
			"history.hide": "Masquer les réponses",
			back: "Retour",
			submit: "Valider mon brief",
			continue: "Enregistrer et continuer",
			"error.default": "Impossible d'enregistrer votre brief",
			"error.reopen": "Impossible de rouvrir votre brief",
			"celebration.title": "Brief terminé",
			"celebration.subtitle": "Wayne prend le relais."
		},
		de: {
			"section.type.title": "Was bauen wir?",
			"section.ecommerce.title": "Ihr Onlineshop",
			"section.showcase.title": "Ihre Präsenz-Website",
			"section.app.title": "Ihre Anwendung",
			"section.maintenance.title": "Ihr Wartungsbedarf",
			"section.other.title": "Ihr Projekt",
			"section.business.title": "Ihr Unternehmen",
			"section.goals.title": "Ihre Ziele",
			"section.style.title": "Stil & Referenzen",
			"section.content.title": "Inhalte & Praktisches",
			"section.recap.title": "Prüfen und bestätigen",
			"type.subtitle": "Wählen Sie das Passendste — die nächsten Fragen richten sich danach.",
			"type.ecommerce.label": "E-Commerce",
			"type.ecommerce.desc": "Produkte oder Leistungen online verkaufen, mit Zahlungen und Bestellungen.",
			"type.showcase.label": "Präsenz-Website",
			"type.showcase.desc": "Ihr Unternehmen zeigen, Vertrauen aufbauen, Anfragen erhalten.",
			"type.app.label": "Anwendung",
			"type.app.desc": "Ein Tool oder eine Plattform mit Konten, Daten und eigenen Funktionen.",
			"type.maintenance.label": "Wartung",
			"type.maintenance.desc": "Eine bestehende Website oder App gesund, schnell und aktuell halten.",
			"type.other.label": "Etwas anderes",
			"type.other.desc": "Beschreiben Sie es in Ihren Worten — wir formen es gemeinsam.",
			"type.required": "Wählen Sie einen Projekttyp, um fortzufahren.",
			"section.kind.title": "Was bauen wir?",
			"section.software_categories.title": "Ihre Software-Kategorien",
			"section.hardware_categories.title": "Ihre Hardware-Kategorien",
			"section.hardware_fields.title": "Ihr Hardware-Projekt",
			"section.unsure.title": "Erzählen Sie uns von Ihrer Idee",
			"kind.subtitle": "Wählen Sie die Projektart — die nächsten Fragen passen sich Ihrer Wahl an.",
			"kind.software.label": "Software",
			"kind.software.desc": "Digitale Entwicklung, Software und digitale Lösungen.",
			"kind.hardware.label": "Hardware",
			"kind.hardware.desc": "Robotik, Elektronik, Maschinen, Ausrüstung und physische Lösungen.",
			"kind.hybrid.label": "Software + Hardware",
			"kind.hybrid.desc": "Ein hybrides Projekt, das Hardware und Software verbindet.",
			"kind.unsure.label": "Ich weiß nicht genau, welche Technologie nötig ist",
			"kind.unsure.desc": "Beschreiben Sie einfach Ihre Idee oder Ihr Problem — wir qualifizieren das Projekt gemeinsam.",
			"kind.required": "Wählen Sie einen Projekttyp, um fortzufahren.",
			"category.subtitle": "Wählen Sie eine oder mehrere Kategorien aus.",
			"category.required": "Wählen Sie mindestens eine Kategorie, um fortzufahren.",
			"category.app_web.label": "Webanwendung",
			"category.app_mobile.label": "Mobile App",
			"category.saas.label": "SaaS",
			"category.logiciel_metier.label": "Fachsoftware",
			"category.ia.label": "Künstliche Intelligenz",
			"category.automatisation.label": "Automatisierung",
			"category.api_integration.label": "API / Integration",
			"category.dashboard.label": "Dashboard",
			"category.base_donnees.label": "Datenbank",
			"category.infra_cloud.label": "Infrastruktur / Cloud",
			"category.cybersecurite.label": "Cybersicherheit",
			"category.iot_logiciel_embarque.label": "IoT / eingebettete Software",
			"hwgroup.robotique.label": "Robotik",
			"hwgroup.domotique_iot.label": "Hausautomation & IoT",
			"hwgroup.electronique.label": "Elektronik",
			"hwgroup.machines_industrie.label": "Maschinen & Industrie",
			"hwgroup.construction_chantier.label": "Bau & Baustellen",
			"hwgroup.prototypage_fabrication.label": "Prototyping & Fertigung",
			"hwgroup.autre_hardware.label": "Sonstiges",
			"category.bras_robotique.label": "Roboterarm",
			"category.robot_industriel.label": "Industrieroboter",
			"category.robot_mobile.label": "Mobiler Roboter",
			"category.robot_autonome.label": "Autonomer Roboter",
			"category.robot_manutention.label": "Handhabungsroboter",
			"category.cobot.label": "Kollaborativer Roboter / Cobot",
			"category.robot_sur_mesure.label": "Roboter nach Maß",
			"category.prototype_robotique.label": "Roboter-Prototyp",
			"category.maison_connectee.label": "Vernetztes Zuhause",
			"category.batiment_connecte.label": "Vernetztes Gebäude",
			"category.capteurs_domotique.label": "Sensoren",
			"category.controle_acces.label": "Zutrittskontrolle",
			"category.automatisation_domotique.label": "Automatisierung",
			"category.monitoring.label": "Monitoring",
			"category.systemes_iot.label": "IoT-Systeme",
			"category.gestion_energetique.label": "Energiemanagement",
			"category.carte_electronique.label": "Elektronikplatine",
			"category.pcb.label": "PCB",
			"category.microcontroleur.label": "Mikrocontroller",
			"category.esp32_arduino_stm32.label": "ESP32 / Arduino / STM32",
			"category.systeme_embarque.label": "Eingebettetes System",
			"category.capteurs_electronique.label": "Sensoren",
			"category.prototype_electronique.label": "Elektronik-Prototyp",
			"category.objet_connecte.label": "Vernetztes Objekt",
			"category.machine_industrielle.label": "Industriemaschine",
			"category.machine_automatisee.label": "Automatisierte Maschine",
			"category.ligne_production.label": "Produktionslinie",
			"category.convoyeur.label": "Förderband",
			"category.systeme_manutention.label": "Fördersystem",
			"category.machine_cnc.label": "CNC-Maschine",
			"category.equipement_industriel.label": "Industrieausrüstung",
			"category.automatisation_industrielle.label": "Industrielle Automatisierung",
			"category.gros_outils_chantier.label": "Schwere Baustellengeräte",
			"category.machines_chantier.label": "Baumaschinen",
			"category.equipements_professionnels.label": "Profiausrüstung",
			"category.outillage_specialise.label": "Spezialwerkzeuge",
			"category.systemes_automatises_chantier.label": "Automatisierte Systeme",
			"category.solutions_levage.label": "Hebelösungen",
			"category.solutions_manutention_chantier.label": "Handhabungslösungen",
			"category.equipements_sur_mesure.label": "Ausrüstung nach Maß",
			"category.prototype_fonctionnel.label": "Funktionsprototyp",
			"category.impression_3d.label": "3D-Druck",
			"category.usinage.label": "Zerspanung",
			"category.pieces_mecaniques.label": "Mechanische Teile",
			"category.assemblage.label": "Montage",
			"category.boitier_chassis.label": "Gehäuse / Chassis",
			"category.petite_serie.label": "Kleinserie",
			"category.industrialisation.label": "Industrialisierung",
			"category.projet_hardware_sur_mesure.label": "Hardware-Projekt nach Maß",
			"category.ne_sait_pas_categorie.label": "Ich weiß nicht, welche Kategorie ich wählen soll",
			"field.hw_description.label": "Beschreiben Sie, was Sie bauen möchten",
			"field.hw_description.hint": "Beispiel: Wir möchten einen Roboterarm entwickeln, der automatisch Teile zwischen zwei Produktionsstationen bewegt.",
			"field.hw_objectif.label": "Welches Problem möchten Sie lösen?",
			"field.hw_objectif.hint": "Das Hauptziel dieses Projekts.",
			"field.hw_environnement.label": "Umgebung",
			"field.hw_environnement.option.interieur": "Innenbereich",
			"field.hw_environnement.option.exterieur": "Außenbereich",
			"field.hw_environnement.option.industriel": "Industriell",
			"field.hw_environnement.option.chantier": "Baustelle",
			"field.hw_environnement.option.bureau": "Büro",
			"field.hw_environnement.option.commerce": "Geschäft",
			"field.hw_environnement.option.entrepot": "Lager",
			"field.hw_environnement.option.maison": "Zuhause",
			"field.hw_environnement.option.autre": "Sonstiges",
			"field.hw_etat_projet.label": "Projektstatus",
			"field.hw_etat_projet.option.idee": "Nur eine Idee",
			"field.hw_etat_projet.option.cahier_des_charges": "Bestehendes Lastenheft",
			"field.hw_etat_projet.option.prototype_existant": "Bestehender Prototyp",
			"field.hw_etat_projet.option.produit_a_ameliorer": "Bestehendes Produkt verbessern",
			"field.hw_etat_projet.option.produit_a_industrialiser": "Produkt industrialisieren",
			"field.hw_etat_projet.option.besoin_fabrication": "Fertigungsbedarf",
			"field.hw_quantite.label": "Menge",
			"field.hw_quantite.option.1_prototype": "1 Prototyp",
			"field.hw_quantite.option.2_10": "2 bis 10 Einheiten",
			"field.hw_quantite.option.10_100": "10 bis 100 Einheiten",
			"field.hw_quantite.option.100_1000": "100 bis 1.000 Einheiten",
			"field.hw_quantite.option.1000_plus": "1.000+ Einheiten",
			"field.hw_quantite.option.inconnu": "Noch unbekannt",
			"field.hw_budget.label": "Geschätztes Budget",
			"field.hw_budget.option.moins_5k": "Unter 5.000 €",
			"field.hw_budget.option.5k_15k": "5.000 – 15.000 €",
			"field.hw_budget.option.15k_50k": "15.000 – 50.000 €",
			"field.hw_budget.option.50k_150k": "50.000 – 150.000 €",
			"field.hw_budget.option.plus_150k": "Über 150.000 €",
			"field.hw_budget.option.a_definir": "Noch offen",
			"field.hw_delai.label": "Gewünschter Zeitrahmen",
			"field.hw_delai.hint": "Ein Datum oder ein ungefährer Zeitrahmen.",
			"field.hw_attachments.label": "Dokumente",
			"field.hw_attachments.hint": "PDF, Lastenheft, Pläne, Fotos, Videos, Skizzen, CAD-/3D-Dateien, technische Dokumentation.",
			"field.unsure_description.label": "Erzählen Sie uns von Ihrer Idee oder Ihrem Problem",
			"field.unsure_description.hint": "Keine Fachbegriffe nötig — beschreiben Sie einfach, was Sie erreichen möchten.",
			"attachments.upload": "Dateien hierher ziehen oder klicken zum Auswählen",
			"attachments.uploading": "Wird hochgeladen…",
			"attachments.remove": "Entfernen",
			"attachments.empty": "Noch keine Dateien hinzugefügt.",
			"attachments.tooLarge": "{name} überschreitet die maximale Größe (50 MB).",
			"attachments.invalidType": "Diese Datei konnte nicht hochgeladen werden.",
			"pdf.download": "PDF herunterladen",
			"pdf.title": "Projekt-Briefing",
			"pdf.client": "Kunde",
			"pdf.project": "Projekt",
			"pdf.status": "Status",
			"pdf.status.submitted": "Bestätigt",
			"pdf.status.draft": "Entwurf",
			"pdf.printedOn": "Dokument erstellt am {date}",
			"pdf.section.type": "Projekttyp",
			"field.ecom_products.label": "Was verkaufen Sie?",
			"field.ecom_products.hint": "Produktfamilien und etwa wie viele Artikel.",
			"field.ecom_payments.label": "Wie sollen Kunden bezahlen?",
			"field.ecom_payments.hint": "Karte, Überweisung, Ratenzahlung…",
			"field.ecom_shipping.label": "Wie liefern Sie?",
			"field.ecom_shipping.hint": "Versanddienste, Zonen, Abholung, digitale Lieferung.",
			"field.ecom_stock.label": "Wer verwaltet Lager und Bestellungen?",
			"field.ecom_stock.hint": "Sie, ein Team, ein bestehendes Tool.",
			"field.ecom_migration.label": "Gibt es einen bestehenden Shop zu migrieren?",
			"field.ecom_migration.hint": "Plattform, Adresse, was erhalten bleiben muss.",
			"field.show_pages.label": "Welche Seiten brauchen Sie?",
			"field.show_pages.hint": "Start, Leistungen, Über uns, Blog, Kontakt…",
			"field.show_contact.label": "Wie sollen Besucher Sie erreichen?",
			"field.show_contact.hint": "Formular, Telefon, Terminbuchung, WhatsApp.",
			"field.show_seo.label": "Bei welchen Suchen sollen Sie gefunden werden?",
			"field.show_seo.hint": "Zwei oder drei Begriffe, die Ihre Kunden eingeben.",
			"field.show_existing.label": "Haben Sie schon eine Website?",
			"field.show_existing.hint": "Die Adresse und was Ihnen daran nicht gefällt.",
			"field.app_users.label": "Wer wird die App nutzen?",
			"field.app_users.hint": "Rollen: Kunden, Team, Administratoren.",
			"field.app_features.label": "Was muss sie können?",
			"field.app_features.hint": "Die wichtigsten Aktionen, eine pro Zeile.",
			"field.app_data.label": "Welche Daten verarbeitet sie?",
			"field.app_data.hint": "Konten, Buchungen, Dokumente, Zahlungen…",
			"field.app_integrations.label": "Womit muss sie sich verbinden?",
			"field.app_integrations.hint": "Bestehende Tools, APIs, Buchhaltung, CRM.",
			"field.maint_platform.label": "Was warten wir?",
			"field.maint_platform.hint": "Technologie und Hosting, falls bekannt.",
			"field.maint_access.label": "Haben Sie die Zugänge?",
			"field.maint_access.hint": "Hosting, Domain, Admin, Repository.",
			"field.maint_issues.label": "Was läuft heute schief?",
			"field.maint_issues.hint": "Fehler, Langsamkeit, Sicherheit, veraltete Inhalte.",
			"field.maint_level.label": "Welchen Betreuungsumfang wünschen Sie?",
			"field.maint_level.hint": "Nur Updates, monatliche Betreuung, Rufbereitschaft.",
			"field.other_describe.label": "Erzählen Sie uns von Ihrem Projekt",
			"field.other_describe.hint": "So ausführlich wie Sie mögen — wir lesen alles.",
			"field.business.label": "Was macht Ihr Unternehmen?",
			"field.business.hint": "In ein bis zwei Sätzen.",
			"field.audience.label": "Wer sind Ihre Kunden?",
			"field.audience.hint": "Wer soll sich auf Ihrer Website wohlfühlen?",
			"field.goal.label": "Was muss dieses Projekt erreichen?",
			"field.goal.hint": "Mehr Leads, mehr Buchungen, mehr Glaubwürdigkeit…",
			"field.success.label": "Woran messen Sie Erfolg?",
			"field.success.hint": "Eine Zahl oder ein Gefühl — beides ist gültig.",
			"field.style.label": "Wie soll es sich anfühlen?",
			"field.style.hint": "Premium, warm, technisch, minimal…",
			"field.references.label": "Seiten, die Sie bewundern",
			"field.references.hint": "Zwei oder drei Links.",
			"field.content.label": "Welche Inhalte haben Sie bereits?",
			"field.content.hint": "Texte, Fotos, Logo, Brand Guide…",
			"field.deadline.label": "Gibt es ein Zieldatum?",
			"field.deadline.hint": "Ein Event, ein Launch, eine Kampagne.",
			"recap.subtitle": "Prüfen Sie Ihre Antworten. Bestätigen Sie, wenn alles passt.",
			"recap.projectType": "Projekttyp",
			"recap.edit": "Diesen Abschnitt bearbeiten",
			title: "Ihr Briefing",
			sectionProgress: "Schritt {current} von {total}",
			subtitle: "Jederzeit speichern — Ihre Antworten werden fortlaufend gesichert.",
			"received.title": "Briefing erhalten — vielen Dank.",
			"received.body": "Unser Team verwandelt Ihre Antworten in eine Roadmap. Ihr eingereichtes Briefing finden Sie unter Dokumente.",
			"received.editable": "Solange die Anzahlung offen ist, können Sie Ihr Briefing noch anpassen.",
			"received.edit": "Briefing erneut öffnen",
			"locked.title": "Briefing gesperrt",
			"locked.body": "Ihre Anzahlung ist bezahlt und die Produktion läuft. Schreiben Sie uns — wir aktualisieren es gemeinsam.",
			empty: "—",
			"history.title": "Briefing-Verlauf",
			"history.subtitle": "Jede bestätigte Version und jede erneute Bearbeitung.",
			"history.empty": "Noch nichts — Ihre erste Bestätigung erscheint hier.",
			"history.event.submitted": "Briefing bestätigt",
			"history.event.reopened": "Briefing zur Bearbeitung geöffnet",
			"history.version": "Version {n}",
			"history.show": "Antworten ansehen",
			"history.hide": "Antworten ausblenden",
			back: "Zurück",
			submit: "Briefing bestätigen",
			continue: "Speichern und weiter",
			"error.default": "Ihr Briefing konnte nicht gespeichert werden",
			"error.reopen": "Ihr Briefing konnte nicht erneut geöffnet werden",
			"celebration.title": "Briefing abgeschlossen",
			"celebration.subtitle": "Wayne übernimmt ab hier."
		},
		es: {
			"section.type.title": "¿Qué vamos a construir?",
			"section.ecommerce.title": "Tu tienda online",
			"section.showcase.title": "Tu sitio de presentación",
			"section.app.title": "Tu aplicación",
			"section.maintenance.title": "Tu necesidad de mantenimiento",
			"section.other.title": "Tu proyecto",
			"section.business.title": "Tu negocio",
			"section.goals.title": "Tus objetivos",
			"section.style.title": "Estilo y referencias",
			"section.content.title": "Contenido y aspectos prácticos",
			"section.recap.title": "Revisar y validar",
			"type.subtitle": "Elige lo más parecido — las siguientes preguntas se adaptan.",
			"type.ecommerce.label": "E-commerce",
			"type.ecommerce.desc": "Vender productos o servicios online, con pagos y pedidos.",
			"type.showcase.label": "Sitio de presentación",
			"type.showcase.desc": "Presentar tu actividad, generar confianza, recibir solicitudes.",
			"type.app.label": "Aplicación",
			"type.app.desc": "Una herramienta o plataforma con cuentas, datos y funciones a medida.",
			"type.maintenance.label": "Mantenimiento",
			"type.maintenance.desc": "Mantener un sitio o app existente sano, rápido y actualizado.",
			"type.other.label": "Otra cosa",
			"type.other.desc": "Descríbelo con tus palabras — lo definimos juntos.",
			"type.required": "Elige un tipo de proyecto para continuar.",
			"section.kind.title": "¿Qué vamos a construir?",
			"section.software_categories.title": "Tus categorías de software",
			"section.hardware_categories.title": "Tus categorías de hardware",
			"section.hardware_fields.title": "Tu proyecto de hardware",
			"section.unsure.title": "Cuéntanos tu idea",
			"kind.subtitle": "Elige el tipo de proyecto — las siguientes preguntas se adaptan a tu elección.",
			"kind.software.label": "Software",
			"kind.software.desc": "Desarrollo digital, software y soluciones digitales.",
			"kind.hardware.label": "Hardware",
			"kind.hardware.desc": "Robótica, electrónica, máquinas, equipos y soluciones físicas.",
			"kind.hybrid.label": "Software + Hardware",
			"kind.hybrid.desc": "Un proyecto híbrido que combina hardware y software.",
			"kind.unsure.label": "No sé exactamente qué tecnología usar",
			"kind.unsure.desc": "Describe tu idea o problema — calificaremos el proyecto juntos.",
			"kind.required": "Elige un tipo de proyecto para continuar.",
			"category.subtitle": "Selecciona una o varias categorías.",
			"category.required": "Selecciona al menos una categoría para continuar.",
			"category.app_web.label": "Aplicación web",
			"category.app_mobile.label": "Aplicación móvil",
			"category.saas.label": "SaaS",
			"category.logiciel_metier.label": "Software de gestión",
			"category.ia.label": "Inteligencia artificial",
			"category.automatisation.label": "Automatización",
			"category.api_integration.label": "API / integración",
			"category.dashboard.label": "Panel de control",
			"category.base_donnees.label": "Base de datos",
			"category.infra_cloud.label": "Infraestructura / Cloud",
			"category.cybersecurite.label": "Ciberseguridad",
			"category.iot_logiciel_embarque.label": "IoT / software embebido",
			"hwgroup.robotique.label": "Robótica",
			"hwgroup.domotique_iot.label": "Domótica e IoT",
			"hwgroup.electronique.label": "Electrónica",
			"hwgroup.machines_industrie.label": "Máquinas e industria",
			"hwgroup.construction_chantier.label": "Construcción y obra",
			"hwgroup.prototypage_fabrication.label": "Prototipado y fabricación",
			"hwgroup.autre_hardware.label": "Otro",
			"category.bras_robotique.label": "Brazo robótico",
			"category.robot_industriel.label": "Robot industrial",
			"category.robot_mobile.label": "Robot móvil",
			"category.robot_autonome.label": "Robot autónomo",
			"category.robot_manutention.label": "Robot de manutención",
			"category.cobot.label": "Robot colaborativo / cobot",
			"category.robot_sur_mesure.label": "Robot a medida",
			"category.prototype_robotique.label": "Prototipo robótico",
			"category.maison_connectee.label": "Casa conectada",
			"category.batiment_connecte.label": "Edificio conectado",
			"category.capteurs_domotique.label": "Sensores",
			"category.controle_acces.label": "Control de acceso",
			"category.automatisation_domotique.label": "Automatización",
			"category.monitoring.label": "Monitorización",
			"category.systemes_iot.label": "Sistemas IoT",
			"category.gestion_energetique.label": "Gestión energética",
			"category.carte_electronique.label": "Placa electrónica",
			"category.pcb.label": "PCB",
			"category.microcontroleur.label": "Microcontrolador",
			"category.esp32_arduino_stm32.label": "ESP32 / Arduino / STM32",
			"category.systeme_embarque.label": "Sistema embebido",
			"category.capteurs_electronique.label": "Sensores",
			"category.prototype_electronique.label": "Prototipo electrónico",
			"category.objet_connecte.label": "Objeto conectado",
			"category.machine_industrielle.label": "Máquina industrial",
			"category.machine_automatisee.label": "Máquina automatizada",
			"category.ligne_production.label": "Línea de producción",
			"category.convoyeur.label": "Cinta transportadora",
			"category.systeme_manutention.label": "Sistema de manutención",
			"category.machine_cnc.label": "Máquina CNC",
			"category.equipement_industriel.label": "Equipo industrial",
			"category.automatisation_industrielle.label": "Automatización industrial",
			"category.gros_outils_chantier.label": "Grandes herramientas de obra",
			"category.machines_chantier.label": "Maquinaria de obra",
			"category.equipements_professionnels.label": "Equipos profesionales",
			"category.outillage_specialise.label": "Herramientas especializadas",
			"category.systemes_automatises_chantier.label": "Sistemas automatizados",
			"category.solutions_levage.label": "Soluciones de elevación",
			"category.solutions_manutention_chantier.label": "Soluciones de manutención",
			"category.equipements_sur_mesure.label": "Equipos a medida",
			"category.prototype_fonctionnel.label": "Prototipo funcional",
			"category.impression_3d.label": "Impresión 3D",
			"category.usinage.label": "Mecanizado",
			"category.pieces_mecaniques.label": "Piezas mecánicas",
			"category.assemblage.label": "Ensamblaje",
			"category.boitier_chassis.label": "Carcasa / chasis",
			"category.petite_serie.label": "Serie pequeña",
			"category.industrialisation.label": "Industrialización",
			"category.projet_hardware_sur_mesure.label": "Proyecto de hardware a medida",
			"category.ne_sait_pas_categorie.label": "No sé qué categoría elegir",
			"field.hw_description.label": "Describe lo que quieres construir",
			"field.hw_description.hint": "Ejemplo: Queremos desarrollar un brazo robótico capaz de mover piezas automáticamente entre dos puestos de producción.",
			"field.hw_objectif.label": "¿Qué problema quieres resolver?",
			"field.hw_objectif.hint": "El objetivo principal de este proyecto.",
			"field.hw_environnement.label": "Entorno",
			"field.hw_environnement.option.interieur": "Interior",
			"field.hw_environnement.option.exterieur": "Exterior",
			"field.hw_environnement.option.industriel": "Industrial",
			"field.hw_environnement.option.chantier": "Obra",
			"field.hw_environnement.option.bureau": "Oficina",
			"field.hw_environnement.option.commerce": "Comercio",
			"field.hw_environnement.option.entrepot": "Almacén",
			"field.hw_environnement.option.maison": "Casa",
			"field.hw_environnement.option.autre": "Otro",
			"field.hw_etat_projet.label": "Estado del proyecto",
			"field.hw_etat_projet.option.idee": "Solo una idea",
			"field.hw_etat_projet.option.cahier_des_charges": "Especificación existente",
			"field.hw_etat_projet.option.prototype_existant": "Prototipo existente",
			"field.hw_etat_projet.option.produit_a_ameliorer": "Producto existente a mejorar",
			"field.hw_etat_projet.option.produit_a_industrialiser": "Producto a industrializar",
			"field.hw_etat_projet.option.besoin_fabrication": "Necesidad de fabricación",
			"field.hw_quantite.label": "Cantidad",
			"field.hw_quantite.option.1_prototype": "1 prototipo",
			"field.hw_quantite.option.2_10": "De 2 a 10 unidades",
			"field.hw_quantite.option.10_100": "De 10 a 100 unidades",
			"field.hw_quantite.option.100_1000": "De 100 a 1.000 unidades",
			"field.hw_quantite.option.1000_plus": "1.000+ unidades",
			"field.hw_quantite.option.inconnu": "Aún no lo sé",
			"field.hw_budget.label": "Presupuesto estimado",
			"field.hw_budget.option.moins_5k": "Menos de 5.000 €",
			"field.hw_budget.option.5k_15k": "5.000 – 15.000 €",
			"field.hw_budget.option.15k_50k": "15.000 – 50.000 €",
			"field.hw_budget.option.50k_150k": "50.000 – 150.000 €",
			"field.hw_budget.option.plus_150k": "Más de 150.000 €",
			"field.hw_budget.option.a_definir": "Por definir",
			"field.hw_delai.label": "Plazo deseado",
			"field.hw_delai.hint": "Una fecha o un plazo aproximado.",
			"field.hw_attachments.label": "Documentos",
			"field.hw_attachments.hint": "PDF, especificaciones, planos, fotos, vídeos, esquemas, archivos CAD/3D, documentación técnica.",
			"field.unsure_description.label": "Cuéntanos tu idea o problema",
			"field.unsure_description.hint": "No se requieren términos técnicos — describe simplemente lo que quieres hacer.",
			"attachments.upload": "Arrastra archivos aquí o haz clic para explorar",
			"attachments.uploading": "Subiendo…",
			"attachments.remove": "Quitar",
			"attachments.empty": "Aún no se han añadido archivos.",
			"attachments.tooLarge": "{name} supera el tamaño máximo permitido (50 MB).",
			"attachments.invalidType": "No se pudo subir este archivo.",
			"pdf.download": "Descargar el PDF",
			"pdf.title": "Brief del proyecto",
			"pdf.client": "Cliente",
			"pdf.project": "Proyecto",
			"pdf.status": "Estado",
			"pdf.status.submitted": "Validado",
			"pdf.status.draft": "Borrador",
			"pdf.printedOn": "Documento generado el {date}",
			"pdf.section.type": "Tipo de proyecto",
			"field.ecom_products.label": "¿Qué vendes?",
			"field.ecom_products.hint": "Familias de productos y cuántas referencias aproximadamente.",
			"field.ecom_payments.label": "¿Cómo deben pagar tus clientes?",
			"field.ecom_payments.hint": "Tarjeta, transferencia, pago a plazos…",
			"field.ecom_shipping.label": "¿Cómo entregas?",
			"field.ecom_shipping.hint": "Transportistas, zonas, recogida, entrega digital.",
			"field.ecom_stock.label": "¿Quién gestiona stock y pedidos?",
			"field.ecom_stock.hint": "Tú, un equipo, una herramienta existente.",
			"field.ecom_migration.label": "¿Hay una tienda existente que migrar?",
			"field.ecom_migration.hint": "Plataforma, dirección, qué debe conservarse.",
			"field.show_pages.label": "¿Qué páginas necesitas?",
			"field.show_pages.hint": "Inicio, servicios, sobre nosotros, blog, contacto…",
			"field.show_contact.label": "¿Cómo deben contactarte?",
			"field.show_contact.hint": "Formulario, teléfono, reservas, WhatsApp.",
			"field.show_seo.label": "¿Con qué búsquedas quieres que te encuentren?",
			"field.show_seo.hint": "Dos o tres frases que escribirían tus clientes.",
			"field.show_existing.label": "¿Ya tienes un sitio?",
			"field.show_existing.hint": "La dirección y qué no te gusta de él.",
			"field.app_users.label": "¿Quién usará la aplicación?",
			"field.app_users.hint": "Roles: clientes, equipo, administradores.",
			"field.app_features.label": "¿Qué debe hacer?",
			"field.app_features.hint": "Enumera las acciones esenciales, una por línea.",
			"field.app_data.label": "¿Qué datos maneja?",
			"field.app_data.hint": "Cuentas, reservas, documentos, pagos…",
			"field.app_integrations.label": "¿Con qué debe conectarse?",
			"field.app_integrations.hint": "Herramientas existentes, API, contabilidad, CRM.",
			"field.maint_platform.label": "¿Qué vamos a mantener?",
			"field.maint_platform.hint": "Tecnología y alojamiento, si los conoces.",
			"field.maint_access.label": "¿Tienes los accesos?",
			"field.maint_access.hint": "Alojamiento, dominio, administración, repositorio.",
			"field.maint_issues.label": "¿Qué va mal hoy?",
			"field.maint_issues.hint": "Errores, lentitud, seguridad, contenido obsoleto.",
			"field.maint_level.label": "¿Qué nivel de seguimiento quieres?",
			"field.maint_level.hint": "Solo actualizaciones, seguimiento mensual, guardia.",
			"field.other_describe.label": "Cuéntanos tu proyecto",
			"field.other_describe.hint": "Con todo el detalle que quieras — lo leemos todo.",
			"field.business.label": "¿A qué se dedica tu negocio?",
			"field.business.hint": "En una o dos frases.",
			"field.audience.label": "¿Quiénes son tus clientes?",
			"field.audience.hint": "¿Quién debería sentirse identificado con tu sitio?",
			"field.goal.label": "¿Qué debe lograr este proyecto?",
			"field.goal.hint": "Más clientes potenciales, más reservas, más credibilidad…",
			"field.success.label": "¿Cómo medirás el éxito?",
			"field.success.hint": "Un número o una sensación — ambos son válidos.",
			"field.style.label": "¿Qué sensación debe transmitir?",
			"field.style.hint": "Premium, cercano, técnico, minimalista…",
			"field.references.label": "Sitios que admiras",
			"field.references.hint": "Dos o tres enlaces.",
			"field.content.label": "¿Qué contenido ya tienes?",
			"field.content.hint": "Textos, fotos, logo, manual de marca…",
			"field.deadline.label": "¿Alguna fecha límite?",
			"field.deadline.hint": "Un evento, un lanzamiento, una campaña.",
			"recap.subtitle": "Revisa tus respuestas. Valida cuando reflejen tu proyecto.",
			"recap.projectType": "Tipo de proyecto",
			"recap.edit": "Editar esta sección",
			title: "Tu brief",
			sectionProgress: "Paso {current} de {total}",
			subtitle: "Guarda en cualquier momento — tus respuestas se conservan sobre la marcha.",
			"received.title": "Brief recibido — gracias.",
			"received.body": "Nuestro equipo está convirtiendo tus respuestas en una hoja de ruta. Encontrarás tu brief enviado en Documentos.",
			"received.editable": "Puedes ajustar tu brief mientras el anticipo no esté pagado.",
			"received.edit": "Reabrir mi brief",
			"locked.title": "Brief bloqueado",
			"locked.body": "Tu anticipo está pagado y la producción ha comenzado. Escríbenos y lo actualizamos contigo.",
			empty: "—",
			"history.title": "Historial del brief",
			"history.subtitle": "Cada versión validada y cada reapertura del brief.",
			"history.empty": "Nada por ahora: tu primera validación aparecerá aquí.",
			"history.event.submitted": "Brief validado",
			"history.event.reopened": "Brief reabierto para editar",
			"history.version": "Versión {n}",
			"history.show": "Ver las respuestas",
			"history.hide": "Ocultar las respuestas",
			back: "Atrás",
			submit: "Validar mi brief",
			continue: "Guardar y continuar",
			"error.default": "No se pudo guardar tu brief",
			"error.reopen": "No se pudo reabrir tu brief",
			"celebration.title": "Brief completo",
			"celebration.subtitle": "Wayne se encarga a partir de aquí."
		},
		ru: {
			"section.type.title": "Что мы создаём?",
			"section.ecommerce.title": "Ваш интернет-магазин",
			"section.showcase.title": "Ваш сайт-визитка",
			"section.app.title": "Ваше приложение",
			"section.maintenance.title": "Ваша задача по поддержке",
			"section.other.title": "Ваш проект",
			"section.business.title": "Ваш бизнес",
			"section.goals.title": "Ваши цели",
			"section.style.title": "Стиль и референсы",
			"section.content.title": "Контент и практика",
			"section.recap.title": "Проверить и подтвердить",
			"type.subtitle": "Выберите самое близкое — дальнейшие вопросы подстроятся.",
			"type.ecommerce.label": "Интернет-магазин",
			"type.ecommerce.desc": "Продажа товаров или услуг онлайн, с оплатой и заказами.",
			"type.showcase.label": "Сайт-визитка",
			"type.showcase.desc": "Представить бизнес, вызвать доверие, получать заявки.",
			"type.app.label": "Приложение",
			"type.app.desc": "Инструмент или платформа с аккаунтами, данными и своими функциями.",
			"type.maintenance.label": "Поддержка",
			"type.maintenance.desc": "Держать существующий сайт или приложение быстрым и актуальным.",
			"type.other.label": "Другое",
			"type.other.desc": "Опишите своими словами — определим вместе.",
			"type.required": "Выберите тип проекта, чтобы продолжить.",
			"section.kind.title": "Что мы создаём?",
			"section.software_categories.title": "Ваши категории ПО",
			"section.hardware_categories.title": "Ваши категории оборудования",
			"section.hardware_fields.title": "Ваш проект Hardware",
			"section.unsure.title": "Расскажите нам о вашей идее",
			"kind.subtitle": "Выберите тип проекта — следующие вопросы подстроятся под ваш выбор.",
			"kind.software.label": "Software",
			"kind.software.desc": "Цифровая разработка, программное обеспечение и цифровые решения.",
			"kind.hardware.label": "Hardware",
			"kind.hardware.desc": "Робототехника, электроника, машины, оборудование и физические решения.",
			"kind.hybrid.label": "Software + Hardware",
			"kind.hybrid.desc": "Гибридный проект, сочетающий оборудование и программное обеспечение.",
			"kind.unsure.label": "Я не знаю точно, какая технология нужна",
			"kind.unsure.desc": "Просто опишите вашу идею или проблему — мы вместе определим проект.",
			"kind.required": "Выберите тип проекта, чтобы продолжить.",
			"category.subtitle": "Выберите одну или несколько категорий.",
			"category.required": "Выберите хотя бы одну категорию, чтобы продолжить.",
			"category.app_web.label": "Веб-приложение",
			"category.app_mobile.label": "Мобильное приложение",
			"category.saas.label": "SaaS",
			"category.logiciel_metier.label": "Отраслевое ПО",
			"category.ia.label": "Искусственный интеллект",
			"category.automatisation.label": "Автоматизация",
			"category.api_integration.label": "API / интеграция",
			"category.dashboard.label": "Дашборд",
			"category.base_donnees.label": "База данных",
			"category.infra_cloud.label": "Инфраструктура / облако",
			"category.cybersecurite.label": "Кибербезопасность",
			"category.iot_logiciel_embarque.label": "IoT / встроенное ПО",
			"hwgroup.robotique.label": "Робототехника",
			"hwgroup.domotique_iot.label": "Умный дом и IoT",
			"hwgroup.electronique.label": "Электроника",
			"hwgroup.machines_industrie.label": "Машины и промышленность",
			"hwgroup.construction_chantier.label": "Строительство и стройплощадка",
			"hwgroup.prototypage_fabrication.label": "Прототипирование и производство",
			"hwgroup.autre_hardware.label": "Другое",
			"category.bras_robotique.label": "Роботизированная рука",
			"category.robot_industriel.label": "Промышленный робот",
			"category.robot_mobile.label": "Мобильный робот",
			"category.robot_autonome.label": "Автономный робот",
			"category.robot_manutention.label": "Робот для перемещения грузов",
			"category.cobot.label": "Коллаборативный робот / кобот",
			"category.robot_sur_mesure.label": "Робот на заказ",
			"category.prototype_robotique.label": "Прототип робота",
			"category.maison_connectee.label": "Умный дом",
			"category.batiment_connecte.label": "Умное здание",
			"category.capteurs_domotique.label": "Датчики",
			"category.controle_acces.label": "Контроль доступа",
			"category.automatisation_domotique.label": "Автоматизация",
			"category.monitoring.label": "Мониторинг",
			"category.systemes_iot.label": "IoT-системы",
			"category.gestion_energetique.label": "Управление энергопотреблением",
			"category.carte_electronique.label": "Электронная плата",
			"category.pcb.label": "PCB",
			"category.microcontroleur.label": "Микроконтроллер",
			"category.esp32_arduino_stm32.label": "ESP32 / Arduino / STM32",
			"category.systeme_embarque.label": "Встроенная система",
			"category.capteurs_electronique.label": "Датчики",
			"category.prototype_electronique.label": "Электронный прототип",
			"category.objet_connecte.label": "Подключённое устройство",
			"category.machine_industrielle.label": "Промышленная машина",
			"category.machine_automatisee.label": "Автоматизированная машина",
			"category.ligne_production.label": "Производственная линия",
			"category.convoyeur.label": "Конвейер",
			"category.systeme_manutention.label": "Система перемещения грузов",
			"category.machine_cnc.label": "Станок с ЧПУ",
			"category.equipement_industriel.label": "Промышленное оборудование",
			"category.automatisation_industrielle.label": "Промышленная автоматизация",
			"category.gros_outils_chantier.label": "Тяжёлая строительная техника",
			"category.machines_chantier.label": "Строительная техника",
			"category.equipements_professionnels.label": "Профессиональное оборудование",
			"category.outillage_specialise.label": "Специализированный инструмент",
			"category.systemes_automatises_chantier.label": "Автоматизированные системы",
			"category.solutions_levage.label": "Решения для подъёма грузов",
			"category.solutions_manutention_chantier.label": "Решения для перемещения грузов",
			"category.equipements_sur_mesure.label": "Оборудование на заказ",
			"category.prototype_fonctionnel.label": "Функциональный прототип",
			"category.impression_3d.label": "3D-печать",
			"category.usinage.label": "Механическая обработка",
			"category.pieces_mecaniques.label": "Механические детали",
			"category.assemblage.label": "Сборка",
			"category.boitier_chassis.label": "Корпус / шасси",
			"category.petite_serie.label": "Малая серия",
			"category.industrialisation.label": "Индустриализация",
			"category.projet_hardware_sur_mesure.label": "Hardware-проект на заказ",
			"category.ne_sait_pas_categorie.label": "Не знаю, какую категорию выбрать",
			"field.hw_description.label": "Опишите, что вы хотите создать",
			"field.hw_description.hint": "Пример: мы хотим разработать роботизированную руку, способную автоматически перемещать детали между двумя производственными постами.",
			"field.hw_objectif.label": "Какую проблему вы хотите решить?",
			"field.hw_objectif.hint": "Главная цель этого проекта.",
			"field.hw_environnement.label": "Среда",
			"field.hw_environnement.option.interieur": "Помещение",
			"field.hw_environnement.option.exterieur": "На улице",
			"field.hw_environnement.option.industriel": "Промышленная",
			"field.hw_environnement.option.chantier": "Стройплощадка",
			"field.hw_environnement.option.bureau": "Офис",
			"field.hw_environnement.option.commerce": "Магазин",
			"field.hw_environnement.option.entrepot": "Склад",
			"field.hw_environnement.option.maison": "Дом",
			"field.hw_environnement.option.autre": "Другое",
			"field.hw_etat_projet.label": "Стадия проекта",
			"field.hw_etat_projet.option.idee": "Просто идея",
			"field.hw_etat_projet.option.cahier_des_charges": "Есть техническое задание",
			"field.hw_etat_projet.option.prototype_existant": "Есть прототип",
			"field.hw_etat_projet.option.produit_a_ameliorer": "Существующий продукт нужно улучшить",
			"field.hw_etat_projet.option.produit_a_industrialiser": "Продукт нужно индустриализировать",
			"field.hw_etat_projet.option.besoin_fabrication": "Нужно производство",
			"field.hw_quantite.label": "Количество",
			"field.hw_quantite.option.1_prototype": "1 прототип",
			"field.hw_quantite.option.2_10": "От 2 до 10 единиц",
			"field.hw_quantite.option.10_100": "От 10 до 100 единиц",
			"field.hw_quantite.option.100_1000": "От 100 до 1000 единиц",
			"field.hw_quantite.option.1000_plus": "1000+ единиц",
			"field.hw_quantite.option.inconnu": "Пока не знаю",
			"field.hw_budget.label": "Ориентировочный бюджет",
			"field.hw_budget.option.moins_5k": "Менее 5000 €",
			"field.hw_budget.option.5k_15k": "5000 – 15000 €",
			"field.hw_budget.option.15k_50k": "15000 – 50000 €",
			"field.hw_budget.option.50k_150k": "50000 – 150000 €",
			"field.hw_budget.option.plus_150k": "Более 150000 €",
			"field.hw_budget.option.a_definir": "Уточняется",
			"field.hw_delai.label": "Желаемый срок",
			"field.hw_delai.hint": "Дата или приблизительный срок.",
			"field.hw_attachments.label": "Документы",
			"field.hw_attachments.hint": "PDF, техническое задание, чертежи, фото, видео, схемы, файлы CAD/3D, техническая документация.",
			"field.unsure_description.label": "Расскажите нам о вашей идее или проблеме",
			"field.unsure_description.hint": "Технические термины не нужны — просто опишите, что вы хотите сделать.",
			"attachments.upload": "Перетащите файлы сюда или нажмите, чтобы выбрать",
			"attachments.uploading": "Загрузка…",
			"attachments.remove": "Удалить",
			"attachments.empty": "Файлы ещё не добавлены.",
			"attachments.tooLarge": "{name} превышает максимально допустимый размер (50 МБ).",
			"attachments.invalidType": "Не удалось загрузить этот файл.",
			"pdf.download": "Скачать PDF",
			"pdf.title": "Брифинг проекта",
			"pdf.client": "Клиент",
			"pdf.project": "Проект",
			"pdf.status": "Статус",
			"pdf.status.submitted": "Подтверждён",
			"pdf.status.draft": "Черновик",
			"pdf.printedOn": "Документ создан {date}",
			"pdf.section.type": "Тип проекта",
			"field.ecom_products.label": "Что вы продаёте?",
			"field.ecom_products.hint": "Группы товаров и примерное число позиций.",
			"field.ecom_payments.label": "Как должны платить клиенты?",
			"field.ecom_payments.hint": "Карта, перевод, оплата частями…",
			"field.ecom_shipping.label": "Как вы доставляете?",
			"field.ecom_shipping.hint": "Службы, зоны, самовывоз, цифровая доставка.",
			"field.ecom_stock.label": "Кто ведёт склад и заказы?",
			"field.ecom_stock.hint": "Вы, команда, существующий сервис.",
			"field.ecom_migration.label": "Есть ли магазин для переноса?",
			"field.ecom_migration.hint": "Платформа, адрес, что нужно сохранить.",
			"field.show_pages.label": "Какие страницы нужны?",
			"field.show_pages.hint": "Главная, услуги, о нас, блог, контакты…",
			"field.show_contact.label": "Как с вами связаться?",
			"field.show_contact.hint": "Форма, телефон, бронирование, WhatsApp.",
			"field.show_seo.label": "По каким запросам вас должны находить?",
			"field.show_seo.hint": "Две-три фразы, которые вводят ваши клиенты.",
			"field.show_existing.label": "У вас уже есть сайт?",
			"field.show_existing.hint": "Адрес и что вам в нём не нравится.",
			"field.app_users.label": "Кто будет пользоваться приложением?",
			"field.app_users.hint": "Роли: клиенты, сотрудники, администраторы.",
			"field.app_features.label": "Что оно должно делать?",
			"field.app_features.hint": "Перечислите ключевые действия, по одному в строке.",
			"field.app_data.label": "С какими данными оно работает?",
			"field.app_data.hint": "Аккаунты, брони, документы, платежи…",
			"field.app_integrations.label": "С чем оно должно интегрироваться?",
			"field.app_integrations.hint": "Существующие сервисы, API, бухгалтерия, CRM.",
			"field.maint_platform.label": "Что мы поддерживаем?",
			"field.maint_platform.hint": "Технология и хостинг, если известны.",
			"field.maint_access.label": "У вас есть доступы?",
			"field.maint_access.hint": "Хостинг, домен, админка, репозиторий.",
			"field.maint_issues.label": "Что сейчас не работает как надо?",
			"field.maint_issues.hint": "Ошибки, медленная работа, безопасность, устаревший контент.",
			"field.maint_level.label": "Какой уровень поддержки нужен?",
			"field.maint_level.hint": "Только обновления, ежемесячное сопровождение, дежурство.",
			"field.other_describe.label": "Расскажите о вашем проекте",
			"field.other_describe.hint": "Так подробно, как хотите — мы читаем всё.",
			"field.business.label": "Чем занимается ваш бизнес?",
			"field.business.hint": "В одном-двух предложениях.",
			"field.audience.label": "Кто ваши клиенты?",
			"field.audience.hint": "Кто должен чувствовать себя комфортно на вашем сайте?",
			"field.goal.label": "Чего должен достичь этот проект?",
			"field.goal.hint": "Больше лидов, больше бронирований, больше доверия…",
			"field.success.label": "Как вы будете измерять успех?",
			"field.success.hint": "Число или ощущение — оба варианта подходят.",
			"field.style.label": "Каким должно быть ощущение?",
			"field.style.hint": "Премиальный, тёплый, технический, минималистичный…",
			"field.references.label": "Сайты, которыми вы восхищаетесь",
			"field.references.hint": "Две-три ссылки.",
			"field.content.label": "Какой контент у вас уже есть?",
			"field.content.hint": "Текст, фото, логотип, брендбук…",
			"field.deadline.label": "Есть ли дата, к которой нужно успеть?",
			"field.deadline.hint": "Событие, запуск, кампания.",
			"recap.subtitle": "Проверьте ответы. Подтвердите, когда всё верно.",
			"recap.projectType": "Тип проекта",
			"recap.edit": "Изменить этот раздел",
			title: "Ваш бриф",
			sectionProgress: "Шаг {current} из {total}",
			subtitle: "Сохраняйте в любой момент — ваши ответы сохраняются по мере заполнения.",
			"received.title": "Бриф получен — спасибо.",
			"received.body": "Наша команда превращает ваши ответы в дорожную карту. Отправленный бриф вы найдёте в разделе «Документы».",
			"received.editable": "Вы можете править бриф, пока аванс не оплачен.",
			"received.edit": "Открыть бриф заново",
			"locked.title": "Бриф закрыт",
			"locked.body": "Аванс оплачен и работа началась. Напишите нам — обновим бриф вместе.",
			empty: "—",
			"history.title": "История брифа",
			"history.subtitle": "Каждая подтверждённая версия и каждое повторное открытие брифа.",
			"history.empty": "Пока ничего — здесь появится ваше первое подтверждение.",
			"history.event.submitted": "Бриф подтверждён",
			"history.event.reopened": "Бриф открыт для правок",
			"history.version": "Версия {n}",
			"history.show": "Посмотреть ответы",
			"history.hide": "Скрыть ответы",
			back: "Назад",
			submit: "Подтвердить бриф",
			continue: "Сохранить и продолжить",
			"error.default": "Не удалось сохранить ваш бриф",
			"error.reopen": "Не удалось открыть бриф заново",
			"celebration.title": "Бриф завершён",
			"celebration.subtitle": "Дальше Wayne берёт всё на себя."
		}
	};
}));
var common;
var init_common = __esmMin((() => {
	common = {
		en: {
			brand: "Wayne",
			brandSub: "Client Portal",
			"nav.dashboard": "Dashboard",
			"nav.welcome": "Welcome",
			"nav.project": "Project",
			"nav.documents": "Documents",
			"nav.billing": "Billing",
			"nav.support": "Support",
			"nav.services": "Services",
			"nav.profile": "Profile",
			"nav.logout": "Logout",
			language: "Language",
			"theme.toDark": "Switch to dark mode",
			"theme.toLight": "Switch to light mode",
			waitingClient: "Waiting for you",
			waitingWayne: "Wayne is working"
		},
		fr: {
			brand: "Wayne",
			brandSub: "Espace client",
			"nav.dashboard": "Tableau de bord",
			"nav.welcome": "Bienvenue",
			"nav.project": "Projet",
			"nav.documents": "Documents",
			"nav.billing": "Facturation",
			"nav.support": "Assistance",
			"nav.services": "Services",
			"nav.profile": "Profil",
			"nav.logout": "Déconnexion",
			language: "Langue",
			"theme.toDark": "Passer en mode sombre",
			"theme.toLight": "Passer en mode clair",
			waitingClient: "En attente de vous",
			waitingWayne: "Wayne travaille"
		},
		de: {
			brand: "Wayne",
			brandSub: "Kundenportal",
			"nav.dashboard": "Übersicht",
			"nav.welcome": "Willkommen",
			"nav.project": "Projekt",
			"nav.documents": "Dokumente",
			"nav.billing": "Abrechnung",
			"nav.support": "Support",
			"nav.services": "Services",
			"nav.profile": "Profil",
			"nav.logout": "Abmelden",
			language: "Sprache",
			"theme.toDark": "In den Dunkelmodus wechseln",
			"theme.toLight": "In den Hellmodus wechseln",
			waitingClient: "Wartet auf Sie",
			waitingWayne: "Wayne arbeitet"
		},
		es: {
			brand: "Wayne",
			brandSub: "Portal de cliente",
			"nav.dashboard": "Panel",
			"nav.welcome": "Bienvenida",
			"nav.project": "Proyecto",
			"nav.documents": "Documentos",
			"nav.billing": "Facturación",
			"nav.support": "Soporte",
			"nav.services": "Servicios",
			"nav.profile": "Perfil",
			"nav.logout": "Cerrar sesión",
			language: "Idioma",
			"theme.toDark": "Cambiar a modo oscuro",
			"theme.toLight": "Cambiar a modo claro",
			waitingClient: "Te esperamos",
			waitingWayne: "Wayne está trabajando"
		},
		ru: {
			brand: "Wayne",
			brandSub: "Клиентский портал",
			"nav.dashboard": "Панель",
			"nav.welcome": "Приветствие",
			"nav.project": "Проект",
			"nav.documents": "Документы",
			"nav.billing": "Оплата",
			"nav.support": "Поддержка",
			"nav.services": "Услуги",
			"nav.profile": "Профиль",
			"nav.logout": "Выйти",
			language: "Язык",
			"theme.toDark": "Включить тёмный режим",
			"theme.toLight": "Включить светлый режим",
			waitingClient: "Ждём вас",
			waitingWayne: "Wayne работает"
		}
	};
}));
var delivery;
var init_delivery = __esmMin((() => {
	delivery = {
		en: {
			heading: "Your delivery",
			subheading: "Everything is live. Here is your product and the keys that come with it.",
			"celebration.title": "Your project is live",
			"celebration.subtitle": "Congratulations — the work is yours now.",
			"product.label": "Your product",
			"product.open": "Open my product",
			"feedback.question": "How was the experience?",
			"feedback.starLabel": "Rate {count} out of 5",
			"feedback.testimonial": "Anything you'd like to share publicly?",
			"feedback.placeholder": "Tell us what worked and what we could do better…",
			"feedback.send": "Send feedback",
			"feedback.sent": "Thank you — your feedback is in.",
			"feedback.error": "We couldn't send your feedback. Please try again."
		},
		fr: {
			heading: "Votre livraison",
			subheading: "Tout est en ligne. Voici votre produit et les clés qui vont avec.",
			"celebration.title": "Votre projet est en ligne",
			"celebration.subtitle": "Félicitations — le travail est à vous.",
			"product.label": "Votre produit",
			"product.open": "Ouvrir mon produit",
			"feedback.question": "Comment s'est passée l'expérience ?",
			"feedback.starLabel": "Noter {count} sur 5",
			"feedback.testimonial": "Souhaitez-vous partager un témoignage public ?",
			"feedback.placeholder": "Dites-nous ce qui a marché et ce que l'on peut améliorer…",
			"feedback.send": "Envoyer mon retour",
			"feedback.sent": "Merci — votre retour est bien arrivé.",
			"feedback.error": "Impossible d'envoyer votre retour. Veuillez réessayer."
		},
		de: {
			heading: "Ihre Übergabe",
			subheading: "Alles ist live. Hier ist Ihr Produkt samt Zugängen.",
			"celebration.title": "Ihr Projekt ist live",
			"celebration.subtitle": "Herzlichen Glückwunsch — die Arbeit gehört jetzt Ihnen.",
			"product.label": "Ihr Produkt",
			"product.open": "Mein Produkt öffnen",
			"feedback.question": "Wie war die Zusammenarbeit?",
			"feedback.starLabel": "{count} von 5 bewerten",
			"feedback.testimonial": "Möchten Sie etwas öffentlich teilen?",
			"feedback.placeholder": "Erzählen Sie uns, was gut lief und was besser sein könnte…",
			"feedback.send": "Feedback senden",
			"feedback.sent": "Danke — Ihr Feedback ist angekommen.",
			"feedback.error": "Ihr Feedback konnte nicht gesendet werden. Bitte erneut versuchen."
		},
		es: {
			heading: "Tu entrega",
			subheading: "Todo está publicado. Aquí tienes tu producto y sus llaves.",
			"celebration.title": "Tu proyecto está en línea",
			"celebration.subtitle": "Enhorabuena: el trabajo ya es tuyo.",
			"product.label": "Tu producto",
			"product.open": "Abrir mi producto",
			"feedback.question": "¿Cómo ha sido la experiencia?",
			"feedback.starLabel": "Valorar {count} de 5",
			"feedback.testimonial": "¿Quieres compartir algo públicamente?",
			"feedback.placeholder": "Cuéntanos qué funcionó y qué podemos mejorar…",
			"feedback.send": "Enviar opinión",
			"feedback.sent": "Gracias, hemos recibido tu opinión.",
			"feedback.error": "No hemos podido enviar tu opinión. Inténtalo de nuevo."
		},
		ru: {
			heading: "Ваша сдача проекта",
			subheading: "Всё запущено. Вот ваш продукт и доступы к нему.",
			"celebration.title": "Ваш проект запущен",
			"celebration.subtitle": "Поздравляем — результат теперь ваш.",
			"product.label": "Ваш продукт",
			"product.open": "Открыть мой продукт",
			"feedback.question": "Как вам работа с нами?",
			"feedback.starLabel": "Оценка {count} из 5",
			"feedback.testimonial": "Хотите поделиться отзывом публично?",
			"feedback.placeholder": "Расскажите, что понравилось и что можно улучшить…",
			"feedback.send": "Отправить отзыв",
			"feedback.sent": "Спасибо — отзыв получен.",
			"feedback.error": "Не удалось отправить отзыв. Попробуйте снова."
		}
	};
}));
var documents;
var init_documents = __esmMin((() => {
	documents = {
		en: {
			title: "Documents",
			subtitle: "Everything we've shared, in one place — nothing lost in an inbox.",
			emptyTitle: "No documents yet",
			emptyBody: "Your agreement, brief and deliverables will appear here as your project progresses.",
			open: "Open",
			inPortal: "In the portal",
			"name.agreement": "Client agreement",
			"name.welcome": "Welcome document",
			"name.brief": "Project brief",
			"name.invoice_deposit": "Deposit invoice",
			"name.deliverable": "Deliverable",
			"type.agreement": "Agreement",
			"type.welcome": "Welcome",
			"type.brief": "Brief",
			"type.invoice": "Invoice",
			"type.deliverable": "Deliverable"
		},
		fr: {
			title: "Documents",
			subtitle: "Tout ce que nous avons partagé, au même endroit — rien ne se perd dans une boîte mail.",
			emptyTitle: "Aucun document pour le moment",
			emptyBody: "Votre contrat, brief et livrables apparaîtront ici au fil de votre projet.",
			open: "Ouvrir",
			inPortal: "Dans le portail",
			"name.agreement": "Contrat client",
			"name.welcome": "Document de bienvenue",
			"name.brief": "Brief projet",
			"name.invoice_deposit": "Facture d'acompte",
			"name.deliverable": "Livrable",
			"type.agreement": "Contrat",
			"type.welcome": "Bienvenue",
			"type.brief": "Brief",
			"type.invoice": "Facture",
			"type.deliverable": "Livrable"
		},
		de: {
			title: "Dokumente",
			subtitle: "Alles, was wir geteilt haben, an einem Ort — nichts geht im Posteingang verloren.",
			emptyTitle: "Noch keine Dokumente",
			emptyBody: "Ihr Vertrag, Briefing und Ihre Ergebnisse werden hier im Verlauf Ihres Projekts angezeigt.",
			open: "Öffnen",
			inPortal: "Im Portal",
			"name.agreement": "Kundenvertrag",
			"name.welcome": "Willkommensdokument",
			"name.brief": "Projekt-Briefing",
			"name.invoice_deposit": "Anzahlungsrechnung",
			"name.deliverable": "Ergebnis",
			"type.agreement": "Vertrag",
			"type.welcome": "Willkommen",
			"type.brief": "Briefing",
			"type.invoice": "Rechnung",
			"type.deliverable": "Ergebnis"
		},
		es: {
			title: "Documentos",
			subtitle: "Todo lo que hemos compartido, en un solo lugar — nada se pierde en la bandeja de entrada.",
			emptyTitle: "Aún no hay documentos",
			emptyBody: "Tu acuerdo, brief y entregables aparecerán aquí a medida que avance tu proyecto.",
			open: "Abrir",
			inPortal: "En el portal",
			"name.agreement": "Contrato de cliente",
			"name.welcome": "Documento de bienvenida",
			"name.brief": "Brief del proyecto",
			"name.invoice_deposit": "Factura de anticipo",
			"name.deliverable": "Entregable",
			"type.agreement": "Contrato",
			"type.welcome": "Bienvenida",
			"type.brief": "Brief",
			"type.invoice": "Factura",
			"type.deliverable": "Entregable"
		},
		ru: {
			title: "Документы",
			subtitle: "Всё, чем мы поделились, в одном месте — ничего не потеряется в почте.",
			emptyTitle: "Документов пока нет",
			emptyBody: "Ваш договор, бриф и результаты работы будут появляться здесь по мере продвижения проекта.",
			open: "Открыть",
			inPortal: "В портале",
			"name.agreement": "Договор с клиентом",
			"name.welcome": "Приветственный документ",
			"name.brief": "Бриф проекта",
			"name.invoice_deposit": "Счёт на аванс",
			"name.deliverable": "Результат",
			"type.agreement": "Договор",
			"type.welcome": "Приветствие",
			"type.brief": "Бриф",
			"type.invoice": "Счёт",
			"type.deliverable": "Результат"
		}
	};
}));
var journey;
var init_journey$1 = __esmMin((() => {
	journey = {
		en: {
			"phase.agreement": "Agreement",
			"phase.welcome": "Welcome",
			"phase.deposit": "Deposit",
			"phase.brief": "Project Brief",
			"phase.launch": "Project Launch",
			"phase.production": "Production",
			"phase.review": "Review",
			"phase.delivery": "Delivery",
			"phase.live": "Live",
			"action.agreement.greeting": "We need you to get started.",
			"action.agreement.title": "Review and sign your agreement",
			"action.agreement.description": "One signature and your project officially begins. Nothing is charged at this step.",
			"action.agreement.eta": "3 min",
			"action.agreement.cta": "Open my agreement",
			"action.welcome.greeting": "Welcome aboard.",
			"action.welcome.title": "Discover how we will work together",
			"action.welcome.description": "A short walkthrough of your journey, your team and what happens next.",
			"action.welcome.eta": "2 min",
			"action.welcome.cta": "Read the welcome guide",
			"action.deposit.greeting": "One step from production.",
			"action.deposit.title": "Secure your production slot",
			"action.deposit.description": "Your deposit reserves our team's time. The remaining balance is only due on delivery.",
			"action.deposit.eta": "2 min",
			"action.deposit.cta": "See my invoice",
			"action.brief.greeting": "Your project is ready to take shape.",
			"action.brief.title": "Complete your brief",
			"action.brief.description": "We use your answers to prepare the first version of your project. You can save and come back anytime.",
			"action.brief.eta": "8 min",
			"action.brief.cta": "Continue my brief",
			"action.launch.greeting": "Your project is launching.",
			"action.launch.title": "Everything is in our hands",
			"action.launch.description": "Our team is turning your brief into a roadmap. You will hear from your project manager shortly.",
			"action.launch.cta": "See the roadmap",
			"action.production.greeting": "Your project is being built.",
			"action.production.title": "Wayne is working",
			"action.production.description": "Our team is currently preparing your first version. No action needed from you.",
			"action.production.cta": "Follow production",
			"action.review.greeting": "Your first version is ready.",
			"action.review.title": "Review your first version",
			"action.review.description": "Tell us what you love and what should change. We iterate fast.",
			"action.review.eta": "10 min",
			"action.review.cta": "Review my project",
			"action.delivery.greeting": "Your project is ready.",
			"action.delivery.title": "Discover your project",
			"action.delivery.description": "Everything has been delivered. Open your product and see it live.",
			"action.delivery.cta": "Open delivery",
			"action.live.greeting": "Your project is live.",
			"action.live.title": "Keep building with Wayne",
			"action.live.description": "Support, maintenance and growth are available whenever you need them. Your product is yours.",
			"action.live.cta": "Open my product",
			"timeline.completed": "Completed",
			"timeline.live": "Live status",
			"timeline.updated": "Updated automatically",
			"timeline.title": "Project journey",
			"timeline.continue": "Continue",
			"progressCard.eyebrow": "Project progress",
			"progressCard.currentPhase": "Current phase",
			"nextActionCard.whatWeAreDoing": "What we are doing",
			"nextActionCard.yourNextStep": "Your next step",
			"nextActionCard.estimatedTime": "Estimated time: {eta}",
			"dashboard.hello": "Hello {name},",
			"dashboard.fallbackName": "there",
			"dashboard.documents.title": "Documents",
			"dashboard.documents.count": "{count} files — agreement, brief, invoices",
			"dashboard.billing.title": "Billing",
			"dashboard.billing.remaining": "{remaining} remaining of {total}",
			"dashboard.open": "Open"
		},
		fr: {
			"phase.agreement": "Contrat",
			"phase.welcome": "Bienvenue",
			"phase.deposit": "Acompte",
			"phase.brief": "Brief projet",
			"phase.launch": "Lancement du projet",
			"phase.production": "Production",
			"phase.review": "Révision",
			"phase.delivery": "Livraison",
			"phase.live": "En ligne",
			"action.agreement.greeting": "Nous avons besoin de vous pour démarrer.",
			"action.agreement.title": "Consultez et signez votre contrat",
			"action.agreement.description": "Une signature et votre projet démarre officiellement. Rien n'est débité à cette étape.",
			"action.agreement.eta": "3 min",
			"action.agreement.cta": "Ouvrir mon contrat",
			"action.welcome.greeting": "Bienvenue à bord.",
			"action.welcome.title": "Découvrez comment nous allons collaborer",
			"action.welcome.description": "Un court aperçu de votre parcours, de votre équipe et des prochaines étapes.",
			"action.welcome.eta": "2 min",
			"action.welcome.cta": "Lire le guide de bienvenue",
			"action.deposit.greeting": "À un pas de la production.",
			"action.deposit.title": "Réservez votre créneau de production",
			"action.deposit.description": "Votre acompte réserve le temps de notre équipe. Le solde restant n'est dû qu'à la livraison.",
			"action.deposit.eta": "2 min",
			"action.deposit.cta": "Voir ma facture",
			"action.brief.greeting": "Votre projet est prêt à prendre forme.",
			"action.brief.title": "Complétez votre brief",
			"action.brief.description": "Nous utilisons vos réponses pour préparer la première version de votre projet. Vous pouvez enregistrer et revenir à tout moment.",
			"action.brief.eta": "8 min",
			"action.brief.cta": "Continuer mon brief",
			"action.launch.greeting": "Votre projet est en cours de lancement.",
			"action.launch.title": "Tout est entre nos mains",
			"action.launch.description": "Notre équipe transforme votre brief en feuille de route. Votre chef de projet vous contactera prochainement.",
			"action.launch.cta": "Voir la feuille de route",
			"action.production.greeting": "Votre projet est en cours de réalisation.",
			"action.production.title": "Wayne est au travail",
			"action.production.description": "Notre équipe prépare actuellement votre première version. Aucune action requise de votre part.",
			"action.production.cta": "Suivre la production",
			"action.review.greeting": "Votre première version est prête.",
			"action.review.title": "Révisez votre première version",
			"action.review.description": "Dites-nous ce que vous aimez et ce qui doit changer. Nous itérons rapidement.",
			"action.review.eta": "10 min",
			"action.review.cta": "Réviser mon projet",
			"action.delivery.greeting": "Votre projet est prêt.",
			"action.delivery.title": "Découvrez votre projet",
			"action.delivery.description": "Tout a été livré. Ouvrez votre produit et découvrez-le en ligne.",
			"action.delivery.cta": "Ouvrir la livraison",
			"action.live.greeting": "Votre projet est en ligne.",
			"action.live.title": "Continuez à construire avec Wayne",
			"action.live.description": "Support, maintenance et croissance sont disponibles quand vous en avez besoin. Votre produit vous appartient.",
			"action.live.cta": "Ouvrir mon produit",
			"timeline.completed": "Terminé",
			"timeline.live": "Statut en direct",
			"timeline.updated": "Mis à jour automatiquement",
			"timeline.title": "Parcours du projet",
			"timeline.continue": "Continuer",
			"progressCard.eyebrow": "Avancement du projet",
			"progressCard.currentPhase": "Phase actuelle",
			"nextActionCard.whatWeAreDoing": "Ce que nous faisons",
			"nextActionCard.yourNextStep": "Votre prochaine étape",
			"nextActionCard.estimatedTime": "Temps estimé : {eta}",
			"dashboard.hello": "Bonjour {name},",
			"dashboard.fallbackName": "cher client",
			"dashboard.documents.title": "Documents",
			"dashboard.documents.count": "{count} fichiers — contrat, brief, factures",
			"dashboard.billing.title": "Facturation",
			"dashboard.billing.remaining": "{remaining} restant sur {total}",
			"dashboard.open": "Ouvrir"
		},
		de: {
			"phase.agreement": "Vertrag",
			"phase.welcome": "Willkommen",
			"phase.deposit": "Anzahlung",
			"phase.brief": "Projekt-Briefing",
			"phase.launch": "Projektstart",
			"phase.production": "Produktion",
			"phase.review": "Überprüfung",
			"phase.delivery": "Lieferung",
			"phase.live": "Live",
			"action.agreement.greeting": "Wir brauchen Sie, um zu starten.",
			"action.agreement.title": "Prüfen und unterschreiben Sie Ihren Vertrag",
			"action.agreement.description": "Eine Unterschrift und Ihr Projekt beginnt offiziell. In diesem Schritt wird nichts berechnet.",
			"action.agreement.eta": "3 Min.",
			"action.agreement.cta": "Vertrag öffnen",
			"action.welcome.greeting": "Willkommen an Bord.",
			"action.welcome.title": "Erfahren Sie, wie wir zusammenarbeiten",
			"action.welcome.description": "Ein kurzer Überblick über Ihre Reise, Ihr Team und die nächsten Schritte.",
			"action.welcome.eta": "2 Min.",
			"action.welcome.cta": "Willkommensleitfaden lesen",
			"action.deposit.greeting": "Nur noch ein Schritt bis zur Produktion.",
			"action.deposit.title": "Sichern Sie sich Ihren Produktionsslot",
			"action.deposit.description": "Ihre Anzahlung reserviert die Zeit unseres Teams. Der Restbetrag ist erst bei Lieferung fällig.",
			"action.deposit.eta": "2 Min.",
			"action.deposit.cta": "Rechnung ansehen",
			"action.brief.greeting": "Ihr Projekt nimmt Gestalt an.",
			"action.brief.title": "Vervollständigen Sie Ihr Briefing",
			"action.brief.description": "Wir nutzen Ihre Antworten, um die erste Version Ihres Projekts vorzubereiten. Sie können jederzeit speichern und zurückkehren.",
			"action.brief.eta": "8 Min.",
			"action.brief.cta": "Briefing fortsetzen",
			"action.launch.greeting": "Ihr Projekt startet.",
			"action.launch.title": "Alles liegt in unseren Händen",
			"action.launch.description": "Unser Team verwandelt Ihr Briefing in eine Roadmap. Ihr Projektmanager meldet sich in Kürze.",
			"action.launch.cta": "Roadmap ansehen",
			"action.production.greeting": "Ihr Projekt wird gebaut.",
			"action.production.title": "Wayne arbeitet daran",
			"action.production.description": "Unser Team bereitet gerade Ihre erste Version vor. Sie müssen nichts tun.",
			"action.production.cta": "Produktion verfolgen",
			"action.review.greeting": "Ihre erste Version ist fertig.",
			"action.review.title": "Überprüfen Sie Ihre erste Version",
			"action.review.description": "Sagen Sie uns, was Ihnen gefällt und was sich ändern soll. Wir iterieren schnell.",
			"action.review.eta": "10 Min.",
			"action.review.cta": "Projekt überprüfen",
			"action.delivery.greeting": "Ihr Projekt ist fertig.",
			"action.delivery.title": "Entdecken Sie Ihr Projekt",
			"action.delivery.description": "Alles wurde geliefert. Öffnen Sie Ihr Produkt und sehen Sie es live.",
			"action.delivery.cta": "Lieferung öffnen",
			"action.live.greeting": "Ihr Projekt ist live.",
			"action.live.title": "Bauen Sie weiter mit Wayne",
			"action.live.description": "Support, Wartung und Wachstum stehen Ihnen jederzeit zur Verfügung. Ihr Produkt gehört Ihnen.",
			"action.live.cta": "Mein Produkt öffnen",
			"timeline.completed": "Abgeschlossen",
			"timeline.live": "Live-Status",
			"timeline.updated": "Wird automatisch aktualisiert",
			"timeline.title": "Projektverlauf",
			"timeline.continue": "Weiter",
			"progressCard.eyebrow": "Projektfortschritt",
			"progressCard.currentPhase": "Aktuelle Phase",
			"nextActionCard.whatWeAreDoing": "Was wir gerade tun",
			"nextActionCard.yourNextStep": "Ihr nächster Schritt",
			"nextActionCard.estimatedTime": "Geschätzte Zeit: {eta}",
			"dashboard.hello": "Hallo {name},",
			"dashboard.fallbackName": "da",
			"dashboard.documents.title": "Dokumente",
			"dashboard.documents.count": "{count} Dateien — Vertrag, Briefing, Rechnungen",
			"dashboard.billing.title": "Abrechnung",
			"dashboard.billing.remaining": "{remaining} verbleibend von {total}",
			"dashboard.open": "Öffnen"
		},
		es: {
			"phase.agreement": "Contrato",
			"phase.welcome": "Bienvenida",
			"phase.deposit": "Depósito",
			"phase.brief": "Brief del proyecto",
			"phase.launch": "Lanzamiento del proyecto",
			"phase.production": "Producción",
			"phase.review": "Revisión",
			"phase.delivery": "Entrega",
			"phase.live": "En vivo",
			"action.agreement.greeting": "Necesitamos que empieces.",
			"action.agreement.title": "Revisa y firma tu contrato",
			"action.agreement.description": "Con una firma tu proyecto comienza oficialmente. No se cobra nada en este paso.",
			"action.agreement.eta": "3 min",
			"action.agreement.cta": "Abrir mi contrato",
			"action.welcome.greeting": "Bienvenido a bordo.",
			"action.welcome.title": "Descubre cómo vamos a trabajar juntos",
			"action.welcome.description": "Un breve recorrido por tu viaje, tu equipo y los próximos pasos.",
			"action.welcome.eta": "2 min",
			"action.welcome.cta": "Leer la guía de bienvenida",
			"action.deposit.greeting": "A un paso de la producción.",
			"action.deposit.title": "Asegura tu espacio de producción",
			"action.deposit.description": "Tu depósito reserva el tiempo de nuestro equipo. El saldo restante solo se debe al entregar.",
			"action.deposit.eta": "2 min",
			"action.deposit.cta": "Ver mi factura",
			"action.brief.greeting": "Tu proyecto está listo para tomar forma.",
			"action.brief.title": "Completa tu brief",
			"action.brief.description": "Usamos tus respuestas para preparar la primera versión de tu proyecto. Puedes guardar y volver cuando quieras.",
			"action.brief.eta": "8 min",
			"action.brief.cta": "Continuar mi brief",
			"action.launch.greeting": "Tu proyecto está en marcha.",
			"action.launch.title": "Todo está en nuestras manos",
			"action.launch.description": "Nuestro equipo está convirtiendo tu brief en una hoja de ruta. Pronto sabrás de tu gestor de proyecto.",
			"action.launch.cta": "Ver la hoja de ruta",
			"action.production.greeting": "Tu proyecto se está construyendo.",
			"action.production.title": "Wayne está trabajando",
			"action.production.description": "Nuestro equipo está preparando tu primera versión. No se requiere ninguna acción por tu parte.",
			"action.production.cta": "Seguir la producción",
			"action.review.greeting": "Tu primera versión está lista.",
			"action.review.title": "Revisa tu primera versión",
			"action.review.description": "Cuéntanos qué te gusta y qué debería cambiar. Iteramos rápido.",
			"action.review.eta": "10 min",
			"action.review.cta": "Revisar mi proyecto",
			"action.delivery.greeting": "Tu proyecto está listo.",
			"action.delivery.title": "Descubre tu proyecto",
			"action.delivery.description": "Todo ha sido entregado. Abre tu producto y velo en vivo.",
			"action.delivery.cta": "Abrir entrega",
			"action.live.greeting": "Tu proyecto está en vivo.",
			"action.live.title": "Sigue creciendo con Wayne",
			"action.live.description": "Soporte, mantenimiento y crecimiento están disponibles cuando los necesites. Tu producto es tuyo.",
			"action.live.cta": "Abrir mi producto",
			"timeline.completed": "Completado",
			"timeline.live": "Estado en directo",
			"timeline.updated": "Se actualiza automáticamente",
			"timeline.title": "Recorrido del proyecto",
			"timeline.continue": "Continuar",
			"progressCard.eyebrow": "Progreso del proyecto",
			"progressCard.currentPhase": "Fase actual",
			"nextActionCard.whatWeAreDoing": "Lo que estamos haciendo",
			"nextActionCard.yourNextStep": "Tu próximo paso",
			"nextActionCard.estimatedTime": "Tiempo estimado: {eta}",
			"dashboard.hello": "Hola {name},",
			"dashboard.fallbackName": "por aquí",
			"dashboard.documents.title": "Documentos",
			"dashboard.documents.count": "{count} archivos — contrato, brief, facturas",
			"dashboard.billing.title": "Facturación",
			"dashboard.billing.remaining": "{remaining} restante de {total}",
			"dashboard.open": "Abrir"
		},
		ru: {
			"phase.agreement": "Договор",
			"phase.welcome": "Приветствие",
			"phase.deposit": "Депозит",
			"phase.brief": "Бриф проекта",
			"phase.launch": "Запуск проекта",
			"phase.production": "Производство",
			"phase.review": "Проверка",
			"phase.delivery": "Доставка",
			"phase.live": "Онлайн",
			"action.agreement.greeting": "Нам нужно, чтобы вы начали.",
			"action.agreement.title": "Просмотрите и подпишите договор",
			"action.agreement.description": "Одна подпись — и ваш проект официально начинается. На этом этапе ничего не списывается.",
			"action.agreement.eta": "3 мин",
			"action.agreement.cta": "Открыть договор",
			"action.welcome.greeting": "Добро пожаловать на борт.",
			"action.welcome.title": "Узнайте, как мы будем работать вместе",
			"action.welcome.description": "Краткий обзор вашего пути, команды и следующих шагов.",
			"action.welcome.eta": "2 мин",
			"action.welcome.cta": "Прочитать приветственный гид",
			"action.deposit.greeting": "Остался один шаг до производства.",
			"action.deposit.title": "Забронируйте слот на производство",
			"action.deposit.description": "Ваш депозит резервирует время нашей команды. Остаток оплачивается только при доставке.",
			"action.deposit.eta": "2 мин",
			"action.deposit.cta": "Посмотреть счёт",
			"action.brief.greeting": "Ваш проект готов обрести форму.",
			"action.brief.title": "Заполните бриф",
			"action.brief.description": "Мы используем ваши ответы для подготовки первой версии проекта. Вы можете сохранить и вернуться в любое время.",
			"action.brief.eta": "8 мин",
			"action.brief.cta": "Продолжить бриф",
			"action.launch.greeting": "Ваш проект запускается.",
			"action.launch.title": "Всё в наших руках",
			"action.launch.description": "Наша команда превращает ваш бриф в дорожную карту. Скоро с вами свяжется менеджер проекта.",
			"action.launch.cta": "Посмотреть дорожную карту",
			"action.production.greeting": "Ваш проект создаётся.",
			"action.production.title": "Wayne работает",
			"action.production.description": "Наша команда сейчас готовит первую версию. От вас никаких действий не требуется.",
			"action.production.cta": "Следить за производством",
			"action.review.greeting": "Ваша первая версия готова.",
			"action.review.title": "Проверьте первую версию",
			"action.review.description": "Расскажите, что вам нравится и что нужно изменить. Мы быстро вносим правки.",
			"action.review.eta": "10 мин",
			"action.review.cta": "Проверить проект",
			"action.delivery.greeting": "Ваш проект готов.",
			"action.delivery.title": "Откройте свой проект",
			"action.delivery.description": "Всё уже доставлено. Откройте свой продукт и увидьте его в действии.",
			"action.delivery.cta": "Открыть доставку",
			"action.live.greeting": "Ваш проект в сети.",
			"action.live.title": "Продолжайте расти вместе с Wayne",
			"action.live.description": "Поддержка, обслуживание и развитие доступны в любой момент. Продукт принадлежит вам.",
			"action.live.cta": "Открыть мой продукт",
			"timeline.completed": "Завершено",
			"timeline.live": "Статус в реальном времени",
			"timeline.updated": "Обновляется автоматически",
			"timeline.title": "Путь проекта",
			"timeline.continue": "Продолжить",
			"progressCard.eyebrow": "Прогресс проекта",
			"progressCard.currentPhase": "Текущий этап",
			"nextActionCard.whatWeAreDoing": "Что мы сейчас делаем",
			"nextActionCard.yourNextStep": "Ваш следующий шаг",
			"nextActionCard.estimatedTime": "Ожидаемое время: {eta}",
			"dashboard.hello": "Здравствуйте, {name},",
			"dashboard.fallbackName": "друг",
			"dashboard.documents.title": "Документы",
			"dashboard.documents.count": "{count} файлов — договор, бриф, счета",
			"dashboard.billing.title": "Оплата",
			"dashboard.billing.remaining": "{remaining} осталось из {total}",
			"dashboard.open": "Открыть"
		}
	};
}));
var landing;
var init_landing = __esmMin((() => {
	landing = {
		en: {
			"nav.signIn": "Sign in",
			"hero.eyebrow": "Wayne Client Portal",
			"hero.title.line1": "Your project,",
			"hero.title.line2": "beautifully clear.",
			"hero.subtitle": "A calm, premium space where you always know exactly what happens next — and when it's our turn, you can simply relax.",
			"hero.cta": "Enter my portal",
			"features.sign.title": "Sign in minutes",
			"features.sign.body": "Your agreement lives in the portal. One signature, and the journey starts.",
			"features.pay.title": "Pay with clarity",
			"features.pay.body": "Deposit, balance, receipts. Always visible, never a surprise.",
			"features.follow.title": "Follow every step",
			"features.follow.body": "Eleven steps from agreement to launch, with one clear next action.",
			"features.grow.title": "Grow after launch",
			"features.grow.body": "Care plans and add-ons whenever your product needs them."
		},
		fr: {
			"nav.signIn": "Se connecter",
			"hero.eyebrow": "Portail Client Wayne",
			"hero.title.line1": "Votre projet,",
			"hero.title.line2": "d'une clarté limpide.",
			"hero.subtitle": "Un espace calme et premium où vous savez toujours exactement ce qui se passe ensuite — et quand c'est à nous d'agir, vous pouvez simplement vous détendre.",
			"hero.cta": "Accéder à mon portail",
			"features.sign.title": "Signez en quelques minutes",
			"features.sign.body": "Votre contrat vit dans le portail. Une signature, et le voyage commence.",
			"features.pay.title": "Payez en toute clarté",
			"features.pay.body": "Acompte, solde, reçus. Toujours visibles, jamais de surprise.",
			"features.follow.title": "Suivez chaque étape",
			"features.follow.body": "Onze étapes de l'accord au lancement, avec une prochaine action toujours claire.",
			"features.grow.title": "Évoluez après le lancement",
			"features.grow.body": "Plans d'entretien et options dès que votre produit en a besoin."
		},
		de: {
			"nav.signIn": "Anmelden",
			"hero.eyebrow": "Wayne Kundenportal",
			"hero.title.line1": "Ihr Projekt,",
			"hero.title.line2": "wunderbar klar.",
			"hero.subtitle": "Ein ruhiger, hochwertiger Raum, in dem Sie immer genau wissen, was als Nächstes passiert — und wenn wir am Zug sind, können Sie einfach entspannen.",
			"hero.cta": "Zu meinem Portal",
			"features.sign.title": "In Minuten unterschreiben",
			"features.sign.body": "Ihre Vereinbarung lebt im Portal. Eine Unterschrift, und die Reise beginnt.",
			"features.pay.title": "Klar bezahlen",
			"features.pay.body": "Anzahlung, Restbetrag, Belege. Immer sichtbar, nie eine Überraschung.",
			"features.follow.title": "Jeden Schritt verfolgen",
			"features.follow.body": "Elf Schritte von der Vereinbarung bis zum Start, mit einer klaren nächsten Aktion.",
			"features.grow.title": "Nach dem Start wachsen",
			"features.grow.body": "Pflegepläne und Erweiterungen, wann immer Ihr Produkt sie braucht."
		},
		es: {
			"nav.signIn": "Iniciar sesión",
			"hero.eyebrow": "Portal de Clientes Wayne",
			"hero.title.line1": "Tu proyecto,",
			"hero.title.line2": "hermosamente claro.",
			"hero.subtitle": "Un espacio tranquilo y premium donde siempre sabes exactamente qué pasa después — y cuando nos toca a nosotros, tú simplemente puedes relajarte.",
			"hero.cta": "Entrar a mi portal",
			"features.sign.title": "Firma en minutos",
			"features.sign.body": "Tu acuerdo vive en el portal. Una firma, y el viaje comienza.",
			"features.pay.title": "Paga con claridad",
			"features.pay.body": "Depósito, saldo, recibos. Siempre visibles, nunca una sorpresa.",
			"features.follow.title": "Sigue cada paso",
			"features.follow.body": "Once pasos desde el acuerdo hasta el lanzamiento, con una próxima acción siempre clara.",
			"features.grow.title": "Crece después del lanzamiento",
			"features.grow.body": "Planes de mantenimiento y extras cuando tu producto los necesite."
		},
		ru: {
			"nav.signIn": "Войти",
			"hero.eyebrow": "Клиентский портал Wayne",
			"hero.title.line1": "Ваш проект —",
			"hero.title.line2": "предельно понятен.",
			"hero.subtitle": "Спокойное премиальное пространство, где вы всегда точно знаете, что будет дальше — а когда очередь за нами, вы можете просто расслабиться.",
			"hero.cta": "Войти в мой портал",
			"features.sign.title": "Подпишите за минуты",
			"features.sign.body": "Ваш договор хранится в портале. Одна подпись — и путешествие начинается.",
			"features.pay.title": "Платите с полной ясностью",
			"features.pay.body": "Задаток, остаток, чеки. Всегда на виду, никаких сюрпризов.",
			"features.follow.title": "Следите за каждым шагом",
			"features.follow.body": "Одиннадцать этапов от договора до запуска, с одним понятным следующим действием.",
			"features.grow.title": "Развивайтесь после запуска",
			"features.grow.body": "Планы обслуживания и дополнения, когда бы они ни понадобились вашему продукту."
		}
	};
}));
var onboarding;
var init_onboarding$2 = __esmMin((() => {
	onboarding = {
		en: {
			"step1.title": "Welcome to your portal",
			"step1.body": "One calm place for your whole project: sign, pay, brief, follow, receive.",
			"step2.title": "How do we reach you?",
			"step2.body": "A phone number helps us move fast when a decision is needed.",
			"step3.title": "What does success look like?",
			"step3.body": "Tell us the goal behind this project so every choice serves it.",
			phone: "Phone",
			phonePlaceholder: "+33 6 12 34 56 78",
			goal: "Your main goal",
			goalPlaceholder: "More qualified leads, a credible brand, faster onboarding…",
			back: "Back",
			continue: "Continue",
			enter: "Enter my portal"
		},
		fr: {
			"step1.title": "Bienvenue dans votre espace",
			"step1.body": "Un seul endroit serein pour tout le projet : signer, payer, briefer, suivre, recevoir.",
			"step2.title": "Comment vous joindre ?",
			"step2.body": "Un numéro nous permet d'avancer vite quand une décision est nécessaire.",
			"step3.title": "À quoi ressemble la réussite ?",
			"step3.body": "Dites-nous l'objectif derrière ce projet pour que chaque choix le serve.",
			phone: "Téléphone",
			phonePlaceholder: "+33 6 12 34 56 78",
			goal: "Votre objectif principal",
			goalPlaceholder: "Plus de leads qualifiés, une marque crédible, un onboarding plus rapide…",
			back: "Retour",
			continue: "Continuer",
			enter: "Entrer dans mon espace"
		},
		de: {
			"step1.title": "Willkommen in Ihrem Portal",
			"step1.body": "Ein ruhiger Ort für das ganze Projekt: unterschreiben, zahlen, briefen, verfolgen, erhalten.",
			"step2.title": "Wie erreichen wir Sie?",
			"step2.body": "Eine Telefonnummer hilft, schnell zu entscheiden, wenn es nötig ist.",
			"step3.title": "Wie sieht Erfolg aus?",
			"step3.body": "Nennen Sie uns das Ziel hinter dem Projekt, damit jede Entscheidung ihm dient.",
			phone: "Telefon",
			phonePlaceholder: "+49 151 23456789",
			goal: "Ihr Hauptziel",
			goalPlaceholder: "Mehr qualifizierte Leads, eine glaubwürdige Marke, schnelleres Onboarding…",
			back: "Zurück",
			continue: "Weiter",
			enter: "Portal betreten"
		},
		es: {
			"step1.title": "Bienvenido a tu portal",
			"step1.body": "Un único lugar tranquilo para todo el proyecto: firmar, pagar, informar, seguir, recibir.",
			"step2.title": "¿Cómo te contactamos?",
			"step2.body": "Un teléfono nos ayuda a avanzar rápido cuando hay que decidir.",
			"step3.title": "¿Cómo se ve el éxito?",
			"step3.body": "Cuéntanos el objetivo del proyecto para que cada decisión lo respalde.",
			phone: "Teléfono",
			phonePlaceholder: "+34 600 12 34 56",
			goal: "Tu objetivo principal",
			goalPlaceholder: "Más leads cualificados, una marca creíble, un onboarding más rápido…",
			back: "Volver",
			continue: "Continuar",
			enter: "Entrar en mi portal"
		},
		ru: {
			"step1.title": "Добро пожаловать в ваш портал",
			"step1.body": "Одно спокойное место для всего проекта: подписать, оплатить, бриф, следить, получить.",
			"step2.title": "Как с вами связаться?",
			"step2.body": "Телефон помогает быстро принимать решения, когда это нужно.",
			"step3.title": "Как выглядит успех?",
			"step3.body": "Расскажите о цели проекта, чтобы каждое решение работало на неё.",
			phone: "Телефон",
			phonePlaceholder: "+7 900 123 45 67",
			goal: "Ваша главная цель",
			goalPlaceholder: "Больше целевых лидов, убедительный бренд, быстрый онбординг…",
			back: "Назад",
			continue: "Продолжить",
			enter: "Войти в портал"
		}
	};
}));
var profile;
var init_profile = __esmMin((() => {
	profile = {
		en: {
			heading: "Your profile",
			subheading: "Keep your details up to date so we always reach the right person.",
			fullName: "Full name",
			company: "Company",
			phone: "Phone",
			email: "Email",
			save: "Save changes",
			saving: "Saving…",
			success: "Profile updated",
			error: "We couldn't save your profile. Please try again."
		},
		fr: {
			heading: "Votre profil",
			subheading: "Gardez vos informations à jour pour que l'on contacte toujours la bonne personne.",
			fullName: "Nom complet",
			company: "Société",
			phone: "Téléphone",
			email: "E-mail",
			save: "Enregistrer les modifications",
			saving: "Enregistrement…",
			success: "Profil mis à jour",
			error: "Impossible d'enregistrer votre profil. Veuillez réessayer."
		},
		de: {
			heading: "Ihr Profil",
			subheading: "Halten Sie Ihre Daten aktuell, damit wir immer die richtige Person erreichen.",
			fullName: "Vollständiger Name",
			company: "Unternehmen",
			phone: "Telefon",
			email: "E-Mail",
			save: "Änderungen speichern",
			saving: "Speichern…",
			success: "Profil aktualisiert",
			error: "Ihr Profil konnte nicht gespeichert werden. Bitte erneut versuchen."
		},
		es: {
			heading: "Tu perfil",
			subheading: "Mantén tus datos al día para contactar siempre con la persona correcta.",
			fullName: "Nombre completo",
			company: "Empresa",
			phone: "Teléfono",
			email: "Correo electrónico",
			save: "Guardar cambios",
			saving: "Guardando…",
			success: "Perfil actualizado",
			error: "No hemos podido guardar tu perfil. Inténtalo de nuevo."
		},
		ru: {
			heading: "Ваш профиль",
			subheading: "Обновляйте данные, чтобы мы всегда связывались с нужным человеком.",
			fullName: "Полное имя",
			company: "Компания",
			phone: "Телефон",
			email: "E-mail",
			save: "Сохранить изменения",
			saving: "Сохранение…",
			success: "Профиль обновлён",
			error: "Не удалось сохранить профиль. Попробуйте снова."
		}
	};
}));
var project;
var init_project = __esmMin((() => {
	project = {
		en: {
			roadmap: "Roadmap",
			yourLinks: "Your links"
		},
		fr: {
			roadmap: "Feuille de route",
			yourLinks: "Vos liens"
		},
		de: {
			roadmap: "Roadmap",
			yourLinks: "Ihre Links"
		},
		es: {
			roadmap: "Hoja de ruta",
			yourLinks: "Tus enlaces"
		},
		ru: {
			roadmap: "Дорожная карта",
			yourLinks: "Ваши ссылки"
		}
	};
}));
var services;
var init_services = __esmMin((() => {
	services = {
		en: {
			heading: "Keep building",
			subheading: "Optional, never pushy. Add support when you actually need it.",
			priceFrom: "from {price}",
			priceOnRequest: "On request",
			categoryDefault: "Add-on service",
			cta: "Talk to us about this"
		},
		fr: {
			heading: "Continuez à construire",
			subheading: "En option, jamais insistant. Ajoutez du soutien quand vous en avez besoin.",
			priceFrom: "à partir de {price}",
			priceOnRequest: "Sur demande",
			categoryDefault: "Service complémentaire",
			cta: "Parlons-en"
		},
		de: {
			heading: "Weiter wachsen",
			subheading: "Optional, nie aufdringlich. Holen Sie Unterstützung, wenn Sie sie brauchen.",
			priceFrom: "ab {price}",
			priceOnRequest: "Auf Anfrage",
			categoryDefault: "Zusatzleistung",
			cta: "Sprechen wir darüber"
		},
		es: {
			heading: "Sigue creciendo",
			subheading: "Opcional, nunca insistente. Añade apoyo cuando de verdad lo necesites.",
			priceFrom: "desde {price}",
			priceOnRequest: "A consultar",
			categoryDefault: "Servicio adicional",
			cta: "Hablemos de esto"
		},
		ru: {
			heading: "Развивайте проект",
			subheading: "Опционально и без навязывания. Подключайте поддержку, когда она нужна.",
			priceFrom: "от {price}",
			priceOnRequest: "По запросу",
			categoryDefault: "Дополнительная услуга",
			cta: "Обсудить это"
		}
	};
}));
var support;
var init_support = __esmMin((() => {
	support = {
		en: {
			heading: "We're here",
			subheading: "A real human answers. No ticket queues, no scripted replies.",
			"email.title": "Email us",
			"message.title": "Send a message",
			"message.subtitle": "Answer within one business day.",
			"call.title": "Book a call",
			"call.subtitle": "Fifteen focused minutes with Wayne.",
			"faq.label": "Frequently asked",
			"faq.q1": "How long does a project take?",
			"faq.a1": "Most projects run four to eight weeks, depending on scope and how fast the brief and feedback come back.",
			"faq.q2": "When do I pay?",
			"faq.a2": "A deposit starts production, the balance is due before launch. Every invoice lives in Billing.",
			"faq.q3": "How many revision rounds are included?",
			"faq.a3": "Two full review rounds are included. Anything beyond that becomes a small, clearly quoted add-on.",
			"faq.q4": "Who owns the final work?",
			"faq.a4": "You do. Once the balance is paid, all files, code and accounts are yours."
		},
		fr: {
			heading: "Nous sommes là",
			subheading: "Une vraie personne vous répond. Pas de file d'attente, pas de réponses types.",
			"email.title": "Écrivez-nous",
			"message.title": "Envoyer un message",
			"message.subtitle": "Réponse sous un jour ouvré.",
			"call.title": "Réserver un appel",
			"call.subtitle": "Quinze minutes efficaces avec Wayne.",
			"faq.label": "Questions fréquentes",
			"faq.q1": "Combien de temps prend un projet ?",
			"faq.a1": "La plupart des projets durent de quatre à huit semaines, selon le périmètre et la rapidité du brief et des retours.",
			"faq.q2": "Quand dois-je payer ?",
			"faq.a2": "Un acompte lance la production, le solde est dû avant le lancement. Chaque facture est dans Facturation.",
			"faq.q3": "Combien de séries de révisions sont incluses ?",
			"faq.a3": "Deux séries de révisions complètes sont incluses. Au-delà, c'est une petite option clairement chiffrée.",
			"faq.q4": "À qui appartient le travail final ?",
			"faq.a4": "À vous. Dès que le solde est réglé, tous les fichiers, le code et les accès vous appartiennent."
		},
		de: {
			heading: "Wir sind da",
			subheading: "Ein echter Mensch antwortet. Keine Ticket-Warteschlangen, keine Standardtexte.",
			"email.title": "Schreiben Sie uns",
			"message.title": "Nachricht senden",
			"message.subtitle": "Antwort innerhalb eines Werktags.",
			"call.title": "Termin buchen",
			"call.subtitle": "Fünfzehn fokussierte Minuten mit Wayne.",
			"faq.label": "Häufige Fragen",
			"faq.q1": "Wie lange dauert ein Projekt?",
			"faq.a1": "Die meisten Projekte dauern vier bis acht Wochen — je nach Umfang und wie schnell Briefing und Feedback kommen.",
			"faq.q2": "Wann bezahle ich?",
			"faq.a2": "Eine Anzahlung startet die Produktion, der Rest ist vor dem Launch fällig. Jede Rechnung liegt unter Abrechnung.",
			"faq.q3": "Wie viele Korrekturrunden sind enthalten?",
			"faq.a3": "Zwei vollständige Korrekturrunden sind enthalten. Alles darüber ist ein kleines, klar angebotenes Extra.",
			"faq.q4": "Wem gehört das Ergebnis?",
			"faq.a4": "Ihnen. Nach Zahlung des Restbetrags gehören alle Dateien, der Code und die Zugänge Ihnen."
		},
		es: {
			heading: "Estamos aquí",
			subheading: "Responde una persona real. Sin colas de tickets ni respuestas automáticas.",
			"email.title": "Escríbenos",
			"message.title": "Enviar un mensaje",
			"message.subtitle": "Respuesta en un día laborable.",
			"call.title": "Reservar una llamada",
			"call.subtitle": "Quince minutos enfocados con Wayne.",
			"faq.label": "Preguntas frecuentes",
			"faq.q1": "¿Cuánto dura un proyecto?",
			"faq.a1": "La mayoría duran de cuatro a ocho semanas, según el alcance y la rapidez del brief y los comentarios.",
			"faq.q2": "¿Cuándo pago?",
			"faq.a2": "Un anticipo inicia la producción y el resto se paga antes del lanzamiento. Todas las facturas están en Facturación.",
			"faq.q3": "¿Cuántas rondas de revisión se incluyen?",
			"faq.a3": "Se incluyen dos rondas completas de revisión. Más allá de eso es un extra pequeño y presupuestado con claridad.",
			"faq.q4": "¿De quién es el trabajo final?",
			"faq.a4": "Tuyo. Al pagar el saldo, todos los archivos, el código y las cuentas son tuyos."
		},
		ru: {
			heading: "Мы рядом",
			subheading: "Отвечает живой человек. Без очередей и шаблонных ответов.",
			"email.title": "Напишите нам",
			"message.title": "Отправить сообщение",
			"message.subtitle": "Ответ в течение одного рабочего дня.",
			"call.title": "Записаться на звонок",
			"call.subtitle": "Пятнадцать сфокусированных минут с Wayne.",
			"faq.label": "Частые вопросы",
			"faq.q1": "Сколько длится проект?",
			"faq.a1": "Обычно от четырёх до восьми недель — зависит от объёма и скорости брифа и обратной связи.",
			"faq.q2": "Когда нужно платить?",
			"faq.a2": "Аванс запускает работу, остаток — до запуска. Все счета находятся в разделе «Оплата».",
			"faq.q3": "Сколько раундов правок включено?",
			"faq.a3": "Включены два полных раунда правок. Всё сверх этого — небольшая опция с понятной стоимостью.",
			"faq.q4": "Кому принадлежит результат?",
			"faq.a4": "Вам. После оплаты остатка все файлы, код и доступы принадлежат вам."
		}
	};
}));
var welcome;
var init_welcome = __esmMin((() => {
	welcome = {
		en: {
			title: "Welcome document",
			greeting: "Welcome aboard, {name}.",
			subtitle: "Five minutes to understand how we work together — then we start.",
			"how.title": "How we work",
			"how.rhythm.title": "A clear rhythm",
			"how.rhythm.body": "One step at a time. The portal always shows the single next action.",
			"how.channels.title": "One place",
			"how.channels.body": "Documents, invoices and decisions live here — never lost in an inbox.",
			"how.response.title": "Response time",
			"how.response.body": "We answer within one business day, usually much sooner.",
			"how.manager.title": "Your contact",
			"how.manager.body": "{manager} follows your project from brief to launch.",
			"steps.title": "Your journey",
			"steps.hint": "You'll always know where you are and who we're waiting on.",
			"expect.title": "What we expect from each other",
			"expect.you.title": "From you",
			"expect.you.1": "Honest answers in your brief — detail beats polish.",
			"expect.you.2": "Content and access when we ask for them.",
			"expect.you.3": "Feedback grouped in one pass, so we move fast.",
			"expect.us.title": "From us",
			"expect.us.1": "A build that matches your validated brief.",
			"expect.us.2": "Visible progress and no silent weeks.",
			"expect.us.3": "A site you can run without us.",
			"checklist.title": "Before you continue",
			"checklist.subtitle": "Tick what's true — it's saved automatically.",
			"checklist.read": "I've read how we work together.",
			"checklist.content": "I know which content I need to prepare.",
			"checklist.access": "I can provide the accesses if needed.",
			"business.section.activity": "Activity",
			"business.section.contact": "Contact & location",
			"business.section.presence": "Social presence",
			"business.section.context": "History & budget",
			"business.field.products.label": "Products or services sold",
			"business.field.products.placeholder": "e.g. handmade furniture, delivery, consulting…",
			"business.field.sector.label": "Industry",
			"business.field.sector.placeholder": "e.g. hospitality, retail, construction",
			"business.field.siret.label": "Company number (SIRET / VAT)",
			"business.field.siret.placeholder": "123 456 789 00012",
			"business.field.since.label": "Business started on",
			"business.field.needs.label": "What are you missing online today?",
			"business.field.needs.placeholder": "e.g. no online orders, invisible on Google, no professional image…",
			"business.field.phone.label": "Phone",
			"business.field.phone.placeholder": "+33 6 12 34 56 78",
			"business.field.whatsapp.label": "WhatsApp",
			"business.field.whatsapp.placeholder": "Same as phone or another number",
			"business.field.email.label": "Business email",
			"business.field.email.placeholder": "contact@yourbusiness.com",
			"business.field.address.label": "Business address",
			"business.field.address.placeholder": "Street, number, city",
			"business.field.facebook.label": "Facebook",
			"business.field.facebook.placeholder": "Page link or name",
			"business.field.instagram.label": "Instagram",
			"business.field.instagram.placeholder": "@yourhandle",
			"business.field.otherSocial.label": "Other networks",
			"business.field.otherSocial.placeholder": "TikTok, LinkedIn, Google Business…",
			"business.field.providers.label": "Have you worked with other providers?",
			"business.field.providers.placeholder": "Who, when, and what worked or didn't",
			"business.field.budget.label": "Monthly budget for your business online",
			"business.field.budget.placeholder": "e.g. 200 € / month",
			"business.update": "Update my fiche",
			"business.validated": "Fiche validated",
			"business.saving": "Saving…",
			"business.autosaved": "Saved automatically",
			"business.autosaveHint": "Every field is saved as you go.",
			"business.saved": "Your business fiche is saved",
			"business.incomplete": "Please fill in the required fields marked with *",
			"business.error": "Could not save your business fiche",
			"business.gate": "Complete your business fiche to continue.",
			"cta.continue": "I'm ready — continue to my brief",
			"done.title": "Welcome step complete",
			"done.body": "Your brief is the next step. Take your time — it saves as you go.",
			"done.cta": "Open my brief",
			"error.default": "Could not save your progress",
			"celebration.title": "Welcome aboard",
			"celebration.subtitle": "Let's shape your project.",
			"step.guide.title": "How we work together",
			"step.guide.hint": "Read the guide, then confirm the three points below.",
			"step.guide.short": "Guide",
			"step.guide.error": "Tick the three points to continue.",
			"step.activity.title": "Your activity",
			"step.activity.hint": "What you sell, your market and what you're missing online.",
			"step.activity.short": "Activity",
			"step.contact.title": "Contact & location",
			"step.contact.hint": "How your customers reach you and where your business is.",
			"step.contact.short": "Contact",
			"step.presence.title": "Social presence",
			"step.presence.hint": "Leave blank what you don't have yet — we'll advise.",
			"step.presence.short": "Presence",
			"step.context.title": "History & budget",
			"step.context.hint": "Past providers and what you can invest each month.",
			"step.context.short": "Budget",
			"step.recap.title": "Review your fiche",
			"step.recap.hint": "Check every answer, fix what you need, then validate.",
			"step.recap.short": "Review",
			"step.error": "Fill in the required fields of this step to continue.",
			"step.field.required": "This answer is required.",
			"progress.label": "Step {current} of {total}",
			"progress.remaining": "{done}/{total} required answers",
			"progress.nav": "Welcome journey steps",
			"progress.hint": "Business fiche: {done}/{total} answers",
			"nav.back": "Back",
			"nav.next": "Next",
			"nav.download": "Download my fiche",
			"recap.edit": "Edit",
			"recap.empty": "Not filled in",
			"recap.ready": "Everything's in — validate to move on to your brief.",
			"recap.pending": "Some required answers are still missing.",
			"doc.title": "Business fiche",
			"doc.subtitle": "Information provided by the client for this project.",
			"doc.blankNotice": "Blank template — print it and fill it in by hand if you prefer.",
			"doc.notProvided": "—",
			"doc.meta.client": "Client",
			"doc.meta.project": "Project",
			"doc.meta.date": "Date",
			"doc.meta.status": "Status",
			"doc.status.draft": "Draft",
			"doc.status.validated": "Validated",
			"doc.footer": "Wayne-Web — business fiche generated from the client portal."
		},
		fr: {
			title: "Document de bienvenue",
			greeting: "Bienvenue à bord, {name}.",
			subtitle: "Cinq minutes pour comprendre comment nous travaillons ensemble — puis on démarre.",
			"how.title": "Comment nous travaillons",
			"how.rhythm.title": "Un rythme clair",
			"how.rhythm.body": "Une étape à la fois. Le portail affiche toujours la seule action suivante.",
			"how.channels.title": "Un seul endroit",
			"how.channels.body": "Documents, factures et décisions sont ici — jamais perdus dans une boîte mail.",
			"how.response.title": "Délai de réponse",
			"how.response.body": "Nous répondons sous un jour ouvré, souvent bien plus vite.",
			"how.manager.title": "Votre contact",
			"how.manager.body": "{manager} suit votre projet du brief au lancement.",
			"steps.title": "Votre parcours",
			"steps.hint": "Vous saurez toujours où vous en êtes et qui doit agir.",
			"expect.title": "Ce que nous attendons l'un de l'autre",
			"expect.you.title": "De votre côté",
			"expect.you.1": "Des réponses sincères dans le brief — le détail vaut mieux que la forme.",
			"expect.you.2": "Contenus et accès quand nous les demandons.",
			"expect.you.3": "Des retours regroupés en une fois, pour avancer vite.",
			"expect.us.title": "De notre côté",
			"expect.us.1": "Une réalisation fidèle à votre brief validé.",
			"expect.us.2": "Une progression visible, sans semaines de silence.",
			"expect.us.3": "Un site que vous pouvez piloter sans nous.",
			"checklist.title": "Avant de continuer",
			"checklist.subtitle": "Cochez ce qui est vrai — c'est enregistré automatiquement.",
			"checklist.read": "J'ai lu comment nous travaillons ensemble.",
			"checklist.content": "Je sais quels contenus je dois préparer.",
			"checklist.access": "Je peux fournir les accès si nécessaire.",
			"business.section.activity": "Activité",
			"business.section.contact": "Contact & localisation",
			"business.section.presence": "Présence sociale",
			"business.section.context": "Historique & budget",
			"business.field.products.label": "Produits ou services vendus",
			"business.field.products.placeholder": "ex. mobilier artisanal, livraison, conseil…",
			"business.field.sector.label": "Secteur d'activité",
			"business.field.sector.placeholder": "ex. restauration, commerce, bâtiment",
			"business.field.siret.label": "Numéro SIRET / TVA",
			"business.field.siret.placeholder": "123 456 789 00012",
			"business.field.since.label": "Date de création du business",
			"business.field.needs.label": "Qu'est-ce qui vous manque concrètement en ligne ?",
			"business.field.needs.placeholder": "ex. pas de commandes en ligne, invisible sur Google, image peu professionnelle…",
			"business.field.phone.label": "Téléphone",
			"business.field.phone.placeholder": "+33 6 12 34 56 78",
			"business.field.whatsapp.label": "WhatsApp",
			"business.field.whatsapp.placeholder": "Identique au téléphone ou autre numéro",
			"business.field.email.label": "Email professionnel",
			"business.field.email.placeholder": "contact@votrecommerce.com",
			"business.field.address.label": "Adresse du commerce",
			"business.field.address.placeholder": "Rue, numéro, ville",
			"business.field.facebook.label": "Facebook",
			"business.field.facebook.placeholder": "Lien ou nom de la page",
			"business.field.instagram.label": "Instagram",
			"business.field.instagram.placeholder": "@votrecompte",
			"business.field.otherSocial.label": "Autres réseaux",
			"business.field.otherSocial.placeholder": "TikTok, LinkedIn, Google Business…",
			"business.field.providers.label": "Avez-vous déjà travaillé avec d'autres prestataires ?",
			"business.field.providers.placeholder": "Qui, quand, et ce qui a fonctionné ou non",
			"business.field.budget.label": "Budget mensuel à investir dans votre activité en ligne",
			"business.field.budget.placeholder": "ex. 200 € / mois",
			"business.update": "Mettre à jour ma fiche",
			"business.validated": "Fiche validée",
			"business.saving": "Enregistrement…",
			"business.autosaved": "Enregistré automatiquement",
			"business.autosaveHint": "Chaque champ est enregistré au fil de l'eau.",
			"business.saved": "Votre fiche business est enregistrée",
			"business.incomplete": "Merci de renseigner les champs obligatoires marqués d'un *",
			"business.error": "Impossible d'enregistrer votre fiche business",
			"business.gate": "Complétez votre fiche business pour continuer.",
			"cta.continue": "Je suis prêt — passer à mon brief",
			"done.title": "Étape de bienvenue terminée",
			"done.body": "Votre brief est l'étape suivante. Prenez votre temps — tout s'enregistre au fil de l'eau.",
			"done.cta": "Ouvrir mon brief",
			"error.default": "Impossible d'enregistrer votre progression",
			"celebration.title": "Bienvenue à bord",
			"celebration.subtitle": "Donnons forme à votre projet.",
			"step.guide.title": "Comment nous travaillons ensemble",
			"step.guide.hint": "Lisez le guide, puis confirmez les trois points ci-dessous.",
			"step.guide.short": "Guide",
			"step.guide.error": "Cochez les trois points pour continuer.",
			"step.activity.title": "Votre activité",
			"step.activity.hint": "Ce que vous vendez, votre marché et ce qui vous manque en ligne.",
			"step.activity.short": "Activité",
			"step.contact.title": "Contact & localisation",
			"step.contact.hint": "Comment vos clients vous joignent et où se trouve votre commerce.",
			"step.contact.short": "Contact",
			"step.presence.title": "Présence en ligne",
			"step.presence.hint": "Laissez vide ce que vous n'avez pas encore — nous vous conseillerons.",
			"step.presence.short": "Présence",
			"step.context.title": "Historique & budget",
			"step.context.hint": "Anciens prestataires et ce que vous pouvez investir chaque mois.",
			"step.context.short": "Budget",
			"step.recap.title": "Relisez votre fiche",
			"step.recap.hint": "Vérifiez chaque réponse, corrigez si besoin, puis validez.",
			"step.recap.short": "Récap",
			"step.error": "Remplissez les champs obligatoires de cette étape pour continuer.",
			"step.field.required": "Cette réponse est obligatoire.",
			"progress.label": "Étape {current} sur {total}",
			"progress.remaining": "{done}/{total} réponses obligatoires",
			"progress.nav": "Étapes du parcours de bienvenue",
			"progress.hint": "Fiche business : {done}/{total} réponses",
			"nav.back": "Retour",
			"nav.next": "Suivant",
			"nav.download": "Télécharger ma fiche",
			"recap.edit": "Modifier",
			"recap.empty": "Non renseigné",
			"recap.ready": "Tout est là — validez pour passer à votre brief.",
			"recap.pending": "Il manque encore des réponses obligatoires.",
			"doc.title": "Fiche business",
			"doc.subtitle": "Informations transmises par le client pour ce projet.",
			"doc.blankNotice": "Modèle vierge — imprimez-le et remplissez-le à la main si vous préférez.",
			"doc.notProvided": "—",
			"doc.meta.client": "Client",
			"doc.meta.project": "Projet",
			"doc.meta.date": "Date",
			"doc.meta.status": "Statut",
			"doc.status.draft": "Brouillon",
			"doc.status.validated": "Validée",
			"doc.footer": "Wayne-Web — fiche business générée depuis le portail client."
		},
		de: {
			title: "Willkommensdokument",
			greeting: "Willkommen an Bord, {name}.",
			subtitle: "Fünf Minuten, um unsere Zusammenarbeit zu verstehen — dann starten wir.",
			"how.title": "So arbeiten wir",
			"how.rhythm.title": "Ein klarer Rhythmus",
			"how.rhythm.body": "Ein Schritt nach dem anderen. Das Portal zeigt immer die eine nächste Aktion.",
			"how.channels.title": "Ein Ort",
			"how.channels.body": "Dokumente, Rechnungen und Entscheidungen leben hier — nie im Postfach verloren.",
			"how.response.title": "Reaktionszeit",
			"how.response.body": "Wir antworten innerhalb eines Werktags, meist deutlich schneller.",
			"how.manager.title": "Ihr Kontakt",
			"how.manager.body": "{manager} begleitet Ihr Projekt vom Briefing bis zum Launch.",
			"steps.title": "Ihr Weg",
			"steps.hint": "Sie wissen immer, wo Sie stehen und auf wen gewartet wird.",
			"expect.title": "Was wir voneinander erwarten",
			"expect.you.title": "Von Ihnen",
			"expect.you.1": "Ehrliche Antworten im Briefing — Details zählen mehr als Formulierung.",
			"expect.you.2": "Inhalte und Zugänge, wenn wir darum bitten.",
			"expect.you.3": "Feedback gesammelt in einem Durchgang, damit es schnell geht.",
			"expect.us.title": "Von uns",
			"expect.us.1": "Eine Umsetzung, die Ihrem bestätigten Briefing entspricht.",
			"expect.us.2": "Sichtbarer Fortschritt, keine stillen Wochen.",
			"expect.us.3": "Eine Website, die Sie ohne uns betreiben können.",
			"checklist.title": "Bevor Sie weitergehen",
			"checklist.subtitle": "Haken Sie an, was zutrifft — wird automatisch gespeichert.",
			"checklist.read": "Ich habe gelesen, wie wir zusammenarbeiten.",
			"checklist.content": "Ich weiß, welche Inhalte ich vorbereiten muss.",
			"checklist.access": "Ich kann die Zugänge bereitstellen, falls nötig.",
			"business.section.activity": "Tätigkeit",
			"business.section.contact": "Kontakt & Standort",
			"business.section.presence": "Social-Media-Präsenz",
			"business.section.context": "Historie & Budget",
			"business.field.products.label": "Verkaufte Produkte oder Dienstleistungen",
			"business.field.products.placeholder": "z. B. handgemachte Möbel, Lieferung, Beratung…",
			"business.field.sector.label": "Branche",
			"business.field.sector.placeholder": "z. B. Gastronomie, Handel, Bau",
			"business.field.siret.label": "Handelsregister-/USt-Nummer",
			"business.field.siret.placeholder": "123 456 789 00012",
			"business.field.since.label": "Gegründet am",
			"business.field.needs.label": "Was fehlt Ihnen online konkret?",
			"business.field.needs.placeholder": "z. B. keine Onlinebestellungen, unsichtbar bei Google, kein professionelles Bild…",
			"business.field.phone.label": "Telefon",
			"business.field.phone.placeholder": "+49 151 23456789",
			"business.field.whatsapp.label": "WhatsApp",
			"business.field.whatsapp.placeholder": "Wie Telefon oder andere Nummer",
			"business.field.email.label": "Geschäftliche E-Mail",
			"business.field.email.placeholder": "kontakt@ihrbetrieb.de",
			"business.field.address.label": "Geschäftsadresse",
			"business.field.address.placeholder": "Straße, Nummer, Stadt",
			"business.field.facebook.label": "Facebook",
			"business.field.facebook.placeholder": "Link oder Seitenname",
			"business.field.instagram.label": "Instagram",
			"business.field.instagram.placeholder": "@ihrprofil",
			"business.field.otherSocial.label": "Weitere Netzwerke",
			"business.field.otherSocial.placeholder": "TikTok, LinkedIn, Google Business…",
			"business.field.providers.label": "Haben Sie schon mit anderen Dienstleistern gearbeitet?",
			"business.field.providers.placeholder": "Wer, wann und was funktionierte oder nicht",
			"business.field.budget.label": "Monatliches Budget für Ihren Online-Auftritt",
			"business.field.budget.placeholder": "z. B. 200 € / Monat",
			"business.update": "Profil aktualisieren",
			"business.validated": "Profil bestätigt",
			"business.saving": "Speichern…",
			"business.autosaved": "Automatisch gespeichert",
			"business.autosaveHint": "Jedes Feld wird laufend gespeichert.",
			"business.saved": "Ihr Unternehmensprofil ist gespeichert",
			"business.incomplete": "Bitte füllen Sie die mit * markierten Pflichtfelder aus",
			"business.error": "Ihr Unternehmensprofil konnte nicht gespeichert werden",
			"business.gate": "Vervollständigen Sie Ihr Unternehmensprofil, um fortzufahren.",
			"cta.continue": "Ich bin bereit — weiter zum Briefing",
			"done.title": "Willkommensschritt abgeschlossen",
			"done.body": "Ihr Briefing ist der nächste Schritt. Nehmen Sie sich Zeit — es speichert laufend.",
			"done.cta": "Briefing öffnen",
			"error.default": "Ihr Fortschritt konnte nicht gespeichert werden",
			"celebration.title": "Willkommen an Bord",
			"celebration.subtitle": "Bringen wir Ihr Projekt in Form.",
			"step.guide.title": "So arbeiten wir zusammen",
			"step.guide.hint": "Lesen Sie den Leitfaden und bestätigen Sie die drei Punkte unten.",
			"step.guide.short": "Leitfaden",
			"step.guide.error": "Bestätigen Sie die drei Punkte, um fortzufahren.",
			"step.activity.title": "Ihr Geschäft",
			"step.activity.hint": "Was Sie verkaufen, Ihr Markt und was online fehlt.",
			"step.activity.short": "Geschäft",
			"step.contact.title": "Kontakt & Standort",
			"step.contact.hint": "Wie Kunden Sie erreichen und wo Ihr Geschäft liegt.",
			"step.contact.short": "Kontakt",
			"step.presence.title": "Social-Media-Präsenz",
			"step.presence.hint": "Lassen Sie leer, was Sie noch nicht haben — wir beraten Sie.",
			"step.presence.short": "Präsenz",
			"step.context.title": "Historie & Budget",
			"step.context.hint": "Frühere Dienstleister und Ihr monatliches Budget.",
			"step.context.short": "Budget",
			"step.recap.title": "Ihr Datenblatt prüfen",
			"step.recap.hint": "Prüfen Sie jede Antwort, korrigieren Sie sie und bestätigen Sie.",
			"step.recap.short": "Übersicht",
			"step.error": "Füllen Sie die Pflichtfelder dieses Schritts aus, um fortzufahren.",
			"step.field.required": "Diese Antwort ist erforderlich.",
			"progress.label": "Schritt {current} von {total}",
			"progress.remaining": "{done}/{total} Pflichtangaben",
			"progress.nav": "Schritte des Willkommensparcours",
			"progress.hint": "Firmenprofil: {done}/{total} Angaben",
			"nav.back": "Zurück",
			"nav.next": "Weiter",
			"nav.download": "Datenblatt herunterladen",
			"recap.edit": "Bearbeiten",
			"recap.empty": "Nicht angegeben",
			"recap.ready": "Alles da — bestätigen Sie, um zum Briefing zu gehen.",
			"recap.pending": "Es fehlen noch Pflichtangaben.",
			"doc.title": "Firmenprofil",
			"doc.subtitle": "Vom Kunden für dieses Projekt übermittelte Angaben.",
			"doc.blankNotice": "Leervorlage — drucken Sie sie aus und füllen Sie sie bei Bedarf handschriftlich aus.",
			"doc.notProvided": "—",
			"doc.meta.client": "Kunde",
			"doc.meta.project": "Projekt",
			"doc.meta.date": "Datum",
			"doc.meta.status": "Status",
			"doc.status.draft": "Entwurf",
			"doc.status.validated": "Bestätigt",
			"doc.footer": "Wayne-Web — Firmenprofil aus dem Kundenportal erstellt."
		},
		es: {
			title: "Documento de bienvenida",
			greeting: "Bienvenido a bordo, {name}.",
			subtitle: "Cinco minutos para entender cómo trabajamos juntos — y empezamos.",
			"how.title": "Cómo trabajamos",
			"how.rhythm.title": "Un ritmo claro",
			"how.rhythm.body": "Un paso a la vez. El portal siempre muestra la única acción siguiente.",
			"how.channels.title": "Un solo lugar",
			"how.channels.body": "Documentos, facturas y decisiones están aquí — nunca perdidos en un correo.",
			"how.response.title": "Tiempo de respuesta",
			"how.response.body": "Respondemos en un día laborable, normalmente mucho antes.",
			"how.manager.title": "Tu contacto",
			"how.manager.body": "{manager} acompaña tu proyecto desde el brief hasta el lanzamiento.",
			"steps.title": "Tu recorrido",
			"steps.hint": "Siempre sabrás dónde estás y a quién esperamos.",
			"expect.title": "Qué esperamos uno del otro",
			"expect.you.title": "De ti",
			"expect.you.1": "Respuestas sinceras en el brief — el detalle importa más que la forma.",
			"expect.you.2": "Contenido y accesos cuando los pidamos.",
			"expect.you.3": "Comentarios agrupados en una sola vuelta, para avanzar rápido.",
			"expect.us.title": "De nosotros",
			"expect.us.1": "Un desarrollo fiel a tu brief validado.",
			"expect.us.2": "Progreso visible, sin semanas de silencio.",
			"expect.us.3": "Un sitio que puedes gestionar sin nosotros.",
			"checklist.title": "Antes de continuar",
			"checklist.subtitle": "Marca lo que sea cierto — se guarda automáticamente.",
			"checklist.read": "He leído cómo trabajamos juntos.",
			"checklist.content": "Sé qué contenido debo preparar.",
			"checklist.access": "Puedo facilitar los accesos si es necesario.",
			"business.section.activity": "Actividad",
			"business.section.contact": "Contacto y ubicación",
			"business.section.presence": "Presencia social",
			"business.section.context": "Historial y presupuesto",
			"business.field.products.label": "Productos o servicios vendidos",
			"business.field.products.placeholder": "p. ej. muebles artesanales, reparto, consultoría…",
			"business.field.sector.label": "Sector de actividad",
			"business.field.sector.placeholder": "p. ej. hostelería, comercio, construcción",
			"business.field.siret.label": "Número de empresa (CIF / IVA)",
			"business.field.siret.placeholder": "B12345678",
			"business.field.since.label": "Fecha de inicio del negocio",
			"business.field.needs.label": "¿Qué te falta concretamente en línea?",
			"business.field.needs.placeholder": "p. ej. sin pedidos en línea, invisible en Google, imagen poco profesional…",
			"business.field.phone.label": "Teléfono",
			"business.field.phone.placeholder": "+34 612 34 56 78",
			"business.field.whatsapp.label": "WhatsApp",
			"business.field.whatsapp.placeholder": "Igual que el teléfono u otro número",
			"business.field.email.label": "Email profesional",
			"business.field.email.placeholder": "contacto@tunegocio.com",
			"business.field.address.label": "Dirección del negocio",
			"business.field.address.placeholder": "Calle, número, ciudad",
			"business.field.facebook.label": "Facebook",
			"business.field.facebook.placeholder": "Enlace o nombre de la página",
			"business.field.instagram.label": "Instagram",
			"business.field.instagram.placeholder": "@tucuenta",
			"business.field.otherSocial.label": "Otras redes",
			"business.field.otherSocial.placeholder": "TikTok, LinkedIn, Google Business…",
			"business.field.providers.label": "¿Ya has trabajado con otros proveedores?",
			"business.field.providers.placeholder": "Quién, cuándo y qué funcionó o no",
			"business.field.budget.label": "Presupuesto mensual para tu actividad en línea",
			"business.field.budget.placeholder": "p. ej. 200 € / mes",
			"business.update": "Actualizar mi ficha",
			"business.validated": "Ficha validada",
			"business.saving": "Guardando…",
			"business.autosaved": "Guardado automáticamente",
			"business.autosaveHint": "Cada campo se guarda sobre la marcha.",
			"business.saved": "Tu ficha de negocio está guardada",
			"business.incomplete": "Completa los campos obligatorios marcados con *",
			"business.error": "No se pudo guardar tu ficha de negocio",
			"business.gate": "Completa tu ficha de negocio para continuar.",
			"cta.continue": "Estoy listo — ir a mi brief",
			"done.title": "Paso de bienvenida completado",
			"done.body": "Tu brief es el siguiente paso. Tómate tu tiempo — se guarda sobre la marcha.",
			"done.cta": "Abrir mi brief",
			"error.default": "No se pudo guardar tu progreso",
			"celebration.title": "Bienvenido a bordo",
			"celebration.subtitle": "Demos forma a tu proyecto.",
			"step.guide.title": "Cómo trabajamos juntos",
			"step.guide.hint": "Lee la guía y confirma los tres puntos siguientes.",
			"step.guide.short": "Guía",
			"step.guide.error": "Marca los tres puntos para continuar.",
			"step.activity.title": "Tu actividad",
			"step.activity.hint": "Qué vendes, tu mercado y qué te falta en línea.",
			"step.activity.short": "Actividad",
			"step.contact.title": "Contacto y ubicación",
			"step.contact.hint": "Cómo te contactan tus clientes y dónde está tu negocio.",
			"step.contact.short": "Contacto",
			"step.presence.title": "Presencia social",
			"step.presence.hint": "Deja en blanco lo que aún no tengas — te asesoraremos.",
			"step.presence.short": "Presencia",
			"step.context.title": "Historial y presupuesto",
			"step.context.hint": "Proveedores anteriores y lo que puedes invertir cada mes.",
			"step.context.short": "Presupuesto",
			"step.recap.title": "Revisa tu ficha",
			"step.recap.hint": "Comprueba cada respuesta, corrige lo necesario y valida.",
			"step.recap.short": "Resumen",
			"step.error": "Completa los campos obligatorios de este paso para continuar.",
			"step.field.required": "Esta respuesta es obligatoria.",
			"progress.label": "Paso {current} de {total}",
			"progress.remaining": "{done}/{total} respuestas obligatorias",
			"progress.nav": "Pasos del recorrido de bienvenida",
			"progress.hint": "Ficha de empresa: {done}/{total} respuestas",
			"nav.back": "Atrás",
			"nav.next": "Siguiente",
			"nav.download": "Descargar mi ficha",
			"recap.edit": "Editar",
			"recap.empty": "Sin completar",
			"recap.ready": "Todo listo — valida para pasar a tu brief.",
			"recap.pending": "Aún faltan respuestas obligatorias.",
			"doc.title": "Ficha de empresa",
			"doc.subtitle": "Información facilitada por el cliente para este proyecto.",
			"doc.blankNotice": "Plantilla en blanco — imprímela y rellénala a mano si lo prefieres.",
			"doc.notProvided": "—",
			"doc.meta.client": "Cliente",
			"doc.meta.project": "Proyecto",
			"doc.meta.date": "Fecha",
			"doc.meta.status": "Estado",
			"doc.status.draft": "Borrador",
			"doc.status.validated": "Validada",
			"doc.footer": "Wayne-Web — ficha de empresa generada desde el portal del cliente."
		},
		ru: {
			title: "Приветственный документ",
			greeting: "Добро пожаловать, {name}.",
			subtitle: "Пять минут, чтобы понять, как мы работаем вместе — и начинаем.",
			"how.title": "Как мы работаем",
			"how.rhythm.title": "Понятный ритм",
			"how.rhythm.body": "Шаг за шагом. Портал всегда показывает единственное следующее действие.",
			"how.channels.title": "Одно место",
			"how.channels.body": "Документы, счёта и решения здесь — ничего не теряется в почте.",
			"how.response.title": "Время ответа",
			"how.response.body": "Отвечаем в течение одного рабочего дня, обычно гораздо быстрее.",
			"how.manager.title": "Ваш контакт",
			"how.manager.body": "{manager} ведёт ваш проект от брифа до запуска.",
			"steps.title": "Ваш путь",
			"steps.hint": "Вы всегда знаете, где вы и чьего шага мы ждём.",
			"expect.title": "Чего мы ждём друг от друга",
			"expect.you.title": "От вас",
			"expect.you.1": "Честные ответы в брифе — детали важнее формулировок.",
			"expect.you.2": "Контент и доступы, когда мы их запросим.",
			"expect.you.3": "Правки одним пакетом, чтобы двигаться быстро.",
			"expect.us.title": "От нас",
			"expect.us.1": "Реализация, соответствующая подтверждённому брифу.",
			"expect.us.2": "Видимый прогресс без недель молчания.",
			"expect.us.3": "Сайт, которым вы сможете управлять без нас.",
			"checklist.title": "Перед тем как продолжить",
			"checklist.subtitle": "Отметьте верное — сохраняется автоматически.",
			"checklist.read": "Я прочитал, как мы работаем вместе.",
			"checklist.content": "Я знаю, какой контент нужно подготовить.",
			"checklist.access": "Я могу предоставить доступы при необходимости.",
			"business.section.activity": "Деятельность",
			"business.section.contact": "Контакты и адрес",
			"business.section.presence": "Соцсети",
			"business.section.context": "История и бюджет",
			"business.field.products.label": "Продаваемые товары или услуги",
			"business.field.products.placeholder": "напр. мебель на заказ, доставка, консалтинг…",
			"business.field.sector.label": "Сфера деятельности",
			"business.field.sector.placeholder": "напр. общепит, розница, строительство",
			"business.field.siret.label": "Номер компании / ИНН",
			"business.field.siret.placeholder": "1234567890",
			"business.field.since.label": "Дата основания бизнеса",
			"business.field.needs.label": "Чего вам конкретно не хватает онлайн?",
			"business.field.needs.placeholder": "напр. нет онлайн-заказов, не видно в Google, слабый имидж…",
			"business.field.phone.label": "Телефон",
			"business.field.phone.placeholder": "+7 912 345 67 89",
			"business.field.whatsapp.label": "WhatsApp",
			"business.field.whatsapp.placeholder": "Тот же номер или другой",
			"business.field.email.label": "Рабочий email",
			"business.field.email.placeholder": "contact@vashbiznes.com",
			"business.field.address.label": "Адрес бизнеса",
			"business.field.address.placeholder": "Улица, дом, город",
			"business.field.facebook.label": "Facebook",
			"business.field.facebook.placeholder": "Ссылка или название страницы",
			"business.field.instagram.label": "Instagram",
			"business.field.instagram.placeholder": "@вашаккаунт",
			"business.field.otherSocial.label": "Другие сети",
			"business.field.otherSocial.placeholder": "TikTok, LinkedIn, Google Business…",
			"business.field.providers.label": "Вы уже работали с другими подрядчиками?",
			"business.field.providers.placeholder": "Кто, когда и что получилось или нет",
			"business.field.budget.label": "Месячный бюджет на онлайн-развитие",
			"business.field.budget.placeholder": "напр. 200 € / месяц",
			"business.update": "Обновить профиль",
			"business.validated": "Профиль подтверждён",
			"business.saving": "Сохранение…",
			"business.autosaved": "Сохранено автоматически",
			"business.autosaveHint": "Каждое поле сохраняется по ходу.",
			"business.saved": "Профиль вашего бизнеса сохранён",
			"business.incomplete": "Заполните обязательные поля, отмеченные *",
			"business.error": "Не удалось сохранить профиль бизнеса",
			"business.gate": "Заполните профиль бизнеса, чтобы продолжить.",
			"cta.continue": "Я готов — перейти к брифу",
			"done.title": "Приветственный шаг завершён",
			"done.body": "Следующий шаг — ваш бриф. Не спешите: всё сохраняется по ходу.",
			"done.cta": "Открыть бриф",
			"error.default": "Не удалось сохранить прогресс",
			"celebration.title": "Добро пожаловать",
			"celebration.subtitle": "Придадим форму вашему проекту.",
			"step.guide.title": "Как мы работаем вместе",
			"step.guide.hint": "Прочитайте руководство и подтвердите три пункта ниже.",
			"step.guide.short": "Гид",
			"step.guide.error": "Отметьте три пункта, чтобы продолжить.",
			"step.activity.title": "Ваша деятельность",
			"step.activity.hint": "Что вы продаёте, ваш рынок и чего не хватает онлайн.",
			"step.activity.short": "Деятельность",
			"step.contact.title": "Контакты и адрес",
			"step.contact.hint": "Как клиенты связываются с вами и где находится бизнес.",
			"step.contact.short": "Контакты",
			"step.presence.title": "Соцсети",
			"step.presence.hint": "Оставьте пустым то, чего пока нет — мы подскажем.",
			"step.presence.short": "Соцсети",
			"step.context.title": "История и бюджет",
			"step.context.hint": "Прежние подрядчики и месячный бюджет.",
			"step.context.short": "Бюджет",
			"step.recap.title": "Проверьте анкету",
			"step.recap.hint": "Проверьте ответы, исправьте при необходимости и подтвердите.",
			"step.recap.short": "Итог",
			"step.error": "Заполните обязательные поля этого шага, чтобы продолжить.",
			"step.field.required": "Это поле обязательно.",
			"progress.label": "Шаг {current} из {total}",
			"progress.remaining": "{done}/{total} обязательных ответов",
			"progress.nav": "Шаги приветственного пути",
			"progress.hint": "Анкета компании: {done}/{total} ответов",
			"nav.back": "Назад",
			"nav.next": "Далее",
			"nav.download": "Скачать анкету",
			"recap.edit": "Изменить",
			"recap.empty": "Не заполнено",
			"recap.ready": "Всё готово — подтвердите, чтобы перейти к брифу.",
			"recap.pending": "Ещё не хватает обязательных ответов.",
			"doc.title": "Анкета компании",
			"doc.subtitle": "Данные, предоставленные клиентом по проекту.",
			"doc.blankNotice": "Пустой шаблон — распечатайте и заполните от руки, если удобнее.",
			"doc.notProvided": "—",
			"doc.meta.client": "Клиент",
			"doc.meta.project": "Проект",
			"doc.meta.date": "Дата",
			"doc.meta.status": "Статус",
			"doc.status.draft": "Черновик",
			"doc.status.validated": "Подтверждена",
			"doc.footer": "Wayne-Web — анкета компании из клиентского портала."
		}
	};
}));
var dictionaries;
var init_locales = __esmMin((() => {
	init_admin();
	init_agreement();
	init_auth$2();
	init_billing();
	init_brief();
	init_common();
	init_delivery();
	init_documents();
	init_journey$1();
	init_landing();
	init_onboarding$2();
	init_profile();
	init_project();
	init_services();
	init_support();
	init_welcome();
	dictionaries = {
		admin,
		agreement,
		auth,
		billing,
		brief,
		common,
		delivery,
		documents,
		journey,
		landing,
		onboarding,
		profile,
		project,
		services,
		support,
		welcome
	};
}));
function flatten(locale) {
	const out = {};
	for (const [ns, values] of Object.entries(dictionaries)) for (const [key, value] of Object.entries(values[locale] ?? {})) out[`${ns}.${key}`] = value;
	return out;
}
function isLocale(value) {
	return typeof value === "string" && LOCALES.includes(value);
}
function I18nProvider({ children }) {
	const [locale, setLocaleState] = (0, import_react.useState)(DEFAULT_LOCALE);
	(0, import_react.useEffect)(() => {
		const stored = window.localStorage.getItem(STORAGE_KEY$1);
		if (isLocale(stored)) {
			setLocaleState(stored);
			return;
		}
		const nav = window.navigator.language?.slice(0, 2).toLowerCase();
		if (isLocale(nav)) setLocaleState(nav);
	}, []);
	(0, import_react.useEffect)(() => {
		document.documentElement.lang = locale;
	}, [locale]);
	const setLocale = (0, import_react.useCallback)((next) => {
		setLocaleState(next);
		window.localStorage.setItem(STORAGE_KEY$1, next);
	}, []);
	const t = (0, import_react.useCallback)((key, vars) => {
		const raw = FLAT[locale]?.[key] ?? FLAT[DEFAULT_LOCALE]?.[key] ?? key;
		if (!vars) return raw;
		return raw.replace(/\{(\w+)\}/g, (_m, name) => vars[name] === void 0 ? `{${name}}` : String(vars[name]));
	}, [locale]);
	const value = (0, import_react.useMemo)(() => ({
		locale,
		setLocale,
		t
	}), [
		locale,
		setLocale,
		t
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I18nContext.Provider, {
		value,
		children
	});
}
function useI18n() {
	const ctx = (0, import_react.useContext)(I18nContext);
	if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
	return ctx;
}
function useT() {
	return useI18n().t;
}
var LOCALES;
var LOCALE_META;
var STORAGE_KEY$1;
var DEFAULT_LOCALE;
var FLAT;
var I18nContext;
var init_i18n = __esmMin((() => {
	init_locales();
	LOCALES = [
		"fr",
		"en",
		"de",
		"es",
		"ru"
	];
	LOCALE_META = {
		fr: {
			label: "Français",
			short: "FR"
		},
		en: {
			label: "English",
			short: "EN"
		},
		de: {
			label: "Deutsch",
			short: "DE"
		},
		es: {
			label: "Español",
			short: "ES"
		},
		ru: {
			label: "Русский",
			short: "RU"
		}
	};
	STORAGE_KEY$1 = "wayne.locale";
	DEFAULT_LOCALE = "en";
	FLAT = LOCALES.reduce((acc, locale) => {
		acc[locale] = flatten(locale);
		return acc;
	}, {});
	I18nContext = (0, import_react.createContext)(null);
}));
function applyTheme(theme) {
	const root = document.documentElement;
	root.classList.toggle("dark", theme === "dark");
	root.classList.toggle("light", theme === "light");
	root.style.colorScheme = theme;
}
function ThemeProvider({ children }) {
	const [theme, setThemeState] = (0, import_react.useState)("dark");
	(0, import_react.useEffect)(() => {
		const stored = window.localStorage.getItem(STORAGE_KEY);
		const next = stored === "light" || stored === "dark" ? stored : window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
		setThemeState(next);
		applyTheme(next);
	}, []);
	const setTheme = (0, import_react.useCallback)((next) => {
		setThemeState(next);
		applyTheme(next);
		window.localStorage.setItem(STORAGE_KEY, next);
	}, []);
	const toggleTheme = (0, import_react.useCallback)(() => setTheme(theme === "dark" ? "light" : "dark"), [theme, setTheme]);
	const value = (0, import_react.useMemo)(() => ({
		theme,
		setTheme,
		toggleTheme
	}), [
		theme,
		setTheme,
		toggleTheme
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeContext.Provider, {
		value,
		children
	});
}
function useTheme() {
	const ctx = (0, import_react.useContext)(ThemeContext);
	if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
	return ctx;
}
var STORAGE_KEY;
var ThemeContext;
var init_theme = __esmMin((() => {
	STORAGE_KEY = "wayne.theme";
	ThemeContext = (0, import_react.createContext)(null);
}));
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "dark",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$20.useRouteContext();
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		const { data } = supabase.auth.onAuthStateChange((event) => {
			if (event !== "SIGNED_IN" && event !== "SIGNED_OUT" && event !== "USER_UPDATED") return;
			router.invalidate();
			if (event !== "SIGNED_OUT") queryClient.invalidateQueries();
		});
		return () => data.subscription.unsubscribe();
	}, [router, queryClient]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(I18nProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {})] }) })
	});
}
var Route$20;
var init___root = __esmMin((() => {
	init_styles();
	init_sonner();
	init_client();
	init_i18n();
	init_theme();
	Route$20 = createRootRouteWithContext()({
		head: () => ({
			meta: [
				{ charSet: "utf-8" },
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1"
				},
				{ title: "Wayne Client Portal" },
				{
					name: "description",
					content: "The premium client space for Wayne-Web projects: agreement, payment, brief, progress and delivery."
				},
				{
					name: "author",
					content: "Wayne-Web"
				},
				{
					property: "og:title",
					content: "Wayne Client Portal"
				},
				{
					property: "og:description",
					content: "Follow your Wayne-Web project from agreement to launch in one calm space."
				},
				{
					property: "og:type",
					content: "website"
				},
				{
					property: "og:image",
					content: "/og-image.png"
				},
				{
					property: "og:image:width",
					content: "1200"
				},
				{
					property: "og:image:height",
					content: "630"
				},
				{
					name: "twitter:card",
					content: "summary_large_image"
				},
				{
					name: "twitter:image",
					content: "/og-image.png"
				}
			],
			links: [
				{
					rel: "preconnect",
					href: "https://fonts.googleapis.com"
				},
				{
					rel: "preconnect",
					href: "https://fonts.gstatic.com",
					crossOrigin: "anonymous"
				},
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=Manrope:wght@400;500;600&display=swap"
				},
				{
					rel: "stylesheet",
					href: styles_default
				},
				{
					rel: "icon",
					href: "/icon.svg",
					type: "image/svg+xml"
				},
				{
					rel: "icon",
					href: "/favicon-32x32.png",
					sizes: "32x32",
					type: "image/png"
				},
				{
					rel: "icon",
					href: "/favicon-16x16.png",
					sizes: "16x16",
					type: "image/png"
				},
				{
					rel: "apple-touch-icon",
					href: "/apple-touch-icon.png",
					sizes: "180x180"
				},
				{
					rel: "icon",
					href: "/favicon.ico",
					type: "image/x-icon"
				}
			]
		}),
		shellComponent: RootShell,
		component: RootComponent,
		notFoundComponent: NotFoundComponent,
		errorComponent: ErrorComponent
	});
}));
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var init_utils = __esmMin((() => {}));
/**
* Premium glass surface with a subtle reflection that follows the cursor.
* All visuals come from design tokens in styles.css.
*/
function GlassCard({ variant = "default", interactive = true, glow = false, className, children, ...props }) {
	const ref = (0, import_react.useRef)(null);
	function handleMove(event) {
		const el = ref.current;
		if (!el) return;
		const rect = el.getBoundingClientRect();
		el.style.setProperty("--mx", `${(event.clientX - rect.left) / rect.width * 100}%`);
		el.style.setProperty("--my", `${(event.clientY - rect.top) / rect.height * 100}%`);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		onMouseMove: handleMove,
		className: cn("glass group/glass overflow-hidden", interactive && "glass-interactive", variant === "strong" && "glass-strong", variant === "active" && "glass-active", variant === "dim" && "glass-dim", className),
		...props,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/glass:opacity-100",
				style: { background: "radial-gradient(420px circle at var(--mx, 50%) var(--my, 0%), oklch(1 0 0 / 7%), transparent 70%)" }
			}),
			glow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute -inset-px opacity-70",
				style: { background: "radial-gradient(60% 100% at 50% -20%, oklch(0.78 0.13 214 / 22%), transparent 70%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative",
				children
			})
		]
	});
}
var init_GlassCard = __esmMin((() => {
	init_utils();
}));
var routes_exports = /* @__PURE__ */ __exportAll({ component: () => Landing });
function Landing() {
	const navigate = useNavigate();
	const t = useT();
	const FEATURES = [
		{
			icon: FilePenLine,
			title: t("landing.features.sign.title"),
			body: t("landing.features.sign.body")
		},
		{
			icon: CreditCard,
			title: t("landing.features.pay.title"),
			body: t("landing.features.pay.body")
		},
		{
			icon: ChartLine,
			title: t("landing.features.follow.title"),
			body: t("landing.features.follow.body")
		},
		{
			icon: Sparkles,
			title: t("landing.features.grow.title"),
			body: t("landing.features.grow.body")
		}
	];
	(0, import_react.useEffect)(() => {
		supabase.auth.getSession().then(({ data }) => {
			if (data.session) navigate({
				to: "/dashboard",
				replace: true
			});
		});
	}, [navigate]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen px-5 py-10 sm:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "mx-auto flex max-w-5xl items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex size-8 items-center justify-center rounded-lg border border-primary/40 bg-primary/15 font-display text-sm font-bold text-primary",
					children: "W"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-sm font-semibold",
					children: "Wayne"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/auth",
				className: "rounded-xl border border-border px-4 py-2 text-sm transition-colors hover:bg-secondary/60",
				children: t("landing.nav.signIn")
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto mt-20 max-w-5xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 22
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					duration: .6,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground",
						children: t("landing.hero.eyebrow")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-5 font-display text-5xl font-semibold leading-[1.05] sm:text-6xl",
						children: [t("landing.hero.title.line1"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-gradient",
							children: t("landing.hero.title.line2")
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-lg text-muted-foreground",
						children: t("landing.hero.subtitle")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/auth",
						className: "mt-9 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90",
						children: [
							t("landing.hero.cta"),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: FEATURES.map((feature, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 18
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .5,
						delay: .08 * index
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
						className: "h-full p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(feature.icon, { className: "size-5 text-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 font-medium",
								children: feature.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: feature.body
							})
						]
					})
				}, feature.title))
			})]
		})]
	});
}
var init_routes$1 = __esmMin((() => {
	init_GlassCard();
	init_client();
	init_i18n();
}));
var $$splitComponentImporter$19;
var Route$19;
var init_routes = __esmMin((() => {
	$$splitComponentImporter$19 = () => Promise.resolve().then(() => (init_routes$1(), routes_exports));
	Route$19 = createFileRoute("/")({
		head: () => ({ meta: [
			{ title: "Wayne Client Portal — Your project, beautifully clear" },
			{
				name: "description",
				content: "The premium client space for Wayne-Web projects: sign, pay, brief, follow progress and receive your delivery in one calm place."
			},
			{
				property: "og:title",
				content: "Wayne Client Portal — Your project, beautifully clear"
			},
			{
				property: "og:description",
				content: "Sign, pay, brief and follow your Wayne-Web project in one calm, premium client space."
			}
		] }),
		component: lazyRouteComponent($$splitComponentImporter$19, "component")
	});
}));
var route_exports = /* @__PURE__ */ __exportAll({ component: () => SplitComponent$1 });
var SplitComponent$1;
var init_route$1 = __esmMin((() => {
	SplitComponent$1 = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {});
}));
var $$splitComponentImporter$18;
var Route$18;
var init_route = __esmMin((() => {
	init_client();
	$$splitComponentImporter$18 = () => Promise.resolve().then(() => (init_route$1(), route_exports));
	Route$18 = createFileRoute("/_authenticated")({
		ssr: false,
		beforeLoad: async () => {
			const { data, error } = await supabase.auth.getUser();
			if (error || !data.user) throw redirect({ to: "/auth" });
			return { user: data.user };
		},
		component: lazyRouteComponent($$splitComponentImporter$18, "component")
	});
}));
var buttonVariants;
var Button;
var init_button = __esmMin((() => {
	init_utils();
	buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
				destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
				outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
				secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
				ghost: "hover:bg-accent hover:text-accent-foreground",
				link: "text-primary underline-offset-4 hover:underline"
			},
			size: {
				default: "h-9 px-4 py-2",
				sm: "h-8 rounded-md px-3 text-xs",
				lg: "h-10 rounded-md px-8",
				icon: "h-9 w-9"
			}
		},
		defaultVariants: {
			variant: "default",
			size: "default"
		}
	});
	Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
			className: cn(buttonVariants({
				variant,
				size,
				className
			})),
			ref,
			...props
		});
	});
	Button.displayName = "Button";
}));
var Input;
var init_input = __esmMin((() => {
	init_utils();
	Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type,
			className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
			ref,
			...props
		});
	});
	Input.displayName = "Input";
}));
var labelVariants;
var Label;
var init_label = __esmMin((() => {
	init_utils();
	labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
	Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
		ref,
		className: cn(labelVariants(), className),
		...props
	}));
	Label.displayName = Root.displayName;
}));
var auth_exports = /* @__PURE__ */ __exportAll({ component: () => AuthPage });
function AuthPage() {
	const navigate = useNavigate();
	const t = useT();
	const [mode, setMode] = (0, import_react.useState)("signup");
	const [fullName, setFullName] = (0, import_react.useState)("");
	const [company, setCompany] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		supabase.auth.getSession().then(({ data }) => {
			if (data.session) navigate({
				to: "/dashboard",
				replace: true
			});
		});
	}, [navigate]);
	async function handleSubmit(event) {
		event.preventDefault();
		setLoading(true);
		try {
			if (mode === "signup") {
				const { error } = await supabase.auth.signUp({
					email,
					password,
					options: {
						emailRedirectTo: `${window.location.origin}/dashboard`,
						data: {
							full_name: fullName,
							company
						}
					}
				});
				if (error) throw error;
				const { error: signInError } = await supabase.auth.signInWithPassword({
					email,
					password
				});
				if (signInError) {
					toast.success(t("auth.toast.accountCreated"));
					setMode("signin");
					return;
				}
				navigate({
					to: "/onboarding",
					replace: true
				});
			} else {
				const { error } = await supabase.auth.signInWithPassword({
					email,
					password
				});
				if (error) throw error;
				navigate({
					to: "/dashboard",
					replace: true
				});
			}
		} catch (error) {
			toast.error(error instanceof Error ? error.message : t("auth.toast.error"));
		} finally {
			setLoading(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center px-5 py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: 18
			},
			animate: {
				opacity: 1,
				y: 0
			},
			transition: {
				duration: .5,
				ease: [
					.22,
					1,
					.36,
					1
				]
			},
			className: "w-full max-w-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mx-auto flex size-11 items-center justify-center rounded-xl border border-primary/40 bg-primary/15 font-display text-lg font-bold text-primary",
						children: "W"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-5 font-display text-3xl font-semibold",
						children: mode === "signup" ? t("auth.title.signup") : t("auth.title.signin")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: mode === "signup" ? t("auth.subtitle.signup") : t("auth.subtitle.signin")
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
				variant: "strong",
				interactive: false,
				className: "p-6 sm:p-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "space-y-4",
					children: [
						mode === "signup" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "name",
								children: t("auth.field.fullName")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "name",
								value: fullName,
								onChange: (e) => setFullName(e.target.value),
								required: true,
								placeholder: t("auth.field.fullName.placeholder")
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "company",
								children: t("auth.field.company")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "company",
								value: company,
								onChange: (e) => setCompany(e.target.value),
								required: true,
								placeholder: t("auth.field.company.placeholder")
							})]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "email",
								children: t("auth.field.email")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "email",
								type: "email",
								value: email,
								onChange: (e) => setEmail(e.target.value),
								required: true,
								placeholder: t("auth.field.email.placeholder")
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "password",
								children: t("auth.field.password")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "password",
								type: "password",
								value: password,
								onChange: (e) => setPassword(e.target.value),
								required: true,
								minLength: 6,
								placeholder: "••••••••"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							size: "lg",
							className: "w-full",
							disabled: loading,
							children: loading ? t("auth.submit.loading") : mode === "signup" ? t("auth.submit.signup") : t("auth.submit.signin")
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 text-center text-sm text-muted-foreground",
					children: [
						mode === "signup" ? t("auth.switch.toSignin") : t("auth.switch.toSignup"),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setMode(mode === "signup" ? "signin" : "signup"),
							className: "font-medium text-primary underline-offset-4 hover:underline",
							children: mode === "signup" ? t("auth.switch.signinAction") : t("auth.switch.signupAction")
						})
					]
				})]
			})]
		})
	});
}
var init_auth$1 = __esmMin((() => {
	init_GlassCard();
	init_button();
	init_input();
	init_label();
	init_client();
	init_i18n();
}));
var $$splitComponentImporter$17;
var Route$17;
var init_auth = __esmMin((() => {
	$$splitComponentImporter$17 = () => Promise.resolve().then(() => (init_auth$1(), auth_exports));
	Route$17 = createFileRoute("/auth")({
		head: () => ({ meta: [
			{ title: "Sign in — Wayne Client Portal" },
			{
				name: "description",
				content: "Access your Wayne Client Portal to follow your project, documents and payments."
			},
			{
				property: "og:title",
				content: "Sign in — Wayne Client Portal"
			},
			{
				property: "og:description",
				content: "Access your Wayne Client Portal to follow your project, documents and payments."
			}
		] }),
		component: lazyRouteComponent($$splitComponentImporter$17, "component")
	});
}));
var DropdownMenu;
var DropdownMenuTrigger;
var DropdownMenuSubTrigger;
var DropdownMenuSubContent;
var DropdownMenuContent;
var DropdownMenuItem;
var DropdownMenuCheckboxItem;
var DropdownMenuRadioItem;
var DropdownMenuLabel;
var DropdownMenuSeparator;
var DropdownMenuShortcut;
var init_dropdown_menu = __esmMin((() => {
	init_utils();
	DropdownMenu = Root2$1;
	DropdownMenuTrigger = Trigger;
	DropdownMenuSubTrigger = import_react.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SubTrigger2, {
		ref,
		className: cn("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "ml-auto" })]
	}));
	DropdownMenuSubTrigger.displayName = SubTrigger2.displayName;
	DropdownMenuSubContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubContent2, {
		ref,
		className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
		...props
	}));
	DropdownMenuSubContent.displayName = SubContent2.displayName;
	DropdownMenuContent = import_react.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2$1, {
		ref,
		sideOffset,
		className: cn("z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
		...props
	}) }));
	DropdownMenuContent.displayName = Content2$1.displayName;
	DropdownMenuItem = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2, {
		ref,
		className: cn("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0", inset && "pl-8", className),
		...props
	}));
	DropdownMenuItem.displayName = Item2.displayName;
	DropdownMenuCheckboxItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CheckboxItem2, {
		ref,
		className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
		}), children]
	}));
	DropdownMenuCheckboxItem.displayName = CheckboxItem2.displayName;
	DropdownMenuRadioItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RadioItem2, {
		ref,
		className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "h-2 w-2 fill-current" }) })
		}), children]
	}));
	DropdownMenuRadioItem.displayName = RadioItem2.displayName;
	DropdownMenuLabel = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label2, {
		ref,
		className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
		...props
	}));
	DropdownMenuLabel.displayName = Label2.displayName;
	DropdownMenuSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator2, {
		ref,
		className: cn("-mx-1 my-1 h-px bg-muted", className),
		...props
	}));
	DropdownMenuSeparator.displayName = Separator2.displayName;
	DropdownMenuShortcut = ({ className, ...props }) => {
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("ml-auto text-xs tracking-widest opacity-60", className),
			...props
		});
	};
	DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
}));
function PreferenceControls({ className }) {
	const { locale, setLocale, t } = useI18n();
	const { theme, toggleTheme } = useTheme();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex items-center gap-2", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuTrigger, {
			"aria-label": t("common.language"),
			className: "inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-secondary/50 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "size-3.5" }), LOCALE_META[locale].short]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuContent, {
			align: "end",
			className: "min-w-40",
			children: LOCALES.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
				onClick: () => setLocale(l),
				className: "justify-between",
				children: [LOCALE_META[l].label, l === locale ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5 text-primary" }) : null]
			}, l))
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: toggleTheme,
			"aria-label": theme === "dark" ? t("common.theme.toLight") : t("common.theme.toDark"),
			title: theme === "dark" ? t("common.theme.toLight") : t("common.theme.toDark"),
			className: "inline-flex size-8 items-center justify-center rounded-full border border-border/70 bg-secondary/50 text-muted-foreground transition-colors hover:text-foreground",
			children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "size-4" })
		})]
	});
}
var init_PreferenceControls = __esmMin((() => {
	init_i18n();
	init_theme();
	init_utils();
	init_dropdown_menu();
}));
var _admin_exports = /* @__PURE__ */ __exportAll({ component: () => AdminLayout });
function AdminLayout() {
	const t = useT();
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	async function signOut() {
		await queryClient.cancelQueries();
		queryClient.clear();
		await supabase.auth.signOut();
		navigate({
			to: "/auth",
			replace: true
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "border-b border-border/60 bg-background/70 backdrop-blur-xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-4 sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/admin",
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-8 items-center justify-center rounded-lg border border-primary/40 bg-primary/15 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display text-sm font-semibold tracking-tight",
						children: [t("admin.title"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[10px] font-normal uppercase tracking-[0.2em] text-muted-foreground",
							children: t("admin.subtitle")
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreferenceControls, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "ghost",
							size: "sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/dashboard",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "mr-1.5 size-4" }), t("admin.backToPortal")]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "secondary",
							size: "sm",
							onClick: signOut,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "mr-1.5 size-4" }), t("common.nav.logout")]
						})
					]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "mx-auto w-full max-w-6xl px-5 py-8 sm:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
		})]
	});
}
var init__admin$1 = __esmMin((() => {
	init_PreferenceControls();
	init_button();
	init_client();
	init_i18n();
}));
var $$splitComponentImporter$16;
var Route$16;
var init__admin = __esmMin((() => {
	init_client();
	$$splitComponentImporter$16 = () => Promise.resolve().then(() => (init__admin$1(), _admin_exports));
	Route$16 = createFileRoute("/_authenticated/_admin")({
		ssr: false,
		beforeLoad: async () => {
			const { data: auth } = await supabase.auth.getUser();
			const user = auth.user;
			if (!user) throw redirect({ to: "/auth" });
			const { data: isAdmin } = await supabase.rpc("has_role", {
				_user_id: user.id,
				_role: "admin"
			});
			if (!isAdmin) throw redirect({ to: "/dashboard" });
			return { isAdmin: true };
		},
		component: lazyRouteComponent($$splitComponentImporter$16, "component")
	});
}));
/** Is the signed-in user a super admin? Drives the admin nav + sign-out affordance. */
function useIsAdmin() {
	return useQuery({
		queryKey: adminRoleKey,
		queryFn: async () => {
			const { data: auth } = await supabase.auth.getUser();
			const user = auth.user;
			if (!user) return false;
			const { data } = await supabase.rpc("has_role", {
				_user_id: user.id,
				_role: "admin"
			});
			return Boolean(data);
		},
		staleTime: 6e4
	});
}
function useAdminProjects() {
	return useQuery({
		queryKey: adminProjectsKey,
		queryFn: async () => {
			const { data, error } = await supabase.rpc("admin_list_projects");
			if (error) throw error;
			return data ?? [];
		},
		refetchInterval: 3e4
	});
}
function adminProjectKey(projectId) {
	return [
		"admin",
		"project",
		projectId
	];
}
function useAdminProject(projectId) {
	return useQuery({
		queryKey: adminProjectKey(projectId),
		queryFn: async () => {
			const { data: project } = await supabase.from("projects").select("*, clients(name)").eq("id", projectId).maybeSingle();
			if (!project) return null;
			const [milestones, invoices, documents, brief, agreement, offer, members] = await Promise.all([
				supabase.from("milestones").select("*").eq("project_id", projectId).order("position"),
				supabase.from("invoices").select("*").eq("project_id", projectId).order("due_date"),
				supabase.from("documents").select("*").eq("project_id", projectId).order("created_at"),
				supabase.from("briefs").select("*").eq("project_id", projectId).maybeSingle(),
				supabase.from("agreements").select("*").eq("project_id", projectId).maybeSingle(),
				supabase.from("offers").select("*").eq("project_id", projectId).maybeSingle(),
				supabase.from("project_members").select("user_id").eq("project_id", projectId).limit(1)
			]);
			let owner = null;
			const ownerId = members.data?.[0]?.user_id;
			if (ownerId) {
				const { data: profile } = await supabase.from("profiles").select("full_name, email, company, phone").eq("id", ownerId).maybeSingle();
				owner = profile ?? null;
			}
			const typed = project;
			return {
				project: typed,
				clientName: typed.clients?.name ?? null,
				milestones: milestones.data ?? [],
				invoices: invoices.data ?? [],
				documents: documents.data ?? [],
				brief: brief.data ?? null,
				agreement: agreement.data ?? null,
				offer: offer.data ?? null,
				owner
			};
		},
		refetchInterval: 3e4
	});
}
function useInvalidateAdmin(projectId) {
	const queryClient = useQueryClient();
	return () => {
		queryClient.invalidateQueries({ queryKey: adminProjectsKey });
		if (projectId) queryClient.invalidateQueries({ queryKey: adminProjectKey(projectId) });
		queryClient.invalidateQueries({ queryKey: ["workspace"] });
	};
}
function useSaveOffer(projectId) {
	const invalidate = useInvalidateAdmin(projectId);
	return useMutation({
		mutationFn: async (input) => {
			const { error } = await supabase.rpc("save_offer", {
				_project_id: projectId,
				_title: input.title,
				_description: input.description,
				_stripe_url: input.stripeUrl,
				_publish: input.publish ?? false
			});
			if (error) throw error;
		},
		onSuccess: invalidate
	});
}
function useUnpublishOffer(projectId) {
	const invalidate = useInvalidateAdmin(projectId);
	return useMutation({
		mutationFn: async () => {
			const { error } = await supabase.rpc("unpublish_offer", { _project_id: projectId });
			if (error) throw error;
		},
		onSuccess: invalidate
	});
}
function useAdminMarkPaid(projectId) {
	const invalidate = useInvalidateAdmin(projectId);
	return useMutation({
		mutationFn: async (invoiceId) => {
			const { error } = await supabase.rpc("mark_invoice_paid", { _invoice_id: invoiceId });
			if (error) throw error;
		},
		onSuccess: invalidate
	});
}
function useAdminAdvance(projectId) {
	const invalidate = useInvalidateAdmin(projectId);
	return useMutation({
		mutationFn: async (input) => {
			const { error } = await supabase.rpc("advance_project", {
				_project_id: projectId,
				_phase: input.phase,
				_waiting_on: input.waitingOn,
				_progress: input.progress
			});
			if (error) throw error;
		},
		onSuccess: invalidate
	});
}
/** Set the amount and the Stripe payment link the client will use for one invoice. */
function useAdminUpdateInvoice(projectId) {
	const invalidate = useInvalidateAdmin(projectId);
	return useMutation({
		mutationFn: async (input) => {
			const { error } = await supabase.from("invoices").update({
				amount: input.amount,
				payment_url: input.paymentUrl.trim() ? input.paymentUrl.trim() : null,
				status: "waiting"
			}).eq("id", input.invoiceId);
			if (error) throw error;
		},
		onSuccess: invalidate
	});
}
function projectNotesKey(projectId) {
	return [
		"admin",
		"notes",
		projectId
	];
}
/** Internal admin notes + message log attached to one client file. */
function useProjectNotes(projectId) {
	return useQuery({
		queryKey: projectNotesKey(projectId),
		queryFn: async () => {
			const { data, error } = await supabase.from("project_notes").select("*").eq("project_id", projectId).order("created_at", { ascending: false });
			if (error) throw error;
			return data ?? [];
		}
	});
}
function useAddProjectNote(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (input) => {
			const { data: auth } = await supabase.auth.getUser();
			const authorId = auth.user?.id;
			if (!authorId) throw new Error("not signed in");
			const { error } = await supabase.from("project_notes").insert({
				project_id: projectId,
				author_id: authorId,
				body: input.body,
				kind: input.kind ?? "note"
			});
			if (error) throw error;
		},
		onSuccess: () => queryClient.invalidateQueries({ queryKey: projectNotesKey(projectId) })
	});
}
function useDeleteProjectNote(projectId) {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (noteId) => {
			const { error } = await supabase.from("project_notes").delete().eq("id", noteId);
			if (error) throw error;
		},
		onSuccess: () => queryClient.invalidateQueries({ queryKey: projectNotesKey(projectId) })
	});
}
var adminProjectsKey;
var adminRoleKey;
var init_useAdmin = __esmMin((() => {
	init_client();
	adminProjectsKey = ["admin", "projects"];
	adminRoleKey = ["admin", "role"];
}));
function PortalShell({ children }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const t = useT();
	const { data: isAdmin } = useIsAdmin();
	async function signOut() {
		await queryClient.cancelQueries();
		queryClient.clear();
		await supabase.auth.signOut();
		navigate({
			to: "/auth",
			replace: true
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen lg:flex",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "sticky top-0 hidden h-screen w-64 shrink-0 flex-col border-r border-border/60 px-5 py-7 lg:flex",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/dashboard",
						className: "flex items-center gap-2 px-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-8 items-center justify-center rounded-lg border border-primary/40 bg-primary/15 font-display text-sm font-bold text-primary",
							children: "W"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-display text-sm font-semibold tracking-tight",
							children: [t("common.brand"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[10px] font-normal uppercase tracking-[0.2em] text-muted-foreground",
								children: t("common.brandSub")
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "mt-9 flex-1 space-y-1",
						children: NAV.map((item) => {
							const active = pathname === item.to;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: item.to,
								className: cn("flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors", active ? "bg-primary/12 text-foreground ring-1 ring-primary/25" : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-4" }), t(item.labelKey)]
							}, item.to);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreferenceControls, { className: "mb-4 justify-center" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1 border-t border-border/60 pt-4",
						children: [
							isAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/admin",
								className: "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-primary transition-colors hover:bg-primary/10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4" }), t("admin.nav.link")]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/profile",
								className: "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "size-4" }), t("common.nav.profile")]
							}),
							isAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: signOut,
								className: "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "size-4" }), t("common.nav.logout")]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "flex-1 pb-28 lg:pb-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto flex w-full max-w-4xl items-center justify-end px-5 pt-5 sm:px-8 lg:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreferenceControls, {})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto w-full max-w-4xl px-5 pt-4 sm:px-8 lg:pt-8",
					children
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "fixed inset-x-0 bottom-0 z-40 border-t border-border/60 bg-background/80 px-2 py-2 backdrop-blur-xl lg:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto flex max-w-md items-center justify-between",
					children: NAV.slice(0, 5).map((item) => {
						const active = pathname === item.to;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: item.to,
							className: cn("flex flex-1 flex-col items-center gap-1 rounded-lg py-1.5 text-[10px] font-medium transition-colors", active ? "text-primary" : "text-muted-foreground"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-5" }), t(item.labelKey)]
						}, item.to);
					})
				})
			})
		]
	});
}
var NAV;
var init_PortalShell = __esmMin((() => {
	init_useAdmin();
	init_client();
	init_i18n();
	init_utils();
	init_PreferenceControls();
	NAV = [
		{
			to: "/dashboard",
			labelKey: "common.nav.dashboard",
			icon: LayoutDashboard
		},
		{
			to: "/welcome",
			labelKey: "common.nav.welcome",
			icon: Handshake
		},
		{
			to: "/project",
			labelKey: "common.nav.project",
			icon: Rocket
		},
		{
			to: "/documents",
			labelKey: "common.nav.documents",
			icon: FileText
		},
		{
			to: "/billing",
			labelKey: "common.nav.billing",
			icon: CreditCard
		},
		{
			to: "/support",
			labelKey: "common.nav.support",
			icon: LifeBuoy
		},
		{
			to: "/services",
			labelKey: "common.nav.services",
			icon: Sparkles
		}
	];
}));
var _portal_exports = /* @__PURE__ */ __exportAll({ component: () => SplitComponent });
var SplitComponent;
var init__portal$1 = __esmMin((() => {
	init_PortalShell();
	SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) });
}));
var $$splitComponentImporter$15;
var Route$15;
var init__portal = __esmMin((() => {
	$$splitComponentImporter$15 = () => Promise.resolve().then(() => (init__portal$1(), _portal_exports));
	Route$15 = createFileRoute("/_authenticated/_portal")({ component: lazyRouteComponent($$splitComponentImporter$15, "component") });
}));
async function fetchWorkspace() {
	const { data: auth } = await supabase.auth.getUser();
	const user = auth.user;
	if (!user) return null;
	const [{ data: profile }, { data: projects }] = await Promise.all([supabase.from("profiles").select("*").eq("id", user.id).maybeSingle(), supabase.from("projects").select("*, clients(name)").order("created_at", { ascending: true }).limit(1)]);
	const project = projects?.[0];
	if (!profile || !project) return null;
	const [milestones, invoices, documents, links, brief, agreement, offer] = await Promise.all([
		supabase.from("milestones").select("*").eq("project_id", project.id).order("position"),
		supabase.from("invoices").select("*").eq("project_id", project.id).order("due_date"),
		supabase.from("documents").select("*").eq("project_id", project.id).order("created_at", { ascending: true }),
		supabase.from("project_links").select("*").eq("project_id", project.id),
		supabase.from("briefs").select("*").eq("project_id", project.id).maybeSingle(),
		supabase.from("agreements").select("*").eq("project_id", project.id).maybeSingle(),
		supabase.from("offers").select("*").eq("project_id", project.id).maybeSingle()
	]);
	return {
		profile,
		project,
		clientName: project.clients?.name ?? null,
		milestones: milestones.data ?? [],
		invoices: invoices.data ?? [],
		documents: documents.data ?? [],
		links: links.data ?? [],
		brief: brief.data ?? null,
		agreement: agreement.data ?? null,
		offer: offer.data ?? null
	};
}
function useWorkspace() {
	return useQuery({
		queryKey: workspaceKey,
		queryFn: fetchWorkspace,
		staleTime: 5e3,
		refetchInterval: 15e3,
		refetchOnWindowFocus: true
	});
}
function useInvalidate() {
	const queryClient = useQueryClient();
	return () => queryClient.invalidateQueries({ queryKey: workspaceKey });
}
function useSignAgreement() {
	const invalidate = useInvalidate();
	return useMutation({
		mutationFn: async (input) => {
			const { error } = await supabase.rpc("sign_agreement", {
				_project_id: input.projectId,
				_name: input.name
			});
			if (error) throw error;
		},
		onSuccess: invalidate
	});
}
function useSaveBrief() {
	const invalidate = useInvalidate();
	return useMutation({
		mutationFn: async (input) => {
			const { error } = await supabase.from("briefs").update({
				answers: input.answers,
				current_step: input.step,
				...input.projectType !== void 0 ? { project_type: input.projectType } : {},
				...input.categories !== void 0 ? { categories: input.categories } : {},
				...input.unsure !== void 0 ? { unsure: input.unsure } : {}
			}).eq("project_id", input.projectId);
			if (error) throw error;
		},
		onSuccess: invalidate
	});
}
function useSubmitBrief() {
	const invalidate = useInvalidate();
	return useMutation({
		mutationFn: async (input) => {
			const { error } = await supabase.rpc("submit_brief", {
				_project_id: input.projectId,
				_answers: input.answers,
				_project_type: input.projectType ?? null,
				_categories: input.categories ?? null,
				_unsure: input.unsure ?? false
			});
			if (error) throw error;
		},
		onSuccess: invalidate
	});
}
function useSaveWelcomeChecklist() {
	const invalidate = useInvalidate();
	return useMutation({
		mutationFn: async (input) => {
			const { error } = await supabase.rpc("save_welcome_checklist", {
				_project_id: input.projectId,
				_checklist: input.checklist
			});
			if (error) throw error;
		},
		onSuccess: invalidate
	});
}
function useSaveBusinessProfile() {
	const invalidate = useInvalidate();
	return useMutation({
		mutationFn: async (input) => {
			const { error } = await supabase.rpc("save_business_profile", {
				_project_id: input.projectId,
				_profile: input.profile,
				_submit: input.submit ?? false
			});
			if (error) throw error;
		},
		onSuccess: invalidate
	});
}
function useCompleteWelcome() {
	const invalidate = useInvalidate();
	return useMutation({
		mutationFn: async (projectId) => {
			const { error } = await supabase.rpc("complete_welcome", { _project_id: projectId });
			if (error) throw error;
		},
		onSuccess: invalidate
	});
}
/** Only succeeds while the deposit is unpaid — the RPC enforces it. */
function useReopenBrief() {
	const invalidate = useInvalidate();
	return useMutation({
		mutationFn: async (projectId) => {
			const { error } = await supabase.rpc("reopen_brief", { _project_id: projectId });
			if (error) throw error;
		},
		onSuccess: invalidate
	});
}
function useUpdateProfile() {
	const invalidate = useInvalidate();
	return useMutation({
		mutationFn: async (input) => {
			const { error } = await supabase.from("profiles").update(input.values).eq("id", input.id);
			if (error) throw error;
		},
		onSuccess: invalidate
	});
}
function useSubmitFeedback() {
	const invalidate = useInvalidate();
	return useMutation({
		mutationFn: async (input) => {
			const { error } = await supabase.from("feedback").insert({
				project_id: input.projectId,
				user_id: input.userId,
				rating: input.rating,
				comment: input.comment,
				allow_testimonial: input.allowTestimonial
			});
			if (error) throw error;
		},
		onSuccess: invalidate
	});
}
function usePackages() {
	return useQuery({
		queryKey: ["packages"],
		queryFn: async () => {
			const { data } = await supabase.from("packages").select("*").eq("active", true).order("position");
			return data ?? [];
		}
	});
}
var workspaceKey;
var init_usePortal = __esmMin((() => {
	init_client();
	workspaceKey = ["workspace"];
}));
var onboarding_exports = /* @__PURE__ */ __exportAll({ component: () => Onboarding });
function Onboarding() {
	const t = useT();
	const { data } = useWorkspace();
	const updateProfile = useUpdateProfile();
	const navigate = useNavigate();
	const [step, setStep] = (0, import_react.useState)(0);
	const [phone, setPhone] = (0, import_react.useState)("");
	const [goal, setGoal] = (0, import_react.useState)("");
	const steps = [
		{
			icon: Handshake,
			title: t("onboarding.step1.title"),
			body: t("onboarding.step1.body")
		},
		{
			icon: ShieldCheck,
			title: t("onboarding.step2.title"),
			body: t("onboarding.step2.body")
		},
		{
			icon: Rocket,
			title: t("onboarding.step3.title"),
			body: t("onboarding.step3.body")
		}
	];
	const current = steps[step];
	async function finish() {
		if (!data) return;
		await updateProfile.mutateAsync({
			id: data.profile.id,
			values: {
				phone: phone || null,
				goal: goal || null,
				onboarded: true
			}
		});
		navigate({
			to: "/dashboard",
			replace: true
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center px-5 py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-7 flex items-center gap-2",
				children: steps.map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-1 flex-1 rounded-full transition-colors ${index <= step ? "bg-primary" : "bg-border"}` }, index))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "wait",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						x: 24
					},
					animate: {
						opacity: 1,
						x: 0
					},
					exit: {
						opacity: 0,
						x: -24
					},
					transition: {
						duration: .35,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
						variant: "strong",
						interactive: false,
						className: "p-7 sm:p-9",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex size-11 items-center justify-center rounded-xl border border-primary/40 bg-primary/15 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(current.icon, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-6 font-display text-3xl font-semibold",
								children: current.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-muted-foreground",
								children: current.body
							}),
							step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 space-y-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "phone",
										children: t("onboarding.phone")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "phone",
										value: phone,
										onChange: (e) => setPhone(e.target.value),
										placeholder: t("onboarding.phonePlaceholder")
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "goal",
										children: t("onboarding.goal")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "goal",
										value: goal,
										onChange: (e) => setGoal(e.target.value),
										placeholder: t("onboarding.goalPlaceholder")
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex items-center justify-between gap-3",
								children: [step > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									onClick: () => setStep(step - 1),
									children: t("onboarding.back")
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "lg",
									onClick: () => step === steps.length - 1 ? finish() : setStep(step + 1),
									disabled: updateProfile.isPending,
									children: [step === steps.length - 1 ? t("onboarding.enter") : t("onboarding.continue"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								})]
							})
						]
					})
				}, step)
			})]
		})
	});
}
var init_onboarding$1 = __esmMin((() => {
	init_GlassCard();
	init_button();
	init_input();
	init_label();
	init_usePortal();
	init_i18n();
}));
var $$splitComponentImporter$14;
var Route$14;
var init_onboarding = __esmMin((() => {
	$$splitComponentImporter$14 = () => Promise.resolve().then(() => (init_onboarding$1(), onboarding_exports));
	Route$14 = createFileRoute("/_authenticated/onboarding")({
		head: () => ({ meta: [
			{ title: "Welcome — Wayne Client Portal" },
			{
				name: "description",
				content: "Set up your Wayne space in under two minutes."
			},
			{
				property: "og:title",
				content: "Welcome — Wayne Client Portal"
			},
			{
				property: "og:description",
				content: "Set up your Wayne space in under two minutes."
			}
		] }),
		component: lazyRouteComponent($$splitComponentImporter$14, "component")
	});
}));
var Select;
var SelectValue;
var SelectTrigger;
var SelectScrollUpButton;
var SelectScrollDownButton;
var SelectContent;
var SelectLabel;
var SelectItem;
var SelectSeparator;
var init_select = __esmMin((() => {
	init_utils();
	Select = Select$1;
	SelectValue = SelectValue$1;
	SelectTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
		ref,
		className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 opacity-50" })
		})]
	}));
	SelectTrigger.displayName = SelectTrigger$1.displayName;
	SelectScrollUpButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton$1, {
		ref,
		className: cn("flex cursor-default items-center justify-center py-1", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-4 w-4" })
	}));
	SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
	SelectScrollDownButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton$1, {
		ref,
		className: cn("flex cursor-default items-center justify-center py-1", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
	}));
	SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
	SelectContent = import_react.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent$1, {
		ref,
		className: cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
		position,
		...props,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
				className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton, {})
		]
	}) }));
	SelectContent.displayName = SelectContent$1.displayName;
	SelectLabel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel$1, {
		ref,
		className: cn("px-2 py-1.5 text-sm font-semibold", className),
		...props
	}));
	SelectLabel.displayName = SelectLabel$1.displayName;
	SelectItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
		ref,
		className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children })]
	}));
	SelectItem.displayName = SelectItem$1.displayName;
	SelectSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectSeparator$1, {
		ref,
		className: cn("-mx-1 my-1 h-px bg-muted", className),
		...props
	}));
	SelectSeparator.displayName = SelectSeparator$1.displayName;
}));
function Skeleton({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("animate-pulse rounded-md bg-primary/10", className),
		...props
	});
}
var init_skeleton = __esmMin((() => {
	init_utils();
}));
function isProjectType(value) {
	return typeof value === "string" && PROJECT_TYPES.includes(value);
}
/** Legacy funnel — adapts to the selected project type; unknown type stops after step 1. */
function briefSteps(type) {
	if (!type) return [TYPE_STEP];
	return [
		TYPE_STEP,
		BRANCHES[type],
		...COMMON_STEPS,
		RECAP_STEP
	];
}
function briefFields(type) {
	return briefSteps(type).flatMap((step) => step.fields);
}
function isProjectKind(value) {
	return typeof value === "string" && PROJECT_KINDS.includes(value);
}
function hardwareCommonFields() {
	return [
		{
			key: "hw_description",
			long: true
		},
		{
			key: "hw_objectif",
			long: true
		},
		{
			key: "hw_environnement",
			kind: "select",
			options: [...ENVIRONMENT_OPTIONS]
		},
		{
			key: "hw_etat_projet",
			kind: "select",
			options: [...PROJECT_STAGE_OPTIONS]
		},
		{
			key: "hw_quantite",
			kind: "select",
			options: [...QUANTITY_OPTIONS]
		},
		{
			key: "hw_budget",
			kind: "select",
			options: [...BUDGET_OPTIONS]
		},
		{ key: "hw_delai" },
		{
			key: "hw_attachments",
			kind: "file"
		}
	];
}
/** Legacy per-category question sets, reused as extra steps when that
* category is among the ones selected in the new multi-select model. */
function softwareBranchSteps(categories) {
	return categories.filter(isProjectType).map((type) => BRANCHES[type]);
}
function kindStep() {
	return {
		key: "kind",
		kind: "kind",
		fields: []
	};
}
function softwareCategoryStep() {
	return {
		key: "software_categories",
		kind: "categories",
		fields: [],
		multi: true
	};
}
function hardwareCategoryStep() {
	return {
		key: "hardware_categories",
		kind: "categories",
		fields: [],
		multi: true
	};
}
function hardwareFieldsStep() {
	return {
		key: "hardware_fields",
		kind: "fields",
		fields: hardwareCommonFields()
	};
}
function unsureStep() {
	return {
		key: "unsure",
		kind: "fields",
		fields: [{
			key: "unsure_description",
			long: true
		}]
	};
}
/**
* New orchestrator: builds the step list from the top-level kind and the
* categories already picked. Pure-hardware skips the software-oriented
* COMMON_STEPS entirely (business/style/references don't apply); hybrid
* keeps them once, after both category pickers.
*/
function briefStepsV2(kind, categories = []) {
	if (!kind) return [kindStep()];
	if (kind === "unsure") return [
		kindStep(),
		unsureStep(),
		RECAP_STEP
	];
	if (kind === "software") return [
		kindStep(),
		softwareCategoryStep(),
		...softwareBranchSteps(categories),
		...COMMON_STEPS,
		RECAP_STEP
	];
	if (kind === "hardware") return [
		kindStep(),
		hardwareCategoryStep(),
		hardwareFieldsStep(),
		RECAP_STEP
	];
	return [
		kindStep(),
		softwareCategoryStep(),
		hardwareCategoryStep(),
		...softwareBranchSteps(categories),
		hardwareFieldsStep(),
		...COMMON_STEPS,
		RECAP_STEP
	];
}
function briefFieldsV2(kind, categories = []) {
	return briefStepsV2(kind, categories).flatMap((step) => step.fields);
}
function isAttachment(value) {
	if (!value || typeof value !== "object") return false;
	const v = value;
	return typeof v["path"] === "string" && typeof v["name"] === "string" && typeof v["size"] === "number" && typeof v["mime"] === "string";
}
function splitBriefAnswers(stored) {
	if (!stored || typeof stored !== "object") return {
		answers: {},
		history: []
	};
	const raw = stored;
	const history = Array.isArray(raw["__history"]) ? raw[HISTORY_KEY] : [];
	const answers = {};
	for (const [key, value] of Object.entries(raw)) {
		if (key === "__history") continue;
		if (typeof value === "string" || typeof value === "boolean") answers[key] = value;
		else if (Array.isArray(value) && value.every((v) => typeof v === "string")) answers[key] = value;
		else if (Array.isArray(value) && value.every(isAttachment)) answers[key] = value;
	}
	return {
		answers,
		history
	};
}
/**
* Resolves the field list to display for one answers blob (recap, admin
* detail, or a single history entry), dispatching between the legacy
* single-type model and the new kind+categories model so both render
* correctly without duplicating the branch logic in every caller.
*/
function recapFieldsFor(answers) {
	if (answers["unsure"] === true) return [{
		key: "unsure_description",
		long: true
	}];
	const kind = answers[KIND_KEY];
	if (isProjectKind(kind)) return briefFieldsV2(kind, Array.isArray(answers["categories"]) ? answers[CATEGORIES_KEY] : []);
	const legacyType = answers[TYPE_KEY];
	if (isProjectType(legacyType)) return briefFields(legacyType);
	return [];
}
var PROJECT_TYPES;
var TYPE_STEP;
var RECAP_STEP;
var BRANCHES;
var COMMON_STEPS;
var PROJECT_KINDS;
var SOFTWARE_CATEGORIES;
var HARDWARE_GROUPS;
var HARDWARE_CATEGORIES;
var TYPE_KEY;
var KIND_KEY;
var CATEGORIES_KEY;
var UNSURE_KEY;
var ENVIRONMENT_OPTIONS;
var PROJECT_STAGE_OPTIONS;
var QUANTITY_OPTIONS;
var BUDGET_OPTIONS;
var HISTORY_KEY;
var init_brief_flow = __esmMin((() => {
	PROJECT_TYPES = [
		"ecommerce",
		"showcase",
		"app",
		"maintenance",
		"other"
	];
	TYPE_STEP = {
		key: "type",
		kind: "type",
		fields: []
	};
	RECAP_STEP = {
		key: "recap",
		kind: "recap",
		fields: []
	};
	BRANCHES = {
		ecommerce: {
			key: "ecommerce",
			kind: "fields",
			fields: [
				{ key: "ecom_products" },
				{ key: "ecom_payments" },
				{ key: "ecom_shipping" },
				{ key: "ecom_stock" },
				{
					key: "ecom_migration",
					long: true
				}
			]
		},
		showcase: {
			key: "showcase",
			kind: "fields",
			fields: [
				{
					key: "show_pages",
					long: true
				},
				{ key: "show_contact" },
				{ key: "show_seo" },
				{ key: "show_existing" }
			]
		},
		app: {
			key: "app",
			kind: "fields",
			fields: [
				{ key: "app_users" },
				{
					key: "app_features",
					long: true
				},
				{ key: "app_data" },
				{ key: "app_integrations" }
			]
		},
		maintenance: {
			key: "maintenance",
			kind: "fields",
			fields: [
				{ key: "maint_platform" },
				{ key: "maint_access" },
				{
					key: "maint_issues",
					long: true
				},
				{ key: "maint_level" }
			]
		},
		other: {
			key: "other",
			kind: "fields",
			fields: [{
				key: "other_describe",
				long: true
			}]
		}
	};
	COMMON_STEPS = [
		{
			key: "business",
			kind: "fields",
			fields: [{
				key: "business",
				long: true
			}, { key: "audience" }]
		},
		{
			key: "goals",
			kind: "fields",
			fields: [{
				key: "goal",
				long: true
			}, { key: "success" }]
		},
		{
			key: "style",
			kind: "fields",
			fields: [{ key: "style" }, {
				key: "references",
				long: true
			}]
		},
		{
			key: "content",
			kind: "fields",
			fields: [{
				key: "content",
				long: true
			}, { key: "deadline" }]
		}
	];
	PROJECT_KINDS = [
		"software",
		"hardware",
		"hybrid"
	];
	SOFTWARE_CATEGORIES = [
		"ecommerce",
		"showcase",
		"app_web",
		"app_mobile",
		"saas",
		"logiciel_metier",
		"ia",
		"automatisation",
		"api_integration",
		"dashboard",
		"base_donnees",
		"infra_cloud",
		"cybersecurite",
		"iot_logiciel_embarque",
		"maintenance",
		"other"
	];
	HARDWARE_GROUPS = [
		{
			key: "robotique",
			items: [
				"bras_robotique",
				"robot_industriel",
				"robot_mobile",
				"robot_autonome",
				"robot_manutention",
				"cobot",
				"robot_sur_mesure",
				"prototype_robotique"
			]
		},
		{
			key: "domotique_iot",
			items: [
				"maison_connectee",
				"batiment_connecte",
				"capteurs_domotique",
				"controle_acces",
				"automatisation_domotique",
				"monitoring",
				"systemes_iot",
				"gestion_energetique"
			]
		},
		{
			key: "electronique",
			items: [
				"carte_electronique",
				"pcb",
				"microcontroleur",
				"esp32_arduino_stm32",
				"systeme_embarque",
				"capteurs_electronique",
				"prototype_electronique",
				"objet_connecte"
			]
		},
		{
			key: "machines_industrie",
			items: [
				"machine_industrielle",
				"machine_automatisee",
				"ligne_production",
				"convoyeur",
				"systeme_manutention",
				"machine_cnc",
				"equipement_industriel",
				"automatisation_industrielle"
			]
		},
		{
			key: "construction_chantier",
			items: [
				"gros_outils_chantier",
				"machines_chantier",
				"equipements_professionnels",
				"outillage_specialise",
				"systemes_automatises_chantier",
				"solutions_levage",
				"solutions_manutention_chantier",
				"equipements_sur_mesure"
			]
		},
		{
			key: "prototypage_fabrication",
			items: [
				"prototype_fonctionnel",
				"impression_3d",
				"usinage",
				"pieces_mecaniques",
				"assemblage",
				"boitier_chassis",
				"petite_serie",
				"industrialisation"
			]
		},
		{
			key: "autre_hardware",
			items: ["projet_hardware_sur_mesure", "ne_sait_pas_categorie"]
		}
	];
	HARDWARE_CATEGORIES = HARDWARE_GROUPS.flatMap((g) => g.items);
	TYPE_KEY = "project_type";
	KIND_KEY = "project_kind";
	CATEGORIES_KEY = "categories";
	UNSURE_KEY = "unsure";
	ENVIRONMENT_OPTIONS = [
		"interieur",
		"exterieur",
		"industriel",
		"chantier",
		"bureau",
		"commerce",
		"entrepot",
		"maison",
		"autre"
	];
	PROJECT_STAGE_OPTIONS = [
		"idee",
		"cahier_des_charges",
		"prototype_existant",
		"produit_a_ameliorer",
		"produit_a_industrialiser",
		"besoin_fabrication"
	];
	QUANTITY_OPTIONS = [
		"1_prototype",
		"2_10",
		"10_100",
		"100_1000",
		"1000_plus",
		"inconnu"
	];
	BUDGET_OPTIONS = [
		"moins_5k",
		"5k_15k",
		"15k_50k",
		"50k_150k",
		"plus_150k",
		"a_definir"
	];
	HISTORY_KEY = "__history";
}));
function parseBusinessProfile(raw) {
	if (!raw || typeof raw !== "object" || Array.isArray(raw)) return {};
	const source = raw;
	const values = {};
	for (const field of BUSINESS_FIELDS) {
		const value = source[field.key];
		if (typeof value === "string") values[field.key] = value;
	}
	return values;
}
function filled(values, key) {
	return (values[key] ?? "").trim().length > 0;
}
function missingBusinessFields(values) {
	return BUSINESS_FIELDS.filter((field) => field.required && !filled(values, field.key)).map((field) => field.key);
}
function missingInSection(section, values) {
	return section.fields.filter((field) => field.required && !filled(values, field.key)).map((field) => field.key);
}
function sectionComplete(section, values) {
	return missingInSection(section, values).length === 0;
}
function businessProfileComplete(values) {
	return missingBusinessFields(values).length === 0;
}
/** How many required answers are in — used for the "4/7" progress hints. */
function requiredProgress(values) {
	return {
		done: REQUIRED_COUNT - missingBusinessFields(values).length,
		total: REQUIRED_COUNT
	};
}
/** Nothing meaningful entered yet: the printable sheet falls back to a blank template. */
function isBlankProfile(values) {
	return BUSINESS_FIELDS.filter((field) => filled(values, field.key)).length === 0;
}
/** First step the client still has to deal with, so they resume where they stopped. */
function firstIncompleteStep(values, checks) {
	if (!WELCOME_CHECKS.every((key) => checks[key])) return 0;
	for (let index = 0; index < WELCOME_STEPS.length; index += 1) {
		const step = WELCOME_STEPS[index];
		if (step && step.kind === "section" && !sectionComplete(step.section, values)) return index;
	}
	return WELCOME_STEPS.length - 1;
}
var BUSINESS_SECTIONS;
var BUSINESS_FIELDS;
var WELCOME_STEPS;
var WELCOME_CHECKS;
var REQUIRED_COUNT;
var init_business_profile = __esmMin((() => {
	BUSINESS_SECTIONS = [
		{
			key: "activity",
			fields: [
				{
					key: "products",
					kind: "textarea",
					required: true,
					wide: true
				},
				{
					key: "sector",
					kind: "text",
					required: true
				},
				{
					key: "siret",
					kind: "text"
				},
				{
					key: "since",
					kind: "date"
				},
				{
					key: "needs",
					kind: "textarea",
					required: true,
					wide: true
				}
			]
		},
		{
			key: "contact",
			fields: [
				{
					key: "phone",
					kind: "text",
					required: true
				},
				{
					key: "whatsapp",
					kind: "text"
				},
				{
					key: "email",
					kind: "text",
					required: true
				},
				{
					key: "address",
					kind: "text",
					wide: true
				}
			]
		},
		{
			key: "presence",
			fields: [
				{
					key: "facebook",
					kind: "text"
				},
				{
					key: "instagram",
					kind: "text"
				},
				{
					key: "otherSocial",
					kind: "text",
					wide: true
				}
			]
		},
		{
			key: "context",
			fields: [{
				key: "providers",
				kind: "textarea",
				required: true,
				wide: true
			}, {
				key: "budget",
				kind: "text",
				required: true
			}]
		}
	];
	BUSINESS_FIELDS = BUSINESS_SECTIONS.flatMap((section) => section.fields);
	WELCOME_STEPS = [
		{
			key: "guide",
			kind: "guide"
		},
		...BUSINESS_SECTIONS.map((section) => ({
			key: section.key,
			kind: "section",
			section
		})),
		{
			key: "recap",
			kind: "recap"
		}
	];
	WELCOME_CHECKS = [
		"read",
		"content",
		"access"
	];
	REQUIRED_COUNT = BUSINESS_FIELDS.filter((field) => field.required).length;
}));
function phaseLabel(phase, t) {
	return t(PHASE_LABEL_KEY[phase]);
}
function phaseIndex(phase) {
	return Math.max(0, PHASE_ORDER.indexOf(phase));
}
function progressFor(phase) {
	const pct = Math.round(phaseIndex(phase) / (PHASE_ORDER.length - 1) * 100);
	return phase === "agreement" ? 5 : pct;
}
/**
* Single source of truth: what should happen next on this project.
* Used by the dashboard, the shell and the internal Wayne view.
*/
function computeNextAction(project, t) {
	const base = {
		phase: project.phase,
		phaseLabel: phaseLabel(project.phase, t),
		progress: project.progress ?? progressFor(project.phase)
	};
	switch (project.phase) {
		case "agreement": return {
			...base,
			owner: "client",
			greeting: t("journey.action.agreement.greeting"),
			title: t("journey.action.agreement.title"),
			description: t("journey.action.agreement.description"),
			eta: t("journey.action.agreement.eta"),
			ctaLabel: t("journey.action.agreement.cta"),
			ctaTo: "/agreement"
		};
		case "welcome": {
			const fiche = requiredProgress(parseBusinessProfile(project.business_profile));
			return {
				...base,
				owner: "client",
				greeting: t("journey.action.welcome.greeting"),
				title: t("journey.action.welcome.title"),
				description: `${t("journey.action.welcome.description")} · ${t("welcome.progress.hint", {
					done: String(fiche.done),
					total: String(fiche.total)
				})}`,
				eta: t("journey.action.welcome.eta"),
				ctaLabel: t("journey.action.welcome.cta"),
				ctaTo: "/welcome"
			};
		}
		case "deposit": return {
			...base,
			owner: "client",
			greeting: t("journey.action.deposit.greeting"),
			title: t("journey.action.deposit.title"),
			description: t("journey.action.deposit.description"),
			eta: t("journey.action.deposit.eta"),
			ctaLabel: t("journey.action.deposit.cta"),
			ctaTo: "/billing"
		};
		case "brief": return {
			...base,
			owner: "client",
			greeting: t("journey.action.brief.greeting"),
			title: t("journey.action.brief.title"),
			description: t("journey.action.brief.description"),
			eta: t("journey.action.brief.eta"),
			ctaLabel: t("journey.action.brief.cta"),
			ctaTo: "/brief"
		};
		case "launch": return {
			...base,
			owner: "wayne",
			greeting: t("journey.action.launch.greeting"),
			title: t("journey.action.launch.title"),
			description: t("journey.action.launch.description"),
			ctaLabel: t("journey.action.launch.cta"),
			ctaTo: "/project"
		};
		case "production": return {
			...base,
			owner: "wayne",
			greeting: t("journey.action.production.greeting"),
			title: t("journey.action.production.title"),
			description: t("journey.action.production.description"),
			ctaLabel: t("journey.action.production.cta"),
			ctaTo: "/project"
		};
		case "review": return {
			...base,
			owner: "client",
			greeting: t("journey.action.review.greeting"),
			title: t("journey.action.review.title"),
			description: t("journey.action.review.description"),
			eta: t("journey.action.review.eta"),
			ctaLabel: t("journey.action.review.cta"),
			ctaTo: "/project"
		};
		case "delivery": return {
			...base,
			owner: "client",
			greeting: t("journey.action.delivery.greeting"),
			title: t("journey.action.delivery.title"),
			description: t("journey.action.delivery.description"),
			ctaLabel: t("journey.action.delivery.cta"),
			ctaTo: "/delivery"
		};
		default: return {
			...base,
			progress: 100,
			owner: "wayne",
			greeting: t("journey.action.live.greeting"),
			title: t("journey.action.live.title"),
			description: t("journey.action.live.description"),
			ctaLabel: t("journey.action.live.cta"),
			ctaTo: "/delivery"
		};
	}
}
function milestoneStatus(milestone, project) {
	const order = PHASE_ORDER.indexOf(milestone.key);
	const current = phaseIndex(project.phase);
	if (order === -1) return milestone.status;
	if (order < current) return "done";
	if (order === current) return "active";
	return "upcoming";
}
/** Journey order is always driven by PHASE_ORDER, never by stale DB positions. */
function orderedMilestones(milestones) {
	const rank = (m) => {
		const index = PHASE_ORDER.indexOf(m.key);
		return index === -1 ? PHASE_ORDER.length + m.position : index;
	};
	return [...milestones].sort((a, b) => rank(a) - rank(b));
}
function phaseRoute(phase) {
	return PHASE_ROUTE[phase] ?? "/dashboard";
}
/** Documents, invoices and milestones store a stable i18n key; a custom name always wins. */
function documentLabel(doc, t) {
	if (doc.name_override) return doc.name_override;
	const key = doc.i18n_key ?? "";
	if (DOC_KEYS.includes(key)) return t(`documents.name.${key}`);
	return doc.name;
}
function documentTypeLabel(doc, t) {
	return DOC_TYPES.includes(doc.type) ? t(`documents.type.${doc.type}`) : doc.type;
}
function invoiceLabel(invoice, t) {
	if (invoice.label_override) return invoice.label_override;
	const key = invoice.i18n_key ?? "";
	if (INVOICE_KEYS.includes(key)) return t(`billing.invoice.${key}`);
	return invoice.label;
}
function milestoneTitle(milestone, t) {
	if (milestone.title_override) return milestone.title_override;
	const key = milestone.key;
	return PHASE_LABEL_KEY[key] ? t(PHASE_LABEL_KEY[key]) : milestone.title;
}
function formatMoney(amount, locale = "en") {
	const value = typeof amount === "string" ? Number(amount) : amount ?? 0;
	return new Intl.NumberFormat(LOCALE_TAG[locale] ?? "en-GB", {
		style: "currency",
		currency: "EUR",
		maximumFractionDigits: 0
	}).format(value);
}
function formatDate(date, locale = "en") {
	if (!date) return "—";
	return new Intl.DateTimeFormat(LOCALE_TAG[locale] ?? "en-GB", {
		day: "numeric",
		month: "long"
	}).format(new Date(date));
}
function formatFullDate(date, locale = "en") {
	if (!date) return "—";
	return new Intl.DateTimeFormat(LOCALE_TAG[locale] ?? "en-GB", {
		day: "numeric",
		month: "long",
		year: "numeric"
	}).format(new Date(date));
}
var PHASE_ORDER;
var PHASE_LABEL_KEY;
var PHASE_ROUTE;
var DOC_KEYS;
var DOC_TYPES;
var INVOICE_KEYS;
var LOCALE_TAG;
var init_journey = __esmMin((() => {
	init_business_profile();
	PHASE_ORDER = [
		"agreement",
		"welcome",
		"brief",
		"deposit",
		"launch",
		"production",
		"review",
		"delivery",
		"live"
	];
	PHASE_LABEL_KEY = {
		agreement: "journey.phase.agreement",
		welcome: "journey.phase.welcome",
		deposit: "journey.phase.deposit",
		brief: "journey.phase.brief",
		launch: "journey.phase.launch",
		production: "journey.phase.production",
		review: "journey.phase.review",
		delivery: "journey.phase.delivery",
		live: "journey.phase.live"
	};
	PHASE_ROUTE = {
		agreement: "/agreement",
		welcome: "/welcome",
		brief: "/brief",
		deposit: "/billing",
		launch: "/project",
		production: "/project",
		review: "/project",
		delivery: "/delivery",
		live: "/delivery"
	};
	DOC_KEYS = [
		"agreement",
		"welcome",
		"brief",
		"invoice_deposit",
		"deliverable"
	];
	DOC_TYPES = [
		"agreement",
		"welcome",
		"brief",
		"invoice",
		"deliverable"
	];
	INVOICE_KEYS = ["deposit", "balance"];
	LOCALE_TAG = {
		en: "en-GB",
		fr: "fr-FR",
		de: "de-DE",
		es: "es-ES",
		ru: "ru-RU"
	};
}));
var _admin_admin_exports = /* @__PURE__ */ __exportAll({ component: () => AdminOverview });
function rowKind(row) {
	if (row.brief_type === "software" || row.brief_type === "hardware" || row.brief_type === "hybrid") return row.brief_type;
	return null;
}
function AdminOverview() {
	const { data, isLoading } = useAdminProjects();
	const { t, locale } = useI18n();
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [category, setCategory] = (0, import_react.useState)("all");
	const kindFiltered = (0, import_react.useMemo)(() => {
		const all = data ?? [];
		switch (filter) {
			case "wayne": return all.filter((row) => row.waiting_on === "wayne");
			case "client": return all.filter((row) => row.waiting_on === "client");
			case "brief": return all.filter((row) => Boolean(row.brief_submitted_at));
			case "offer": return all.filter((row) => row.offer_status !== "published");
			case "software":
			case "hardware":
			case "hybrid": return all.filter((row) => rowKind(row) === filter);
			default: return all;
		}
	}, [data, filter]);
	const availableCategories = (0, import_react.useMemo)(() => {
		const set = /* @__PURE__ */ new Set();
		for (const row of kindFiltered) for (const cat of row.brief_categories ?? []) set.add(cat);
		return Array.from(set).sort();
	}, [kindFiltered]);
	const rows = (0, import_react.useMemo)(() => {
		if (category === "all") return kindFiltered;
		return kindFiltered.filter((row) => (row.brief_categories ?? []).includes(category));
	}, [kindFiltered, category]);
	const filters = [
		{
			key: "all",
			labelKey: "admin.filter.all"
		},
		{
			key: "wayne",
			labelKey: "admin.filter.wayne"
		},
		{
			key: "client",
			labelKey: "admin.filter.client"
		},
		{
			key: "brief",
			labelKey: "admin.filter.brief"
		},
		{
			key: "offer",
			labelKey: "admin.filter.offer"
		},
		{
			key: "software",
			labelKey: "admin.filter.software"
		},
		{
			key: "hardware",
			labelKey: "admin.filter.hardware"
		},
		{
			key: "hybrid",
			labelKey: "admin.filter.hybrid"
		}
	];
	function categoryLabel(cat) {
		return isProjectType(cat) ? t(`brief.type.${cat}.label`) : t(`brief.category.${cat}.label`);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl font-semibold sm:text-4xl",
				children: t("admin.list.title")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted-foreground",
				children: t("admin.list.subtitle")
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [filters.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						setFilter(item.key);
						setCategory("all");
					},
					className: `rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${filter === item.key ? "border-primary/40 bg-primary/15 text-foreground" : "border-border text-muted-foreground hover:text-foreground"}`,
					children: t(item.labelKey)
				}, item.key)), (filter === "software" || filter === "hardware" || filter === "hybrid") && availableCategories.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: category,
					onValueChange: setCategory,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						className: "h-8 w-[220px] text-xs",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: t("admin.filter.category") })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: "all",
						children: t("admin.filter.category")
					}), availableCategories.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: cat,
						children: categoryLabel(cat)
					}, cat))] })]
				})]
			}),
			isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-24 w-full rounded-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-24 w-full rounded-2xl" })]
			}) : rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassCard, {
				interactive: false,
				className: "p-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: t("admin.list.empty")
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminRow, {
					row,
					locale,
					t
				}, row.project_id))
			})
		]
	});
}
function AdminRow({ row, locale, t }) {
	const fiche = requiredProgress(parseBusinessProfile(row.business_profile));
	const kind = rowKind(row);
	const badges = [
		...kind ? [{
			key: "kind",
			label: t(`admin.type.${kind}`),
			tone: "neutral"
		}] : [],
		{
			key: "phase",
			label: `${t("admin.row.phase")}: ${phaseLabel(row.phase, t)}`,
			tone: "neutral"
		},
		{
			key: "waiting",
			label: row.waiting_on === "client" ? t("admin.row.waitingClient") : t("admin.row.waitingWayne"),
			tone: row.waiting_on === "wayne" ? "alert" : "neutral"
		},
		{
			key: "fiche",
			label: `${t("admin.row.fiche")} ${fiche.done}/${fiche.total}`,
			tone: fiche.done === fiche.total ? "good" : "neutral"
		},
		{
			key: "brief",
			label: row.brief_submitted_at ? t("admin.row.briefDone") : t("admin.row.briefPending"),
			tone: row.brief_submitted_at ? "good" : "neutral"
		},
		{
			key: "offer",
			label: row.offer_status === "published" ? t("admin.row.offerPublished") : row.offer_status === "draft" ? t("admin.row.offerDraft") : t("admin.row.offerNone"),
			tone: row.offer_status === "published" ? "good" : "alert"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
		className: "p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-start justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleUserRound, { className: "size-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate font-medium",
							children: row.company ?? row.client_name
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 truncate text-sm text-muted-foreground",
						children: [
							row.full_name ?? "—",
							" · ",
							row.email ?? "—"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-xs text-muted-foreground",
						children: [
							row.project_name,
							" · ",
							formatDate(row.created_at, locale),
							" ·",
							" ",
							t("admin.row.paid", {
								paid: formatMoney(row.paid_amount, locale),
								total: formatMoney(row.total_amount, locale)
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				size: "sm",
				variant: "secondary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/admin/$projectId",
					params: { projectId: row.project_id },
					children: [t("admin.row.open"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "ml-1.5 size-3.5" })]
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 flex flex-wrap gap-2",
			children: badges.map((badge) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: `inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium ${badge.tone === "good" ? "border-success/40 bg-success/10 text-success" : badge.tone === "alert" ? "border-primary/40 bg-primary/10 text-primary" : "border-border bg-secondary/40 text-muted-foreground"}`,
				children: [badge.key === "brief" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileCheckCorner, { className: "size-3" }) : badge.key === "offer" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-3" }) : badge.tone === "alert" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-3" }) : null, badge.label]
			}, badge.key))
		})]
	});
}
var init__admin_admin$1 = __esmMin((() => {
	init_GlassCard();
	init_button();
	init_select();
	init_skeleton();
	init_useAdmin();
	init_brief_flow();
	init_business_profile();
	init_i18n();
	init_journey();
}));
var $$splitComponentImporter$13;
var Route$13;
var init__admin_admin = __esmMin((() => {
	$$splitComponentImporter$13 = () => Promise.resolve().then(() => (init__admin_admin$1(), _admin_admin_exports));
	Route$13 = createFileRoute("/_authenticated/_admin/admin")({
		head: () => ({ meta: [
			{ title: "Super admin — Wayne Client Portal" },
			{
				name: "description",
				content: "All client accounts, journeys and proposals in one view."
			},
			{
				property: "og:title",
				content: "Super admin — Wayne Client Portal"
			},
			{
				property: "og:description",
				content: "All client accounts, journeys and proposals in one view."
			}
		] }),
		component: lazyRouteComponent($$splitComponentImporter$13, "component")
	});
}));
/** Milestone celebration: short, calm, premium. Only for real milestones. */
function Celebration({ show, title, subtitle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: show && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "pointer-events-none fixed inset-0 z-50 flex items-center justify-center px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-background/70 backdrop-blur-md" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				scale: .92,
				y: 12,
				opacity: 0
			},
			animate: {
				scale: 1,
				y: 0,
				opacity: 1
			},
			exit: {
				scale: .96,
				opacity: 0
			},
			transition: {
				duration: .4,
				ease: [
					.22,
					1,
					.36,
					1
				]
			},
			className: "glass glass-active relative px-10 py-9 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
					initial: { scale: .3 },
					animate: { scale: 1 },
					transition: {
						duration: .45,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					className: "mx-auto flex size-14 items-center justify-center rounded-full border border-success/50 bg-success/15 text-success",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-7" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-5 font-display text-2xl font-semibold",
					children: title
				}),
				subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: subtitle
				}),
				PARTICLES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
					initial: {
						opacity: 0,
						x: 0,
						y: 0,
						scale: .6
					},
					animate: {
						opacity: [
							0,
							1,
							0
						],
						x: Math.cos(p / PARTICLES.length * Math.PI * 2) * 130,
						y: Math.sin(p / PARTICLES.length * Math.PI * 2) * 90,
						scale: 1
					},
					transition: {
						duration: 1.1,
						delay: .12,
						ease: "easeOut"
					},
					className: "absolute left-1/2 top-1/2 size-1.5 rounded-full bg-primary"
				}, p))
			]
		})]
	}) });
}
var PARTICLES;
var init_Celebration = __esmMin((() => {
	PARTICLES = Array.from({ length: 14 }, (_, i) => i);
}));
var Checkbox;
var init_checkbox = __esmMin((() => {
	init_utils();
	Checkbox = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
		ref,
		className: cn("grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxIndicator, {
			className: cn("grid place-content-center text-current"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" })
		})
	}));
	Checkbox.displayName = Checkbox$1.displayName;
}));
var _portal_agreement_exports = /* @__PURE__ */ __exportAll({ component: () => AgreementPage });
function AgreementPage() {
	const t = useT();
	const { data } = useWorkspace();
	const sign = useSignAgreement();
	const navigate = useNavigate();
	const [name, setName] = (0, import_react.useState)("");
	const [accepted, setAccepted] = (0, import_react.useState)(false);
	const [celebrate, setCelebrate] = (0, import_react.useState)(false);
	if (!data) return null;
	const signed = Boolean(data.agreement?.signed_at);
	async function handleSign() {
		if (!data) return;
		try {
			await sign.mutateAsync({
				projectId: data.project.id,
				name
			});
			setCelebrate(true);
			setTimeout(() => navigate({ to: "/dashboard" }), 2200);
		} catch (error) {
			toast.error(error instanceof Error ? error.message : t("agreement.error.default"));
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 pb-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Celebration, {
				show: celebrate,
				title: t("agreement.celebration.title"),
				subtitle: t("agreement.celebration.subtitle")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground",
					children: t("agreement.step")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-3xl font-semibold sm:text-4xl",
					children: t("agreement.title")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted-foreground",
					children: t("agreement.subtitle")
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
				interactive: false,
				className: "p-6 sm:p-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-10 items-center justify-center rounded-xl border border-primary/40 bg-primary/15 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilePenLine, { className: "size-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium",
						children: data.project.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: t("agreement.totalAmount", {
							amount: formatMoney(data.project.total_amount),
							client: data.clientName ?? t("agreement.defaultClient")
						})
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 space-y-3 text-sm leading-relaxed text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("agreement.terms.p1") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("agreement.terms.p2") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("agreement.terms.p3") })
					]
				})]
			}),
			signed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
				interactive: false,
				className: "flex items-center gap-3 p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex size-9 items-center justify-center rounded-full border border-success/50 bg-success/15 text-success",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium",
					children: t("agreement.signedBy", { name: data.agreement?.signed_name ?? "" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: t("agreement.signedThanks")
				})] })]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
				variant: "strong",
				interactive: false,
				className: "p-6 sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "signature",
							children: t("agreement.signature.label")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "signature",
							value: name,
							onChange: (e) => setName(e.target.value),
							placeholder: t("agreement.signature.placeholder"),
							className: "font-display text-lg"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-5 flex items-start gap-3 text-sm text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
							checked: accepted,
							onCheckedChange: (value) => setAccepted(value === true),
							className: "mt-0.5"
						}), t("agreement.accept.label")]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "lg",
						className: "mt-6 w-full",
						disabled: !accepted || name.trim().length < 3 || sign.isPending,
						onClick: handleSign,
						children: sign.isPending ? t("agreement.submitting") : t("agreement.submit")
					})
				]
			})
		]
	});
}
var init__portal_agreement$1 = __esmMin((() => {
	init_GlassCard();
	init_Celebration();
	init_button();
	init_checkbox();
	init_input();
	init_label();
	init_usePortal();
	init_i18n();
	init_journey();
}));
var $$splitComponentImporter$12;
var Route$12;
var init__portal_agreement = __esmMin((() => {
	$$splitComponentImporter$12 = () => Promise.resolve().then(() => (init__portal_agreement$1(), _portal_agreement_exports));
	Route$12 = createFileRoute("/_authenticated/_portal/agreement")({
		head: () => ({ meta: [
			{ title: "Agreement — Wayne Client Portal" },
			{
				name: "description",
				content: "Review and sign your Wayne project agreement."
			},
			{
				property: "og:title",
				content: "Agreement — Wayne Client Portal"
			},
			{
				property: "og:description",
				content: "Review and sign your Wayne project agreement."
			}
		] }),
		component: lazyRouteComponent($$splitComponentImporter$12, "component")
	});
}));
var Progress;
var init_progress = __esmMin((() => {
	init_utils();
	Progress = import_react.forwardRef(({ className, value, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root$1, {
		ref,
		className: cn("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Indicator, {
			className: "h-full w-full flex-1 bg-primary transition-all",
			style: { transform: `translateX(-${100 - (value || 0)}%)` }
		})
	}));
	Progress.displayName = Root$1.displayName;
}));
var _portal_billing_exports = /* @__PURE__ */ __exportAll({ component: () => BillingPage });
function BillingPage() {
	const { data } = useWorkspace();
	const { t, locale } = useI18n();
	if (!data) return null;
	const total = Number(data.project.total_amount);
	const paid = Number(data.project.paid_amount);
	const pct = total > 0 ? Math.round(paid / total * 100) : 0;
	const offer = data.offer && data.offer.status === "published" ? data.offer : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 pb-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl font-semibold sm:text-4xl",
				children: t("billing.title")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted-foreground",
				children: t("billing.subtitle")
			})] }),
			offer ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
				variant: "strong",
				interactive: false,
				className: "p-6 sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-semibold uppercase tracking-[0.22em] text-primary",
						children: t("billing.offer.eyebrow")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-2xl font-semibold",
						children: offer.title || t("billing.offer.title")
					}),
					offer.description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 whitespace-pre-line text-sm text-muted-foreground",
						children: offer.description
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap items-center gap-3",
						children: [offer.stripe_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: offer.stripe_url,
								target: "_blank",
								rel: "noopener noreferrer",
								children: [t("billing.offer.cta"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "ml-2 size-4" })]
							})
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-muted-foreground",
							children: t("billing.offer.linkSoon")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: t("billing.offer.note")
						})]
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
				interactive: false,
				className: "p-6 sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-10 items-center justify-center rounded-xl border border-border bg-secondary/50 text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-xl font-semibold",
						children: t("billing.offer.waiting.title")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: t("billing.offer.waiting.body")
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
				interactive: false,
				className: "p-6 sm:p-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground",
						children: t("billing.paidSoFar")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-display text-4xl font-semibold",
						children: formatMoney(paid, locale)
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: t("billing.ofTotal", { total: formatMoney(total, locale) })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
					value: pct,
					className: "mt-5 h-2"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: data.invoices.map((invoice) => {
					const isPaid = invoice.status === "paid";
					const payLink = invoice.payment_url ?? offer?.stripe_url ?? null;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassCard, {
						className: "p-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `flex size-10 items-center justify-center rounded-xl border ${isPaid ? "border-success/50 bg-success/15 text-success" : offer ? "border-primary/40 bg-primary/15 text-primary" : "border-border bg-secondary/50 text-muted-foreground"}`,
									children: isPaid ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-5" }) : offer ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium",
									children: invoiceLabel(invoice, t)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: isPaid ? t("billing.paidOn", { date: formatDate(invoice.paid_at, locale) }) : offer ? t("billing.dueOn", { date: formatDate(invoice.due_date, locale) }) : t("billing.invoice.awaitingOffer")
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: `inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${isPaid ? "border-success/40 bg-success/10 text-success" : "border-border bg-secondary/40 text-muted-foreground"}`,
										children: [isPaid ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-3.5" }), isPaid ? t("billing.invoice.statusPaid") : t("billing.invoice.statusUnpaid")]
									}),
									!isPaid && payLink && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										size: "sm",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: payLink,
											target: "_blank",
											rel: "noopener noreferrer",
											children: [t("billing.offer.cta"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "ml-1.5 size-3.5" })]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										variant: "secondary",
										size: "sm",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/invoice/$invoiceId",
											params: { invoiceId: invoice.id },
											children: [t("billing.invoice.view"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "ml-1.5 size-3.5" })]
										})
									})
								]
							})]
						})
					}, invoice.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "flex items-center justify-center gap-2 text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-3.5" }), t("billing.securityNote")]
			})
		]
	});
}
var init__portal_billing$1 = __esmMin((() => {
	init_GlassCard();
	init_button();
	init_progress();
	init_usePortal();
	init_i18n();
	init_journey();
}));
var $$splitComponentImporter$11;
var Route$11;
var init__portal_billing = __esmMin((() => {
	$$splitComponentImporter$11 = () => Promise.resolve().then(() => (init__portal_billing$1(), _portal_billing_exports));
	Route$11 = createFileRoute("/_authenticated/_portal/billing")({
		head: () => ({ meta: [
			{ title: "Billing — Wayne Client Portal" },
			{
				name: "description",
				content: "Your invoices, payments and remaining balance in one view."
			},
			{
				property: "og:title",
				content: "Billing — Wayne Client Portal"
			},
			{
				property: "og:description",
				content: "Your invoices, payments and remaining balance in one view."
			}
		] }),
		component: lazyRouteComponent($$splitComponentImporter$11, "component")
	});
}));
function sanitizeFilename(name) {
	return name.replace(/[^a-zA-Z0-9.\-_]/g, "_").slice(-120);
}
function useUploadAttachment(projectId) {
	return useMutation({ mutationFn: async (file) => {
		const path = `${projectId}/${crypto.randomUUID()}-${sanitizeFilename(file.name)}`;
		const { error } = await supabase.storage.from(BUCKET).upload(path, file, {
			contentType: file.type || "application/octet-stream",
			upsert: false
		});
		if (error) throw error;
		return {
			path,
			name: file.name,
			size: file.size,
			mime: file.type || "application/octet-stream"
		};
	} });
}
function useRemoveAttachment() {
	return useMutation({ mutationFn: async (path) => {
		const { error } = await supabase.storage.from(BUCKET).remove([path]);
		if (error) throw error;
	} });
}
function useAttachmentUrl(path) {
	return useQuery({
		queryKey: ["attachment-url", path],
		queryFn: async () => {
			if (!path) return null;
			const { data, error } = await supabase.storage.from(BUCKET).createSignedUrl(path, 3600);
			if (error) throw error;
			return data.signedUrl;
		},
		enabled: Boolean(path),
		staleTime: 33e5
	});
}
var BUCKET;
var init_useAttachments = __esmMin((() => {
	init_client();
	BUCKET = "brief-attachments";
}));
function formatSize(bytes) {
	if (bytes < 1024) return `${bytes} B`;
	if (bytes < 1048576) return `${(bytes / 1024).toFixed(0)} KB`;
	return `${(bytes / 1048576).toFixed(1)} MB`;
}
function AttachmentUploader({ projectId, value, onChange }) {
	const { t } = useI18n();
	const upload = useUploadAttachment(projectId);
	const remove = useRemoveAttachment();
	const inputRef = (0, import_react.useRef)(null);
	const [dragOver, setDragOver] = (0, import_react.useState)(false);
	const [uploading, setUploading] = (0, import_react.useState)(false);
	async function handleFiles(files) {
		if (!files || files.length === 0) return;
		setUploading(true);
		const next = [...value];
		for (const file of Array.from(files)) {
			if (file.size > MAX_SIZE) {
				toast.error(t("brief.attachments.tooLarge", { name: file.name }));
				continue;
			}
			try {
				const attachment = await upload.mutateAsync(file);
				next.push(attachment);
			} catch (error) {
				toast.error(error instanceof Error ? error.message : t("brief.attachments.invalidType"));
			}
		}
		onChange(next);
		setUploading(false);
	}
	async function handleRemove(attachment) {
		onChange(value.filter((item) => item.path !== attachment.path));
		try {
			await remove.mutateAsync(attachment.path);
		} catch {}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
			interactive: false,
			onClick: () => inputRef.current?.click(),
			onDragOver: (e) => {
				e.preventDefault();
				setDragOver(true);
			},
			onDragLeave: () => setDragOver(false),
			onDrop: (e) => {
				e.preventDefault();
				setDragOver(false);
				handleFiles(e.dataTransfer.files);
			},
			className: `cursor-pointer border-2 border-dashed p-6 text-center transition-colors ${dragOver ? "border-primary/60" : "border-border/70"}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					ref: inputRef,
					type: "file",
					multiple: true,
					accept: ACCEPT,
					className: "hidden",
					onChange: (e) => void handleFiles(e.target.files)
				}),
				uploading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mx-auto size-6 animate-spin text-primary" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "mx-auto size-6 text-muted-foreground" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm font-medium",
					children: uploading ? t("brief.attachments.uploading") : t("brief.attachments.upload")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs text-muted-foreground",
					children: t("brief.field.hw_attachments.hint")
				})
			]
		}), value.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-muted-foreground",
			children: t("brief.attachments.empty")
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-2",
			children: value.map((attachment) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center justify-between gap-3 rounded-xl border border-border/70 px-3 py-2 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex min-w-0 items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-4 shrink-0 text-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "truncate",
							children: attachment.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "shrink-0 text-xs text-muted-foreground",
							children: formatSize(attachment.size)
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "ghost",
					size: "sm",
					onClick: () => handleRemove(attachment),
					"aria-label": t("brief.attachments.remove"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" })
				})]
			}, attachment.path))
		})]
	});
}
function AttachmentSummary({ value }) {
	const { t } = useI18n();
	if (value.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-1 text-sm text-muted-foreground",
		children: t("brief.empty")
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-1 space-y-1",
		children: value.map((attachment) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex items-center gap-2 text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Paperclip, { className: "size-3.5 shrink-0 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "truncate",
				children: attachment.name
			})]
		}, attachment.path))
	});
}
var MAX_SIZE;
var ACCEPT;
var init_AttachmentUploader = __esmMin((() => {
	init_GlassCard();
	init_button();
	init_useAttachments();
	init_i18n();
	MAX_SIZE = 52428800;
	ACCEPT = ".pdf,.png,.jpg,.jpeg,.webp,.gif,.mp4,.mov,.step,.stp,.stl,.iges,.igs,.dwg,.dxf,application/pdf,image/*,video/mp4,video/quicktime";
}));
/**
* Screen-hidden, print-visible document sheet.
* The `print-sheet` class is what the global @media print rules key on:
* everything else on the page is hidden while this sheet fills the page.
*/
function PrintSheet({ title, subtitle, meta, sections, footer, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "print-sheet hidden print:block",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				style: {
					borderBottom: "2px solid #111",
					paddingBottom: 12,
					marginBottom: 20
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						style: {
							fontSize: 11,
							letterSpacing: 2,
							textTransform: "uppercase",
							margin: 0
						},
						children: "Wayne-Web"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						style: {
							fontSize: 24,
							margin: "8px 0 0",
							fontWeight: 700
						},
						children: title
					}),
					subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						style: {
							fontSize: 12,
							margin: "6px 0 0"
						},
						children: subtitle
					})
				]
			}),
			meta && meta.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("table", {
				style: {
					width: "100%",
					fontSize: 12,
					marginBottom: 20,
					borderCollapse: "collapse"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: meta.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					style: {
						padding: "3px 12px 3px 0",
						width: "35%",
						fontWeight: 600
					},
					children: row.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					style: { padding: "3px 0" },
					children: row.value
				})] }, row.label)) })
			}),
			sections?.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				style: { marginBottom: 18 },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					style: {
						fontSize: 13,
						textTransform: "uppercase",
						letterSpacing: 1,
						borderBottom: "1px solid #999",
						paddingBottom: 4,
						margin: "0 0 8px"
					},
					children: section.heading
				}), section.rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: { marginBottom: 8 },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						style: {
							fontSize: 10,
							textTransform: "uppercase",
							margin: 0,
							letterSpacing: 1
						},
						children: row.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						style: {
							fontSize: 12,
							margin: "2px 0 0",
							whiteSpace: "pre-line"
						},
						children: row.value
					})]
				}, row.label))]
			}, section.heading)),
			children,
			footer && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				style: {
					marginTop: 24,
					borderTop: "1px solid #999",
					paddingTop: 8,
					fontSize: 10
				},
				children: footer
			})
		]
	});
}
var init_PrintSheet = __esmMin((() => {}));
var Textarea;
var init_textarea = __esmMin((() => {
	init_utils();
	Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
			className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
			ref,
			...props
		});
	});
	Textarea.displayName = "Textarea";
}));
var _portal_brief_exports = /* @__PURE__ */ __exportAll({ component: () => BriefPage });
function BriefPage() {
	const { t, locale } = useI18n();
	const { data } = useWorkspace();
	const save = useSaveBrief();
	const submit = useSubmitBrief();
	const reopen = useReopenBrief();
	const navigate = useNavigate();
	const [step, setStep] = (0, import_react.useState)(0);
	const [answers, setAnswers] = (0, import_react.useState)({});
	const [history, setHistory] = (0, import_react.useState)([]);
	const [celebrate, setCelebrate] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (data?.brief?.answers && typeof data.brief.answers === "object") {
			const split = splitBriefAnswers(data.brief.answers);
			setAnswers(split.answers);
			setHistory(split.history);
			setStep(data.brief.current_step ?? 0);
		}
	}, [data?.brief]);
	if (!data) return null;
	const legacyTypeRaw = answers[TYPE_KEY];
	const legacyType = isProjectType(legacyTypeRaw) ? legacyTypeRaw : null;
	const unsure = answers[UNSURE_KEY] === true;
	const kindRaw = answers[KIND_KEY];
	const effectiveKind = isProjectKind(kindRaw) ? kindRaw : null;
	const legacyMode = !effectiveKind && !unsure && legacyType !== null;
	const categories = Array.isArray(answers["categories"]) ? answers[CATEGORIES_KEY] : [];
	const steps = legacyMode ? briefSteps(legacyType) : briefStepsV2(unsure ? "unsure" : effectiveKind, categories);
	const current = Math.min(step, steps.length - 1);
	const section = steps[current];
	const isRecap = section.kind === "recap";
	const submitted = Boolean(data.brief?.submitted_at);
	const depositPaid = data.invoices.some((invoice) => invoice.i18n_key === "deposit" && invoice.status === "paid");
	const topLabel = legacyMode ? legacyType ? t(`brief.type.${legacyType}.label`) : t("brief.empty") : unsure ? t("brief.kind.unsure.label") : effectiveKind ? t(`brief.kind.${effectiveKind}.label`) : t("brief.empty");
	function categoryLabel(cat) {
		return isProjectType(cat) ? t(`brief.type.${cat}.label`) : t(`brief.category.${cat}.label`);
	}
	function categoriesFor(sectionKey) {
		const relevant = sectionKey === "software_categories" ? SOFTWARE_CATEGORIES : HARDWARE_CATEGORIES;
		return categories.filter((c) => relevant.includes(c));
	}
	function payload(nextAnswers, nextHistory) {
		return {
			...nextAnswers,
			[HISTORY_KEY]: nextHistory
		};
	}
	function setValue(key, value) {
		setAnswers((prev) => ({
			...prev,
			[key]: value
		}));
	}
	function setAttachments(key, value) {
		setAnswers((prev) => ({
			...prev,
			[key]: value
		}));
	}
	function toggleCategory(cat) {
		setAnswers((prev) => {
			const currentCats = Array.isArray(prev["categories"]) ? prev[CATEGORIES_KEY] : [];
			const nextList = currentCats.includes(cat) ? currentCats.filter((c) => c !== cat) : [...currentCats, cat];
			return {
				...prev,
				[CATEGORIES_KEY]: nextList
			};
		});
	}
	async function chooseType(type) {
		const next = {
			...answers,
			[TYPE_KEY]: type
		};
		setAnswers(next);
		try {
			await save.mutateAsync({
				projectId: data.project.id,
				answers: payload(next, history),
				step: 1,
				projectType: "software",
				categories: [type],
				unsure: false
			});
			setStep(1);
		} catch (error) {
			toast.error(error instanceof Error ? error.message : t("brief.error.default"));
		}
	}
	async function chooseKind(kind) {
		const next = {
			...answers,
			[KIND_KEY]: kind,
			[UNSURE_KEY]: false
		};
		setAnswers(next);
		try {
			await save.mutateAsync({
				projectId: data.project.id,
				answers: payload(next, history),
				step: 1,
				projectType: kind,
				categories: Array.isArray(next["categories"]) ? next[CATEGORIES_KEY] : [],
				unsure: false
			});
			setStep(1);
		} catch (error) {
			toast.error(error instanceof Error ? error.message : t("brief.error.default"));
		}
	}
	async function chooseUnsure() {
		const next = {
			...answers,
			[UNSURE_KEY]: true
		};
		setAnswers(next);
		try {
			await save.mutateAsync({
				projectId: data.project.id,
				answers: payload(next, history),
				step: 1,
				projectType: null,
				categories: [],
				unsure: true
			});
			setStep(1);
		} catch (error) {
			toast.error(error instanceof Error ? error.message : t("brief.error.default"));
		}
	}
	async function next() {
		if (legacyMode) {
			if (!legacyType) {
				toast.error(t("brief.kind.required"));
				return;
			}
		} else if (!unsure && !effectiveKind) {
			toast.error(t("brief.kind.required"));
			return;
		} else if (section.kind === "categories") {
			if (categoriesFor(section.key).length === 0) {
				toast.error(t("brief.category.required"));
				return;
			}
		}
		const topType = legacyMode ? "software" : unsure ? null : effectiveKind;
		const topCategories = legacyMode ? legacyType ? [legacyType] : [] : unsure ? [] : categories;
		try {
			if (isRecap) {
				const nextHistory = [...history, {
					at: (/* @__PURE__ */ new Date()).toISOString(),
					event: "submitted",
					type: legacyMode ? legacyType : unsure ? "unsure" : effectiveKind,
					categories: topCategories,
					answers: { ...answers }
				}];
				await submit.mutateAsync({
					projectId: data.project.id,
					answers: payload(answers, nextHistory),
					projectType: topType,
					categories: topCategories,
					unsure
				});
				setHistory(nextHistory);
				setCelebrate(true);
				setTimeout(() => navigate({ to: "/dashboard" }), 2200);
			} else {
				await save.mutateAsync({
					projectId: data.project.id,
					answers: payload(answers, history),
					step: current + 1,
					projectType: topType,
					categories: topCategories,
					unsure
				});
				setStep(current + 1);
			}
		} catch (error) {
			toast.error(error instanceof Error ? error.message : t("brief.error.default"));
		}
	}
	async function handleReopen() {
		try {
			await reopen.mutateAsync(data.project.id);
			const nextHistory = [...history, {
				at: (/* @__PURE__ */ new Date()).toISOString(),
				event: "reopened",
				type: legacyMode ? legacyType : unsure ? "unsure" : effectiveKind,
				categories,
				answers: { ...answers }
			}];
			await save.mutateAsync({
				projectId: data.project.id,
				answers: payload(answers, nextHistory),
				step: 0
			});
			setHistory(nextHistory);
			setStep(0);
		} catch (error) {
			toast.error(error instanceof Error ? error.message : t("brief.error.reopen"));
		}
	}
	const recapSections = steps.filter((s) => s.kind === "fields" || s.kind === "categories");
	function displayValue(field) {
		const value = answers[field.key];
		if (field.kind === "file") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AttachmentSummary, { value: Array.isArray(value) ? value : [] });
		if (field.kind === "select" && typeof value === "string" && value) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm",
			children: t(`brief.field.${field.key}.option.${value}`)
		});
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 whitespace-pre-line text-sm",
			children: typeof value === "string" && value ? value : t("brief.empty")
		});
	}
	function answerText(field) {
		const value = answers[field.key];
		if (field.kind === "file") return Array.isArray(value) && value.length ? value.map((a) => a.name).join(", ") : t("brief.empty");
		if (field.kind === "select" && typeof value === "string" && value) return t(`brief.field.${field.key}.option.${value}`);
		return typeof value === "string" && value ? value : t("brief.empty");
	}
	const printSections = [{
		heading: t("brief.pdf.section.type"),
		rows: [{
			label: t("brief.recap.projectType"),
			value: topLabel
		}]
	}, ...recapSections.map((s) => ({
		heading: t(`brief.section.${s.key}.title`),
		rows: s.kind === "categories" ? [{
			label: t(`brief.section.${s.key}.title`),
			value: categoriesFor(s.key).map(categoryLabel).join(", ") || t("brief.empty")
		}] : s.fields.map((field) => ({
			label: t(`brief.field.${field.key}.label`),
			value: answerText(field)
		}))
	}))];
	const briefSheet = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrintSheet, {
		title: t("brief.pdf.title"),
		subtitle: data.project.name,
		meta: [
			{
				label: t("brief.pdf.client"),
				value: data.clientName ?? data.profile.full_name ?? "—"
			},
			{
				label: t("brief.pdf.project"),
				value: data.project.name
			},
			{
				label: t("brief.pdf.status"),
				value: submitted ? t("brief.pdf.status.submitted") : t("brief.pdf.status.draft")
			}
		],
		sections: printSections,
		footer: t("brief.pdf.printedOn", { date: formatFullDate((/* @__PURE__ */ new Date()).toISOString(), locale) })
	});
	if (submitted && !celebrate) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 pb-8",
		children: [
			briefSheet,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-semibold sm:text-4xl",
					children: t("brief.title")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "secondary",
					onClick: () => window.print(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-2 size-4" }), t("brief.pdf.download")]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
				interactive: false,
				className: "p-6 sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium",
						children: t("brief.received.title")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: t("brief.received.body")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 space-y-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-wider text-muted-foreground",
							children: t("brief.recap.projectType")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm",
							children: topLabel
						})] }), recapSections.map((s) => s.kind === "categories" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-wider text-muted-foreground",
							children: t(`brief.section.${s.key}.title`)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 flex flex-wrap gap-2",
							children: categoriesFor(s.key).length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: t("brief.empty")
							}) : categoriesFor(s.key).map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full border border-border bg-secondary/40 px-2.5 py-1 text-xs",
								children: categoryLabel(cat)
							}, cat))
						})] }, s.key) : s.fields.map((field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-wider text-muted-foreground",
							children: t(`brief.field.${field.key}.label`)
						}), displayValue(field)] }, field.key)))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 rounded-xl border border-border bg-secondary/30 p-5",
						children: depositPaid ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: t("brief.locked.title")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: t("brief.locked.body")
						})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: t("brief.received.editable")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							className: "mt-4",
							onClick: handleReopen,
							disabled: reopen.isPending,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "mr-2 size-4" }), t("brief.received.edit")]
						})] })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BriefHistory, { history })
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 pb-8",
		children: [
			isRecap && briefSheet,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Celebration, {
				show: celebrate,
				title: t("brief.celebration.title"),
				subtitle: t("brief.celebration.subtitle")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground",
					children: t("brief.sectionProgress", {
						current: current + 1,
						total: steps.length
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-3xl font-semibold sm:text-4xl",
					children: t(`brief.section.${section.key}.title`)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted-foreground",
					children: section.kind === "type" || section.kind === "kind" ? t("brief.kind.subtitle") : section.kind === "categories" ? t("brief.category.subtitle") : isRecap ? t("brief.recap.subtitle") : t("brief.subtitle")
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center gap-2",
				children: steps.map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-1 flex-1 rounded-full transition-colors ${index <= current ? "bg-primary" : "bg-border"}` }, index))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "wait",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						x: 24
					},
					animate: {
						opacity: 1,
						x: 0
					},
					exit: {
						opacity: 0,
						x: -24
					},
					transition: {
						duration: .32,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					children: section.kind === "type" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-3 sm:grid-cols-2",
						children: PROJECT_TYPES.map((type) => {
							const active = legacyType === type;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => chooseType(type),
								className: "text-left",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
									variant: active ? "strong" : "default",
									className: `h-full p-5 ${active ? "ring-1 ring-primary/60" : ""}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-medium",
											children: t(`brief.type.${type}.label`)
										}), active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 shrink-0 text-primary" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-muted-foreground",
										children: t(`brief.type.${type}.desc`)
									})]
								})
							}, type);
						})
					}) : section.kind === "kind" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-3 sm:grid-cols-3",
							children: PROJECT_KINDS.map((kind) => {
								const active = effectiveKind === kind;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => chooseKind(kind),
									className: "text-left",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
										variant: active ? "strong" : "default",
										className: `h-full p-5 ${active ? "ring-1 ring-primary/60" : ""}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start justify-between gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-medium",
												children: t(`brief.kind.${kind}.label`)
											}), active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 shrink-0 text-primary" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm text-muted-foreground",
											children: t(`brief.kind.${kind}.desc`)
										})]
									})
								}, kind);
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => chooseUnsure(),
							className: "block w-full text-left",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassCard, {
								variant: unsure ? "strong" : "dim",
								className: `p-4 ${unsure ? "ring-1 ring-primary/60" : ""}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-medium",
										children: t("brief.kind.unsure.label")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-0.5 text-xs text-muted-foreground",
										children: t("brief.kind.unsure.desc")
									})] }), unsure && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 shrink-0 text-primary" })]
								})
							})
						})]
					}) : section.kind === "categories" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-5",
						children: section.key === "software_categories" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-3 sm:grid-cols-2",
							children: SOFTWARE_CATEGORIES.map((cat) => {
								const active = categories.includes(cat);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => toggleCategory(cat),
									className: "text-left",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassCard, {
										variant: active ? "strong" : "default",
										className: `h-full p-4 ${active ? "ring-1 ring-primary/60" : ""}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-medium",
												children: categoryLabel(cat)
											}), active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 shrink-0 text-primary" })]
										})
									})
								}, cat);
							})
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-5",
							children: HARDWARE_GROUPS.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground",
								children: t(`brief.hwgroup.${group.key}.label`)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 grid gap-3 sm:grid-cols-2",
								children: group.items.map((item) => {
									const active = categories.includes(item);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => toggleCategory(item),
										className: "text-left",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassCard, {
											variant: active ? "strong" : "default",
											className: `h-full p-4 ${active ? "ring-1 ring-primary/60" : ""}`,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-sm font-medium",
													children: categoryLabel(item)
												}), active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 shrink-0 text-primary" })]
											})
										})
									}, item);
								})
							})] }, group.key))
						})
					}) : isRecap ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassCard, {
							interactive: false,
							className: "p-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-wider text-muted-foreground",
									children: t("brief.recap.projectType")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm",
									children: topLabel
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "ghost",
									size: "sm",
									onClick: () => setStep(0),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "mr-2 size-3.5" }), t("brief.recap.edit")]
								})]
							})
						}), recapSections.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
							interactive: false,
							className: "p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium",
									children: t(`brief.section.${s.key}.title`)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "ghost",
									size: "sm",
									onClick: () => setStep(steps.indexOf(s)),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "mr-2 size-3.5" }), t("brief.recap.edit")]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 space-y-3",
								children: s.kind === "categories" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-2",
									children: categoriesFor(s.key).length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground",
										children: t("brief.empty")
									}) : categoriesFor(s.key).map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full border border-border bg-secondary/40 px-2.5 py-1 text-xs",
										children: categoryLabel(cat)
									}, cat))
								}) : s.fields.map((field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-wider text-muted-foreground",
									children: t(`brief.field.${field.key}.label`)
								}), displayValue(field)] }, field.key))
							})]
						}, s.key))]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassCard, {
						variant: "strong",
						interactive: false,
						className: "space-y-5 p-6 sm:p-8",
						children: section.fields.map((field) => {
							const kind = field.kind ?? (field.long ? "textarea" : "text");
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: field.key,
									children: t(`brief.field.${field.key}.label`)
								}), kind === "select" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									value: typeof answers[field.key] === "string" ? answers[field.key] : "",
									onValueChange: (value) => setValue(field.key, value),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
										id: field.key,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: t(`brief.field.${field.key}.hint`) })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: (field.options ?? []).map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: option,
										children: t(`brief.field.${field.key}.option.${option}`)
									}, option)) })]
								}) : kind === "file" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AttachmentUploader, {
									projectId: data.project.id,
									value: Array.isArray(answers[field.key]) ? answers[field.key] : [],
									onChange: (value) => setAttachments(field.key, value)
								}) : kind === "textarea" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									id: field.key,
									rows: 4,
									value: typeof answers[field.key] === "string" ? answers[field.key] : "",
									onChange: (e) => setValue(field.key, e.target.value),
									placeholder: t(`brief.field.${field.key}.hint`)
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: field.key,
									value: typeof answers[field.key] === "string" ? answers[field.key] : "",
									onChange: (e) => setValue(field.key, e.target.value),
									placeholder: t(`brief.field.${field.key}.hint`)
								})]
							}, field.key);
						})
					})
				}, section.key)
			}),
			section.kind !== "type" && section.kind !== "kind" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					disabled: current === 0,
					onClick: () => setStep(current - 1),
					children: t("brief.back")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-3",
					children: [isRecap && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "secondary",
						onClick: () => window.print(),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-2 size-4" }), t("brief.pdf.download")]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "lg",
						onClick: next,
						disabled: save.isPending || submit.isPending,
						children: isRecap ? t("brief.submit") : t("brief.continue")
					})]
				})]
			}),
			history.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BriefHistory, { history })
		]
	});
}
function BriefHistory({ history }) {
	const { t, locale } = useI18n();
	const [open, setOpen] = (0, import_react.useState)(null);
	const entries = [...history].reverse();
	function entryTopLabel(entry) {
		if (entry.type === "unsure") return t("brief.kind.unsure.label");
		if (isProjectKind(entry.type)) return t(`brief.kind.${entry.type}.label`);
		if (isProjectType(entry.type)) return t(`brief.type.${entry.type}.label`);
		return t("brief.empty");
	}
	function entryFieldValue(entry, field) {
		const value = entry.answers[field.key];
		if (field.kind === "file") return Array.isArray(value) && value.length ? value.map((a) => a.name).join(", ") : t("brief.empty");
		if (field.kind === "select" && typeof value === "string" && value) return t(`brief.field.${field.key}.option.${value}`);
		return typeof value === "string" && value ? value : t("brief.empty");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
		interactive: false,
		className: "p-6 sm:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(History, { className: "size-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium",
					children: t("brief.history.title")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: t("brief.history.subtitle")
			}),
			entries.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-sm text-muted-foreground",
				children: t("brief.history.empty")
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-5 space-y-3",
				children: entries.map((entry, index) => {
					const id = `${entry.at}-${index}`;
					const isOpen = open === id;
					const version = entries.length - index;
					const kindForFields = entry.type === "unsure" ? "unsure" : isProjectKind(entry.type) ? entry.type : null;
					const fields = isProjectType(entry.type) ? briefFields(entry.type) : briefStepsV2(kindForFields, entry.categories ?? []).flatMap((s) => s.fields);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-xl border border-border/70 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium",
								children: entry.event === "reopened" ? t("brief.history.event.reopened") : t("brief.history.event.submitted")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-0.5 text-xs text-muted-foreground",
								children: [
									t("brief.history.version", { n: version }),
									" ·",
									" ",
									formatFullDate(entry.at, locale)
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "ghost",
								size: "sm",
								onClick: () => setOpen(isOpen ? null : id),
								children: [entry.event === "reopened" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "mr-2 size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mr-2 size-3.5" }), isOpen ? t("brief.history.hide") : t("brief.history.show")]
							})]
						}), isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 space-y-3 border-t border-border/60 pt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-wider text-muted-foreground",
								children: t("brief.recap.projectType")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm",
								children: entryTopLabel(entry)
							})] }), fields.map((field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-wider text-muted-foreground",
								children: t(`brief.field.${field.key}.label`)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 whitespace-pre-line text-sm",
								children: entryFieldValue(entry, field)
							})] }, field.key))]
						})]
					}, id);
				})
			})
		]
	});
}
var init__portal_brief$1 = __esmMin((() => {
	init_AttachmentUploader();
	init_GlassCard();
	init_Celebration();
	init_PrintSheet();
	init_button();
	init_input();
	init_label();
	init_select();
	init_textarea();
	init_usePortal();
	init_brief_flow();
	init_i18n();
	init_journey();
}));
var $$splitComponentImporter$10;
var Route$10;
var init__portal_brief = __esmMin((() => {
	$$splitComponentImporter$10 = () => Promise.resolve().then(() => (init__portal_brief$1(), _portal_brief_exports));
	Route$10 = createFileRoute("/_authenticated/_portal/brief")({
		head: () => ({ meta: [
			{ title: "Project brief — Wayne Client Portal" },
			{
				name: "description",
				content: "Answer a few guided questions so Wayne can build exactly what you need."
			},
			{
				property: "og:title",
				content: "Project brief — Wayne Client Portal"
			},
			{
				property: "og:description",
				content: "Answer a few guided questions so Wayne can build exactly what you need."
			}
		] }),
		component: lazyRouteComponent($$splitComponentImporter$10, "component")
	});
}));
function JourneyTimeline({ milestones, project, detailed = false }) {
	const t = useT();
	const { locale } = useI18n();
	const ordered = orderedMilestones(milestones);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "relative space-y-2",
		children: ordered.map((milestone, index) => {
			const status = milestoneStatus(milestone, project);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
				initial: {
					opacity: 0,
					x: -8
				},
				animate: {
					opacity: 1,
					x: 0
				},
				transition: {
					delay: index * .05,
					duration: .35,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				className: cn("flex gap-4 rounded-xl px-3 py-3 transition-colors", status === "active" && "bg-primary/8 ring-1 ring-primary/25", status === "upcoming" && "opacity-55"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("flex size-7 shrink-0 items-center justify-center rounded-full border text-[11px] font-semibold", status === "done" && "border-success/50 bg-success/15 text-success", status === "active" && "border-primary bg-primary/20 text-primary", status === "upcoming" && "border-border bg-secondary text-muted-foreground"),
						children: status === "done" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							initial: {
								scale: .4,
								opacity: 0
							},
							animate: {
								scale: 1,
								opacity: 1
							},
							transition: {
								duration: .3,
								ease: [
									.22,
									1,
									.36,
									1
								]
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" })
						}) : status === "active" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-primary animate-pulse" }) : index + 1
					}), index < ordered.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("mt-1 w-px flex-1", status === "done" ? "bg-success/40" : "bg-border") })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1 pb-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: cn("font-medium", status === "active" && "text-foreground", status !== "active" && "text-foreground/90"),
								children: milestoneTitle(milestone, t)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground",
								children: status === "done" ? t("journey.timeline.completed") : formatDate(milestone.due_date, locale)
							})]
						}),
						(detailed || status === "active") && milestone.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: milestone.description
						}),
						status === "active" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: phaseRoute(milestone.key),
							className: "mt-3 inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-1.5 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90",
							children: [t("journey.timeline.continue"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })]
						})
					]
				})]
			}, milestone.id);
		})
	});
}
var init_JourneyTimeline = __esmMin((() => {
	init_i18n();
	init_utils();
	init_journey();
}));
function NextActionCard({ action }) {
	const t = useT();
	const isWayne = action.owner === "wayne";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y: 14
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: {
			duration: .4,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
			variant: isWayne ? "default" : "active",
			className: "p-6 sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5" }), isWayne ? t("journey.nextActionCard.whatWeAreDoing") : t("journey.nextActionCard.yourNextStep")]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-4 font-display text-2xl font-semibold sm:text-3xl",
					children: action.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base",
					children: action.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-7 flex flex-wrap items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						variant: isWayne ? "secondary" : "default",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: action.ctaTo,
							children: [action.ctaLabel, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					}), action.eta && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2 text-sm text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-4" }), t("journey.nextActionCard.estimatedTime", { eta: action.eta })]
					})]
				})
			]
		})
	});
}
var init_NextActionCard = __esmMin((() => {
	init_GlassCard();
	init_button();
	init_i18n();
}));
function WaitingBadge({ owner, className }) {
	const t = useT();
	const isClient = owner === "client";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]", isClient ? "border-warning/40 bg-warning/10 text-warning" : "border-primary/40 bg-primary/10 text-primary", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-1.5 rounded-full", isClient ? "bg-warning" : "bg-primary", "animate-pulse") }), isClient ? t("common.waitingClient") : t("common.waitingWayne")]
	});
}
var init_WaitingBadge = __esmMin((() => {
	init_i18n();
	init_utils();
}));
function ProgressCard({ action, projectName }) {
	const t = useT();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
		variant: "strong",
		glow: true,
		className: "p-6 sm:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-start justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground",
					children: t("journey.progressCard.eyebrow")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-xl font-semibold sm:text-2xl",
					children: projectName
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WaitingBadge, { owner: action.owner })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-7 flex items-end justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-4xl font-semibold sm:text-5xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-gradient",
						children: [action.progress, "%"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-right text-sm text-muted-foreground",
					children: [t("journey.progressCard.currentPhase"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-base font-medium text-foreground",
						children: action.phaseLabel
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 h-2.5 w-full overflow-hidden rounded-full bg-secondary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: { width: 0 },
					animate: { width: `${action.progress}%` },
					transition: {
						duration: .9,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					className: "relative h-full rounded-full",
					style: { background: "var(--gradient-primary)" },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 rounded-full sheen-sweep" })
				})
			})
		]
	});
}
var init_ProgressCard = __esmMin((() => {
	init_GlassCard();
	init_WaitingBadge();
	init_i18n();
}));
var _portal_dashboard_exports = /* @__PURE__ */ __exportAll({ component: () => Dashboard });
function Dashboard() {
	const { data, isLoading } = useWorkspace();
	const navigate = useNavigate();
	const t = useT();
	const { locale } = useI18n();
	(0, import_react.useEffect)(() => {
		if (data && !data.profile.onboarded) navigate({
			to: "/onboarding",
			replace: true
		});
	}, [data, navigate]);
	if (isLoading || !data) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-8 w-56" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-48 w-full rounded-2xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-40 w-full rounded-2xl" })
		]
	});
	const action = computeNextAction(data.project, t);
	const firstName = (data.profile.full_name ?? t("journey.dashboard.fallbackName")).split(" ")[0] ?? "";
	const remaining = Number(data.project.total_amount) - Number(data.project.paid_amount);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 pb-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.header, {
				initial: {
					opacity: 0,
					y: 10
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: { duration: .4 },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-semibold sm:text-4xl",
					children: t("journey.dashboard.hello", { name: firstName })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted-foreground",
					children: action.greeting
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressCard, {
				action,
				projectName: data.project.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NextActionCard, { action }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/documents",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
						className: "h-full p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-5 text-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 font-medium",
								children: t("journey.dashboard.documents.title")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: t("journey.dashboard.documents.count", { count: data.documents.length })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-3 inline-flex items-center gap-1 text-sm text-primary",
								children: [
									t("journey.dashboard.open"),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })
								]
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/billing",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
						className: "h-full p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "size-5 text-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 font-medium",
								children: t("journey.dashboard.billing.title")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: t("journey.dashboard.billing.remaining", {
									remaining: formatMoney(remaining, locale),
									total: formatMoney(data.project.total_amount, locale)
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-3 inline-flex items-center gap-1 text-sm text-primary",
								children: [
									t("journey.dashboard.open"),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })
								]
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
				interactive: false,
				className: "p-6 sm:p-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground",
					children: t("journey.timeline.title")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JourneyTimeline, {
						milestones: data.milestones,
						project: data.project
					})
				})]
			})
		]
	});
}
var init__portal_dashboard$1 = __esmMin((() => {
	init_GlassCard();
	init_JourneyTimeline();
	init_NextActionCard();
	init_ProgressCard();
	init_skeleton();
	init_usePortal();
	init_i18n();
	init_journey();
}));
var $$splitComponentImporter$9;
var Route$9;
var init__portal_dashboard = __esmMin((() => {
	$$splitComponentImporter$9 = () => Promise.resolve().then(() => (init__portal_dashboard$1(), _portal_dashboard_exports));
	Route$9 = createFileRoute("/_authenticated/_portal/dashboard")({
		head: () => ({ meta: [
			{ title: "Dashboard — Wayne Client Portal" },
			{
				name: "description",
				content: "See your project progress, your next action and everything Wayne is working on."
			},
			{
				property: "og:title",
				content: "Dashboard — Wayne Client Portal"
			},
			{
				property: "og:description",
				content: "See your project progress, your next action and everything Wayne is working on."
			}
		] }),
		component: lazyRouteComponent($$splitComponentImporter$9, "component")
	});
}));
var _portal_delivery_exports = /* @__PURE__ */ __exportAll({ component: () => DeliveryPage });
function DeliveryPage() {
	const t = useT();
	const { data } = useWorkspace();
	const feedback = useSubmitFeedback();
	const [rating, setRating] = (0, import_react.useState)(5);
	const [comment, setComment] = (0, import_react.useState)("");
	const [allow, setAllow] = (0, import_react.useState)(true);
	const [celebrate, setCelebrate] = (0, import_react.useState)(false);
	const [sent, setSent] = (0, import_react.useState)(false);
	if (!data) return null;
	const live = data.links.find((link) => link.type === "live") ?? data.links[0];
	async function send() {
		if (!data) return;
		try {
			await feedback.mutateAsync({
				projectId: data.project.id,
				userId: data.profile.id,
				rating,
				comment,
				allowTestimonial: allow
			});
			setSent(true);
			setCelebrate(true);
			setTimeout(() => setCelebrate(false), 2400);
		} catch (error) {
			toast.error(error instanceof Error ? error.message : t("delivery.feedback.error"));
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 pb-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Celebration, {
				show: celebrate,
				title: t("delivery.celebration.title"),
				subtitle: t("delivery.celebration.subtitle")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex size-11 items-center justify-center rounded-xl border border-primary/40 bg-primary/15 text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PartyPopper, { className: "size-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-5 font-display text-3xl font-semibold sm:text-4xl",
					children: t("delivery.heading")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted-foreground",
					children: t("delivery.subheading")
				})
			] }),
			live && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
				interactive: false,
				className: "p-6 sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground",
						children: t("delivery.product.label")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-display text-xl font-semibold",
						children: live.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: live.url,
						target: "_blank",
						rel: "noreferrer",
						className: "mt-4 inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90",
						children: [
							t("delivery.product.open"),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-4" })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
				variant: "strong",
				interactive: false,
				className: "p-6 sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium",
						children: t("delivery.feedback.question")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex gap-2",
						children: [
							1,
							2,
							3,
							4,
							5
						].map((value) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setRating(value),
							disabled: sent,
							"aria-label": t("delivery.feedback.starLabel", { value }),
							className: "transition-transform hover:scale-110",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: cn("size-7", value <= rating ? "fill-primary text-primary" : "text-muted-foreground") })
						}, value))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						rows: 4,
						className: "mt-4",
						disabled: sent,
						value: comment,
						onChange: (e) => setComment(e.target.value),
						placeholder: t("delivery.feedback.placeholder")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-4 flex items-start gap-3 text-sm text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
							checked: allow,
							disabled: sent,
							onCheckedChange: (value) => setAllow(value === true),
							className: "mt-0.5"
						}), t("delivery.feedback.testimonial")]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-5",
						onClick: send,
						disabled: sent || feedback.isPending,
						children: sent ? t("delivery.feedback.sent") : t("delivery.feedback.send")
					})
				]
			})
		]
	});
}
var init__portal_delivery$1 = __esmMin((() => {
	init_GlassCard();
	init_Celebration();
	init_button();
	init_checkbox();
	init_textarea();
	init_usePortal();
	init_i18n();
	init_utils();
}));
var $$splitComponentImporter$8;
var Route$8;
var init__portal_delivery = __esmMin((() => {
	$$splitComponentImporter$8 = () => Promise.resolve().then(() => (init__portal_delivery$1(), _portal_delivery_exports));
	Route$8 = createFileRoute("/_authenticated/_portal/delivery")({
		head: () => ({ meta: [
			{ title: "Delivery — Wayne Client Portal" },
			{
				name: "description",
				content: "Open your finished project and share your feedback."
			},
			{
				property: "og:title",
				content: "Delivery — Wayne Client Portal"
			},
			{
				property: "og:description",
				content: "Open your finished project and share your feedback."
			}
		] }),
		component: lazyRouteComponent($$splitComponentImporter$8, "component")
	});
}));
var _portal_documents_exports = /* @__PURE__ */ __exportAll({ component: () => DocumentsPage });
function DocumentsPage() {
	const { data } = useWorkspace();
	const { t, locale } = useI18n();
	if (!data) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 pb-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl font-semibold sm:text-4xl",
			children: t("documents.title")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-muted-foreground",
			children: t("documents.subtitle")
		})] }), data.documents.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
			interactive: false,
			className: "p-8 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-medium",
				children: t("documents.emptyTitle")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: t("documents.emptyBody")
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-3",
			children: data.documents.map((doc) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassCard, {
				className: "p-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-10 items-center justify-center rounded-xl border border-primary/40 bg-primary/15 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: documentLabel(doc, t)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted-foreground",
							children: [
								documentTypeLabel(doc, t),
								" · ",
								formatDate(doc.created_at, locale)
							]
						})] })]
					}), doc.url ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: doc.url,
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm text-foreground transition-colors hover:bg-secondary/60",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), t("documents.open")]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs uppercase tracking-wider text-muted-foreground",
						children: t("documents.inPortal")
					})]
				})
			}, doc.id))
		})]
	});
}
var init__portal_documents$1 = __esmMin((() => {
	init_GlassCard();
	init_usePortal();
	init_i18n();
	init_journey();
}));
var $$splitComponentImporter$7;
var Route$7;
var init__portal_documents = __esmMin((() => {
	$$splitComponentImporter$7 = () => Promise.resolve().then(() => (init__portal_documents$1(), _portal_documents_exports));
	Route$7 = createFileRoute("/_authenticated/_portal/documents")({
		head: () => ({ meta: [
			{ title: "Documents — Wayne Client Portal" },
			{
				name: "description",
				content: "All your project documents, contracts and deliverables."
			},
			{
				property: "og:title",
				content: "Documents — Wayne Client Portal"
			},
			{
				property: "og:description",
				content: "All your project documents, contracts and deliverables."
			}
		] }),
		component: lazyRouteComponent($$splitComponentImporter$7, "component")
	});
}));
var _portal_profile_exports = /* @__PURE__ */ __exportAll({ component: () => ProfilePage });
function ProfilePage() {
	const t = useT();
	const { data } = useWorkspace();
	const update = useUpdateProfile();
	const [fullName, setFullName] = (0, import_react.useState)("");
	const [company, setCompany] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (!data) return;
		setFullName(data.profile.full_name ?? "");
		setCompany(data.profile.company ?? "");
		setPhone(data.profile.phone ?? "");
	}, [data]);
	if (!data) return null;
	async function save() {
		if (!data) return;
		try {
			await update.mutateAsync({
				id: data.profile.id,
				values: {
					full_name: fullName,
					company,
					phone
				}
			});
			toast.success(t("profile.success"));
		} catch (error) {
			toast.error(error instanceof Error ? error.message : t("profile.error"));
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 pb-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl font-semibold sm:text-4xl",
			children: t("profile.heading")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-muted-foreground",
			children: t("profile.subheading")
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
			variant: "strong",
			interactive: false,
			className: "space-y-4 p-6 sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "full_name",
						children: t("profile.fullName")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "full_name",
						value: fullName,
						onChange: (e) => setFullName(e.target.value)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "company",
						children: t("profile.company")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "company",
						value: company,
						onChange: (e) => setCompany(e.target.value)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "phone",
						children: t("profile.phone")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "phone",
						value: phone,
						onChange: (e) => setPhone(e.target.value)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: t("profile.email") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: data.profile.email ?? "",
						disabled: true
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: save,
					disabled: update.isPending,
					children: update.isPending ? t("profile.saving") : t("profile.save")
				})
			]
		})]
	});
}
var init__portal_profile$1 = __esmMin((() => {
	init_GlassCard();
	init_button();
	init_input();
	init_label();
	init_usePortal();
	init_i18n();
}));
var $$splitComponentImporter$6;
var Route$6;
var init__portal_profile = __esmMin((() => {
	$$splitComponentImporter$6 = () => Promise.resolve().then(() => (init__portal_profile$1(), _portal_profile_exports));
	Route$6 = createFileRoute("/_authenticated/_portal/profile")({
		head: () => ({ meta: [
			{ title: "Profile — Wayne Client Portal" },
			{
				name: "description",
				content: "Manage your contact details and company information."
			},
			{
				property: "og:title",
				content: "Profile — Wayne Client Portal"
			},
			{
				property: "og:description",
				content: "Manage your contact details and company information."
			}
		] }),
		component: lazyRouteComponent($$splitComponentImporter$6, "component")
	});
}));
var _portal_project_exports = /* @__PURE__ */ __exportAll({ component: () => ProjectPage });
function ProjectPage() {
	const { data } = useWorkspace();
	const t = useT();
	if (!data) return null;
	const action = computeNextAction(data.project, t);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 pb-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl font-semibold sm:text-4xl",
				children: data.project.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WaitingBadge, { owner: action.owner })
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressCard, {
				action,
				projectName: data.project.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
				interactive: false,
				className: "p-6 sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground",
							children: t("project.roadmap")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 rounded-full border border-success/40 bg-success/10 px-3 py-1 text-[11px] font-medium text-success",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 animate-pulse rounded-full bg-success" }), t("journey.timeline.live")]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JourneyTimeline, {
							milestones: data.milestones,
							project: data.project,
							detailed: true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-xs text-muted-foreground",
						children: t("journey.timeline.updated")
					})
				]
			}),
			data.links.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
				interactive: false,
				className: "p-6 sm:p-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground",
					children: t("project.yourLinks")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 space-y-2",
					children: data.links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: link.url,
						target: "_blank",
						rel: "noreferrer",
						className: "flex items-center justify-between rounded-xl border border-border/70 px-4 py-3 text-sm transition-colors hover:bg-secondary/60",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: link.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-2 text-muted-foreground",
							children: link.url
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-4 text-muted-foreground" })]
					}, link.id))
				})]
			})
		]
	});
}
var init__portal_project$1 = __esmMin((() => {
	init_GlassCard();
	init_JourneyTimeline();
	init_ProgressCard();
	init_WaitingBadge();
	init_usePortal();
	init_i18n();
	init_journey();
}));
var $$splitComponentImporter$5;
var Route$5;
var init__portal_project = __esmMin((() => {
	$$splitComponentImporter$5 = () => Promise.resolve().then(() => (init__portal_project$1(), _portal_project_exports));
	Route$5 = createFileRoute("/_authenticated/_portal/project")({
		head: () => ({ meta: [
			{ title: "Project — Wayne Client Portal" },
			{
				name: "description",
				content: "Follow your project roadmap, progress and live links."
			},
			{
				property: "og:title",
				content: "Project — Wayne Client Portal"
			},
			{
				property: "og:description",
				content: "Follow your project roadmap, progress and live links."
			}
		] }),
		component: lazyRouteComponent($$splitComponentImporter$5, "component")
	});
}));
var _portal_services_exports = /* @__PURE__ */ __exportAll({ component: () => ServicesPage });
function ServicesPage() {
	const t = useT();
	const { locale } = useI18n();
	const { data, isLoading } = usePackages();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 pb-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl font-semibold sm:text-4xl",
			children: t("services.heading")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-muted-foreground",
			children: t("services.subheading")
		})] }), isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 sm:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-56 rounded-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-56 rounded-2xl" })]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 sm:grid-cols-2",
			children: (data ?? []).map((pkg) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
				className: "flex h-full flex-col p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-5 text-primary" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-display text-xl font-semibold",
						children: pkg.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: pkg.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-display text-2xl font-semibold",
						children: pkg.price_from ? t("services.priceFrom", { price: formatMoney(pkg.price_from, locale) }) : t("services.priceOnRequest")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 flex-1 text-sm text-muted-foreground",
						children: pkg.category ?? t("services.categoryDefault")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						className: "mt-6",
						children: t("services.cta")
					})
				]
			}, pkg.id))
		})]
	});
}
var init__portal_services$1 = __esmMin((() => {
	init_GlassCard();
	init_button();
	init_skeleton();
	init_usePortal();
	init_i18n();
	init_journey();
}));
var $$splitComponentImporter$4;
var Route$4;
var init__portal_services = __esmMin((() => {
	$$splitComponentImporter$4 = () => Promise.resolve().then(() => (init__portal_services$1(), _portal_services_exports));
	Route$4 = createFileRoute("/_authenticated/_portal/services")({
		head: () => ({ meta: [
			{ title: "Services — Wayne Client Portal" },
			{
				name: "description",
				content: "Care plans and growth services to keep your product moving."
			},
			{
				property: "og:title",
				content: "Services — Wayne Client Portal"
			},
			{
				property: "og:description",
				content: "Care plans and growth services to keep your product moving."
			}
		] }),
		component: lazyRouteComponent($$splitComponentImporter$4, "component")
	});
}));
var Accordion;
var AccordionItem;
var AccordionTrigger;
var AccordionContent;
var init_accordion = __esmMin((() => {
	init_utils();
	Accordion = Root2;
	AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
		ref,
		className: cn("border-b", className),
		...props
	}));
	AccordionItem.displayName = "AccordionItem";
	AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
		className: "flex",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
			ref,
			className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
			...props,
			children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
		})
	}));
	AccordionTrigger.displayName = Trigger2.displayName;
	AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
		ref,
		className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("pb-4 pt-0", className),
			children
		})
	}));
	AccordionContent.displayName = Content2.displayName;
}));
var _portal_support_exports = /* @__PURE__ */ __exportAll({ component: () => SupportPage });
function SupportPage() {
	const t = useT();
	const faq = [
		{
			q: t("support.faq.q1"),
			a: t("support.faq.a1")
		},
		{
			q: t("support.faq.q2"),
			a: t("support.faq.a2")
		},
		{
			q: t("support.faq.q3"),
			a: t("support.faq.a3")
		},
		{
			q: t("support.faq.q4"),
			a: t("support.faq.a4")
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 pb-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl font-semibold sm:text-4xl",
				children: t("support.heading")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted-foreground",
				children: t("support.subheading")
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "mailto:hello@wayne-web.com",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
							className: "h-full p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-5 text-primary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 font-medium",
									children: t("support.email.title")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: "hello@wayne-web.com"
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://wa.me/33600000000",
						target: "_blank",
						rel: "noreferrer",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
							className: "h-full p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-5 text-primary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 font-medium",
									children: t("support.message.title")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: t("support.message.subtitle")
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://cal.com",
						target: "_blank",
						rel: "noreferrer",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
							className: "h-full p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "size-5 text-primary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 font-medium",
									children: t("support.call.title")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: t("support.call.subtitle")
								})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
				interactive: false,
				className: "p-6 sm:p-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground",
					children: t("support.faq.label")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
					type: "single",
					collapsible: true,
					className: "mt-3",
					children: faq.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
						value: item.q,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
							className: "text-left",
							children: item.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
							className: "text-muted-foreground",
							children: item.a
						})]
					}, item.q))
				})]
			})
		]
	});
}
var init__portal_support$1 = __esmMin((() => {
	init_GlassCard();
	init_accordion();
	init_i18n();
}));
var $$splitComponentImporter$3;
var Route$3;
var init__portal_support = __esmMin((() => {
	$$splitComponentImporter$3 = () => Promise.resolve().then(() => (init__portal_support$1(), _portal_support_exports));
	Route$3 = createFileRoute("/_authenticated/_portal/support")({
		head: () => ({ meta: [
			{ title: "Support — Wayne Client Portal" },
			{
				name: "description",
				content: "Reach your Wayne project team and find quick answers."
			},
			{
				property: "og:title",
				content: "Support — Wayne Client Portal"
			},
			{
				property: "og:description",
				content: "Reach your Wayne project team and find quick answers."
			}
		] }),
		component: lazyRouteComponent($$splitComponentImporter$3, "component")
	});
}));
function parseChecks(raw) {
	if (!raw || typeof raw !== "object" || Array.isArray(raw)) return {};
	const source = raw;
	const checks = {};
	for (const key of WELCOME_CHECKS) checks[key] = source[key] === true;
	return checks;
}
function WelcomeWizard({ projectId, raw, submittedAt, storedChecklist, guide, onChange, onDownload, onComplete, completing, passed }) {
	const t = useT();
	const saveProfile = useSaveBusinessProfile();
	const saveChecklist = useSaveWelcomeChecklist();
	const [values, setValues] = (0, import_react.useState)(() => parseBusinessProfile(raw));
	const [checks, setChecks] = (0, import_react.useState)(() => parseChecks(storedChecklist));
	const [step, setStep] = (0, import_react.useState)(() => firstIncompleteStep(parseBusinessProfile(raw), parseChecks(storedChecklist)));
	const [showErrors, setShowErrors] = (0, import_react.useState)(false);
	const [savedAt, setSavedAt] = (0, import_react.useState)(null);
	const hydrated = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		if (hydrated.current) return;
		hydrated.current = true;
		const initial = parseBusinessProfile(raw);
		const initialChecks = parseChecks(storedChecklist);
		setValues(initial);
		setChecks(initialChecks);
		setStep(firstIncompleteStep(initial, initialChecks));
	}, [raw, storedChecklist]);
	(0, import_react.useEffect)(() => {
		onChange?.(values);
	}, [values, onChange]);
	const total = WELCOME_STEPS.length;
	const current = WELCOME_STEPS[Math.min(step, total - 1)];
	const progress = (0, import_react.useMemo)(() => requiredProgress(values), [values]);
	const complete = businessProfileComplete(values);
	const guideDone = WELCOME_CHECKS.every((key) => checks[key]);
	const percent = Math.round((step + (passed ? 1 : 0)) / (total - 1) * 100);
	const stepMissing = current.kind === "section" ? missingInSection(current.section, values) : [];
	const canGoNext = current.kind === "guide" ? guideDone : stepMissing.length === 0;
	async function persistProfile(next, submit = false) {
		try {
			await saveProfile.mutateAsync({
				projectId,
				profile: next,
				submit
			});
			setSavedAt(Date.now());
		} catch (error) {
			toast.error(error instanceof Error ? error.message : t("welcome.business.error"));
			throw error;
		}
	}
	async function toggleCheck(key) {
		const next = {
			...checks,
			[key]: !checks[key]
		};
		setChecks(next);
		try {
			await saveChecklist.mutateAsync({
				projectId,
				checklist: next
			});
		} catch (error) {
			toast.error(error instanceof Error ? error.message : t("welcome.error.default"));
		}
	}
	function set(key, value) {
		setValues((prev) => ({
			...prev,
			[key]: value
		}));
	}
	async function goNext() {
		if (!canGoNext) {
			setShowErrors(true);
			toast.error(current.kind === "guide" ? t("welcome.step.guide.error") : t("welcome.step.error"));
			return;
		}
		setShowErrors(false);
		if (current.kind === "section") try {
			await persistProfile(values);
		} catch {
			return;
		}
		setStep((value) => Math.min(value + 1, total - 1));
	}
	function goBack() {
		setShowErrors(false);
		setStep((value) => Math.max(value - 1, 0));
	}
	async function finish() {
		if (!complete || !guideDone) {
			setShowErrors(true);
			toast.error(t("welcome.business.incomplete"));
			return;
		}
		try {
			await persistProfile(values, true);
		} catch {
			return;
		}
		if (passed) {
			toast.success(t("welcome.business.saved"));
			return;
		}
		await onComplete();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
		variant: "strong",
		interactive: false,
		className: "p-6 sm:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground",
						children: t("welcome.progress.label", {
							current: String(step + 1),
							total: String(total)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-display text-lg font-semibold",
						children: t(`welcome.step.${current.key}.title`)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 max-w-xl text-sm text-muted-foreground",
						children: t(`welcome.step.${current.key}.hint`)
					})
				] }), submittedAt ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium text-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }), t("welcome.business.validated")]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs text-muted-foreground",
					children: t("welcome.progress.remaining", {
						done: String(progress.done),
						total: String(progress.total)
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 h-1.5 w-full overflow-hidden rounded-full bg-secondary/60",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "h-full rounded-full bg-primary",
					initial: false,
					animate: { width: `${Math.max(percent, 4)}%` },
					transition: {
						duration: .4,
						ease: [
							.22,
							1,
							.36,
							1
						]
					}
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "mt-4 flex flex-wrap gap-2",
				"aria-label": t("welcome.progress.nav"),
				children: WELCOME_STEPS.map((item, index) => {
					const done = item.kind === "guide" ? guideDone : item.kind === "section" ? sectionComplete(item.section, values) : complete;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						disabled: !(index <= step || done),
						onClick: () => {
							setShowErrors(false);
							setStep(index);
						},
						className: `rounded-full border px-3 py-1 text-xs transition-colors ${index === step ? "border-primary/60 bg-primary/15 text-foreground" : done ? "border-primary/30 bg-primary/5 text-muted-foreground hover:text-foreground" : "border-border bg-secondary/30 text-muted-foreground disabled:opacity-50"}`,
						children: [
							index + 1,
							". ",
							t(`welcome.step.${item.key}.short`)
						]
					}, item.key);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "wait",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 10
					},
					animate: {
						opacity: 1,
						y: 0
					},
					exit: {
						opacity: 0,
						y: -8
					},
					transition: {
						duration: .28,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					className: "mt-6",
					children: current.kind === "guide" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-6",
						children: [guide, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium",
									children: t("welcome.checklist.title")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: t("welcome.checklist.subtitle")
								}),
								WELCOME_CHECKS.map((key) => {
									const active = Boolean(checks[key]);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => toggleCheck(key),
										className: `flex w-full items-center gap-3 rounded-xl border p-4 text-left text-sm transition-colors ${active ? "border-primary/50 bg-primary/10 text-foreground" : "border-border bg-secondary/30 text-muted-foreground hover:bg-secondary/50"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `flex size-5 items-center justify-center rounded-md border ${active ? "border-primary bg-primary text-primary-foreground" : "border-border"}`,
											children: active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" })
										}), t(`welcome.checklist.${key}`)]
									}, key);
								})
							]
						})]
					}) : current.kind === "section" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionFields, {
						section: current.section,
						values,
						missing: showErrors ? stepMissing : [],
						onSet: set,
						onBlur: () => void persistProfile(values).catch(() => void 0)
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Recap, {
						values,
						onEdit: (index) => {
							setShowErrors(false);
							setStep(index);
						}
					})
				}, current.key)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-7 flex flex-wrap items-center gap-3",
				children: [
					step > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						onClick: goBack,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "mr-2 size-4" }), t("welcome.nav.back")]
					}),
					current.kind === "recap" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "lg",
						onClick: finish,
						disabled: completing || saveProfile.isPending,
						children: [
							completing || saveProfile.isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 size-4 animate-spin" }) : null,
							passed ? t("welcome.business.update") : t("welcome.cta.continue"),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 size-4" })
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "lg",
						onClick: goNext,
						disabled: saveProfile.isPending,
						children: [t("welcome.nav.next"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 size-4" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						onClick: onDownload,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-2 size-4" }), t("welcome.nav.download")]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: saveProfile.isPending ? t("welcome.business.saving") : savedAt ? t("welcome.business.autosaved") : t("welcome.business.autosaveHint")
					})
				]
			}),
			current.kind === "recap" && !complete && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted-foreground",
				children: t("welcome.business.gate")
			})
		]
	});
}
function SectionFields({ section, values, missing, onSet, onBlur }) {
	const t = useT();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-4 sm:grid-cols-2",
		children: section.fields.map((field) => {
			const invalid = missing.includes(field.key);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `space-y-1.5 ${field.wide ? "sm:col-span-2" : ""}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
						htmlFor: `bp-${field.key}`,
						className: "text-sm",
						children: [t(`welcome.business.field.${field.key}.label`), field.required ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-1 text-primary",
							children: "*"
						}) : null]
					}),
					field.kind === "textarea" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						id: `bp-${field.key}`,
						rows: 3,
						value: values[field.key] ?? "",
						placeholder: t(`welcome.business.field.${field.key}.placeholder`),
						onChange: (event) => onSet(field.key, event.target.value),
						onBlur,
						"aria-invalid": invalid,
						className: invalid ? "border-destructive" : void 0
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: `bp-${field.key}`,
						type: field.kind === "date" ? "date" : "text",
						value: values[field.key] ?? "",
						placeholder: field.kind === "date" ? void 0 : t(`welcome.business.field.${field.key}.placeholder`),
						onChange: (event) => onSet(field.key, event.target.value),
						onBlur,
						"aria-invalid": invalid,
						className: invalid ? "border-destructive" : void 0
					}),
					invalid && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-destructive",
						children: t("welcome.step.field.required")
					})
				]
			}, field.key);
		})
	});
}
function Recap({ values, onEdit }) {
	const t = useT();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [BUSINESS_SECTIONS.map((section, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl border border-border bg-secondary/20 p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground",
					children: t(`welcome.business.section.${section.key}`)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "sm",
					onClick: () => onEdit(index + 1),
					children: t("welcome.recap.edit")
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "mt-3 grid gap-3 sm:grid-cols-2",
				children: section.fields.map((field) => {
					const value = (values[field.key] ?? "").trim();
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: field.wide ? "sm:col-span-2" : "",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-xs uppercase tracking-wide text-muted-foreground",
							children: t(`welcome.business.field.${field.key}.label`)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: `mt-0.5 whitespace-pre-line text-sm ${value ? "" : "text-muted-foreground"}`,
							children: value || t("welcome.recap.empty")
						})]
					}, field.key);
				})
			})]
		}, section.key)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted-foreground",
			children: missingBusinessFields(values).length === 0 ? t("welcome.recap.ready") : t("welcome.recap.pending")
		})]
	});
}
var init_WelcomeWizard = __esmMin((() => {
	init_GlassCard();
	init_button();
	init_input();
	init_label();
	init_textarea();
	init_usePortal();
	init_business_profile();
	init_i18n();
}));
/**
* Printable business fiche. Filled with the client's answers, or a blank
* template with the same labels when nothing has been entered yet.
*/
function BusinessProfileSheet({ values, projectName, clientName, submittedAt }) {
	const t = useT();
	const blank = isBlankProfile(values);
	const sections = BUSINESS_SECTIONS.map((section) => ({
		heading: t(`welcome.business.section.${section.key}`),
		rows: section.fields.map((field) => ({
			label: t(`welcome.business.field.${field.key}.label`),
			value: blank ? "____________________________________________" : (values[field.key] ?? "").trim() || t("welcome.doc.notProvided")
		}))
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrintSheet, {
		title: t("welcome.doc.title"),
		subtitle: blank ? t("welcome.doc.blankNotice") : t("welcome.doc.subtitle"),
		meta: [
			{
				label: t("welcome.doc.meta.client"),
				value: clientName
			},
			{
				label: t("welcome.doc.meta.project"),
				value: projectName
			},
			{
				label: t("welcome.doc.meta.date"),
				value: (/* @__PURE__ */ new Date()).toLocaleDateString()
			},
			{
				label: t("welcome.doc.meta.status"),
				value: submittedAt ? t("welcome.doc.status.validated") : t("welcome.doc.status.draft")
			}
		],
		sections,
		footer: t("welcome.doc.footer")
	});
}
var init_BusinessProfileSheet = __esmMin((() => {
	init_PrintSheet();
	init_business_profile();
	init_i18n();
}));
var _portal_welcome_exports = /* @__PURE__ */ __exportAll({ component: () => WelcomePage });
function WelcomePage() {
	const t = useT();
	const { data } = useWorkspace();
	const complete = useCompleteWelcome();
	const navigate = useNavigate();
	const [celebrate, setCelebrate] = (0, import_react.useState)(false);
	const [business, setBusiness] = (0, import_react.useState)(() => parseBusinessProfile(data?.project.business_profile));
	const handleBusinessChange = (0, import_react.useCallback)((values) => setBusiness(values), []);
	if (!data) return null;
	const project = data.project;
	const passed = phaseIndex(project.phase) > phaseIndex("welcome");
	const firstName = data.profile.full_name?.split(" ")[0] ?? data.clientName ?? "";
	async function onComplete() {
		try {
			await complete.mutateAsync(project.id);
			setCelebrate(true);
			setTimeout(() => navigate({ to: "/brief" }), 2e3);
		} catch (error) {
			toast.error(error instanceof Error ? error.message : t("welcome.error.default"));
		}
	}
	const guide = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "space-y-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-lg font-semibold",
				children: t("welcome.how.title")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: HOW.map((key, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 10
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						delay: index * .06,
						duration: .35,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
						className: "h-full p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: t(`welcome.how.${key}.title`)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: t(`welcome.how.${key}.body`, { manager: project.project_manager ?? "Wayne" })
						})]
					})
				}, key))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "space-y-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-lg font-semibold",
				children: t("welcome.expect.title")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: ["you", "us"].map((side) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
					interactive: false,
					className: "p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium",
						children: t(`welcome.expect.${side}.title`)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-2 text-sm text-muted-foreground",
						children: [
							1,
							2,
							3
						].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t(`welcome.expect.${side}.${n}`) })]
						}, n))
					})]
				}, side))
			})]
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 pb-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Celebration, {
				show: celebrate,
				title: t("welcome.celebration.title"),
				subtitle: t("welcome.celebration.subtitle")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BusinessProfileSheet, {
				values: business,
				projectName: project.name,
				clientName: data.clientName ?? data.profile.full_name ?? "",
				submittedAt: project.business_profile_submitted_at
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "print:hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground",
						children: t("welcome.title")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-3xl font-semibold sm:text-4xl",
						children: t("welcome.greeting", { name: firstName || t("journey.dashboard.fallbackName") })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted-foreground",
						children: t("welcome.subtitle")
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "print:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WelcomeWizard, {
					projectId: project.id,
					raw: project.business_profile,
					submittedAt: project.business_profile_submitted_at,
					storedChecklist: project.welcome_checklist,
					guide,
					onChange: handleBusinessChange,
					onDownload: () => window.print(),
					onComplete,
					completing: complete.isPending,
					passed
				})
			}),
			passed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
				interactive: false,
				className: "p-6 print:hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium",
						children: t("welcome.done.title")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: t("welcome.done.body")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "lg",
						className: "mt-4",
						onClick: () => navigate({ to: "/brief" }),
						children: [t("welcome.done.cta"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 size-4" })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-3 print:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-semibold",
					children: t("welcome.steps.title")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
					interactive: false,
					className: "p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-4 text-sm text-muted-foreground",
						children: t("welcome.steps.hint")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JourneyTimeline, {
						milestones: data.milestones,
						project,
						detailed: true
					})]
				})]
			})
		]
	});
}
var HOW;
var init__portal_welcome$1 = __esmMin((() => {
	init_GlassCard();
	init_Celebration();
	init_JourneyTimeline();
	init_WelcomeWizard();
	init_BusinessProfileSheet();
	init_button();
	init_usePortal();
	init_business_profile();
	init_i18n();
	init_journey();
	HOW = [
		"rhythm",
		"channels",
		"response",
		"manager"
	];
}));
var $$splitComponentImporter$2;
var Route$2;
var init__portal_welcome = __esmMin((() => {
	$$splitComponentImporter$2 = () => Promise.resolve().then(() => (init__portal_welcome$1(), _portal_welcome_exports));
	Route$2 = createFileRoute("/_authenticated/_portal/welcome")({
		head: () => ({ meta: [
			{ title: "Welcome journey — Wayne Client Portal" },
			{
				name: "description",
				content: "Read how we work, fill in your business fiche step by step and download your document."
			},
			{
				property: "og:title",
				content: "Welcome journey — Wayne Client Portal"
			},
			{
				property: "og:description",
				content: "Read how we work, fill in your business fiche step by step and download your document."
			}
		] }),
		component: lazyRouteComponent($$splitComponentImporter$2, "component")
	});
}));
var createSsrRpc;
var init_createSsrRpc = __esmMin((() => {
	init_getServerFnById();
	init_esm$3();
	createSsrRpc = (functionId) => {
		const url = "/_serverFn/" + functionId;
		const serverFnMeta = { id: functionId };
		const fn = async (...args) => {
			return (await getServerFnById(functionId, { origin: "server" }))(...args);
		};
		return Object.assign(fn, {
			url,
			serverFnMeta,
			[TSS_SERVER_FUNCTION]: true
		});
	};
}));
var init_ssr_rpc = __esmMin((() => {
	init_createSsrRpc();
}));
var schema;
var sendClientMessage;
var init_admin_email_functions = __esmMin((() => {
	init_ssr_rpc();
	init_esm$2();
	init_auth_middleware();
	schema = objectType({
		projectId: stringType().uuid(),
		to: stringType().email(),
		subject: stringType().min(1).max(200),
		body: stringType().min(1).max(8e3),
		greeting: stringType().max(200).optional(),
		links: arrayType(objectType({
			label: stringType().min(1).max(160),
			url: stringType().url()
		})).max(10).optional()
	});
	sendClientMessage = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((data) => schema.parse(data)).handler(createSsrRpc("0e902064f300e5b47662beed54121570be6c03af8d2be405909091f8c01cb1b4"));
}));
/** Internal notes the Wayne team keeps on a client file (never visible to the client). */
function AdminNotes({ projectId }) {
	const { t, locale } = useI18n();
	const { data: notes } = useProjectNotes(projectId);
	const add = useAddProjectNote(projectId);
	const remove = useDeleteProjectNote(projectId);
	const [body, setBody] = (0, import_react.useState)("");
	async function submit() {
		if (!body.trim()) return;
		try {
			await add.mutateAsync({ body: body.trim() });
			setBody("");
			toast.success(t("admin.notes.saved"));
		} catch (error) {
			toast.error(error instanceof Error ? error.message : t("admin.notes.error"));
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
		interactive: false,
		className: "p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl font-semibold",
				children: t("admin.notes.title")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: t("admin.notes.hint")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					rows: 3,
					value: body,
					onChange: (event) => setBody(event.target.value),
					placeholder: t("admin.notes.placeholder")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					disabled: add.isPending || !body.trim(),
					onClick: submit,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "mr-2 size-4" }), t("admin.notes.add")]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-5 space-y-2",
				children: [(notes ?? []).length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "text-sm text-muted-foreground",
					children: t("admin.notes.empty")
				}), (notes ?? []).map((note) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-start justify-between gap-3 rounded-xl border border-border/70 px-4 py-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
						children: [note.kind === "email" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-3.5 text-primary" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "size-3.5 text-primary" }), formatFullDate(note.created_at, locale)]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1.5 whitespace-pre-line",
						children: note.body
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "icon",
						variant: "ghost",
						"aria-label": t("admin.notes.delete"),
						disabled: remove.isPending,
						onClick: () => remove.mutate(note.id),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
					})]
				}, note.id))]
			})
		]
	});
}
/** Compose a client email from the file; the message is logged in the notes timeline. */
function AdminMessage({ projectId, email, name, projectName }) {
	const { t } = useI18n();
	const queryClient = useQueryClient();
	const send = useServerFn(sendClientMessage);
	const [sending, setSending] = (0, import_react.useState)(false);
	const [subject, setSubject] = (0, import_react.useState)(t("admin.message.defaultSubject", { project: projectName }));
	const [body, setBody] = (0, import_react.useState)(t("admin.message.defaultBody", {
		name: name ?? "",
		project: projectName
	}));
	async function submit() {
		if (!email) return;
		setSending(true);
		try {
			if ((await send({ data: {
				projectId,
				to: email,
				subject,
				body
			} })).sent) toast.success(t("admin.message.sent"));
			else toast.error(t("admin.message.suppressed"));
			queryClient.invalidateQueries({ queryKey: projectNotesKey(projectId) });
		} catch (error) {
			toast.error(error instanceof Error ? error.message : t("admin.message.error"));
		} finally {
			setSending(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
		interactive: false,
		className: "p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl font-semibold",
				children: t("admin.message.title")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: t("admin.message.hint")
			}),
			email ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "msg-subject",
							children: t("admin.message.subject")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "msg-subject",
							value: subject,
							onChange: (event) => setSubject(event.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "msg-body",
							children: t("admin.message.body")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							id: "msg-body",
							rows: 8,
							value: body,
							onChange: (event) => setBody(event.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: submit,
						disabled: sending || !subject.trim() || !body.trim(),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mr-2 size-4" }), t("admin.message.send", { email })]
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-muted-foreground",
				children: t("admin.message.noEmail")
			})
		]
	});
}
var init_AdminNotes = __esmMin((() => {
	init_GlassCard();
	init_button();
	init_label();
	init_input();
	init_textarea();
	init_esm$2();
	init_useAdmin();
	init_admin_email_functions();
	init_i18n();
	init_journey();
}));
var _admin_admin__$projectId_exports = /* @__PURE__ */ __exportAll({ component: () => AdminClientPage });
function AdminClientPage() {
	const { projectId } = Route$1.useParams();
	const { data, isLoading } = useAdminProject(projectId);
	const { t, locale } = useI18n();
	const saveOffer = useSaveOffer(projectId);
	const unpublish = useUnpublishOffer(projectId);
	const advance = useAdminAdvance(projectId);
	const [title, setTitle] = (0, import_react.useState)("");
	const [description, setDescription] = (0, import_react.useState)("");
	const [stripeUrl, setStripeUrl] = (0, import_react.useState)("");
	const [loaded, setLoaded] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!data || loaded) return;
		setTitle(data.offer?.title ?? "");
		setDescription(data.offer?.description ?? "");
		setStripeUrl(data.offer?.stripe_url ?? "");
		setLoaded(true);
	}, [data, loaded]);
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-10 w-64" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-48 w-full rounded-2xl" })]
	});
	if (!data) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
		interactive: false,
		className: "p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted-foreground",
			children: t("admin.detail.notFound")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			asChild: true,
			variant: "secondary",
			className: "mt-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/admin",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "mr-2 size-4" }), t("admin.detail.back")]
			})
		})]
	});
	const values = parseBusinessProfile(data.project.business_profile);
	const fiche = requiredProgress(values);
	const { answers, history } = splitBriefAnswers(data.brief?.answers);
	const kindRaw = answers[KIND_KEY];
	const unsure = answers[UNSURE_KEY] === true;
	const briefKind = isProjectKind(kindRaw) ? kindRaw : null;
	const legacyBriefType = isProjectType(answers["project_type"]) ? answers["project_type"] : null;
	const briefCategories = Array.isArray(answers["categories"]) ? answers["categories"] : [];
	const briefTopLabel = unsure ? t("brief.kind.unsure.label") : briefKind ? t(`brief.kind.${briefKind}.label`) : legacyBriefType ? t(`brief.type.${legacyBriefType}.label`) : null;
	const briefRecapFields = recapFieldsFor(answers);
	const published = data.offer?.status === "published";
	function categoryLabel(cat) {
		return isProjectType(cat) ? t(`brief.type.${cat}.label`) : t(`brief.category.${cat}.label`);
	}
	function fieldValue(field) {
		const value = answers[field.key];
		if (field.kind === "file") return "";
		if (field.kind === "select" && typeof value === "string" && value) return t(`brief.field.${field.key}.option.${value}`);
		return typeof value === "string" ? value : "";
	}
	async function handleSaveOffer(publish) {
		try {
			await saveOffer.mutateAsync({
				title,
				description,
				stripeUrl,
				publish
			});
			toast.success(publish ? t("admin.offer.published") : t("admin.offer.saved"));
		} catch (error) {
			toast.error(error instanceof Error ? error.message : t("admin.offer.error"));
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground",
						children: t("admin.detail.eyebrow")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-3xl font-semibold",
						children: data.owner?.company ?? data.clientName ?? data.project.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: [
							data.owner?.full_name ?? "—",
							" · ",
							data.owner?.email ?? "—",
							" · ",
							data.owner?.phone ?? "—"
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "ghost",
					size: "sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/admin",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "mr-1.5 size-4" }), t("admin.detail.back")]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
				variant: "strong",
				interactive: false,
				className: "p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] font-semibold uppercase tracking-[0.22em] text-primary",
							children: t("admin.view.eyebrow")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 font-display text-xl font-semibold",
							children: [
								phaseLabel(data.project.phase, t),
								" · ",
								data.project.progress,
								"%"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: data.project.waiting_on === "client" ? t("admin.row.waitingClient") : t("admin.row.waitingWayne")
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-3.5" }), t("admin.view.readOnly")]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-5 space-y-2",
					children: data.milestones.map((milestone) => {
						const order = PHASE_ORDER.indexOf(milestone.key);
						const current = PHASE_ORDER.indexOf(data.project.phase);
						const done = order > -1 && order < current;
						const active = order === current;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: `flex items-center justify-between gap-3 rounded-xl border px-4 py-2.5 text-sm ${active ? "border-primary/40 bg-primary/10" : done ? "border-success/30 bg-success/5 text-muted-foreground" : "border-border/70 text-muted-foreground"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-2",
								children: [done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5 text-success" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleDot, { className: "size-3.5" }), milestone.title]
							}), active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "secondary",
								disabled: advance.isPending,
								onClick: () => {
									const next = PHASE_ORDER[Math.min(current + 1, PHASE_ORDER.length - 1)];
									if (!next) return;
									advance.mutate({
										phase: next,
										waitingOn: next === "review" || next === "delivery" ? "client" : "wayne",
										progress: progressFor(next)
									});
								},
								children: t("admin.action.advance")
							})]
						}, milestone.id);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminMessage, {
				projectId,
				email: data.owner?.email ?? null,
				name: data.owner?.full_name ?? null,
				projectName: data.project.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminNotes, { projectId }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
				interactive: false,
				className: "p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl font-semibold",
							children: t("admin.offer.title")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: `inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${published ? "border-success/40 bg-success/10 text-success" : "border-border bg-secondary/40 text-muted-foreground"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-3.5" }), published ? t("admin.row.offerPublished") : t("admin.row.offerDraft")]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: t("admin.offer.hint")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "offer-title",
									children: t("admin.offer.field.title")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "offer-title",
									value: title,
									onChange: (event) => setTitle(event.target.value),
									placeholder: t("admin.offer.field.titlePlaceholder")
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "offer-desc",
									children: t("admin.offer.field.description")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									id: "offer-desc",
									rows: 5,
									value: description,
									onChange: (event) => setDescription(event.target.value),
									placeholder: t("admin.offer.field.descriptionPlaceholder")
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "offer-url",
									children: t("admin.offer.field.stripe")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "offer-url",
									value: stripeUrl,
									onChange: (event) => setStripeUrl(event.target.value),
									placeholder: "https://buy.stripe.com/..."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "secondary",
										disabled: saveOffer.isPending,
										onClick: () => handleSaveOffer(false),
										children: t("admin.offer.save")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										disabled: saveOffer.isPending || !stripeUrl.trim(),
										onClick: () => handleSaveOffer(true),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "mr-2 size-4" }), t("admin.offer.publish")]
									}),
									published && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										variant: "ghost",
										disabled: unpublish.isPending,
										onClick: () => unpublish.mutate(),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "mr-2 size-4" }), t("admin.offer.unpublish")]
									})
								]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
				interactive: false,
				className: "p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl font-semibold",
						children: t("admin.invoices.title")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: t("admin.invoices.hint")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 space-y-3",
						children: data.invoices.map((invoice) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminInvoiceRow, {
							projectId,
							invoice
						}, invoice.id))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
				interactive: false,
				className: "p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl font-semibold",
						children: t("admin.fiche.title")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-muted-foreground",
						children: t("welcome.progress.remaining", {
							done: String(fiche.done),
							total: String(fiche.total)
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 space-y-5",
					children: BUSINESS_SECTIONS.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground",
						children: t(`welcome.business.section.${section.key}`)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "mt-2 divide-y divide-border/60",
						children: section.fields.map((field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap justify-between gap-2 py-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted-foreground",
								children: t(`welcome.business.field.${field.key}.label`)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "max-w-md whitespace-pre-line text-right font-medium",
								children: values[field.key]?.trim() || t("welcome.recap.empty")
							})]
						}, field.key))
					})] }, section.key))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
				interactive: false,
				className: "p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl font-semibold",
							children: t("admin.brief.title")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground",
							children: data.brief?.submitted_at ? t("admin.brief.submitted", { date: formatFullDate(data.brief.submitted_at, locale) }) : t("admin.row.briefPending")
						})]
					}),
					briefTopLabel ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-muted-foreground",
							children: [t("brief.pdf.section.type"), ": "]
						}), briefTopLabel]
					}) : null,
					briefCategories.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: briefCategories.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full border border-border bg-secondary/40 px-2.5 py-1 text-xs",
							children: categoryLabel(cat)
						}, cat))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "mt-4 divide-y divide-border/60",
						children: briefRecapFields.filter((field) => field.kind !== "file").map((field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap justify-between gap-2 py-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-muted-foreground",
								children: t(`brief.field.${field.key}.label`)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "max-w-md whitespace-pre-line text-right font-medium",
								children: fieldValue(field).trim() || t("welcome.recap.empty")
							})]
						}, field.key))
					}),
					briefRecapFields.filter((field) => field.kind === "file").map((field) => {
						const value = Array.isArray(answers[field.key]) ? answers[field.key] : [];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground",
								children: t("admin.brief.attachments.title")
							}), value.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: t("admin.brief.attachments.empty")
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-2 space-y-2",
								children: value.map((attachment) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminAttachmentRow, { attachment }, attachment.path))
							})]
						}, field.key);
					}),
					history.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground",
							children: t("admin.brief.history")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2 space-y-1 text-sm text-muted-foreground",
							children: history.slice().reverse().map((entry, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								formatFullDate(entry.at, locale),
								" ·",
								" ",
								entry.event === "submitted" ? t("admin.brief.eventSubmitted") : t("admin.brief.eventReopened")
							] }, `${entry.at}-${index}`))
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
				interactive: false,
				className: "p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl font-semibold",
						children: t("admin.documents.title")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2 text-sm",
						children: data.documents.map((doc) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center justify-between gap-3 rounded-xl border border-border/70 px-4 py-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-4 text-primary" }), doc.name]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground",
								children: doc.status
							})]
						}, doc.id))
					}),
					data.agreement?.signed_at ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-muted-foreground",
						children: t("admin.documents.signed", {
							name: data.agreement.signed_name ?? "—",
							date: formatFullDate(data.agreement.signed_at, locale)
						})
					}) : null
				]
			})
		]
	});
}
function AdminInvoiceRow({ projectId, invoice }) {
	const { t, locale } = useI18n();
	const update = useAdminUpdateInvoice(projectId);
	const markPaid = useAdminMarkPaid(projectId);
	const [amount, setAmount] = (0, import_react.useState)(String(invoice.amount ?? ""));
	const [url, setUrl] = (0, import_react.useState)(invoice.payment_url ?? "");
	const isPaid = invoice.status === "paid";
	async function save() {
		try {
			await update.mutateAsync({
				invoiceId: invoice.id,
				amount: Number(amount) || 0,
				paymentUrl: url
			});
			toast.success(url.trim() ? t("admin.invoices.sent") : t("admin.invoices.saved"));
		} catch (error) {
			toast.error(error instanceof Error ? error.message : t("admin.invoices.error"));
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border/70 px-4 py-3 text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-medium",
				children: invoiceLabel(invoice, t)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-muted-foreground",
				children: [
					formatMoney(invoice.amount, locale),
					" ·",
					" ",
					isPaid ? t("billing.invoice.statusPaid") : t("billing.invoice.statusUnpaid")
				]
			})] }), !isPaid && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "sm",
				variant: "secondary",
				disabled: markPaid.isPending,
				onClick: () => markPaid.mutate(invoice.id),
				children: t("admin.invoices.markPaid")
			})]
		}), !isPaid && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 grid gap-3 sm:grid-cols-[140px_1fr_auto] sm:items-end",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: `amount-${invoice.id}`,
						children: t("admin.invoices.amount")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: `amount-${invoice.id}`,
						type: "number",
						min: 0,
						value: amount,
						onChange: (event) => setAmount(event.target.value)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: `url-${invoice.id}`,
						children: t("admin.invoices.link")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: `url-${invoice.id}`,
						value: url,
						onChange: (event) => setUrl(event.target.value),
						placeholder: "https://buy.stripe.com/..."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					disabled: update.isPending,
					onClick: save,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "mr-2 size-4" }), t("admin.invoices.save")]
				})
			]
		})]
	});
}
function AdminAttachmentRow({ attachment }) {
	const { t } = useI18n();
	const { data: url } = useAttachmentUrl(attachment.path);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "flex items-center justify-between gap-3 rounded-xl border border-border/70 px-4 py-2.5 text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex min-w-0 items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "truncate",
				children: attachment.name
			})]
		}), url ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: url,
			target: "_blank",
			rel: "noreferrer",
			className: "inline-flex shrink-0 items-center gap-1 text-xs text-primary hover:underline",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" }), t("admin.brief.attachments.open")]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs text-muted-foreground",
			children: "…"
		})]
	});
}
var init__admin_admin__$projectId$1 = __esmMin((() => {
	init_AdminNotes();
	init_GlassCard();
	init_button();
	init_input();
	init_label();
	init_skeleton();
	init_textarea();
	init_useAdmin();
	init_useAttachments();
	init_business_profile();
	init_brief_flow();
	init_i18n();
	init_journey();
	init__admin_admin__$projectId();
}));
var $$splitComponentImporter$1;
var Route$1;
var init__admin_admin__$projectId = __esmMin((() => {
	$$splitComponentImporter$1 = () => Promise.resolve().then(() => (init__admin_admin__$projectId$1(), _admin_admin__$projectId_exports));
	Route$1 = createFileRoute("/_authenticated/_admin/admin_/$projectId")({
		head: () => ({ meta: [
			{ title: "Client file — Wayne Super Admin" },
			{
				name: "description",
				content: "Full client file: journey, business fiche, brief, invoices and proposal."
			},
			{
				property: "og:title",
				content: "Client file — Wayne Super Admin"
			},
			{
				property: "og:description",
				content: "Full client file: journey, business fiche, brief, invoices and proposal."
			}
		] }),
		component: lazyRouteComponent($$splitComponentImporter$1, "component")
	});
}));
var _portal_invoice_$invoiceId_exports = /* @__PURE__ */ __exportAll({ component: () => InvoicePage });
function InvoicePage() {
	const { invoiceId } = Route.useParams();
	const { data } = useWorkspace();
	const { t, locale } = useI18n();
	if (!data) return null;
	const invoice = data.invoices.find((item) => item.id === invoiceId);
	if (!invoice) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-6 pb-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
			interactive: false,
			className: "p-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: t("billing.detail.notFound")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "secondary",
				className: "mt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/billing",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "mr-2 size-4" }), t("billing.detail.back")]
				})
			})]
		})
	});
	const isPaid = invoice.status === "paid";
	const offer = data.offer && data.offer.status === "published" ? data.offer : null;
	const payLink = invoice.payment_url ?? offer?.stripe_url ?? null;
	const label = invoiceLabel(invoice, t);
	const clientName = data.clientName ?? data.profile.full_name ?? "—";
	const rows = [
		{
			label: t("billing.detail.reference"),
			value: invoice.reference ?? "—"
		},
		{
			label: t("billing.detail.billedTo"),
			value: clientName
		},
		{
			label: t("billing.detail.issuer"),
			value: "Wayne-Web"
		},
		{
			label: t("billing.detail.project"),
			value: data.project.name
		},
		{
			label: t("billing.detail.package"),
			value: data.project.package_name ?? "—"
		},
		{
			label: isPaid ? t("billing.detail.paidDate") : t("billing.detail.dueDate"),
			value: formatFullDate(isPaid ? invoice.paid_at : invoice.due_date, locale)
		},
		{
			label: t("billing.detail.summary"),
			value: isPaid ? t("billing.invoice.statusPaid") : t("billing.invoice.statusUnpaid")
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 pb-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrintSheet, {
				title: `${t("billing.detail.eyebrow")} — ${label}`,
				subtitle: data.project.name,
				meta: rows,
				sections: [{
					heading: t("billing.detail.total"),
					rows: [{
						label: t("billing.detail.amount"),
						value: formatMoney(invoice.amount, locale)
					}]
				}],
				footer: t("billing.detail.printedOn", { date: formatFullDate((/* @__PURE__ */ new Date()).toISOString(), locale) })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground",
						children: t("billing.detail.eyebrow")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-3xl font-semibold sm:text-4xl",
						children: label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted-foreground",
						children: t("billing.detail.subtitle")
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: `inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium ${isPaid ? "border-success/40 bg-success/10 text-success" : "border-primary/40 bg-primary/10 text-primary"}`,
					children: [isPaid ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-3.5" }), isPaid ? t("billing.invoice.statusPaid") : t("billing.invoice.statusUnpaid")]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					y: 12
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					duration: .4,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
					variant: "strong",
					interactive: false,
					className: "p-6 sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground",
							children: t("billing.detail.summary")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "mt-5 divide-y divide-border/70",
							children: rows.slice(0, 6).map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap justify-between gap-2 py-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted-foreground",
									children: row.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "font-medium",
									children: row.value
								})]
							}, row.label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap items-end justify-between gap-4 rounded-xl border border-border bg-secondary/30 p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: t("billing.detail.total")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-3xl font-semibold",
								children: formatMoney(invoice.amount, locale)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-muted-foreground",
							children: isPaid ? t("billing.detail.paidNote") : payLink ? t("billing.detail.unpaidNote") : t("billing.invoice.awaitingOffer")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap items-center gap-3",
							children: [
								!isPaid && payLink && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: payLink,
										target: "_blank",
										rel: "noopener noreferrer",
										children: [t("billing.offer.cta"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "ml-2 size-4" })]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "secondary",
									onClick: () => window.print(),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-2 size-4" }), t("billing.detail.download")]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "ghost",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/billing",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "mr-2 size-4" }), t("billing.detail.back")]
									})
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "flex items-center justify-center gap-2 text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-3.5" }), t("billing.securityNote")]
			})
		]
	});
}
var init__portal_invoice_$invoiceId$1 = __esmMin((() => {
	init_GlassCard();
	init_PrintSheet();
	init_button();
	init_usePortal();
	init_i18n();
	init_journey();
	init__portal_invoice_$invoiceId();
}));
var $$splitComponentImporter;
var Route;
var init__portal_invoice_$invoiceId = __esmMin((() => {
	$$splitComponentImporter = () => Promise.resolve().then(() => (init__portal_invoice_$invoiceId$1(), _portal_invoice_$invoiceId_exports));
	Route = createFileRoute("/_authenticated/_portal/invoice/$invoiceId")({
		head: () => ({ meta: [
			{ title: "Invoice — Wayne Client Portal" },
			{
				name: "description",
				content: "Review your invoice, its status and download it as a PDF."
			},
			{
				property: "og:title",
				content: "Invoice — Wayne Client Portal"
			},
			{
				property: "og:description",
				content: "Review your invoice, its status and download it as a PDF."
			}
		] }),
		component: lazyRouteComponent($$splitComponentImporter, "component")
	});
}));
var IndexRoute;
var AuthenticatedRouteRoute;
var AuthRoute;
var AuthenticatedAdminRoute;
var AuthenticatedPortalRoute;
var AuthenticatedOnboardingRoute;
var AuthenticatedAdminAdminRoute;
var AuthenticatedPortalAgreementRoute;
var AuthenticatedPortalBillingRoute;
var AuthenticatedPortalBriefRoute;
var AuthenticatedPortalDashboardRoute;
var AuthenticatedPortalDeliveryRoute;
var AuthenticatedPortalDocumentsRoute;
var AuthenticatedPortalProfileRoute;
var AuthenticatedPortalProjectRoute;
var AuthenticatedPortalServicesRoute;
var AuthenticatedPortalSupportRoute;
var AuthenticatedPortalWelcomeRoute;
var AuthenticatedAdminAdminProjectIdRoute;
var AuthenticatedPortalInvoiceInvoiceIdRoute;
var AuthenticatedAdminRouteChildren;
var AuthenticatedAdminRouteWithChildren;
var AuthenticatedPortalRouteChildren;
var AuthenticatedRouteRouteChildren;
var rootRouteChildren;
var routeTree;
var init_routeTree_gen = __esmMin((() => {
	init___root();
	init_routes();
	init_route();
	init_auth();
	init__admin();
	init__portal();
	init_onboarding();
	init__admin_admin();
	init__portal_agreement();
	init__portal_billing();
	init__portal_brief();
	init__portal_dashboard();
	init__portal_delivery();
	init__portal_documents();
	init__portal_profile();
	init__portal_project();
	init__portal_services();
	init__portal_support();
	init__portal_welcome();
	init__admin_admin__$projectId();
	init__portal_invoice_$invoiceId();
	IndexRoute = Route$19.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$20
	});
	AuthenticatedRouteRoute = Route$18.update({
		id: "/_authenticated",
		getParentRoute: () => Route$20
	});
	AuthRoute = Route$17.update({
		id: "/auth",
		path: "/auth",
		getParentRoute: () => Route$20
	});
	AuthenticatedAdminRoute = Route$16.update({
		id: "/_admin",
		getParentRoute: () => AuthenticatedRouteRoute
	});
	AuthenticatedPortalRoute = Route$15.update({
		id: "/_portal",
		getParentRoute: () => AuthenticatedRouteRoute
	});
	AuthenticatedOnboardingRoute = Route$14.update({
		id: "/onboarding",
		path: "/onboarding",
		getParentRoute: () => AuthenticatedRouteRoute
	});
	AuthenticatedAdminAdminRoute = Route$13.update({
		id: "/admin",
		path: "/admin",
		getParentRoute: () => AuthenticatedAdminRoute
	});
	AuthenticatedPortalAgreementRoute = Route$12.update({
		id: "/agreement",
		path: "/agreement",
		getParentRoute: () => AuthenticatedPortalRoute
	});
	AuthenticatedPortalBillingRoute = Route$11.update({
		id: "/billing",
		path: "/billing",
		getParentRoute: () => AuthenticatedPortalRoute
	});
	AuthenticatedPortalBriefRoute = Route$10.update({
		id: "/brief",
		path: "/brief",
		getParentRoute: () => AuthenticatedPortalRoute
	});
	AuthenticatedPortalDashboardRoute = Route$9.update({
		id: "/dashboard",
		path: "/dashboard",
		getParentRoute: () => AuthenticatedPortalRoute
	});
	AuthenticatedPortalDeliveryRoute = Route$8.update({
		id: "/delivery",
		path: "/delivery",
		getParentRoute: () => AuthenticatedPortalRoute
	});
	AuthenticatedPortalDocumentsRoute = Route$7.update({
		id: "/documents",
		path: "/documents",
		getParentRoute: () => AuthenticatedPortalRoute
	});
	AuthenticatedPortalProfileRoute = Route$6.update({
		id: "/profile",
		path: "/profile",
		getParentRoute: () => AuthenticatedPortalRoute
	});
	AuthenticatedPortalProjectRoute = Route$5.update({
		id: "/project",
		path: "/project",
		getParentRoute: () => AuthenticatedPortalRoute
	});
	AuthenticatedPortalServicesRoute = Route$4.update({
		id: "/services",
		path: "/services",
		getParentRoute: () => AuthenticatedPortalRoute
	});
	AuthenticatedPortalSupportRoute = Route$3.update({
		id: "/support",
		path: "/support",
		getParentRoute: () => AuthenticatedPortalRoute
	});
	AuthenticatedPortalWelcomeRoute = Route$2.update({
		id: "/welcome",
		path: "/welcome",
		getParentRoute: () => AuthenticatedPortalRoute
	});
	AuthenticatedAdminAdminProjectIdRoute = Route$1.update({
		id: "/admin_/$projectId",
		path: "/admin/$projectId",
		getParentRoute: () => AuthenticatedAdminRoute
	});
	AuthenticatedPortalInvoiceInvoiceIdRoute = Route.update({
		id: "/invoice/$invoiceId",
		path: "/invoice/$invoiceId",
		getParentRoute: () => AuthenticatedPortalRoute
	});
	AuthenticatedAdminRouteChildren = {
		AuthenticatedAdminAdminRoute,
		AuthenticatedAdminAdminProjectIdRoute
	};
	AuthenticatedAdminRouteWithChildren = AuthenticatedAdminRoute._addFileChildren(AuthenticatedAdminRouteChildren);
	AuthenticatedPortalRouteChildren = {
		AuthenticatedPortalAgreementRoute,
		AuthenticatedPortalBillingRoute,
		AuthenticatedPortalBriefRoute,
		AuthenticatedPortalDashboardRoute,
		AuthenticatedPortalDeliveryRoute,
		AuthenticatedPortalDocumentsRoute,
		AuthenticatedPortalProfileRoute,
		AuthenticatedPortalProjectRoute,
		AuthenticatedPortalServicesRoute,
		AuthenticatedPortalSupportRoute,
		AuthenticatedPortalWelcomeRoute,
		AuthenticatedPortalInvoiceInvoiceIdRoute
	};
	AuthenticatedRouteRouteChildren = {
		AuthenticatedAdminRoute: AuthenticatedAdminRouteWithChildren,
		AuthenticatedPortalRoute: AuthenticatedPortalRoute._addFileChildren(AuthenticatedPortalRouteChildren),
		AuthenticatedOnboardingRoute
	};
	rootRouteChildren = {
		IndexRoute,
		AuthenticatedRouteRoute: AuthenticatedRouteRoute._addFileChildren(AuthenticatedRouteRouteChildren),
		AuthRoute
	};
	routeTree = Route$20._addFileChildren(rootRouteChildren)._addFileTypes();
}));
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter;
var init_router = __esmMin((() => {
	init_routeTree_gen();
	getRouter = () => {
		const queryClient = new QueryClient();
		return createRouter({
			routeTree,
			context: { queryClient },
			scrollRestoration: true,
			defaultPreloadStaleTime: 0
		});
	};
}));
var attachSupabaseAuth;
var init_auth_attacher = __esmMin((() => {
	init_esm$2();
	init_client();
	attachSupabaseAuth = createMiddleware({ type: "function" }).client(async ({ next }) => {
		const { data } = await supabase.auth.getSession();
		const token = data.session?.access_token;
		return next({ headers: token ? { Authorization: `Bearer ${token}` } : {} });
	});
}));
var start_exports = /* @__PURE__ */ __exportAll({ startInstance: () => startInstance });
var errorMiddleware;
var csrfMiddleware;
var startInstance;
var init_start = __esmMin((() => {
	init_esm$2();
	init_error_page();
	init_auth_attacher();
	errorMiddleware = createMiddleware().server(async ({ next }) => {
		try {
			return await next();
		} catch (error) {
			if (error != null && typeof error === "object" && "statusCode" in error) throw error;
			console.error(error);
			return new Response(renderErrorPage(), {
				status: 500,
				headers: { "content-type": "text/html; charset=utf-8" }
			});
		}
	});
	csrfMiddleware = createCsrfMiddleware({ filter: (ctx) => ctx.handlerType === "serverFn" });
	startInstance = createStart(() => ({
		functionMiddleware: [attachSupabaseAuth],
		requestMiddleware: [errorMiddleware, csrfMiddleware]
	}));
}));
var empty_plugin_adapters_exports = /* @__PURE__ */ __exportAll({
	hasPluginAdapters: () => false,
	pluginSerializationAdapters: () => pluginSerializationAdapters
});
var pluginSerializationAdapters;
var init_empty_plugin_adapters = __esmMin((() => {
	pluginSerializationAdapters = [];
}));
function getStartResponseHeaders(opts) {
	return mergeHeaders({ "Content-Type": "text/html; charset=utf-8" }, ...opts.router.stores.matches.get().map((match) => {
		return match.headers;
	}));
}
async function loadEntries() {
	const [routerEntry, startEntry, pluginAdapters] = await Promise.all([
		Promise.resolve().then(() => (init_router(), router_exports)),
		Promise.resolve().then(() => (init_start(), start_exports)),
		Promise.resolve().then(() => (init_empty_plugin_adapters(), empty_plugin_adapters_exports))
	]);
	return {
		routerEntry,
		startEntry,
		pluginAdapters
	};
}
function getEntries() {
	if (!entriesPromise) entriesPromise = loadEntries();
	return entriesPromise;
}
function throwRouteHandlerError() {
	throw new Error(ERR_NO_RESPONSE);
}
function throwIfMayNotDefer() {
	throw new Error(ERR_NO_DEFER);
}
/**
* Check if a value is a special response (Response or Redirect)
*/
function isSpecialResponse(value) {
	return value instanceof Response || isRedirect(value);
}
/**
* Normalize middleware result to context shape
*/
function handleCtxResult(result) {
	if (isSsrResponse(result) || isSpecialResponse(result)) return { response: result };
	return result;
}
/**
* Execute a middleware chain
*/
async function executeMiddleware(middlewares, ctx) {
	let index = -1;
	let streamResponse;
	const setResponse = (response) => {
		if (isSsrResponse(response)) {
			if (response.serverSsrCleanup === "stream") streamResponse = response;
			ctx.response = response.response;
			return;
		}
		ctx.response = response;
	};
	const disposeStreamResponse = async (reason) => {
		const response = streamResponse;
		if (!response) return;
		streamResponse = void 0;
		const currentResponse = ctx.response;
		if (currentResponse === response.response || currentResponse instanceof Response && response.response.body !== null && currentResponse.body === response.response.body) ctx.response = void 0;
		await response.dispose(reason);
	};
	const getFinalResponse = async () => {
		const response = ctx.response;
		if (!response) throwRouteHandlerError();
		if (!streamResponse) return response;
		if (response === streamResponse.response) return streamResponse;
		if (streamResponse.response.body !== null && response.body === streamResponse.response.body) return {
			...streamResponse,
			response
		};
		await disposeStreamResponse("middleware response replaced");
		return response;
	};
	const next = async (nextCtx) => {
		if (nextCtx) {
			if (nextCtx.context) ctx.context = safeObjectMerge(ctx.context, nextCtx.context);
			for (const key of Object.keys(nextCtx)) if (key === "response") setResponse(nextCtx.response);
			else if (key !== "context") ctx[key] = nextCtx[key];
		}
		index++;
		const middleware = middlewares[index];
		if (!middleware) return ctx;
		let result;
		try {
			result = await middleware({
				...ctx,
				next
			});
		} catch (err) {
			if (isSpecialResponse(err)) {
				setResponse(err);
				return ctx;
			}
			await disposeStreamResponse("middleware error");
			throw err;
		}
		const normalized = handleCtxResult(result);
		if (normalized) {
			if (normalized.response !== void 0) setResponse(normalized.response);
			if (normalized.context) ctx.context = safeObjectMerge(ctx.context, normalized.context);
		}
		return ctx;
	};
	await next();
	return {
		ctx,
		response: await getFinalResponse()
	};
}
/**
* Wrap a route handler as middleware
*/
function handlerToMiddleware(handler, mayDefer = false) {
	if (mayDefer) return handler;
	return async (ctx) => {
		const response = await handler({
			...ctx,
			next: throwIfMayNotDefer
		});
		if (!response) throwRouteHandlerError();
		return response;
	};
}
/**
* Creates the TanStack Start request handler.
*
* @example Backwards-compatible usage (handler callback only):
* ```ts
* export default createStartHandler(defaultStreamHandler)
* ```
*
* @example With CDN URL rewriting:
* ```ts
* export default createStartHandler({
*   handler: defaultStreamHandler,
*   transformAssets: 'https://cdn.example.com',
* })
* ```
*
* @example With per-request URL rewriting:
* ```ts
* export default createStartHandler({
*   handler: defaultStreamHandler,
*   transformAssets: {
*     transform: ({ url }) => {
*       const cdnBase = getRequest().headers.get('x-cdn-base') || ''
*       return { href: `${cdnBase}${url}` }
*     },
*     cache: false,
*   },
* })
* ```
*/
function createStartHandler(cbOrOptions) {
	const handlerOptions = typeof cbOrOptions === "function" ? {} : cbOrOptions;
	const cb = typeof cbOrOptions === "function" ? cbOrOptions : cbOrOptions.handler;
	const finalManifestResolver = createFinalManifestResolver({
		...handlerOptions,
		cacheCreateTransform: true
	});
	const resolveManifestForRequest = finalManifestResolver.resolveCached;
	finalManifestResolver.warmup({ getBaseManifest: () => getBaseManifest(void 0) });
	const startRequestResolver = async (request, requestOpts) => {
		let router = null;
		let responseOwnsCleanup = false;
		try {
			const { url, handledProtocolRelativeURL } = getNormalizedURL(request.url);
			const href = url.pathname + url.search + url.hash;
			const origin = getOrigin(request);
			if (handledProtocolRelativeURL) return Response.redirect(url, 308);
			const entries = await getEntries();
			const hasStartInstance = !!entries.startEntry.startInstance;
			const startOptions = await entries.startEntry.startInstance?.getOptions() || {};
			const { hasPluginAdapters, pluginSerializationAdapters } = entries.pluginAdapters;
			const serializationAdapters = [
				...startOptions.serializationAdapters || [],
				...hasPluginAdapters ? pluginSerializationAdapters : [],
				ServerFunctionSerializationAdapter
			];
			const requestStartOptions = {
				...startOptions,
				requestMiddleware: hasStartInstance ? startOptions.requestMiddleware : [defaultCsrfMiddleware],
				serializationAdapters
			};
			const flattenedRequestMiddlewares = requestStartOptions.requestMiddleware ? flattenMiddlewares(requestStartOptions.requestMiddleware) : [];
			const executedRequestMiddlewares = new Set(flattenedRequestMiddlewares);
			const getRouter = async () => {
				if (router) return router;
				router = await entries.routerEntry.getRouter();
				let isShell = IS_SHELL_ENV;
				if (IS_PRERENDERING && !isShell) isShell = request.headers.get(HEADERS.TSS_SHELL) === "true";
				const history = createMemoryHistory({ initialEntries: [href] });
				router.update({
					history,
					isShell,
					isPrerendering: IS_PRERENDERING,
					origin: router.options.origin ?? origin,
					defaultSsr: requestStartOptions.defaultSsr,
					serializationAdapters: [...requestStartOptions.serializationAdapters, ...router.options.serializationAdapters || []],
					basepath: ROUTER_BASEPATH
				});
				return router;
			};
			if (SERVER_FN_BASE && url.pathname.startsWith(SERVER_FN_BASE)) {
				const serverFnId = url.pathname.slice(SERVER_FN_BASE.length).split("/")[0];
				if (!serverFnId) throw new Error("Invalid server action param for serverFnId");
				const serverFnHandler = async ({ context }) => {
					return runWithStartContext({
						getRouter,
						startOptions: requestStartOptions,
						contextAfterGlobalMiddlewares: context,
						request,
						executedRequestMiddlewares,
						handlerType: "serverFn"
					}, () => handleServerAction({
						request,
						context: requestOpts?.context,
						serverFnId
					}));
				};
				const { response: middlewareResponse } = await executeMiddleware([...flattenedRequestMiddlewares.map((d) => d.options.server), serverFnHandler], {
					request,
					pathname: url.pathname,
					handlerType: "serverFn",
					context: createNullProtoObject(requestOpts?.context)
				});
				const result = await handleRedirectResponse(middlewareResponse, request, getRouter);
				responseOwnsCleanup = result.serverSsrCleanup === "stream";
				return result.response;
			}
			const executeRouter = async (serverContext, matchedRoutes) => {
				const acceptParts = (request.headers.get("Accept") || "*/*").split(",");
				if (!["*/*", "text/html"].some((mimeType) => acceptParts.some((part) => part.trim().startsWith(mimeType)))) return normalizeSsrResponse(Response.json({ error: "Only HTML requests are supported here" }, { status: 500 }));
				const manifest = await resolveManifestForRequest({
					request,
					requestInlineCss: requestOpts?.inlineCss,
					getBaseManifest: () => getBaseManifest(matchedRoutes)
				});
				const earlyHints = createEarlyHintsForRequest({
					onEarlyHints: requestOpts?.onEarlyHints,
					responseLinkHeader: requestOpts?.responseLinkHeader
				});
				earlyHints?.collectStatic({
					manifest,
					matchedRoutes
				});
				const routerInstance = await getRouter();
				attachRouterServerSsrUtils({
					router: routerInstance,
					manifest,
					getRequestAssets: () => getStartContext({ throwIfNotFound: false })?.requestAssets
				});
				routerInstance.options.additionalContext = { serverContext };
				await routerInstance.load();
				if (routerInstance.state.redirect) return normalizeSsrResponse(routerInstance.state.redirect);
				earlyHints?.collectDynamic(routerInstance.stores.matches.get());
				const ctx = getStartContext({ throwIfNotFound: false });
				await routerInstance.serverSsr.dehydrate({ requestAssets: ctx?.requestAssets });
				const responseHeaders = getStartResponseHeaders({ router: routerInstance });
				earlyHints?.appendResponseHeaders(responseHeaders);
				return normalizeSsrResponse(await cb({
					request,
					router: routerInstance,
					responseHeaders
				}));
			};
			const requestHandlerMiddleware = async ({ context }) => {
				return runWithStartContext({
					getRouter,
					startOptions: requestStartOptions,
					contextAfterGlobalMiddlewares: context,
					request,
					executedRequestMiddlewares,
					handlerType: "router"
				}, async () => {
					try {
						return await handleServerRoutes({
							getRouter,
							request,
							url,
							executeRouter,
							context,
							executedRequestMiddlewares
						});
					} catch (err) {
						if (err instanceof Response) return err;
						throw err;
					}
				});
			};
			const { response: middlewareResponse } = await executeMiddleware([...flattenedRequestMiddlewares.map((d) => d.options.server), requestHandlerMiddleware], {
				request,
				pathname: url.pathname,
				handlerType: "router",
				context: createNullProtoObject(requestOpts?.context)
			});
			const response = await handleRedirectResponse(middlewareResponse, request, getRouter);
			responseOwnsCleanup = response.serverSsrCleanup === "stream";
			return response.response;
		} finally {
			if (router?.serverSsr && !responseOwnsCleanup) router.serverSsr.cleanup();
			router = null;
		}
	};
	return requestHandler(startRequestResolver);
}
async function handleRedirectResponse(response, request, getRouter) {
	const ssrResponse = normalizeSsrResponse(response);
	if (!isRedirect(ssrResponse.response)) return ssrResponse;
	if (isResolvedRedirect(ssrResponse.response)) {
		if (request.headers.get("x-tsr-serverFn") === "true") return replaceSsrResponse(ssrResponse, Response.json({
			...ssrResponse.response.options,
			isSerializedRedirect: true
		}, { headers: ssrResponse.response.headers }), "redirect response replaced");
		return ssrResponse;
	}
	const opts = ssrResponse.response.options;
	if (opts.to && typeof opts.to === "string" && !opts.to.startsWith("/")) throw new Error(`Server side redirects must use absolute paths via the 'href' or 'to' options. The redirect() method's "to" property accepts an internal path only. Use the "href" property to provide an external URL. Received: ${JSON.stringify(opts)}`);
	if ([
		"params",
		"search",
		"hash"
	].some((d) => typeof opts[d] === "function")) throw new Error(`Server side redirects must use static search, params, and hash values and do not support functional values. Received functional values for: ${Object.keys(opts).filter((d) => typeof opts[d] === "function").map((d) => `"${d}"`).join(", ")}`);
	const redirect = (await getRouter()).resolveRedirect(ssrResponse.response);
	if (request.headers.get("x-tsr-serverFn") === "true") return replaceSsrResponse(ssrResponse, Response.json({
		...ssrResponse.response.options,
		isSerializedRedirect: true
	}, { headers: ssrResponse.response.headers }), "redirect response replaced");
	return replaceSsrResponse(ssrResponse, redirect, "redirect response replaced");
}
async function handleServerRoutes({ getRouter, request, url, executeRouter, context, executedRequestMiddlewares }) {
	const router = await getRouter();
	const pathname = executeRewriteInput(router.rewrite, url).pathname;
	const { matchedRoutes, foundRoute, routeParams } = router.getMatchedRoutes(pathname);
	const isExactMatch = foundRoute && routeParams["**"] === void 0;
	const routeMiddlewares = [];
	for (const route of matchedRoutes) {
		const serverMiddleware = route.options.server?.middleware;
		if (serverMiddleware) {
			const flattened = flattenMiddlewares(serverMiddleware);
			for (const m of flattened) if (!executedRequestMiddlewares.has(m)) routeMiddlewares.push(m.options.server);
		}
	}
	const server = foundRoute?.options.server;
	let isHeadFallback = false;
	if (server?.handlers && isExactMatch) {
		const handlers = typeof server.handlers === "function" ? server.handlers({ createHandlers: (d) => d }) : server.handlers;
		const requestMethod = request.method.toUpperCase();
		const handler = requestMethod === "HEAD" ? handlers["HEAD"] ?? handlers["GET"] ?? handlers["ANY"] : handlers[requestMethod] ?? handlers["ANY"];
		isHeadFallback = requestMethod === "HEAD" && handler !== void 0 && !handlers["HEAD"];
		if (handler) {
			const mayDefer = !!foundRoute.options.component;
			if (typeof handler === "function") routeMiddlewares.push(handlerToMiddleware(handler, mayDefer));
			else {
				if (handler.middleware?.length) {
					const handlerMiddlewares = flattenMiddlewares(handler.middleware);
					for (const m of handlerMiddlewares) routeMiddlewares.push(m.options.server);
				}
				if (handler.handler) routeMiddlewares.push(handlerToMiddleware(handler.handler, mayDefer));
			}
		}
	}
	routeMiddlewares.push(((ctx) => executeRouter(ctx.context, matchedRoutes)));
	const { ctx, response } = await executeMiddleware(routeMiddlewares, {
		request,
		context,
		params: routeParams,
		pathname,
		handlerType: "router"
	});
	if (isHeadFallback) {
		if (!ctx.response) throwRouteHandlerError();
		return stripSsrResponseBody(await handleRedirectResponse(response, request, getRouter), "HEAD body stripped");
	}
	return normalizeSsrResponse(response);
}
var entriesPromise;
var defaultCsrfMiddleware;
var getCachedBaseManifest;
var getProdBaseManifest;
var getBaseManifest;
var createEarlyHintsForRequest;
var ROUTER_BASEPATH;
var SERVER_FN_BASE;
var IS_PRERENDERING;
var IS_SHELL_ENV;
var IS_DEV;
var ERR_NO_RESPONSE;
var ERR_NO_DEFER;
var init_createStartHandler = __esmMin((() => {
	init_request_response();
	init_router_manifest();
	init_server_functions_handler();
	init_early_hints();
	init_finalManifest();
	init_constants$1();
	init_ServerFunctionSerializationAdapter();
	init_esm$3();
	init_esm$4();
	defaultCsrfMiddleware = createCsrfMiddleware({ filter: (ctx) => ctx.handlerType === "serverFn" });
	getCachedBaseManifest = createCachedBaseManifestLoader(() => getStartManifest());
	getProdBaseManifest = () => getCachedBaseManifest();
	getBaseManifest = getProdBaseManifest;
	createEarlyHintsForRequest = createEarlyHintsCollector;
	ROUTER_BASEPATH = "/";
	SERVER_FN_BASE = "/_serverFn/";
	IS_PRERENDERING = process.env.TSS_PRERENDERING === "true";
	IS_SHELL_ENV = process.env.TSS_SHELL === "true";
	IS_DEV = false;
	ERR_NO_RESPONSE = IS_DEV ? `It looks like you forgot to return a response from your server route handler. If you want to defer to the app router, make sure to have a component set in this route.` : "Internal Server Error";
	ERR_NO_DEFER = IS_DEV ? `You cannot defer to the app router if there is no component defined on this route.` : "Internal Server Error";
}));
var init_esm$1 = __esmMin((() => {
	init_request_response();
	init_createStartHandler();
}));
var init_esm = __esmMin((() => {
	init_defaultStreamHandler();
	init_esm$1();
}));
var init_server$1 = __esmMin((() => {
	init_esm();
}));
var server_exports = /* @__PURE__ */ __exportAll({
	createServerEntry: () => createServerEntry,
	default: () => server_default$1
});
function createServerEntry(entry) {
	return { async fetch(...args) {
		return await entry.fetch(...args);
	} };
}
var fetch$1;
var server_default$1;
var init_server = __esmMin((() => {
	init_server$1();
	fetch$1 = createStartHandler(defaultStreamHandler);
	server_default$1 = createServerEntry({ fetch: fetch$1 });
}));
init_error_page();
var serverEntryPromise;
async function getServerEntry() {
	if (!serverEntryPromise) serverEntryPromise = Promise.resolve().then(() => (init_server(), server_exports)).then((m) => m.default ?? m);
	return serverEntryPromise;
}
async function normalizeCatastrophicSsrResponse(response) {
	if (response.status < 500) return response;
	if (!(response.headers.get("content-type") ?? "").includes("application/json")) return response;
	const body = await response.clone().text();
	if (!isH3SwallowedErrorBody(body)) return response;
	console.error(consumeLastCapturedError() ?? /* @__PURE__ */ new Error(`h3 swallowed SSR error: ${body}`));
	return new Response(renderErrorPage(), {
		status: 500,
		headers: { "content-type": "text/html; charset=utf-8" }
	});
}
function isH3SwallowedErrorBody(body) {
	try {
		const payload = JSON.parse(body);
		return payload.unhandled === true && payload.message === "HTTPError";
	} catch {
		return false;
	}
}
var server_default = { async fetch(request, env, ctx) {
	try {
		return await normalizeCatastrophicSsrResponse(await (await getServerEntry()).fetch(request, env, ctx));
	} catch (error) {
		console.error(error);
		return new Response(renderErrorPage(), {
			status: 500,
			headers: { "content-type": "text/html; charset=utf-8" }
		});
	}
} };
//#endregion
export { server_default as default };
