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
const DetailedTransactions = React.lazy(
  async () => await import("./components/payin/detailed-transactions")
);
const UpdateTransactions = React.lazy(
  async () => await import("./components/payin/update-transactions")
);
const CheckStatus = React.lazy(
  async () => await import("./components/payin/check-status")
);
const DetailedSettlementTransactions = React.lazy(
  async () =>
    await import("./components/settlement/detailed-settlement-transactions")
);
const BulkAdjustment = React.lazy(
  async () => await import("./components/settlement/bulk-adjustment")
);
const ChargebackRefund = React.lazy(
  async () => await import("./components/settlement/chargeback-refund")
);
const SettlementStatement = React.lazy(
  async () => await import("./components/settlement/settlement-statement")
);
const MyAccount = React.lazy(
  async () => await import("./components/myaccount/my-account")
);
const PayoutDetailedTransactions = React.lazy(
  async () => await import("./components/payout/payout-detailed-transactions")
);
const Accounts = React.lazy(
  async () => await import("./components/payout/accounts")
);
const Statement = React.lazy(
  async () => await import("./components/payout/statement")
);
const MerchantManagementStep1 = React.lazy(
  async () =>
    await import("./components/merchant-management/merchant-management-step1")
);
const MerchantManagementStep2 = React.lazy(
  async () =>
    await import("./components/merchant-management/merchant-management-step2")
);
const MerchantManagementStep3 = React.lazy(
  async () =>
    await import("./components/merchant-management/merchant-management-step3")
);
const MerchantManagementStep4 = React.lazy(
  async () =>
    await import("./components/merchant-management/merchant-management-step4")
);
const MerchantManagementStep5 = React.lazy(
  async () =>
    await import("./components/merchant-management/merchant-management-step5")
);
const MerchantManagementStep6 = React.lazy(
  async () =>
    await import("./components/merchant-management/merchant-management-step6")
);
const MerchantDetailsPage = React.lazy(
  async () =>
    await import("./components/merchant-management/merchant-details-page")
);
const MerchantRoutingConfig = React.lazy(
  async () =>
    await import("./components/merchant-management/merchant-routing-config")
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
      <Route
        path={routeMapMini.detailedTransactions}
        element={
          <Suspense fallback={<SuspenseFallback />}>
            <DetailedTransactions />
          </Suspense>
        }
      />
      <Route
        path={routeMapMini.updateTransactions}
        element={
          <Suspense fallback={<SuspenseFallback />}>
            <UpdateTransactions />
          </Suspense>
        }
      />
      <Route
        path={routeMapMini.checkStatus}
        element={
          <Suspense fallback={<SuspenseFallback />}>
            <CheckStatus />
          </Suspense>
        }
      ></Route>
      <Route
        path={routeMapMini.detailedSettlementTransactions}
        element={
          <Suspense fallback={<SuspenseFallback />}>
            <DetailedSettlementTransactions />
          </Suspense>
        }
      ></Route>
      <Route
        path={routeMapMini.bulkAdjustment}
        element={
          <Suspense fallback={<SuspenseFallback />}>
            <BulkAdjustment />
          </Suspense>
        }
      ></Route>
      <Route
        path={routeMapMini.chargebackRefund}
        element={
          <Suspense fallback={<SuspenseFallback />}>
            <ChargebackRefund />
          </Suspense>
        }
      ></Route>
      <Route
        path={routeMapMini.settlementStatement}
        element={
          <Suspense fallback={<SuspenseFallback />}>
            <SettlementStatement />
          </Suspense>
        }
      ></Route>
      <Route
        path={routeMapMini.myAccount}
        element={
          <Suspense fallback={<SuspenseFallback />}>
            <MyAccount />
          </Suspense>
        }
      ></Route>
      <Route
        path={routeMapMini.payoutDetailedTransactions}
        element={
          <Suspense fallback={<SuspenseFallback />}>
            <PayoutDetailedTransactions />
          </Suspense>
        }
      ></Route>
      <Route
        path={routeMapMini.accounts}
        element={
          <Suspense fallback={<SuspenseFallback />}>
            <Accounts />
          </Suspense>
        }
      ></Route>
      <Route
        path={routeMapMini.statement}
        element={
          <Suspense fallback={<SuspenseFallback />}>
            <Statement />
          </Suspense>
        }
      ></Route>
      <Route
        path={routeMapMini.merchantManagementStep1}
        element={
          <Suspense fallback={<SuspenseFallback />}>
            <MerchantManagementStep1 />
          </Suspense>
        }
      ></Route>
      <Route
        path={routeMapMini.merchantManagementStep2}
        element={
          <Suspense fallback={<SuspenseFallback />}>
            <MerchantManagementStep2 />
          </Suspense>
        }
      ></Route>
      <Route
        path={routeMapMini.merchantManagementStep3}
        element={
          <Suspense fallback={<SuspenseFallback />}>
            <MerchantManagementStep3 />
          </Suspense>
        }
      ></Route>
      <Route
        path={routeMapMini.merchantManagementStep4}
        element={
          <Suspense fallback={<SuspenseFallback />}>
            <MerchantManagementStep4 />
          </Suspense>
        }
      ></Route>
      <Route
        path={routeMapMini.merchantManagementStep5}
        element={
          <Suspense fallback={<SuspenseFallback />}>
            <MerchantManagementStep5 />
          </Suspense>
        }
      ></Route>
      <Route
        path={routeMapMini.merchantManagementStep6}
        element={
          <Suspense fallback={<SuspenseFallback />}>
            <MerchantManagementStep6 />
          </Suspense>
        }
      ></Route>
      <Route
        path={routeMapMini.merchantDetailsPage}
        element={
          <Suspense fallback={<SuspenseFallback />}>
            <MerchantDetailsPage />
          </Suspense>
        }
      ></Route>
      <Route
        path={routeMapMini.merchantRoutingConfig}
        element={
          <Suspense fallback={<SuspenseFallback />}>
            <MerchantRoutingConfig />
          </Suspense>
        }
      ></Route>
    </Routes>
  );
}

export default AppRoutes;
