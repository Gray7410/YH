import { Route, RouteObject, Routes } from "react-router-dom";
import { routeConfig } from "../config/routeConfig";
import { Suspense } from "react";
import { Loader } from "@/shared/ui/Loader/Loader";

export const AppRouter = () => {
  const render = (route: RouteObject) => {
    return (
      <Route
        key={route.path}
        path={route.path}
        element={<Suspense fallback={<Loader />}>{route.element}</Suspense>}
      >
        {route.children?.map(render)}
      </Route>
    );
  };
  return <Routes>{Object.values(routeConfig).map(render)}</Routes>;
};
