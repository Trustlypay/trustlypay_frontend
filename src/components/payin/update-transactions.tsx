import "./detailed-transactions.css";
import MainContentHeader from "../common/main-content-header";
import { Radio } from "antd";
import type { CheckboxGroupProps } from "antd/es/checkbox";
import { useState } from "react";
import UploadFile from "./upload-file";
import UpdateTransactionsModal from "./update-transactions-modal";

const options: CheckboxGroupProps<string>["options"] = [
  { label: "Mark Success", value: "Mark Success" },
  { label: "Fetch Status", value: "Fetch Status" },
];

const UpdateTransactions = () => {
  const [value, setValue] = useState("Mark Success");
  return (
    <div className="main">
      <MainContentHeader title="Update Transactions" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "36px",
          alignItems: "center",
          margin: "0px auto",
        }}
      >
        <div>
          Note :Download this
          <u style={{ color: "var(--primary-color)" }}> sample file </u> for
          your reference
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
          <UploadFile />
        </div>
        <UpdateTransactionsModal />
      </div>
    </div>
  );
};

export default UpdateTransactions;
