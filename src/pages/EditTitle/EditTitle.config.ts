import { lazy } from "react";
import { RouteConfig } from "../../routes/routeTypes";
export const EditTitle =lazy(() => import("."));


export const EditTitleConfig : RouteConfig = {
  path: "/EditTitle",
  component: EditTitle,
  isPublic: true,
};
