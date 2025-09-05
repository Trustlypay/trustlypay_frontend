import { Button, Select } from "antd";
import RangePicker from "../common/range-picker";
import SelectMerchant from "../common/select-merchant";
import Status from "../common/status";

const Reports = () => {
  return (
    <div className="main scrollbar">
      <div className="section-header">
        <div className="playfair-display">Reports</div>
        <div
          style={{
            display: "flex",
            gap: "16px",
            flexDirection: "column",
          }}
        >
          <div className="playfair-display-font-size-24">Pay-In</div>
          <div
            style={{
              display: "flex",
              gap: "16px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "8px",
                alignItems: "center",
              }}
            >
              <div>Merchant </div> <SelectMerchant />
            </div>
            <RangePicker />
            <div
              style={{
                display: "flex",
                gap: "8px",
                alignItems: "center",
              }}
            >
              <div>Status </div> <Status />
            </div>
            <Button type="primary">Download</Button>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "16px",
            flexDirection: "column",
          }}
        >
          <div className="playfair-display-font-size-24">Pay-Out</div>
          <div
            style={{
              display: "flex",
              gap: "16px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "8px",
                alignItems: "center",
              }}
            >
              <div>Merchant </div> <SelectMerchant />
            </div>
            <RangePicker />
            <div
              style={{
                display: "flex",
                gap: "8px",
                alignItems: "center",
              }}
            >
              <div>Status </div> <Status />
            </div>
            <Button type="primary">Download</Button>
          </div>
        </div>

        <div style={{ display: "flex", gap: "16px", flexDirection: "column" }}>
          <div className="playfair-display-font-size-24">Settlements</div>
          <div
            style={{
              display: "flex",
              gap: "16px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "8px",
                alignItems: "center",
              }}
            >
              <div>Merchant </div> <SelectMerchant />
            </div>
            <RangePicker />
            <div
              style={{
                display: "flex",
                gap: "8px",
                alignItems: "center",
              }}
            >
              <div>Status </div> <Status />
            </div>
            <Button type="primary">Download</Button>
          </div>
        </div>

        <div style={{ display: "flex", gap: "16px", flexDirection: "column" }}>
          <div className="playfair-display-font-size-24">Chargebacks</div>
          <div
            style={{
              display: "flex",
              gap: "16px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "8px",
                alignItems: "center",
              }}
            >
              <div>Merchant </div> <SelectMerchant />
            </div>
            <RangePicker />
            <Button type="primary">Download</Button>
          </div>
        </div>

        <div style={{ display: "flex", gap: "16px", flexDirection: "column" }}>
          <div className="playfair-display-font-size-24">Refunds</div>
          <div
            style={{
              display: "flex",
              gap: "16px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "8px",
                alignItems: "center",
              }}
            >
              <div>Merchant </div> <SelectMerchant />
            </div>
            <RangePicker />
            <Button type="primary">Download</Button>
          </div>
        </div>

        <div style={{ display: "flex", gap: "16px", flexDirection: "column" }}>
          <div className="playfair-display-font-size-24">
            User Action Trails
          </div>
          <div
            style={{
              display: "flex",
              gap: "16px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "8px",
                alignItems: "center",
              }}
            >
              <div>Merchant </div> <SelectMerchant />
            </div>
            <RangePicker />
            <div
              style={{
                display: "flex",
                gap: "8px",
                alignItems: "center",
              }}
            >
              <div>Actions </div> <Select style={{ width: "180px" }}></Select>
            </div>
            <Button type="primary">Download</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
