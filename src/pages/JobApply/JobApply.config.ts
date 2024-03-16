import { lazy } from "react";
import { RouteConfig } from "../../routes/routeTypes";
export const JobApply =lazy(() => import("."));


export const JobApplyConfig : RouteConfig = {
  path: "/JobApply",
  component: JobApply,
  isPublic: true,
};
