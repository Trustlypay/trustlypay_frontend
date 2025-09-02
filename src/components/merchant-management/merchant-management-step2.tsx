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

const MerchantManagementStep2 = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { message } = App.useApp();

  const beforeUpload = () => false;

  const rules = [
    {
      required: true,
      message: "Please upload a file!",
    },
    {
      validator(_: any, fileList: string | any[]) {
        if (!fileList || fileList.length === 0) {
          return Promise.resolve();
        }

        for (const file of fileList) {
          const isAllowed =
            file.type.startsWith("image/") || file.type === "application/pdf";

          if (!isAllowed) {
            return Promise.reject(
              new Error(`${file.name} is not a valid file type`)
            );
          }

          const isLt5M = file.size / 1024 / 1024 < 5;
          if (!isLt5M) {
            return Promise.reject(
              new Error(`${file.name} must be smaller than 5MB`)
            );
          }
        }

        return Promise.resolve();
      },
    },
  ];

  const onFinish = () => {
    void form.validateFields().then(() => {
      navigate(`${routeMapMini.merchantManagementStep3}?step=3`);
      console.log("companyPANCard", form.getFieldValue("companyPANCard")[0]);
      console.log("companyGST", form.getFieldValue("companyGST")[0]);

      console.log("bankStatement", form.getFieldValue("bankStatement")[0]);
      console.log("cancelledCheque", form.getFieldValue("cancelledCheque")[0]);

      console.log(
        "certificateofIncorporation",
        form.getFieldValue("certificateofIncorporation")[0]
      );
      console.log("moa", form.getFieldValue("moa")[0]);

      console.log("aoa", form.getFieldValue("aoa")[0]);
      console.log("authSignPANCard", form.getFieldValue("authSignPANCard")[0]);

      console.log(
        "authSignAadharCard",
        form.getFieldValue("authSignAadharCard")[0]
      );
      message.success("Saved and proceed to next step");
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
      <div style={{ color: "#dc4446" }}>
        Note:Pdfs & Images are only allowed up to 5mb in size
      </div>
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
            rules={rules}
          >
            <Upload
              beforeUpload={beforeUpload}
              accept="image/*,.pdf"
              maxCount={1}
            >
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item
            name="companyGST"
            label="Company GST"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            rules={rules}
          >
            <Upload
              beforeUpload={beforeUpload}
              accept="image/*,.pdf"
              maxCount={1}
            >
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item
            name="bankStatement"
            label="Bank Statement"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            rules={rules}
          >
            <Upload
              beforeUpload={beforeUpload}
              accept="image/*,.pdf"
              maxCount={1}
            >
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item
            name="cancelledCheque"
            label="Cancelled Cheque"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            rules={rules}
          >
            <Upload
              beforeUpload={beforeUpload}
              accept="image/*,.pdf"
              maxCount={1}
            >
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item
            name="certificateofIncorporation"
            label="Certificate of Incorporation"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            rules={rules}
          >
            <Upload
              beforeUpload={beforeUpload}
              accept="image/*,.pdf"
              maxCount={1}
            >
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item
            name="moa"
            label="MOA"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            rules={rules}
          >
            <Upload
              beforeUpload={beforeUpload}
              accept="image/*,.pdf"
              maxCount={1}
            >
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item
            name="aoa"
            label="AOA"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            rules={rules}
          >
            <Upload
              beforeUpload={beforeUpload}
              accept="image/*,.pdf"
              maxCount={1}
            >
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item
            name="authSignPANCard"
            label="Auth Sign PAN Card"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            rules={rules}
          >
            <Upload
              beforeUpload={beforeUpload}
              accept="image/*,.pdf"
              maxCount={1}
            >
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item
            name="authSignAadharCard"
            label="Auth Sign AADHAR Card"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            rules={rules}
          >
            <Upload
              beforeUpload={beforeUpload}
              accept="image/*,.pdf"
              maxCount={1}
            >
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

export default MerchantManagementStep2;
