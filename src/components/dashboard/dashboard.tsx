import "./dashboard.css";
import { Table } from "antd";
import TransactionsCards from "./transactions-cards";
import TransactionsGraphs from "./transactions-graphs";
import RangePicker from "../common/range-picker";
import SelectMerchant from "../common/select-merchant";

const dataSource = [
  {
    "Merchant ID": "TP-2021",
    "Merchant Name": "Peshot Info System",
    "UPI Route": "Apexio",
  },
  {
    "Merchant ID": "TP-2025",
    "Merchant Name": "TrustlyPay",
    "UPI Route": "Apexio",
  },
];

const columns = [
  {
    title: "Merchant ID",
    dataIndex: "Merchant ID",
    key: "Merchant ID",
  },
  {
    title: "Merchant Name",
    dataIndex: "Merchant Name",
    key: "Merchant Name",
  },
  {
    title: "UPI Route",
    dataIndex: "UPI Route",
    key: "UPI Route",
  },
];

const Dashboard = () => {
  return (
    <div className="main">
      <div className="welcome playfair-display">I Welcome, Kiran</div>
      <div className="pay-in">
        <div className="pay-in-overview-section">
          <div className="playfair-display">Pay In Overview</div>
          <div style={{ display: "flex", gap: "15px" }}>
            <RangePicker />
            <SelectMerchant />
            <button className="update-btn">Update</button>
          </div>
        </div>
        <TransactionsCards />
        <TransactionsGraphs />
      </div>
      <div style={{ border: "1px dashed white" }}></div>
      <div className="pay-in">
        <div className="pay-in-overview-section">
          <div className="playfair-display">Pay Out Overview</div>
        </div>
        <TransactionsCards />
        <TransactionsGraphs />
      </div>
      <div style={{ border: "1px dashed white" }}></div>
      <div className="pay-in">
        <div className="pay-in-overview-section">
          <div className="playfair-display">Merchant GateWay Route</div>
        </div>
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </div>
  );
};

export default Dashboard;
