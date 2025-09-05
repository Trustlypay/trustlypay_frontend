import { Select } from "antd";
import { StatusNames } from "../payin/enums/status-names.enum";

const Status = () => {
  return (
    <Select
      style={{ width: "180px" }}
      placeholder="Select Merchant"
      defaultValue={"All"}
    >
      <Select.Option value="All">All</Select.Option>
      {Object.entries(StatusNames).map(([key, value]) => (
        <Select.Option value={value}>{key}</Select.Option>
      ))}
    </Select>
  );
};

export default Status;
