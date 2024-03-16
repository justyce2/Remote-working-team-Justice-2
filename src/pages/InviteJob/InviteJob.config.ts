import { lazy } from "react";
import { RouteConfig } from "../../routes/routeTypes";
export const InviteJob =lazy(() => import("."));


export const InviteJobConfig : RouteConfig = {
  path: "/InviteJob",
  component: InviteJob,
  isPublic: true,
};
