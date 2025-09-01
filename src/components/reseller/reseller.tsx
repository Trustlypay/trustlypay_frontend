import { Button, Input, Select, Table } from "antd";
import { routeMapMini } from "../../route-map";
import { useNavigate } from "react-router-dom";
import "./../merchant-management/merchant-management.css";
import dayjs from "dayjs";
import WhiteBorder from "../common/white-border";

const dataSource = [
  {
    "Reseller Name": "SunrisePay",
    "Reseller ID": "RES_032",
    Status: "Approved",
    "Onboarded Date": dayjs().format("YYYY-MM-DD HH:mm:ss"),
  },
  {
    "Reseller Name": "SIMBAA DIGITAL SOLUTIONS PRIVATE LIMITED",
    "Reseller ID": "RES_031",
    Status: "Approved",
    "Onboarded Date": dayjs().format("YYYY-MM-DD HH:mm:ss"),
  },
];

const dataSourceMerchantMapping = [
  {
    "Reseller Name": "SunrisePay",
    "Reseller ID": "RES_032",
    "Merchant Name": "Peshot Info System",
    "Created Date": dayjs().format("YYYY-MM-DD HH:mm:ss"),
  },
  {
    "Reseller Name": "SIMBAA DIGITAL SOLUTIONS PRIVATE LIMITED",
    "Reseller ID": "RES_031",
    "Merchant Name": "TrustlyPay",
    "Created Date": dayjs().format("YYYY-MM-DD HH:mm:ss"),
  },
];

const Reseller = () => {
  const navigate = useNavigate();

  const columns = [
    {
      title: "Reseller Name",
      dataIndex: "Reseller Name",
      key: "Reseller Name",
    },
    {
      title: "Reseller ID",
      dataIndex: "Reseller ID",
      key: "Reseller ID",
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",
    },
    {
      title: "Onboarded Date",
      dataIndex: "Onboarded Date",
      key: "Onboarded Date",
    },
    {
      title: "Actions",
      dataIndex: "Actions",
      key: "Actions",
      render: () => (
        <Button
          onClick={() => {
            navigate(routeMapMini.editResellerRates);
          }}
        >
          Edit Rates
        </Button>
      ),
    },
  ];

  const columnsMerchantMapping = [
    {
      title: "Reseller ID",
      dataIndex: "Reseller ID",
      key: "Reseller ID",
    },
    {
      title: "Reseller Name",
      dataIndex: "Reseller Name",
      key: "Reseller Name",
    },
    {
      title: "Merchant Name",
      dataIndex: "Merchant Name",
      key: "Merchant Name",
    },
    {
      title: "Created Date",
      dataIndex: "Created Date",
      key: "Created Date",
    },
    {
      title: "Actions",
      dataIndex: "Actions",
      key: "Actions",
      render: () => <Button>Unmap</Button>,
    },
  ];

  return (
    <div className="main scrollbar">
      <div className="section-header">
        <div className="playfair-display">Reseller</div>
        <div className="sub-route-items merchant-sub-route">
          <button
            className="sub-route"
            onClick={() => {
              navigate(`${routeMapMini.resellerStep1}?step=1`);
            }}
          >
            <img src="/add.png" />
            Add Reseller
          </button>
          <div className="display-flex">
            <Input.Search
              placeholder="Search Reseller Name"
              onSearch={(e) => {
                console.log(e);
              }}
            ></Input.Search>
          </div>
        </div>
      </div>
      <Table dataSource={dataSource} columns={columns} />
      <WhiteBorder />
      <div className="section-header">
        <div className="playfair-display-font-size-24">Merchant Mapping</div>
        <div
          className="display-flex"
          style={{
            gap: "24px",
            alignItems: "center",
          }}
        >
          <Select
            placeholder="Select Reseller"
            style={{ width: "300px" }}
          ></Select>
          <Select
            placeholder="Select Merchant"
            style={{ width: "300px" }}
          ></Select>
          <Button>Map Merchant</Button>
        </div>
      </div>
      <Table
        dataSource={dataSourceMerchantMapping}
        columns={columnsMerchantMapping}
      />
    </div>
  );
};

export default Reseller;
