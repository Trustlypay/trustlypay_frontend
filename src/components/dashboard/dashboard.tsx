import "./dashboard.css";
import { Select, Table } from "antd";
import TransactionsCards from "./transactions-cards";
import TransactionsGraphs from "./transactions-graphs";
import RangePicker from "../common/range-picker";

const Dashboard = () => {
  return (
    <div className="main">
      <div className="welcome playfair-display">I Welcome, Kiran</div>
      <div className="pay-in">
        <div className="pay-in-overview-section">
          <div className="font-size-32 playfair-display">Pay In Overview</div>
          <div style={{ display: "flex", gap: "15px" }}>
            <RangePicker />
            <Select style={{ width: "120px" }} defaultValue={"m1"}>
              <Select.Option value="m1">m1</Select.Option>
              <Select.Option value="m2">m2</Select.Option>
              <Select.Option value="m3">m3</Select.Option>
              <Select.Option value="m4">m4</Select.Option>
            </Select>
            <button className="update-btn">Update</button>
          </div>
        </div>
        <TransactionsCards />
        <TransactionsGraphs />
      </div>
      <div style={{ border: "1px dashed white" }}></div>
      <div className="pay-in">
        <div className="pay-in-overview-section">
          <div className="font-size-32 playfair-display">Pay Out Overview</div>
        </div>
        <TransactionsCards />
        <TransactionsGraphs />

        <div style={{ border: "1px dashed white" }}></div>
        <Table />
      </div>
    </div>
  );
};

export default Dashboard;
