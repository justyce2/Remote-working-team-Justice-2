import { lazy } from "react";
import { RouteConfig } from "../../routes/routeTypes";
const SignupMain = lazy(() => import("."));

export const signupMainConfig: RouteConfig = {
  path: "/signup",
  component: SignupMain,
  isPublic: true,
};
