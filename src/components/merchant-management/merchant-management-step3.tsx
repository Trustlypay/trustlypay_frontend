import { App, Button, Form, Input, Radio } from "antd";
import MerchantSteps from "../common/merchant-steps";
import WhiteBorder from "../common/white-border";
import { routeMapMini } from "../../route-map";
import { useNavigate } from "react-router-dom";
import { StepBackwardOutlined, StepForwardOutlined } from "@ant-design/icons";

const MerchantManagementStep3 = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { message } = App.useApp();

  const onFinish = () => {
    void form.validateFields().then(() => {
      message.success("Saved and proceed to next step");
      navigate(`${routeMapMini.merchantManagementStep4}?step=4`);
      console.log(form.getFieldsValue());
    });
  };

  const onFinishFailed = (err: any) => {
    console.log(err);
    navigate(`${routeMapMini.merchantManagementStep4}?step=4`);
    message.error("Submit failed!");
  };

  return (
    <div className="main scrollbar" style={{ alignItems: "center" }}>
      <MerchantSteps />
      <div className="playfair-display-24">Merchant Charges</div>
      <WhiteBorder />
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
        <div className="manrope-24">Pay-In Charges</div>
        <div className="form-grid-2">
          <Form.Item label="DC visa" name="dcvisa">
            <Input
              placeholder="Enter DC visa Rate"
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value
                  .replace(/[^0-9.]/g, "")
                  .replace(/^(\d*\.\d*).*$/, "$1");
              }}
            />
          </Form.Item>

          <Form.Item label="CC visa" name="ccvisa">
            <Input
              placeholder="Enter CC visa Rate"
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value
                  .replace(/[^0-9.]/g, "")
                  .replace(/^(\d*\.\d*).*$/, "$1");
              }}
            />
          </Form.Item>

          <Form.Item label="DC Master" name="dcmaster">
            <Input
              placeholder="Enter DC Master Rate"
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value
                  .replace(/[^0-9.]/g, "")
                  .replace(/^(\d*\.\d*).*$/, "$1");
              }}
            />
          </Form.Item>

          <Form.Item label="CC Master" name="ccmaster">
            <Input
              placeholder="Enter CC Master Rate"
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value
                  .replace(/[^0-9.]/g, "")
                  .replace(/^(\d*\.\d*).*$/, "$1");
              }}
            />
          </Form.Item>

          <Form.Item label="DC Rupay" name="dcrupay">
            <Input
              placeholder="Enter DC Rupay Rate"
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value
                  .replace(/[^0-9.]/g, "")
                  .replace(/^(\d*\.\d*).*$/, "$1");
              }}
            />
          </Form.Item>

          <Form.Item label="CC Rupay" name="ccrupay">
            <Input
              placeholder="Enter CC Rupay Rate"
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value
                  .replace(/[^0-9.]/g, "")
                  .replace(/^(\d*\.\d*).*$/, "$1");
              }}
            />
          </Form.Item>

          <Form.Item label="AMEX" name="amex">
            <Input
              placeholder="Enter Amex Rate"
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value
                  .replace(/[^0-9.]/g, "")
                  .replace(/^(\d*\.\d*).*$/, "$1");
              }}
            />
          </Form.Item>

          <Form.Item label="UPI" name="upi">
            <Input
              placeholder="Enter CC Rupay Rate"
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value
                  .replace(/[^0-9.]/g, "")
                  .replace(/^(\d*\.\d*).*$/, "$1");
              }}
            />
          </Form.Item>
        </div>

        <div className="manrope-24">Net Banking</div>
        <div className="form-grid-2">
          <Form.Item label="SBI" name="sbi">
            <Input
              placeholder="Enter SBI Rate"
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value
                  .replace(/[^0-9.]/g, "")
                  .replace(/^(\d*\.\d*).*$/, "$1");
              }}
            />
          </Form.Item>

          <Form.Item label="HDFC" name="hdfc">
            <Input
              placeholder="Enter HDFC Rate"
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value
                  .replace(/[^0-9.]/g, "")
                  .replace(/^(\d*\.\d*).*$/, "$1");
              }}
            />
          </Form.Item>

          <Form.Item label="AXIS" name="axis">
            <Input
              placeholder="Enter AXIS Rate"
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value
                  .replace(/[^0-9.]/g, "")
                  .replace(/^(\d*\.\d*).*$/, "$1");
              }}
            />
          </Form.Item>

          <Form.Item label="ICICI" name="icici">
            <Input
              placeholder="Enter ICICI Rate"
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value
                  .replace(/[^0-9.]/g, "")
                  .replace(/^(\d*\.\d*).*$/, "$1");
              }}
            />
          </Form.Item>

          <Form.Item label="Yes/Kotak" name="yes/kotak">
            <Input
              placeholder="Enter Yes/Kotak Rate"
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value
                  .replace(/[^0-9.]/g, "")
                  .replace(/^(\d*\.\d*).*$/, "$1");
              }}
            />
          </Form.Item>

          <Form.Item label="Others" name="others">
            <Input
              placeholder="Enter Others Rate"
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value
                  .replace(/[^0-9.]/g, "")
                  .replace(/^(\d*\.\d*).*$/, "$1");
              }}
            />
          </Form.Item>

          <Form.Item label="Wallet" name="wallet">
            <Input
              placeholder="Enter Wallet Rate"
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value
                  .replace(/[^0-9.]/g, "")
                  .replace(/^(\d*\.\d*).*$/, "$1");
              }}
            />
          </Form.Item>

          <Form.Item label="Debit/ATM PIN" name="bebit/ATMPIN">
            <Input
              placeholder="Enter Debit/ATM PIN Rate"
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value
                  .replace(/[^0-9.]/g, "")
                  .replace(/^(\d*\.\d*).*$/, "$1");
              }}
            />
          </Form.Item>

          <Form.Item label="QR Code" name="qrcode">
            <Input
              placeholder="Enter QR Code Rate"
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value
                  .replace(/[^0-9.]/g, "")
                  .replace(/^(\d*\.\d*).*$/, "$1");
              }}
            />
          </Form.Item>
        </div>

        <Form.Item
          label="Merchant Charges"
          name="merchantCharges"
          layout="horizontal"
        >
          <Radio.Group value="inline">
            <Radio value="Enable">Enable</Radio>
            <Radio value="Disable">Disable</Radio>
          </Radio.Group>
        </Form.Item>

        <div
          style={{
            display: "flex",
            gap: "24px",
            justifyContent: "center",
          }}
        >
          <Button
            icon={<StepBackwardOutlined />}
            onClick={() =>
              navigate(`${routeMapMini.merchantManagementStep2}?step=2`)
            }
          >
            Previous
          </Button>
          <Button
            htmlType="submit"
            type="primary"
            icon={<StepForwardOutlined />}
            iconPosition="end"
          >
            Next
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default MerchantManagementStep3;
