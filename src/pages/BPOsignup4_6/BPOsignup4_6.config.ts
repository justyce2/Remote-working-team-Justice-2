import { lazy } from "react";
import { RouteConfig } from "../../routes/routeTypes";
const BPOsignup4_6 = lazy(() => import("."));

export const BPOsignup4_6Config: RouteConfig = {
  path: "/bposignup4_6",
  component: BPOsignup4_6,
  isPublic: true,
};
