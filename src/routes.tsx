import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SuspenseFallback from "./utils/suspense-fallback";
import { routeMapMini } from "./route-map";

const Login = React.lazy(async () => await import("./components/login"));
const Dashboard = React.lazy(
  async () => await import("./components/dashboard/dashboard")
);

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={routeMapMini.login} />} />
      <Route
        path={routeMapMini.login}
        element={
          <Suspense fallback={<SuspenseFallback />}>
            <Login />
          </Suspense>
        }
      />
      <Route
        path={routeMapMini.dashboard}
        element={
          <Suspense fallback={<SuspenseFallback />}>
            <Dashboard />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
