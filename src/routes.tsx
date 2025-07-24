import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SuspenseFallback from "./utils/suspense-fallback";
import { routeMapMini } from "./route-map";

const Login = React.lazy(async () => await import("./components/login/login"));
const Dashboard = React.lazy(
  async () => await import("./components/dashboard/dashboard")
);
const Payin = React.lazy(async () => await import("./components/payin/payin"));
const Settlement = React.lazy(
  async () => await import("./components/settlement/settlement")
);
const Payout = React.lazy(
  async () => await import("./components/payout/payout")
);
const Technical = React.lazy(
  async () => await import("./components/technical/technical")
);
const MerchantManagement = React.lazy(
  async () =>
    await import("./components/merchant-management/merchant-management")
);
const ComplainceSecurity = React.lazy(
  async () =>
    await import("./components/complaince-security/complaince-security")
);
const Reseller = React.lazy(
  async () => await import("./components/reseller/reseller")
);
const Reports = React.lazy(
  async () => await import("./components/reports/reports")
);
const AccessManagement = React.lazy(
  async () => await import("./components/access-management/access-management")
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
      <Route
        path={routeMapMini.payin}
        element={
          <Suspense fallback={<SuspenseFallback />}>
            <Payin />
          </Suspense>
        }
      />
      <Route
        path={routeMapMini.settlement}
        element={
          <Suspense fallback={<SuspenseFallback />}>
            <Settlement />
          </Suspense>
        }
      />
      <Route
        path={routeMapMini.payout}
        element={
          <Suspense fallback={<SuspenseFallback />}>
            <Payout />
          </Suspense>
        }
      />
      <Route
        path={routeMapMini.technical}
        element={
          <Suspense fallback={<SuspenseFallback />}>
            <Technical />
          </Suspense>
        }
      />
      <Route
        path={routeMapMini.merchantManagement}
        element={
          <Suspense fallback={<SuspenseFallback />}>
            <MerchantManagement />
          </Suspense>
        }
      />
      <Route
        path={routeMapMini.complainceSecurity}
        element={
          <Suspense fallback={<SuspenseFallback />}>
            <ComplainceSecurity />
          </Suspense>
        }
      />
      <Route
        path={routeMapMini.reseller}
        element={
          <Suspense fallback={<SuspenseFallback />}>
            <Reseller />
          </Suspense>
        }
      />
      <Route
        path={routeMapMini.reports}
        element={
          <Suspense fallback={<SuspenseFallback />}>
            <Reports />
          </Suspense>
        }
      />
      <Route
        path={routeMapMini.accessManagement}
        element={
          <Suspense fallback={<SuspenseFallback />}>
            <AccessManagement />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
