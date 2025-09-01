import "./dashboard.css";
import { Table } from "antd";
import TransactionsCards from "./transactions-cards";
import TransactionsGraphs from "./transactions-graphs";
import RangePicker from "../common/range-picker";
import SelectMerchant from "../common/select-merchant";
import WhiteBorder from "../common/white-border";
import { useMerchantRoutingDetails } from "../../services/dashboard/dashboard.service.hook";

const columns = [
  {
    title: "Merchant ID",
    dataIndex: "merchant_gid",
    key: "Merchant ID",
  },
  {
    title: "Merchant Name",
    dataIndex: "merchant_name",
    key: "Merchant Name",
  },
  {
    title: "UPI Route",
    dataIndex: "bank_name",
    key: "UPI Route",
  },
];

const Dashboard = () => {
  const { data, isLoading } = useMerchantRoutingDetails();

  return (
    <div className="main scrollbar">
      <div className="welcome playfair-display">I Welcome, Kiran</div>
      <div className="pay-in">
        <div className="pay-in-overview-section">
          <div className="playfair-display">Pay In Overview</div>
          <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
            <RangePicker />
            <SelectMerchant />
            <button className="update-btn">Update</button>
          </div>
        </div>
        <TransactionsCards />
        <TransactionsGraphs />
      </div>
      <WhiteBorder />
      <div className="pay-in">
        <div className="pay-in-overview-section">
          <div className="playfair-display">Pay Out Overview</div>
        </div>
        <TransactionsCards />
        <TransactionsGraphs />
      </div>
      <WhiteBorder />
      <div className="pay-in">
        <div className="pay-in-overview-section">
          <div className="playfair-display">Merchant GateWay Route</div>
        </div>
        <Table dataSource={data} columns={columns} loading={isLoading} />
      </div>
    </div>
  );
};

export default Dashboard;
