import { lazy } from "react";
import { RouteConfig } from "../../routes/routeTypes";

const HomePage = lazy(() => import("."));

export const homeRouteConfig: RouteConfig = {
  path: "/",
  component: HomePage,
  isPublic: true,
};
