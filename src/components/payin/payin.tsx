import { useNavigate } from "react-router-dom";
import { routeMapMini } from "../../route-map";
import { Switch } from "antd";
import SummarizedTransactionsTable from "../common/summarized-transactions-table";
import { useContext, useState } from "react";
import WhiteBorder from "../common/white-border";
import { useDetailedPayInSummary } from "../../services/payin/payin.service.hook";
import UserContext from "../user-context";

const Payin = () => {
  const { userDetails } = useContext(UserContext);

  const [checked, setChecked] = useState(true);
  const navigate = useNavigate();
  const { data, isLoading } = useDetailedPayInSummary();

  const hasPermission = (item: string) =>
    userDetails?.component_level_access.includes(item) ||
    userDetails?.component_level_access.includes("Pay In");

  return (
    <div className="main scrollbar">
      <div className="section-header">
        <div className="playfair-display">Pay In</div>
        <div className="sub-route-items">
          {hasPermission("Pay In Transactions") && (
            <button
              className="sub-route"
              onClick={() => {
                navigate(routeMapMini.detailedTransactions);
              }}
            >
              <img src="/detailed-transactions.png" />
              Detailed Transactions
            </button>
          )}
          {hasPermission("Update Transactions") && (
            <button
              className="sub-route"
              onClick={() => {
                navigate(routeMapMini.updateTransactions);
              }}
            >
              <img src="/success-flash.svg" />
              Update Transactions
            </button>
          )}
          {hasPermission("Check Status") && (
            <button
              className="sub-route"
              onClick={() => {
                navigate(routeMapMini.checkStatus);
              }}
            >
              <img src="/check-status.png" />
              Check Status
            </button>
          )}
        </div>
      </div>
      <WhiteBorder />
      <div style={{ display: "flex", gap: "6px", flexDirection: "column" }}>
        <div className="playfair-display">Summarized Transactions</div>
        <div
          className="manrope"
          style={{
            display: "flex",
            gap: "12px",
            fontSize: "20px",
            alignItems: "center",
          }}
        >
          No of Transactions
          <Switch
            checked={checked}
            onChange={setChecked}
            checkedChildren="#"
            unCheckedChildren="₹"
            className={!checked ? "light-green-switch" : ""}
          />
        </div>
        <SummarizedTransactionsTable
          checked={checked}
          navigateTo={routeMapMini.detailedTransactions}
          dataSource={data}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default Payin;
