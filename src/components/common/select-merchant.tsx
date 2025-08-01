import { Select } from "antd";

const SelectMerchant = () => {
  return (
    <Select style={{ width: "180px" }} placeholder="Select Merchant">
      <Select.Option value="Peshot Info System">
        Peshot Info System
      </Select.Option>
      <Select.Option value="TrustlyPay">TrustlyPay</Select.Option>
      <Select.Option value="m3">m3</Select.Option>
      <Select.Option value="m4">m4</Select.Option>
    </Select>
  );
};

export default SelectMerchant;
