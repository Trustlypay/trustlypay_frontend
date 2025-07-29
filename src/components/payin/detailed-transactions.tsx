import { Table } from "antd";
import { useLocation } from "react-router-dom";

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];

const DetailedTransactions = () => {
  const location = useLocation();
  return (
    <div className="main">
      <div className="sub-page-header">
        <div
          className="font-size-32 playfair-display"
          style={{ border: "1px solid" }}
        >
          Detailed Transactions
        </div>
        <div> {location.pathname}</div>
      </div>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default DetailedTransactions;
