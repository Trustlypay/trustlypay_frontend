import { App, Button, Form, Upload } from "antd";
import { useNavigate } from "react-router-dom";
import { routeMapMini } from "../../route-map";
import {
  StepBackwardOutlined,
  StepForwardOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import WhiteBorder from "../common/white-border";
import MerchantSteps from "../common/merchant-steps";

const MerchantManagementStep2Upload = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { message } = App.useApp();

  const onFinish = () => {
    void form.validateFields().then(() => {
      message.success("Saved and proceed to next step");
      navigate(`${routeMapMini.merchantManagementStep3}?step=3`);
      console.log(form.getFieldsValue());
    });
  };

  const onFinishFailed = (err: any) => {
    console.log(err);
    navigate(`${routeMapMini.merchantManagementStep3}?step=3`);
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
      <MerchantSteps />
      <div className="playfair-display-24"> Merchant Documents</div>
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
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload name="logo" action="/upload.do" maxCount={1}>
              <Button icon={<UploadOutlined />}>Upload Company PAN Card</Button>
            </Upload>
          </Form.Item>

          <Form.Item
            name="companyGST"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload name="logo" action="/upload.do" maxCount={1}>
              <Button icon={<UploadOutlined />}>Upload Company GST</Button>
            </Upload>
          </Form.Item>

          <Form.Item
            name="bankStatement"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload name="logo" action="/upload.do" maxCount={1}>
              <Button icon={<UploadOutlined />}>Upload Bank Statement</Button>
            </Upload>
          </Form.Item>

          <Form.Item
            name="cancelledCheque"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload name="logo" action="/upload.do" maxCount={1}>
              <Button icon={<UploadOutlined />}>Upload Cancelled Cheque</Button>
            </Upload>
          </Form.Item>

          <Form.Item
            name="certificateofIncorporation"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload name="logo" action="/upload.do" maxCount={1}>
              <Button icon={<UploadOutlined />}>
                Upload Certification of Incorporation
              </Button>
            </Upload>
          </Form.Item>

          <Form.Item
            name="moa"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload name="logo" action="/upload.do" maxCount={1}>
              <Button icon={<UploadOutlined />}>Upload MOA</Button>
            </Upload>
          </Form.Item>

          <Form.Item
            name="aoa"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload name="logo" action="/upload.do" maxCount={1}>
              <Button icon={<UploadOutlined />}>Upload AOA</Button>
            </Upload>
          </Form.Item>

          <Form.Item
            name="authSignPANCard"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload name="logo" action="/upload.do" maxCount={1}>
              <Button icon={<UploadOutlined />}>
                Upload Auth Sign PAN Card
              </Button>
            </Upload>
          </Form.Item>

          <Form.Item
            name="authSignAadharCard"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload name="logo" action="/upload.do" maxCount={1}>
              <Button icon={<UploadOutlined />}>
                Upload Auth Sign AADHAR Card
              </Button>
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
            onClick={() =>
              navigate(`${routeMapMini.merchantManagementStep1}?step=1`)
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

export default MerchantManagementStep2Upload;
