import { useNavigate } from "react-router-dom";
import { routeMapMini } from "../../route-map";
import { Button, Input, Table } from "antd";
import "./merchant-management.css";
import WhiteBorder from "../common/white-border";
import dayjs from "dayjs";
import { capitalizeFirstLetter } from "../../utils/first-letter-cap";
import { useMerchantRoutingDetails } from "../../services/dashboard/dashboard.service.hook";

const merchants = [
  {
    merchantName: "Peshot Info Tech Private Limited",
    merchantId: "TP-2025",
    mode: "Live",
    merchantVendor: "Apexio",
  },
  {
    merchantName: "TrustlyPay",
    merchantId: "TP-2024",
    mode: "Live",
    merchantVendor: "Apexio",
  },
  {
    merchantName: "esayway business",
    merchantId: "TP-2023",
    mode: "Test",
    merchantVendor: "Apexio",
  },
  {
    merchantName: "astech business",
    merchantId: "TP-2023",
    mode: "Test",
    merchantVendor: "Apexio",
  },
  {
    merchantName: "esayway business",
    merchantId: "TP-2023",
    mode: "Test",
    merchantVendor: "Indiplex",
  },
  {
    merchantName: "astech business",
    merchantId: "TP-2023",
    mode: "Test",
    merchantVendor: "Indiplex",
  },
  {
    merchantName: "Peshot Info Tech Private Limited",
    merchantId: "TP-2025",
    mode: "Live",
    merchantVendor: "Indiplex",
  },
  {
    merchantName: "TrustlyPay",
    merchantId: "TP-2024",
    mode: "Live",
    merchantVendor: "Indiplex",
  },
  {
    merchantName: "astech business",
    merchantId: "TP-2023",
    mode: "Test",
    merchantVendor: "Indiplex",
  },
  {
    merchantName: "TrustlyPay",
    merchantId: "TP-2024",
    mode: "Live",
    merchantVendor: "Indiplex",
  },
  {
    merchantName: "astech business",
    merchantId: "TP-2023",
    mode: "Test",
    merchantVendor: "Indiplex",
  },
];

const MerchantManagement = () => {
  const navigate = useNavigate();

  const { data, isLoading } = useMerchantRoutingDetails();

  const columns = [
    {
      title: "Merchant ID",
      dataIndex: "merchant_gid",
      key: "Merchant ID",
    },
    {
      title: "Merchant Name",
      dataIndex: "merchant_name",
      key: "Merchant Name",
    },
    {
      title: "UPI Route",
      dataIndex: "bank_name",
      key: "UPI Route",
    },
    {
      title: "Created Date",
      dataIndex: "created_date",
      key: "Created Date",
      render: (value: Date) => (
        <div>{value ? dayjs(value).format("DD-MM-YYYY HH:mm:ss") : "-"}</div>
      ),
    },
    {
      title: "Action",
      dataIndex: "merchant_gid",
      key: "Action",
      render: (value: any) => (
        <Button
          type="primary"
          onClick={() =>
            navigate(`${routeMapMini.merchantRoutingConfig}?merchant=${value}`)
          }
        >
          Edit Route
        </Button>
      ),
    },
  ];

  return (
    <div className="main scrollbar">
      <div className="section-header">
        <div className="playfair-display">Merchant Management</div>
        <div className="sub-route-items merchant-sub-route">
          <button
            className="sub-route"
            onClick={() => {
              navigate(`${routeMapMini.merchantManagementStep1}?step=1`);
            }}
          >
            <img src="/add.png" />
            Add Merchant
          </button>
          <div className="display-flex">
            <Input.Search
              placeholder="Search Merchant Name"
              onSearch={(e) => {
                console.log(e);
              }}
            ></Input.Search>
          </div>
        </div>
        <div className="grid-4 scrollbar">
          {merchants.map((merchant) => (
            <div
              className="merchant-card"
              onClick={() => navigate(routeMapMini.merchantDetailsPage)}
            >
              <div className="merchant-card-content">
                <div className="merchant-display-flex">
                  <span className="merchant-initial-letter">
                    {capitalizeFirstLetter(merchant.merchantName).charAt(0)}
                  </span>
                  <span className="ellipsis-text merchant-name">
                    {capitalizeFirstLetter(merchant.merchantName)}
                  </span>
                </div>
                {merchant.mode === "Live" ? (
                  <div className="status merchant-display-flex">
                    <span className="live-dot"> </span>
                    <span className="live-color">{merchant.mode}</span>
                  </div>
                ) : (
                  <div className="status merchant-display-flex">
                    <span className="test-dot"> </span>
                    <span className="test-color">{merchant.mode}</span>
                  </div>
                )}
              </div>
              <div className="merchant-card-content">
                <div className="merchant-id-font-weight">
                  {merchant.merchantId}
                </div>
                <div>{merchant.merchantVendor}</div>
              </div>
            </div>
          ))}
        </div>
        <WhiteBorder />
        <div>
          <div className="playfair-display" style={{ marginBottom: "16px" }}>
            Merchant Gateway Route
          </div>
          <Table dataSource={data} columns={columns} loading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default MerchantManagement;
