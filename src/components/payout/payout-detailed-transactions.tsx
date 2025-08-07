import { Typography, type InputRef } from "antd";
import MainContentHeader from "../common/main-content-header";
import RangePicker from "../common/range-picker";
import AntdTable from "../common/antd-table";
import { getColumnSearchProps } from "../common/get-column-search";
import { useEffect, useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import type { FilterValue } from "antd/es/table/interface";
import dayjs from "dayjs";
import { useSearchParams } from "react-router-dom";

const { Paragraph } = Typography;

const status = ["Success", "Pending", "Failed"];
const merchants = ["Peshot Info System", "TrustlyPay"];
const dataSource = Array.from({ length: 500 }).map((_, i) => ({
  TimeStamp: dayjs().add(i, "s").format("YYYY-MM-DD HH:mm:ss"),
  "Transaction ID": "TPcO1qyEQJhpgP" + i * 10,
  Merchant: merchants[Math.floor(Math.random() * merchants.length)],
  "Beneficiary Name": "kiran",
  Amount: Math.floor(Math.random() * 100000).toLocaleString("en-IN"),
  "Beneficiary Email": "kiran@trustlypay.com",
  "Beneficiary Phone": "9876543216",
  "Beneficiary Acc #": Math.floor(Math.random() * 10000000000).toLocaleString(
    "en-IN"
  ),
  Status: status[Math.floor(Math.random() * status.length)],
}));

const PayoutDetailedTransactions = () => {
  const [searchParams] = useSearchParams();

  const [searchTransactionIDText, setSearchTransactionIDText] = useState("");
  const [searchedTransactionID, setSearchedTransactionID] = useState("");
  const searchTransactionID = useRef<InputRef>(null);

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
      filteredValue: filters?.Merchant || null,
    },

    {
      title: "Beneficiary Name",
      dataIndex: "Beneficiary Name",
      key: "Beneficiary Name",
    },
    {
      title: "Amount",
      dataIndex: "Amount",
      key: "Amount",
      render: (value: string) => <div>{"₹ " + value}</div>,
    },
    {
      title: "Beneficiary Email",
      dataIndex: "Beneficiary Email",
      key: "Beneficiary Email",
    },
    {
      title: "Beneficiary Phone",
      dataIndex: "Beneficiary Phone",
      key: "Beneficiary Phone",
    },
    {
      title: "Beneficiary Acc #",
      dataIndex: "Beneficiary Acc #",
      key: "Beneficiary Acc #",
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
      onFilter: (value: boolean | React.Key, record: any) => {
        return record.Status === (value as string);
      },
      filteredValue: filters?.Status || null,
    },
  ];
  return (
    <div className="main scrollbar">
      <MainContentHeader title="Detailed Transactions" />
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

export default PayoutDetailedTransactions;
