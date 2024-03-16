import { lazy } from "react";
import { RouteConfig } from "../../routes/routeTypes";
const  BPOsignup2_6 = lazy(() => import("."));


export const BPOsignup2_6Config: RouteConfig = {
  path: "/bposignup2_6",
  component: BPOsignup2_6,
  isPublic: true,
};
