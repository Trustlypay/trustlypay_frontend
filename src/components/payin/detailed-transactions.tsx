import { Typography, type InputRef } from "antd";
import "./detailed-transactions.css";
import RangePicker from "../common/range-picker";
import { useEffect, useRef, useState } from "react";
import { getColumnSearchProps } from "../common/get-column-search";
import Highlighter from "react-highlight-words";
import MainContentHeader from "../common/main-content-header";
import { useSearchParams } from "react-router-dom";
import type { FilterValue } from "antd/es/table/interface";
import AntdTable from "../common/antd-table";
import { useDetailedTxnSummary } from "../../services/payin/payin.service.hook";
import type { IDetailedTxnSummary } from "../../services/payin/interface/detailed-txn-summary.interface";
import { StatusNames } from "./enums/status-names.enum";
import dayjs from "dayjs";
import { capitalizeFirstLetter } from "../../utils/first-letter-cap";

const { Paragraph } = Typography;

const DetailedTransactions = () => {
  const [searchParams] = useSearchParams();
  const [fromDate, setFromDate] = useState(
    dayjs().startOf("day").format("YYYY-MM-DD HH:mm:ss")
  );
  const [toDate, setToDate] = useState(
    dayjs().endOf("day").format("YYYY-MM-DD HH:mm:ss")
  );

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
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const { data, isLoading } = useDetailedTxnSummary(
    fromDate,
    toDate,
    current,
    pageSize,
    searchTransactionIDText,
    searchUTRText,
    searchUDF1Text
  );

  const [total, setTotal] = useState(data?.total);

  useEffect(() => {
    setTotal(data?.total);
  }, [data?.total]);

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
      dataIndex: "transaction_date",
      key: "TimeStamp",
      align: "center",
      render: (value: Date) => (
        <div>{value ? dayjs(value).format("DD-MM-YYYY HH:mm:ss") : "-"}</div>
      ),
    },
    {
      title: "Created Time",
      dataIndex: "created_date",
      key: "Created Time",
      align: "center",
      render: (value: Date) => (
        <div>{value ? dayjs(value).format("DD-MM-YYYY HH:mm:ss") : "-"} </div>
      ),
    },
    {
      title: "User Name",
      dataIndex: "transaction_username",
      key: "User Name",
      align: "center",
    },
    {
      title: "Amount",
      dataIndex: "transaction_amount",
      key: "Amount",
      align: "center",
      render: (value: string) => <div>{"₹ " + value}</div>,
    },
    {
      title: "Transaction ID",
      dataIndex: "transaction_gid",
      key: "Transaction ID",
      align: "center",
      ...getColumnSearchProps(
        "transaction_gid",
        searchTransactionID,
        setSearchTransactionIDText,
        setSearchedTransactionID
      ),
      render: (value: any) => {
        const isSearched = searchedTransactionID === "transaction_gid";
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
      dataIndex: "bank_ref_no",
      key: "UTR",
      align: "center",
      ...getColumnSearchProps(
        "bank_ref_no",
        searchUTR,
        setSearchUTRText,
        setSearchedUTR
      ),
      render: (value: string) =>
        searchedUTR === "bank_ref_no" ? (
          <Highlighter
            highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
            searchWords={[searchUTRText]}
            autoEscape
            textToHighlight={value ? value.toString() : ""}
          />
        ) : value ? (
          value
        ) : (
          "-"
        ),
      filteredValue: filters?.UTR || null,
    },
    {
      title: "UDF1",
      dataIndex: "udf1",
      key: "UDF1",
      align: "center",
      ...getColumnSearchProps(
        "udf1",
        searchUDF1,
        setSearchUDF1Text,
        setSearchedUDF1
      ),
      render: (value: string) =>
        searchedUDF1 === "udf1" ? (
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
      dataIndex: "merchant_name",
      key: "Merchant",
      align: "center",
      filters: [...new Set(data?.items?.map((item) => item.merchant_name))].map(
        (item) => {
          return { text: item, value: item };
        }
      ),
      filterSearch: true,
      onFilter: (value: boolean | React.Key, record: IDetailedTxnSummary) =>
        record.merchant_name === (value as string),
      filteredValue: filters?.Merchant || null,
    },
    {
      title: "Status",
      dataIndex: "transaction_status",
      key: "Status",
      align: "center",
      render: (value: any) => {
        switch (value) {
          case StatusNames.Success:
            return (
              <div className="status success-status-color">
                {capitalizeFirstLetter(value)}
              </div>
            );
          case StatusNames.Pending:
            return (
              <div className="status pending-status-color">
                {capitalizeFirstLetter(value)}
              </div>
            );
          case StatusNames.Failed:
            return (
              <div className="status failed-status-color">
                {capitalizeFirstLetter(value)}
              </div>
            );
        }
      },
      filters: Object.entries(StatusNames).map(([key, value]) => {
        return { text: key, value: value };
      }),
      filterSearch: true,
      onFilter: (value: boolean | React.Key, record: IDetailedTxnSummary) => {
        return record.transaction_status === (value as string);
      },
      filteredValue: filters?.Status || null,
    },
  ];

  return (
    <div className="main scrollbar">
      <MainContentHeader title="Detailed Transactions" />
      <RangePicker
        fromDate={fromDate}
        toDate={toDate}
        setFromDate={setFromDate}
        setToDate={setToDate}
      />
      <AntdTable
        loading={isLoading}
        dataSource={data?.items ?? []}
        columns={columns}
        onChange={(pagination, filters) => {
          setFilters(filters);
          setTotal(pagination.total ?? total);
          setCurrent(pagination.current ?? current);
          setPageSize(pagination.pageSize ?? pageSize);
        }}
        pagination={{
          total: total,
          current,
          pageSize,
        }}
      />
    </div>
  );
};

export default DetailedTransactions;
