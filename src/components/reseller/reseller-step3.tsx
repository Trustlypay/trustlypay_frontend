import ResellerSteps from "../common/reseller-steps";
import WhiteBorder from "../common/white-border";
import { Select, Form, App, Button } from "antd";
import { routeMapMini } from "../../route-map";
import { useNavigate } from "react-router-dom";
import { StepBackwardOutlined, StepForwardOutlined } from "@ant-design/icons";

const ResellerStep3 = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { message } = App.useApp();

  const onFinish = () => {
    void form.validateFields().then(() => {
      message.success("Saved and proceed to next step");
      navigate(`${routeMapMini.resellerStep4}?step=4`);
      console.log(form.getFieldsValue());
    });
  };

  const onFinishFailed = (err: any) => {
    console.log(err);
    navigate(`${routeMapMini.resellerStep4}?step=4`);
    message.error("Submit failed!");
  };

  return (
    <div className="main scrollbar" style={{ alignItems: "center" }}>
      <ResellerSteps />
      <div className="playfair-display-24">Reseller - Merchant Mapping</div>
      <WhiteBorder />
      <Form
        style={{
          margin: "0px auto",
          minWidth: "400px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
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
        <Form.Item label="Pay In Merchants" name="Pay In Merchants">
          <Select placeholder="Select Pay In Merchants">
            <Select.Option value="Peshot Info System">
              Peshot Info System
            </Select.Option>
            <Select.Option value="TrustlyPay">TrustlyPay</Select.Option>
          </Select>
        </Form.Item>

        <WhiteBorder />

        <Form.Item label="Pay Out Merchants" name="Pay Out Merchants">
          <Select placeholder="Select Pay Out Merchants">
            <Select.Option value="Peshot Info System">
              Peshot Info System
            </Select.Option>
            <Select.Option value="TrustlyPay">TrustlyPay</Select.Option>
          </Select>
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
            onClick={() => navigate(`${routeMapMini.resellerStep2}?step=2`)}
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

export default ResellerStep3;
