import { useNavigate } from "react-router-dom";
import { routeMapMini } from "../../route-map";
import { Switch } from "antd";
import SummarizedTransactionsTable from "./summarized-transactions-table";
import { useState } from "react";

const Payin = () => {
  const [checked, setChecked] = useState(true);
  const navigate = useNavigate();
  return (
    <div className="main">
      <div className="section-header">
        <div className="playfair-display">Pay In</div>
        <div className="sub-route-items">
          <button
            className="sub-route"
            onClick={() => {
              navigate(routeMapMini.detailedTransactions);
            }}
          >
            Detailed Transactions
          </button>
          <button className="sub-route">Update Transactions</button>
          <button className="sub-route">Check Status</button>
        </div>
      </div>
      <div style={{ border: "1px dashed #CFD8D7 " }}></div>
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
        <SummarizedTransactionsTable checked={checked} />
      </div>
    </div>
  );
};

export default Payin;
