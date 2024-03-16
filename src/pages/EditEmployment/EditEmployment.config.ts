import { lazy } from "react";
import { RouteConfig } from "../../routes/routeTypes";
export const EditEmployment =lazy(() => import("."));


export const EditEmploymentConfig : RouteConfig = {
  path: "/EditEmployment",
  component: EditEmployment,
  isPublic: true,
};
