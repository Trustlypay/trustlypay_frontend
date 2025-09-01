import { Table } from "antd";
import { NavLink } from "react-router-dom";

const SummarizedTransactionsTable = ({
  checked,
  navigateTo,
  dataSource,
  isLoading,
}: {
  checked: boolean;
  navigateTo: string;
  dataSource?: any[];
  isLoading: boolean;
}) => {
  const columns = [
    {
      title: "Merchant Name",
      dataIndex: "merchant_name",
      key: "Merchant Name",
      render: (value: string) => (
        <NavLink to={`${navigateTo}?merchant-name=${value}`}>{value}</NavLink>
      ),
    },
    {
      title: "Merchant ID",
      dataIndex: "merchant_gid",
      key: "Merchant ID",
    },
    {
      title: "# Success",
      dataIndex: "success_count",
      key: "# Success",
    },
    {
      title: "# Failed",
      dataIndex: "failed_count",
      key: "# Failed",
    },
    {
      title: "# Pending",
      dataIndex: "pending_count",
      key: "# Pending",
    },
    {
      title: "Success Amount",
      dataIndex: "success_amount",
      key: "Success Amount",
      render: (value: number) => "₹ " + value.toLocaleString("en-IN"),
    },
    {
      title: "Failed Amount",
      dataIndex: "failed_amount",
      key: "Failed Amount",
      render: (value: number) => "₹ " + value.toLocaleString("en-IN"),
    },
    {
      title: "Pending Amount",
      dataIndex: "pending_amount",
      key: "Pending Amount",
      render: (value: number) => "₹ " + value.toLocaleString("en-IN"),
    },
    {
      title: "Success %",
      dataIndex: "success_percentage",
      key: "Success %",
    },
  ];

  return (
    <Table
      loading={isLoading}
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
