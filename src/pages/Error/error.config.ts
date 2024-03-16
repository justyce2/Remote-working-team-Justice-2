import { lazy } from "react";
import { RouteConfig } from "../../routes/routeTypes";

const ErrorPage = lazy(() => import("."));

export const errorRouteConfig: RouteConfig = {
  path: "/error",
  component: ErrorPage,
  isPublic: true,
};
