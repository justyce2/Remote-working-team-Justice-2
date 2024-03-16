import { FC } from "react";

export interface RouteConfig {
  path: string;
  component: FC;
  isPublic: boolean;
}
