import "./dashboard.css";
import { DatePicker, Select } from "antd";
import "./sidebar.css";
import { capitalizeFirstLetter } from "../../utils/first-letter-cap";

const array = [
  {
    status: "success",
    totalAmount: 1225556,
    totalCount: 1,
    bgcolor: "linear-gradient(180deg, #38EF7D 0%, #11998E 100%)",
    src: "/success-flash.svg",
  },
  {
    status: "failed",
    totalAmount: 10000,
    totalCount: 1,
    bgcolor: "linear-gradient(180deg, #F5AF19 0%, #F12711 100%)",
    src: "/failed-flash.svg",
  },
  {
    status: "pending",
    totalAmount: 760000,
    totalCount: 76,
    bgcolor: "linear-gradient(180deg, #EDDE5D 0%, #F09819 100%)",
    src: "/pending-flash.svg",
  },
  {
    status: "total volume",
    totalAmount: 780000,
    totalCount: 78,
    bgcolor: "linear-gradient(180deg, #56CCF2 0%, #2F80ED 100%)",
    src: "/total-volume-flash.svg",
  },
];

const Dashboard = () => {
  return (
    <div className="main">
      <div className="welcome playfair-display">I Welcome, Kiran</div>
      <div className="pay-in">
        <div className="pay-in-overview-section">
          <div className="pay-in-overview playfair-display">
            Pay In Overview
          </div>
          <div style={{ display: "flex", gap: "15px" }}>
            <DatePicker.RangePicker />
            <Select style={{ width: "120px" }} defaultValue={"m1"}>
              <Select.Option value="m1">m1</Select.Option>
              <Select.Option value="m2">m2</Select.Option>
              <Select.Option value="m3">m3</Select.Option>
              <Select.Option value="m4">m4</Select.Option>
            </Select>
            <button className="update-btn">update</button>
          </div>
        </div>
        <section className="cards-section">
          {array.map((item) => (
            <div
              className="transaction-details-card"
              style={{
                background: item.bgcolor,
              }}
            >
              <div className="flex-gap-8px">
                <img src={item.src} />
                <div className="playfair-display" style={{ fontSize: "32px" }}>
                  {capitalizeFirstLetter(item.status)}
                </div>
              </div>
              <div>
                <div className="flex-gap-4px">
                  <img src="/rupee-symbol.svg" />
                  <span className="manrope" style={{ fontSize: "24px" }}>
                    {item.totalAmount ?? 0}
                  </span>
                </div>
                <div className="flex-gap-4px">
                  {item.totalCount ?? 0} <span>Transactions</span>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
