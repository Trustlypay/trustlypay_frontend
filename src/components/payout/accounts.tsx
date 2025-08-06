import { Button, Input, Table } from "antd";
import MainContentHeader from "../common/main-content-header";
import SelectMerchant from "../common/select-merchant";
import dayjs from "dayjs";

const dataSource = [
  {
    Date: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    "Merchant Name": "Peshot Info System",
    "Merchant ID": "TP-2021",
    "Payout Balance": "₹ " + Number(100000).toLocaleString("en-IN"),
  },
  {
    Date: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    "Merchant Name": "TrustlyPay",
    "Merchant ID": "TP-2025",
    "Payout Balance": "₹ " + Number(50000).toLocaleString("en-IN"),
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
    title: "Payout Balance",
    dataIndex: "Payout Balance",
    key: "Payout Balance",
  },
];

const Accounts = () => {
  return (
    <div className="main scrollbar">
      <MainContentHeader title="Payout Accounts" />
      <div
        className="display-flex"
        style={{
          gap: "12px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "4px",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div>Merchant </div> <SelectMerchant />
        </div>
        <div
          style={{
            display: "flex",
            gap: "4px",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          Amount <Input type="number" prefix="₹" />
        </div>

        <Button type="primary">Add Fund</Button>
      </div>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default Accounts;
