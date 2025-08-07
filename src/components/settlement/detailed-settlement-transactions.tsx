import { Typography, type InputRef } from "antd";
import type { FilterValue } from "antd/es/table/interface";
import dayjs from "dayjs";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getColumnSearchProps } from "../common/get-column-search";
import Highlighter from "react-highlight-words";
import MainContentHeader from "../common/main-content-header";
import RangePicker from "../common/range-picker";
import AntdTable from "../common/antd-table";

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

const merchants = ["Peshot Info System", "TrustlyPay"];
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
  Merchant: merchants[Math.floor(Math.random() * merchants.length)],
  Status: status[Math.floor(Math.random() * status.length)],
}));

const DetailedSettlementTransactions = () => {
  const [searchParams] = useSearchParams();

  const [searchTransactionIDText, setSearchTransactionIDText] = useState("");
  const [searchedTransactionID, setSearchedTransactionID] = useState("");
  const searchTransactionID = useRef<InputRef>(null);

  const [searchUTRText, setSearchUTRText] = useState("");
  const [searchedUTR, setSearchedUTR] = useState("");
  const searchUTR = useRef<InputRef>(null);

  const [searchUDF1Text, setSearchUDF1Text] = useState("");
  const [searchedUDF1, setSearchedUDF1] = useState("");
  const searchUDF1 = useRef<InputRef>(null);

  const [filters, setFilters] = useState<Record<string, FilterValue | null>>();

  useEffect(() => {
    const merchantName = searchParams.get("merchant-name")?.toString();
    setFilters({
      ...filters,
      Merchant: merchantName ? [merchantName] : [],
    });
  }, [searchParams.get("merchant-name")]);

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
      render: (value: string) => <div>{"₹ " + value}</div>,
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
      filteredValue: filters?.["Transaction ID"] || null,
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
      filteredValue: filters?.UTR || null,
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
      filteredValue: filters?.UDF1 || null,
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
      filteredValue: filters?.Merchant || null,
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
      filteredValue: filters?.Status || null,
    },
  ];

  return (
    <div className="main scrollbar">
      <MainContentHeader title="Detailed Settlement Transactions" />
      <RangePicker />
      <AntdTable
        dataSource={dataSource}
        columns={columns}
        onChange={(_pagination, filters) => {
          setFilters(filters);
        }}
      />
    </div>
  );
};

export default DetailedSettlementTransactions;
