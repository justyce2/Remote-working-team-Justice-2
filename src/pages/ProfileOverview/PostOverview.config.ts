import { lazy } from "react";
import { RouteConfig } from "../../routes/routeTypes";
export const PostOverview =lazy(() => import("."));


export const PostOverviewConfig : RouteConfig = {
  path: "/PostOverview",
  component: PostOverview,
  isPublic: true,
};
