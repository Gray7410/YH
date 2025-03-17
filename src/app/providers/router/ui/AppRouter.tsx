import { Route, RouteProps, Routes } from "react-router-dom";
import { routeConfig } from "@/shared/config/routeConfig/routeConfig";
import { Suspense } from "react";
import { Loader } from "@/shared/ui/Loader/Loader";

export const AppRouter = () => {
  const render = (route: RouteProps) => {
    return (
      <Route
        key={route.path}
        path={route.path}
        element={<Suspense fallback={<Loader />}>{route.element}</Suspense>}
      />
    );
  };
  return <Routes>{Object.values(routeConfig).map(render)}</Routes>;
};
