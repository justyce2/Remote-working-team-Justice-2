import { lazy } from "react";
import { RouteConfig } from "../../routes/routeTypes";
export const CandidateSecurity =lazy(() => import("."));


export const CandidateSecurityConfig : RouteConfig = {
  path: "/CandidateSecurity",
  component: CandidateSecurity,
  isPublic: true,
};
