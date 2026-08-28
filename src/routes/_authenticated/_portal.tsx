import { createFileRoute, Outlet } from "@tanstack/react-router";
import { PortalShell } from "@/components/layout/PortalShell";

export const Route = createFileRoute("/_authenticated/_portal")({
  component: () => (
    <PortalShell>
      <Outlet />
    </PortalShell>
  ),
});
