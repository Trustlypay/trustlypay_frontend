import { NavLink, useNavigate } from "react-router-dom";
import { routeMapMini } from "../../route-map";
import { Table } from "antd";
import dayjs from "dayjs";
import WhiteBorder from "../common/white-border";

const dataSource = [
  {
    "Merchant Name": "Peshot Info System",
    "Merchant ID": "TP-2021",
    "Settled ₹": Number(4000).toLocaleString("en-IN"),
    "Settled #": 40,
    "Unsettled ₹": Number(900).toLocaleString("en-IN"),
    "Unsettled #": 90,
    "Next Settlement": dayjs().format(),
  },
  {
    "Merchant Name": "TrustlyPay",
    "Merchant ID": "TP-2025",
    "Settled ₹": Number(7500).toLocaleString("en-IN"),
    "Settled #": 60,
    "Unsettled ₹": Number(8000).toLocaleString("en-IN"),
    "Unsettled #": 70,
    "Next Settlement": dayjs().format(),
  },
];

const columns = [
  {
    title: "Merchant Name",
    dataIndex: "Merchant Name",
    key: "Merchant Name",
    render: (value: string) => (
      <NavLink
        to={`${routeMapMini.settlementStatement}?merchnat-name=${value}`}
      >
        {value}
      </NavLink>
    ),
  },
  {
    title: "Merchant ID",
    dataIndex: "Merchant ID",
    key: "Merchant ID",
  },
  {
    title: "Settled ₹",
    dataIndex: "Settled ₹",
    key: "Settled ₹",
    render: (value: string) => <div>{"₹ " + value}</div>,
  },
  {
    title: "Settled #",
    dataIndex: "Settled #",
    key: "Settled #",
  },
  {
    title: "Unsettled ₹",
    dataIndex: "Unsettled ₹",
    key: "Unsettled ₹",
    render: (value: string) => <div>{"₹ " + value}</div>,
  },
  {
    title: "Unsettled #",
    dataIndex: "Unsettled #",
    key: "Unsettled #",
  },
  {
    title: "Next Settlement",
    dataIndex: "Next Settlement",
    key: "Next Settlement",
  },
];

const Settlement = () => {
  const navigate = useNavigate();
  return (
    <div className="main">
      <div className="section-header">
        <div className="playfair-display">Settlement</div>
        <div className="sub-route-items">
          <button
            className="sub-route"
            onClick={() => {
              navigate(routeMapMini.detailedSettlementTransactions);
            }}
          >
            <img src="/detailed-transactions.png" />
            Detailed Settlement Transactions
          </button>
          <button
            className="sub-route"
            onClick={() => {
              navigate(routeMapMini.bulkAdjustment);
            }}
          >
            <img src="/success-flash.svg" />
            Bulk Adjustment
          </button>
          <button
            className="sub-route"
            onClick={() => {
              navigate(routeMapMini.chargebackRefund);
            }}
          >
            <img src="/check-status.png" />
            Chargeback - Refund
          </button>
        </div>
      </div>
      <WhiteBorder />
      <div style={{ display: "flex", gap: "6px", flexDirection: "column" }}>
        <div className="playfair-display">Settlement Overview</div>{" "}
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </div>
  );
};

export default Settlement;
