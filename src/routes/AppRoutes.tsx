import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

/** Middle Ware */
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

// Route CONFIG
import routeConfigs from "./routes.config";

// Delay component Fallback
import DelayedFallback from "../components/DelayedFallback";

// FallBack component
import Loading from "../components/Loading";
import RootComponent from "../components/RootComponent";

const routeWrapper = (Component, isPublic) => {
  return (
    <Suspense fallback={<DelayedFallback fallback={<Loading />} />}>
      {isPublic ? (
        <PublicRoute redirectTo="/">
          <RootComponent>
            <Component />
          </RootComponent>
        </PublicRoute>
      ) : (
        <ProtectedRoute>
          <RootComponent>
            <Component />
          </RootComponent>
        </ProtectedRoute>
      )}
    </Suspense>
  );
};

export const router = createBrowserRouter(
  routeConfigs.map(({ path, component: Component, isPublic }) => ({
    path,
    element: routeWrapper(Component, isPublic),
  }))
);
