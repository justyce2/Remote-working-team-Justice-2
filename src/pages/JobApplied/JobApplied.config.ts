import { lazy } from "react";
import { RouteConfig } from "../../routes/routeTypes";
export const JobApplied =lazy(() => import("."));


export const JobAppliedConfig : RouteConfig = {
  path: "/JobApplied",
  component: JobApplied,
  isPublic: true,
};
