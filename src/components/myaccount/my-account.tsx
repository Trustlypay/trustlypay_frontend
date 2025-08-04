import { Button, Table } from "antd";
import AntdForm from "./form";
import WhiteBorder from "../common/white-border";
import dayjs from "dayjs";

const dataSource = [
  {
    "IP Address": "183.83.219.21",
    Device: "Desktop",
    OS: "Windos 10",
    Browser: "Chrome",
    "Login At": dayjs().format(),
  },
  {
    "IP Address": "183.83.219.21",
    Device: "DeskTop",
    OS: "Apexio",
    Browser: "Chrome",
    "Login At": dayjs().format(),
  },
];

const columns = [
  {
    title: "IP Address",
    dataIndex: "IP Address",
    key: "IP Address",
  },
  {
    title: "Device",
    dataIndex: "Device",
    key: "Device",
  },
  {
    title: "OS",
    dataIndex: "OS",
    key: "OS",
  },
  {
    title: "Browser",
    dataIndex: "Browser",
    key: "Browser",
  },
  {
    title: "Login At",
    dataIndex: "Login At",
    key: "Login At",
  },
];

const MyAccount = () => {
  return (
    <div className="main">
      <div className="section-header">
        <div className="playfair-display">My Account</div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <Button style={{ border: "1px solid #EFA00B" }}>Reset Login PIN</Button>
      </div>
      <AntdForm />
      <WhiteBorder /> <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default MyAccount;
