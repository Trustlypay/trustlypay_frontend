import { Table } from "antd";
import dayjs from "dayjs";
import MainContentHeader from "../common/main-content-header";
import RangePicker from "../common/range-picker";

const dataSource = [
  {
    Date: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    "Merchant Name": "Peshot Info System",
    "Merchant ID": "TP-2021",
    "Opening Balance": "₹ " + Number(100000).toLocaleString("en-IN"),
    Amount: "₹ " + Number(100000).toLocaleString("en-IN"),
    "Closing Balance": "₹ " + Number(100000).toLocaleString("en-IN"),
    Type: "Credit",
  },
  {
    Date: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    "Merchant Name": "TrustlyPay",
    "Merchant ID": "TP-2025",
    "Opening Balance": "₹ " + Number(50000).toLocaleString("en-IN"),
    Amount: "₹ " + Number(50000).toLocaleString("en-IN"),
    "Closing Balance": "₹ " + Number(50000).toLocaleString("en-IN"),
    Type: "Credit",
  },
];

const columns = [
  {
    title: "Date",
    dataIndex: "Date",
    key: "Date",
  },
  {
    title: "Merchant Name",
    dataIndex: "Merchant Name",
    key: "Merchant Name",
  },
  {
    title: "Merchant ID",
    dataIndex: "Merchant ID",
    key: "Merchant ID",
  },
  {
    title: "Opening Balance",
    dataIndex: "Opening Balance",
    key: "Opening Balance",
  },
  {
    title: "Amount",
    dataIndex: "Amount",
    key: "Amount",
  },
  {
    title: "Closing Balance",
    dataIndex: "Closing Balance",
    key: "Closing Balance",
  },
  {
    title: "Type",
    dataIndex: "Type",
    key: "Type",
  },
];

const Statement = () => {
  return (
    <div className="main scrollbar">
      <MainContentHeader title="Payout Statement" />
      <RangePicker />
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default Statement;
