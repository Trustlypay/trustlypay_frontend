import { Table, Typography, type InputRef } from "antd";
import dayjs from "dayjs";
import { useLocation, useNavigate } from "react-router-dom";
import { capitalizeFirstLetter } from "../../utils/first-letter-cap";
import "./detailed-transactions.css";
import RangePicker from "../common/range-picker";
import { useRef, useState } from "react";
import { getColumnSearchProps } from "../common/get-column-search";
import Highlighter from "react-highlight-words";

const { Paragraph } = Typography;

const status = ["Success", "Pending", "Failed"];

interface IPayin {
  TimeStamp: string;
  "Created Time": string;
  "User Name": string;
  Amount: string;
  "Transaction ID": string;
  UTR: string;
  UDF1: string;
  Merchant: string;
  Status: string;
}

const dataSource = Array.from({ length: 500 }).map<IPayin>((_, i) => ({
  TimeStamp: dayjs().add(i, "s").format("YYYY-MM-DD HH:mm:ss"),
  "Created Time": dayjs()
    .add(i + 1, "s")
    .format("YYYY-MM-DD HH:mm:ss"),
  "User Name": "Kiran Reddy",
  Amount: Math.floor(Math.random() * 100000).toLocaleString("en-IN"),
  "Transaction ID": "TPcO1qyEQJhpgP" + i * 10,
  UTR: Math.floor(Math.random() * 1000000000000).toString(),
  UDF1: Math.floor(Math.random() * 10000000000).toString(),
  Merchant: `m${(i % 10) + 1}`,
  Status: status[Math.floor(Math.random() * status.length)],
}));

const DetailedTransactions = () => {
  const [searchTransactionIDText, setSearchTransactionIDText] = useState("");
  const [searchedTransactionID, setSearchedTransactionID] = useState("");
  const searchTransactionID = useRef<InputRef>(null);

  const [searchUTRText, setSearchUTRText] = useState("");
  const [searchedUTR, setSearchedUTR] = useState("");
  const searchUTR = useRef<InputRef>(null);

  const [searchUDF1Text, setSearchUDF1Text] = useState("");
  const [searchedUDF1, setSearchedUDF1] = useState("");
  const searchUDF1 = useRef<InputRef>(null);

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
          <Paragraph copyable style={{ color: "var(--primary-color)" }}>
            {highlightedText}
          </Paragraph>
        );
      },
    },
    {
      title: "UTR",
      dataIndex: "UTR",
      key: "UTR",
      ...getColumnSearchProps(
        "UTR",
        searchUTR,
        setSearchUTRText,
        setSearchedUTR
      ),
      render: (value: string) =>
        searchedUTR === "UTR" ? (
          <Highlighter
            highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
            searchWords={[searchUTRText]}
            autoEscape
            textToHighlight={value ? value.toString() : ""}
          />
        ) : (
          value
        ),
    },
    {
      title: "UDF1",
      dataIndex: "UDF1",
      key: "UDF1",
      ...getColumnSearchProps(
        "UDF1",
        searchUDF1,
        setSearchUDF1Text,
        setSearchedUDF1
      ),
      render: (value: string) =>
        searchedUDF1 === "UDF1" ? (
          <Highlighter
            highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
            searchWords={[searchUDF1Text]}
            autoEscape
            textToHighlight={value ? value.toString() : ""}
          />
        ) : (
          value
        ),
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
      onFilter: (value: boolean | React.Key, record: IPayin) =>
        record.Merchant === (value as string),
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",
      render: (value: any) => {
        switch (value) {
          case "Success":
            return <div className="status success-status-color">{value}</div>;
          case "Pending":
            return <div className="status pending-status-color">{value}</div>;
          case "Failed":
            return <div className="status failed-status-color">{value}</div>;
        }
      },
      filters: status.map((item) => {
        return { text: item, value: item };
      }),
      filterSearch: true,
      onFilter: (value: boolean | React.Key, record: IPayin) => {
        return record.Status === (value as string);
      },
    },
  ];

  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="main">
      <div className="sub-page-header">
        <div className="playfair-display">Detailed Transactions</div>
        <div style={{ display: "flex", gap: "1px" }}>
          {location.pathname
            .slice(1)
            .split("/")
            .map((item, index, arr) =>
              index === arr.length - 1 ? (
                <div style={{ fontSize: "14px" }}>
                  {capitalizeFirstLetter(item)}
                </div>
              ) : (
                <div
                  style={{ fontSize: "14px", color: " #666666" }}
                  onClick={() => {
                    navigate(`/${item}`);
                  }}
                >{`${capitalizeFirstLetter(item)} / `}</div>
              )
            )}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: "12px",
        }}
      >
        <Paragraph style={{ margin: 0 }}>Date : </Paragraph>
        <div>
          <RangePicker />
        </div>
      </div>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default DetailedTransactions;
