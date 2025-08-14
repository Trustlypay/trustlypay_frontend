import { App, Button, Checkbox, Form, Select } from "antd";
import MerchantSteps from "../common/merchant-steps";
import WhiteBorder from "../common/white-border";
import { routeMapMini } from "../../route-map";
import { useNavigate } from "react-router-dom";
import { CheckOutlined, StepBackwardOutlined } from "@ant-design/icons";

const MerchantManagementStep6 = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { message } = App.useApp();

  const onFinish = () => {
    void form.validateFields().then(() => {
      message.success("Saved and proceed to next step");
      navigate(routeMapMini.merchantManagement);
      console.log(form.getFieldsValue());
    });
  };

  const onFinishFailed = (err: any) => {
    console.log(err);
    navigate(routeMapMini.merchantManagement);
    message.error("Submit failed!");
  };

  return (
    <div className="main scrollbar" style={{ alignItems: "center" }}>
      <MerchantSteps />
      <div className="playfair-display-24">Vendor and Route Setup</div>
      <WhiteBorder />
      <Form
        style={{
          margin: "0px auto",
          minWidth: "300px",
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
          <div className="manrope-24">Merchant Configurations</div>
          <Form.Item label="Vendor Configuration" name="vendorConfiguration">
            <Select placeholder="Select Vendor Configuration"></Select>
          </Form.Item>

          <Form.Item label="UPI Gateway Route" name="UPI Gateway Route">
            <Select placeholder="Select UPI Gateway Route"></Select>
          </Form.Item>

          <div className="manrope-24">Live Status</div>

          <Form.Item label="Merchant Live" name="merchantLive">
            <Select placeholder="Select Merchant Live"></Select>
          </Form.Item>
        </div>
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
              navigate(`${routeMapMini.merchantManagementStep5}?step=5`)
            }
          >
            Previous
          </Button>
          <Button
            htmlType="submit"
            type="primary"
            icon={<CheckOutlined />}
            iconPosition="end"
          >
            Finish
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default MerchantManagementStep6;
