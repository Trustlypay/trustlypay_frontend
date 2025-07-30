import { Table } from "antd";

const dataSource = [
  {
    "Merchant Name": "Peshot INfO Syatem",
    "Merchant ID": "TP-2021",
    "# Success": 32,
    "# Failed": 9,
    "# Pending": 1,
    "Success Amount": "₹ " + Number(420000).toLocaleString("en-IN"),
    "Failed Amount": "₹ " + Number(9000).toLocaleString("en-IN"),
    "Pending Amount": "₹ " + Number(1000).toLocaleString("en-IN"),
    "Success %": "10%",
  },
  {
    "Merchant Name": "TrustlyPay",
    "Merchant ID": "TP-2025",
    "# Success": 42,
    "# Failed": 90,
    "# Pending": 0,
    "Success Amount": "₹ " + Number(4200).toLocaleString("en-IN"),
    "Failed Amount": "₹ " + Number(900).toLocaleString("en-IN"),
    "Pending Amount": "₹ " + Number(1000).toLocaleString("en-IN"),
    "Success %": "1%",
  },
];
const columns = [
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
    title: "# Success",
    dataIndex: "# Success",
    key: "# Success",
  },
  {
    title: "# Failed",
    dataIndex: "# Failed",
    key: "# Failed",
  },
  {
    title: "# Pending",
    dataIndex: "# Pending",
    key: "# Pending",
  },
  {
    title: "Success Amount",
    dataIndex: "Success Amount",
    key: "Success Amount",
  },
  {
    title: "Failed Amount",
    dataIndex: "Failed Amount",
    key: "Failed Amount",
  },
  {
    title: "Pending Amount",
    dataIndex: "Pending Amount",
    key: "Pending Amount",
  },
  {
    title: "Success %",
    dataIndex: "Success %",
    key: "Success %",
  },
];

const SummarizedTransactionsTable = ({ checked }: { checked: boolean }) => {
  return (
    <Table
      dataSource={dataSource}
      columns={
        checked
          ? [
              columns?.[0],
              columns?.[1],
              columns?.[2],
              columns?.[3],
              columns?.[4],
              columns?.[8],
            ]
          : [
              columns?.[0],
              columns?.[1],
              columns?.[5],
              columns?.[6],
              columns?.[7],
              columns?.[8],
            ]
      }
    />
  );
};

export default SummarizedTransactionsTable;
