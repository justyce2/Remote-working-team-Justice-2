import { lazy } from "react";
import { RouteConfig } from "../../routes/routeTypes";
export const PostJob =lazy(() => import("."));


export const PostJobConfig : RouteConfig = {
  path: "/PostJob",
  component: PostJob,
  isPublic: true,
};
