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
          <Form.Item label="DC Visa" name="DC Visa">
            <Input
              placeholder="Enter DC Visa Rate"
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value
                  .replace(/[^0-9.]/g, "")
                  .replace(/^(\d*\.\d*).*$/, "$1");
              }}
            />
          </Form.Item>

          <Form.Item label="CC Visa" name="CC Visa">
            <Input
              placeholder="Enter CC Visa Rate"
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value
                  .replace(/[^0-9.]/g, "")
                  .replace(/^(\d*\.\d*).*$/, "$1");
              }}
            />
          </Form.Item>

          <Form.Item label="DC Master" name="DC Master">
            <Input
              placeholder="Enter DC Master Rate"
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value
                  .replace(/[^0-9.]/g, "")
                  .replace(/^(\d*\.\d*).*$/, "$1");
              }}
            />
          </Form.Item>

          <Form.Item label="CC Master" name="CC Master">
            <Input
              placeholder="Enter CC Master Rate"
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value
                  .replace(/[^0-9.]/g, "")
                  .replace(/^(\d*\.\d*).*$/, "$1");
              }}
            />
          </Form.Item>

          <Form.Item label="DC Rupay" name="DC Rupay">
            <Input
              placeholder="Enter DC Rupay Rate"
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value
                  .replace(/[^0-9.]/g, "")
                  .replace(/^(\d*\.\d*).*$/, "$1");
              }}
            />
          </Form.Item>

          <Form.Item label="CC Rupay" name="CC Rupay">
            <Input
              placeholder="Enter CC Rupay Rate"
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value
                  .replace(/[^0-9.]/g, "")
                  .replace(/^(\d*\.\d*).*$/, "$1");
              }}
            />
          </Form.Item>

          <Form.Item label="AMEX" name="AMEX">
            <Input
              placeholder="Enter AMEX Rate"
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value
                  .replace(/[^0-9.]/g, "")
                  .replace(/^(\d*\.\d*).*$/, "$1");
              }}
            />
          </Form.Item>

          <Form.Item label="UPI" name="UPI">
            <Input
              placeholder="Enter UPI Rate"
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
          <Form.Item label="SBI" name="SBI">
            <Input
              placeholder="Enter SBI Rate"
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value
                  .replace(/[^0-9.]/g, "")
                  .replace(/^(\d*\.\d*).*$/, "$1");
              }}
            />
          </Form.Item>

          <Form.Item label="HDFC" name="HDFC">
            <Input
              placeholder="Enter HDFC Rate"
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value
                  .replace(/[^0-9.]/g, "")
                  .replace(/^(\d*\.\d*).*$/, "$1");
              }}
            />
          </Form.Item>

          <Form.Item label="AXIS" name="AXIS">
            <Input
              placeholder="Enter AXIS Rate"
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value
                  .replace(/[^0-9.]/g, "")
                  .replace(/^(\d*\.\d*).*$/, "$1");
              }}
            />
          </Form.Item>

          <Form.Item label="ICICI" name="ICICI">
            <Input
              placeholder="Enter ICICI Rate"
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value
                  .replace(/[^0-9.]/g, "")
                  .replace(/^(\d*\.\d*).*$/, "$1");
              }}
            />
          </Form.Item>

          <Form.Item label="Yes/Kotak" name="Yes/Kotak">
            <Input
              placeholder="Enter Yes/Kotak Rate"
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value
                  .replace(/[^0-9.]/g, "")
                  .replace(/^(\d*\.\d*).*$/, "$1");
              }}
            />
          </Form.Item>

          <Form.Item label="Others" name="Others">
            <Input
              placeholder="Enter Others Rate"
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value
                  .replace(/[^0-9.]/g, "")
                  .replace(/^(\d*\.\d*).*$/, "$1");
              }}
            />
          </Form.Item>

          <Form.Item label="Wallet" name="Wallet">
            <Input
              placeholder="Enter Wallet Rate"
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value
                  .replace(/[^0-9.]/g, "")
                  .replace(/^(\d*\.\d*).*$/, "$1");
              }}
            />
          </Form.Item>

          <Form.Item label="Debit/ATM PIN" name="Debit/ATM PIN">
            <Input
              placeholder="Enter Debit/ATM PIN Rate"
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value
                  .replace(/[^0-9.]/g, "")
                  .replace(/^(\d*\.\d*).*$/, "$1");
              }}
            />
          </Form.Item>

          <Form.Item label="QR Code" name="QR Code">
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
          name="Merchant Charges"
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
