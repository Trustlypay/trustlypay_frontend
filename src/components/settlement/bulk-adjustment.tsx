import { Button, Radio } from "antd";
import MainContentHeader from "../common/main-content-header";
import type { CheckboxGroupProps } from "antd/es/checkbox";
import { useState } from "react";
import RangePicker from "../common/range-picker";
import SelectMerchant from "../common/select-merchant";

const options: CheckboxGroupProps<string>["options"] = [
  { label: "Settlement", value: "Settlement" },
  { label: "Chargeback", value: "Chargeback" },
  { label: "Refund", value: "Refund" },
];

const BulkAdjustment = () => {
  const [value, setValue] = useState("Settlement");

  return (
    <div className="main">
      <MainContentHeader title="Bulk Adjustment" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "36px",
          textAlign: "center",
          margin: "0px auto",
        }}
      >
        <div>
          Note :Download this
          <u style={{ color: "var(--primary-color)" }}> sample file </u> for
          chargesbacks and refunds
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <Radio.Group
            value={value}
            options={options}
            defaultValue="Mark Success"
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        </div>
        <div style={{ display: "flex", gap: "22px" }}>
          <RangePicker /> <SelectMerchant />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button type="primary">Adjust</Button>
        </div>
      </div>
    </div>
  );
};

export default BulkAdjustment;
