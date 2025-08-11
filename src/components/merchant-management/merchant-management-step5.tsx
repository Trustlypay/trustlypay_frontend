import { App, Button, Form, Input, Radio } from "antd";
import MerchantSteps from "../common/merchant-steps";
import WhiteBorder from "../common/white-border";
import { routeMapMini } from "../../route-map";
import { useNavigate } from "react-router-dom";
import { StepBackwardOutlined, StepForwardOutlined } from "@ant-design/icons";

const MerchantManagementStep5 = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { message } = App.useApp();

  const onFinish = () => {
    void form.validateFields().then(() => {
      message.success("Saved and proceed to next step");
      navigate(`${routeMapMini.merchantManagementStep6}?step=6`);
      console.log(form.getFieldsValue());
    });
  };

  const onFinishFailed = (err: any) => {
    console.log(err);
    navigate(`${routeMapMini.merchantManagementStep6}?step=6`);
    message.error("Submit failed!");
  };

  return (
    <div className="main scrollbar" style={{ alignItems: "center" }}>
      <MerchantSteps />
      <div className="playfair-display-24">Pay-Out Charges</div>
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
        <div>
          <Form.Item
            label="Price Type"
            name="pricetype"
            layout="horizontal"
            labelCol={{ span: 10 }}
          >
            <Radio.Group value="inline">
              <Radio value="Percentage">Percentage</Radio>
              <Radio value="Flat">Flat</Radio>
            </Radio.Group>
          </Form.Item>
          <div className="form-grid-2">
            <Form.Item label="Volume Count" name="volumeCount">
              <Input
                placeholder="Enter Volume Count Rate"
                onInput={(e) => {
                  e.currentTarget.value = e.currentTarget.value
                    .replace(/[^0-9.]/g, "")
                    .replace(/^(\d*\.\d*).*$/, "$1");
                }}
              />
            </Form.Item>
          </div>
          <div className="form-grid-2">
            <Form.Item label="Min Range" name="minRange">
              <Input
                placeholder="Enter Min Range Rate"
                onInput={(e) => {
                  e.currentTarget.value = e.currentTarget.value
                    .replace(/[^0-9.]/g, "")
                    .replace(/^(\d*\.\d*).*$/, "$1");
                }}
              />
            </Form.Item>

            <Form.Item label="Max Range" name="maxRange">
              <Input
                placeholder="Enter Max Range Rate"
                onInput={(e) => {
                  e.currentTarget.value = e.currentTarget.value
                    .replace(/[^0-9.]/g, "")
                    .replace(/^(\d*\.\d*).*$/, "$1");
                }}
              />
            </Form.Item>

            <Form.Item label="IMPS" name="imps">
              <Input
                placeholder="Enter IMPS Rate"
                onInput={(e) => {
                  e.currentTarget.value = e.currentTarget.value
                    .replace(/[^0-9.]/g, "")
                    .replace(/^(\d*\.\d*).*$/, "$1");
                }}
              />
            </Form.Item>

            <Form.Item label="NEFT" name="neft">
              <Input
                placeholder="Enter NEFT Rate"
                onInput={(e) => {
                  e.currentTarget.value = e.currentTarget.value
                    .replace(/[^0-9.]/g, "")
                    .replace(/^(\d*\.\d*).*$/, "$1");
                }}
              />
            </Form.Item>

            <Form.Item label="RTGS" name="rtgs">
              <Input
                placeholder="Enter RTGS Rate"
                onInput={(e) => {
                  e.currentTarget.value = e.currentTarget.value
                    .replace(/[^0-9.]/g, "")
                    .replace(/^(\d*\.\d*).*$/, "$1");
                }}
              />
            </Form.Item>

            <Form.Item label="UPI" name="upi">
              <Input
                placeholder="Enter UPI Rate"
                onInput={(e) => {
                  e.currentTarget.value = e.currentTarget.value
                    .replace(/[^0-9.]/g, "")
                    .replace(/^(\d*\.\d*).*$/, "$1");
                }}
              />
            </Form.Item>

            <Form.Item label="Paytm" name="paytm">
              <Input
                placeholder="Enter Paytm Rate"
                onInput={(e) => {
                  e.currentTarget.value = e.currentTarget.value
                    .replace(/[^0-9.]/g, "")
                    .replace(/^(\d*\.\d*).*$/, "$1");
                }}
              />
            </Form.Item>

            <Form.Item label="Amazon" name="amazon">
              <Input
                placeholder="Enter Amazon Rate"
                onInput={(e) => {
                  e.currentTarget.value = e.currentTarget.value
                    .replace(/[^0-9.]/g, "")
                    .replace(/^(\d*\.\d*).*$/, "$1");
                }}
              />
            </Form.Item>
          </div>
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
              navigate(`${routeMapMini.merchantManagementStep4}?step=4`)
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

export default MerchantManagementStep5;
