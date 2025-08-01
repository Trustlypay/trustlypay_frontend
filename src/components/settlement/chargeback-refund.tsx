import dayjs from "dayjs";
import AntdTable from "../common/antd-table";
import MainContentHeader from "../common/main-content-header";
import RangePicker from "../common/range-picker";
import { Select, Typography, type InputRef } from "antd";
import Highlighter from "react-highlight-words";
import { useRef, useState } from "react";
import { getColumnSearchProps } from "../common/get-column-search";

const { Paragraph } = Typography;

const merchants = ["Peshot Info System", "TrustlyPay"];
const actionBy = ["Sheh", "Varun Sai", "Dinesh", "Abhishek"];

const dataSource = Array.from({ length: 500 }).map((_, i) => ({
  TimeStamp: dayjs().add(i, "s").format("YYYY-MM-DD HH:mm:ss"),
  "Chargeback G-ID": Math.floor(Math.random() * 1000000000000).toString(),
  "Transaction ID": "TPcO1qyEQJhpgP" + i * 10,
  "User Name": "Kiran Reddy",
  Amount: Math.floor(Math.random() * 100000).toLocaleString("en-IN"),
  Merchant: merchants[Math.floor(Math.random() * merchants.length)],
  "Action By": actionBy[Math.floor(Math.random() * actionBy.length)],
}));

const ChargebackRefund = () => {
  const [searchTransactionIDText, setSearchTransactionIDText] = useState("");
  const [searchedTransactionID, setSearchedTransactionID] = useState("");
  const searchTransactionID = useRef<InputRef>(null);

  const columns = [
    {
      title: "TimeStamp",
      dataIndex: "TimeStamp",
      key: "TimeStamp",
    },
    {
      title: "Chargeback G-ID",
      dataIndex: "Chargeback G-ID",
      key: "Chargeback G-ID",
      render: (value: string) => (
        <div style={{ color: "var(--primary-color)" }}>{value}</div>
      ),
    },
    {
      title: "Transaction ID",
      dataIndex: "Transaction ID",
      key: "Transaction ID",
      ...getColumnSearchProps(
        "Transaction ID",
        searchTransactionID,
        setSearchTransactionIDText,
        setSearchedTransactionID
      ),
      render: (value: any) => {
        const isSearched = searchedTransactionID === "Transaction ID";
        const highlightedText = isSearched ? (
          <Highlighter
            highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
            searchWords={[searchTransactionIDText]}
            autoEscape
            textToHighlight={value ? value.toString() : ""}
          />
        ) : (
          value
        );

        return (
          <div style={{ color: "var(--primary-color)" }}>{highlightedText}</div>
        );
      },
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
      render: (value: string) => <div>{"₹ " + value}</div>,
    },
    {
      title: "Merchant",
      dataIndex: "Merchant",
      key: "Merchant",
      filters: [...new Set(dataSource.map((item) => item.Merchant))].map(
        (item) => {
          return { text: item, value: item };
        }
      ),
      filterSearch: true,
      onFilter: (value: boolean | React.Key, record: any) =>
        record.Merchant === (value as string),
    },
    {
      title: "Action By",
      dataIndex: "Action By",
      key: "Action By",
    },
  ];

  return (
    <div className="main">
      <MainContentHeader title="Chargeback - Refunds" />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: "12px",
        }}
      >
        <div>Chargeback/Refund: </div>
        <Select
          style={{ width: "180px" }}
          placeholder="Select Chargeback/Refund"
        >
          <Select.Option value="Chargeback">Chargeback</Select.Option>
          <Select.Option value="Refund">Refund</Select.Option>
        </Select>

        <Paragraph style={{ margin: 0 }}>Date : </Paragraph>
        <div>
          <RangePicker />
        </div>
      </div>
      <AntdTable dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default ChargebackRefund;
