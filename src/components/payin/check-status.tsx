import { Button, Table } from "antd";
import MainContentHeader from "../common/main-content-header";

const columns = [
  {
    title: "TimeStamp",
    dataIndex: "TimeStamp",
    key: "TimeStamp",
  },
  {
    title: "Created Time",
    dataIndex: "Created Time",
    key: "Created Time",
  },
  {
    title: "User Name",
    dataIndex: "User Name",
    key: "User Name",
  },
  {
    title: "Amount",
    dataIndex: "Amount",
    key: "Amount",
  },
  {
    title: "Transaction ID",
    dataIndex: "Transaction ID",
    key: "Transaction ID",
  },
  {
    title: "UTR",
    dataIndex: "UTR",
    key: "UTR",
  },
  {
    title: "UDF1",
    dataIndex: "UDF1",
    key: "UDF1",
  },
  {
    title: "Merchant",
    dataIndex: "Merchant",
    key: "Merchant",
  },
  {
    title: "Status",
    dataIndex: "Status",
    key: "Status",
  },
];

const CheckStatus = () => {
  return (
    <div className="main scrollbar">
      <MainContentHeader title="Check Status" />
      <div className="display-flex">
        <Button type="primary">Check Status</Button>
      </div>
      <Table columns={columns} />
    </div>
  );
};

export default CheckStatus;
