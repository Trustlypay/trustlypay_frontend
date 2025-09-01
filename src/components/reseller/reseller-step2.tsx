import ResellerSteps from "../common/reseller-steps";
import WhiteBorder from "../common/white-border";
import { App, Form, Button, Upload } from "antd";
import { useNavigate } from "react-router-dom";
import { routeMapMini } from "../../route-map";
import {
  StepBackwardOutlined,
  StepForwardOutlined,
  UploadOutlined,
} from "@ant-design/icons";

const ResellerStep2 = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { message } = App.useApp();

  const onFinish = () => {
    void form.validateFields().then(() => {
      message.success("Saved and proceed to next step");
      navigate(`${routeMapMini.resellerStep3}?step=3`);
      console.log(form.getFieldsValue());
    });
  };

  const onFinishFailed = (err: any) => {
    console.log(err);
    navigate(`${routeMapMini.resellerStep3}?step=3`);
    message.error("Submit failed!");
  };

  const normFile = (e: any) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <div className="main scrollbar" style={{ alignItems: "center" }}>
      <ResellerSteps />
      <div className="playfair-display-24"> Reseller Documents</div>
      <WhiteBorder />
      <Form
        style={{
          margin: "0px auto",
          minWidth: "800px",
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
        <div className="form-grid-2">
          <Form.Item
            name="companyPANCard"
            label="Company PAN Card"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload name="logo" action="/upload.do" maxCount={1}>
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item
            name="companyGST"
            label="Company GST"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload name="logo" action="/upload.do" maxCount={1}>
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item
            name="bankStatement"
            label="Bank Statement"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload name="logo" action="/upload.do" maxCount={1}>
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item
            name="cancelledCheque"
            label="Cancelled Cheque"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload name="logo" action="/upload.do" maxCount={1}>
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item
            name="certificateofIncorporation"
            label="Certificate of Incorporation"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload name="logo" action="/upload.do" maxCount={1}>
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item
            name="moa"
            label="MOA"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload name="logo" action="/upload.do" maxCount={1}>
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item
            name="aoa"
            label="AOA"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload name="logo" action="/upload.do" maxCount={1}>
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item
            name="authSignPANCard"
            label="Auth Sign PAN Card"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload name="logo" action="/upload.do" maxCount={1}>
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item
            name="authSignAadharCard"
            label="Auth Sign AADHAR Card"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload name="logo" action="/upload.do" maxCount={1}>
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
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
            onClick={() => navigate(`${routeMapMini.resellerStep1}?step=1`)}
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

export default ResellerStep2;
