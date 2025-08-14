import { App, Button, Checkbox, Form, Select } from "antd";
import MainContentHeader from "../common/main-content-header";
import { useNavigate } from "react-router-dom";
import { routeMapMini } from "../../route-map";

const MerchantRoutingConfig = () => {
  const navigate = useNavigate();
  const { message } = App.useApp();
  const [form] = Form.useForm();

  const onFinish = () => {
    void form.validateFields().then(() => {
      message.success("Saved");
      navigate(routeMapMini.merchantManagement);
      console.log(form.getFieldsValue());
    });
  };

  const onFinishFailed = (err: any) => {
    console.log(err);
  };

  return (
    <div className="main scrollbar">
      <MainContentHeader title="PESHOT INFO SYSTEM" />
      <Form
        style={{
          margin: "0px auto",
          minWidth: "600px",
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
        form={form}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
          }
        }}
      >
        <div>
          <Form.Item
            label="Merchant Services"
            name="Merchant Services"
            layout="horizontal"
            className="display-flex-justify-content-center"
          >
            <Checkbox.Group options={["PayIn", "PayOut", "PennyDrop"]} />
          </Form.Item>
          <div className="manrope-24">Pay In Routing Configuration</div>
          <div className="form-grid-2">
            <Form.Item label="Credit Card" name="Credit Card">
              <Select placeholder="Select Credit Card"></Select>
            </Form.Item>

            <Form.Item label="Dedit Card" name="Dedit Card">
              <Select placeholder="Select Dedit Card"></Select>
            </Form.Item>

            <Form.Item label="Net Banking" name="Net Banking">
              <Select placeholder="Select Net Banking"></Select>
            </Form.Item>

            <Form.Item label="UPI" name="UPI">
              <Select placeholder="Select UPI"></Select>
            </Form.Item>

            <Form.Item label="QR Code" name="QR Code">
              <Select placeholder="Select QR Code"></Select>
            </Form.Item>

            <Form.Item label="Wallet" name="Wallet">
              <Select placeholder="Select Wallet"></Select>
            </Form.Item>
          </div>
          <div className="manrope-24">Pay Out Routing Configuration</div>
          <div className="form-grid-2">
            <Form.Item label="IMPS" name="IMPS">
              <Select placeholder="Select IMPS"></Select>
            </Form.Item>

            <Form.Item label="NEFT" name="NEFT">
              <Select placeholder="Select NEFT"></Select>
            </Form.Item>

            <Form.Item label="RTGS" name="RTGS">
              <Select placeholder="Select RTGS"></Select>
            </Form.Item>

            <Form.Item label="UPI" name="UPI">
              <Select placeholder="Select UPI"></Select>
            </Form.Item>

            <Form.Item label="Paytm" name="Paytm">
              <Select placeholder="Select Paytm"></Select>
            </Form.Item>

            <Form.Item label="Amazon" name="Amazon">
              <Select placeholder="Select Amazon"></Select>
            </Form.Item>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button htmlType="submit" type="primary">
              Save Changes
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default MerchantRoutingConfig;
