import { App, Form, Input, Button } from "antd";
import WhiteBorder from "../common/white-border";
import { StepForwardOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { routeMapMini } from "../../route-map";
import MerchantSteps from "../common/merchant-steps";

const MerchantManagementStep1 = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { message } = App.useApp();

  const onFinish = () => {
    void form.validateFields().then(() => {
      message.success("Saved and proceed to next step");
      navigate(`${routeMapMini.merchantManagementStep2}?step=2`);
      console.log(form.getFieldValue("Business Name"));
      console.log(form.getFieldValue("Business Monthly Expenditure"));
      console.log(form.getFieldValue("Address 1st Line"));
      console.log(form.getFieldValue("Address 2nd Line"));
      console.log(form.getFieldValue("City"));
      console.log(form.getFieldValue("State"));
      console.log(form.getFieldValue("Pincode"));
      console.log(form.getFieldValue("Country"));
      console.log(form.getFieldValue("Business Website"));

      console.log(form.getFieldValue("Business PAN Number"));
      console.log(form.getFieldValue("Business GST Number"));
      console.log(form.getFieldValue("Business Type"));
      console.log(form.getFieldValue("Business Category"));
      console.log(form.getFieldValue("Business Sub Category"));

      console.log(form.getFieldValue("Bank Name"));
      console.log(form.getFieldValue("IFSC Code"));
      console.log(form.getFieldValue("Bank Account Number"));
      console.log(form.getFieldValue("Re-Enter Bank Account Number"));

      console.log(form.getFieldValue("Auth Sign Name"));
      console.log(form.getFieldValue("Auth Sign Contact Number"));
      console.log(form.getFieldValue("Auth Sign PAN Number"));
      console.log(form.getFieldValue("Auth Sign AADHAR Number"));
      console.log(form.getFieldValue("Auth Sign Email ID"));
      console.log(form.getFieldValue("Dashboard Password"));
    });
  };

  const onFinishFailed = (err: any) => {
    console.log(err);
    navigate(`${routeMapMini.merchantManagementStep2}?step=2`);
    message.error("Submit failed!");
  };

  return (
    <div className="main scrollbar" style={{ alignItems: "center" }}>
      <MerchantSteps />
      <div className="playfair-display-24"> Merchant Details</div>
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
        <div className="manrope-24">Basic Details</div>
        <div className="form-grid-2">
          <Form.Item
            label="Business Name"
            name="Business Name"
            validateFirst
            validateTrigger="onSubmit"
            rules={[
              { required: true },
              { required: true, min: 3 },
              { whitespace: true },
            ]}
          >
            <Input placeholder="Enter Business Name" />
          </Form.Item>

          <Form.Item
            label="Business Monthly Expenditure"
            name="Business Monthly Expenditure"
            validateFirst
            validateTrigger="onSubmit"
            rules={[
              { required: true },
              { required: true, min: 3 },
              { whitespace: true },
            ]}
          >
            <Input placeholder="Enter Business Monthly Expenditure" />
          </Form.Item>

          <Form.Item
            label="Address 1st Line"
            name="Address 1st Line"
            validateFirst
            validateTrigger="onSubmit"
            rules={[
              { required: true },
              { required: true, min: 3 },
              { whitespace: true },
            ]}
          >
            <Input placeholder="Enter Address 1st Line" />
          </Form.Item>

          <Form.Item
            label="Address 2nd Line"
            name="Address 2nd Line"
            validateFirst
            validateTrigger="onSubmit"
            rules={[
              { required: true },
              { required: true, min: 3 },
              { whitespace: true },
            ]}
          >
            <Input placeholder="Enter Address 2nd Line" />
          </Form.Item>

          <Form.Item
            label="City"
            name="City"
            validateFirst
            validateTrigger="onSubmit"
            rules={[
              { required: true },
              { required: true, min: 3 },
              { whitespace: true },
            ]}
          >
            <Input placeholder="Enter City" />
          </Form.Item>

          <Form.Item
            label="State"
            name="State"
            validateFirst
            validateTrigger="onSubmit"
            rules={[
              { required: true },
              { required: true, min: 3 },
              { whitespace: true },
            ]}
          >
            <Input placeholder="Enter State" />
          </Form.Item>

          <Form.Item
            label="Pincode"
            name="Pincode"
            validateFirst
            validateTrigger="onSubmit"
            rules={[
              { required: true },
              {
                validator: (_, value) => {
                  if (value.toString().length !== 6) {
                    return Promise.reject("Pincode must be exactly 6 digits");
                  }
                  return Promise.resolve();
                },
              },
              { whitespace: true },
            ]}
          >
            <Input
              placeholder="Enter Pincode"
              maxLength={6}
              onInput={(e) => {
                // optional: remove non-digit chars
                e.currentTarget.value = e.currentTarget.value.replace(
                  /\D/g,
                  ""
                );
              }}
            />
          </Form.Item>

          <Form.Item
            label="Country"
            name="Country"
            validateFirst
            validateTrigger="onSubmit"
            rules={[
              { required: true },
              { required: true, min: 3 },
              { whitespace: true },
            ]}
          >
            <Input placeholder="Enter Country" />
          </Form.Item>

          <Form.Item
            label="Business Website"
            name="Business Website"
            validateFirst
            validateTrigger="onSubmit"
            rules={[
              { required: true },
              { required: true, min: 3 },
              { whitespace: true },
            ]}
          >
            <Input placeholder="Enter Business Website" />
          </Form.Item>
        </div>

        <div className="manrope-24">Business Details</div>
        <div className="form-grid-2">
          <Form.Item
            label="Business PAN Number"
            name="Business PAN Number"
            validateFirst
            validateTrigger="onSubmit"
            rules={[
              { required: true },
              {
                pattern: /^([A-Z]){3}C([A-Z])([0-9]){4}([A-Z]){1}?$/,
                message: "Enter Valid Business PAN Number",
              },
              { whitespace: true },
            ]}
          >
            <Input
              placeholder="Enter Business PAN Number"
              maxLength={10}
              onChange={(e) => {
                const value = e.target.value.toUpperCase();
                form.setFieldsValue({ businessPANNumber: value });
              }}
            />
          </Form.Item>

          <Form.Item
            label="Business GST Number"
            name="Business GST Number"
            validateFirst
            validateTrigger="onSubmit"
            rules={[
              { required: true },
              {
                pattern:
                  /[0-9]{2}[A-Z]{3}[ABCFGHLJPTE]{1}[A-Z]{1}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}/,
                message: "Enter Valid Business GST Number",
              },
              { whitespace: true },
            ]}
          >
            <Input placeholder="Enter Business GST Number" />
          </Form.Item>

          <Form.Item
            label="Business Type"
            name="Business Type"
            validateFirst
            validateTrigger="onSubmit"
            rules={[
              { required: true },
              { required: true, min: 3 },
              { whitespace: true },
            ]}
          >
            <Input placeholder="Enter Business Type" />
          </Form.Item>

          <Form.Item
            label="Business Category"
            name="Business Category"
            validateFirst
            validateTrigger="onSubmit"
            rules={[
              { required: true },
              { required: true, min: 3 },
              { whitespace: true },
            ]}
          >
            <Input placeholder="Enter Business Category" />
          </Form.Item>

          <Form.Item
            label="Business Sub Category"
            name="Business Sub Category"
            validateFirst
            validateTrigger="onSubmit"
            rules={[
              { required: true },
              { required: true, min: 3 },
              { whitespace: true },
            ]}
          >
            <Input placeholder="Enter Business Sub Category" />
          </Form.Item>
        </div>

        <div className="manrope-24">Bank Account Details</div>
        <div className="form-grid-2">
          <Form.Item
            label="Bank Name"
            name="Bank Name"
            validateFirst
            validateTrigger="onSubmit"
            rules={[
              { required: true },
              { required: true, min: 3 },
              { whitespace: true },
            ]}
          >
            <Input placeholder="Enter Bank Name" />
          </Form.Item>

          <Form.Item
            label="IFSC Code"
            name="IFSC Code"
            validateFirst
            validateTrigger="onSubmit"
            rules={[
              { required: true },
              { required: true, min: 3 },
              { whitespace: true },
            ]}
          >
            <Input placeholder="Enter IFSC Code" />
          </Form.Item>

          <Form.Item
            label="Bank Account Number"
            name="Bank Account Number"
            validateFirst
            validateTrigger="onSubmit"
            rules={[
              { required: true },
              { required: true, min: 3 },
              { whitespace: true },
            ]}
          >
            <Input placeholder="Enter Bank Account Number" />
          </Form.Item>

          <Form.Item
            label="Re-Enter Bank Account Number"
            name="Re-Enter Bank Account Number"
            validateFirst
            validateTrigger="onSubmit"
            rules={[
              {
                required: true,
                message: "Please confirm your Bank Account Number.",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("bankAccountNumber") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The Bank Account Number that you entered do not match!"
                    )
                  );
                },
              }),
              { whitespace: true },
            ]}
          >
            <Input.Password placeholder="Re-Enter Bank Account Number" />
          </Form.Item>
        </div>

        <div className="manrope-24">Auth Signatory Details</div>
        <div className="form-grid-2">
          <Form.Item
            label="Auth Sign Name"
            name="Auth Sign Name"
            validateFirst
            validateTrigger="onSubmit"
            rules={[
              { required: true },
              { required: true, min: 3 },
              { whitespace: true },
            ]}
          >
            <Input placeholder="Enter Auth Sign Name" />
          </Form.Item>

          <Form.Item
            label="Auth Sign Contact Number"
            name="Auth Sign Contact Number"
            validateFirst
            validateTrigger="onSubmit"
            rules={[
              { required: true },
              {
                validator: (_, value) => {
                  if (value.toString().length !== 10) {
                    return Promise.reject(
                      "Contact Number must be exactly 10 digits"
                    );
                  }
                  if (
                    !["6", "7", "8", "9"].includes(value.toString().charAt(0))
                  ) {
                    return Promise.reject("Enter Valid Phone Number");
                  }
                  return Promise.resolve();
                },
              },
              { whitespace: true },
            ]}
          >
            <Input
              placeholder="Enter Auth Sign Contact Number"
              maxLength={10}
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value.replace(
                  /\D/g,
                  ""
                );
              }}
            />
          </Form.Item>

          <Form.Item
            label="Auth Sign PAN Number"
            name="Auth Sign PAN Number"
            validateFirst
            validateTrigger="onSubmit"
            rules={[
              { required: true },
              {
                pattern: /^([A-Z]){3}P([A-Z])([0-9]){4}([A-Z]){1}?$/,
                message: "Enter Valid Auth Sign PAN Number",
              },
              { whitespace: true },
            ]}
          >
            <Input
              placeholder="Enter Auth Sign PAN Number"
              maxLength={10}
              onChange={(e) => {
                const value = e.target.value.toUpperCase();
                form.setFieldsValue({ authSignPANNumber: value });
              }}
            />
          </Form.Item>

          <Form.Item
            label="Auth Sign AADHAR Number"
            name="Auth Sign AADHAR Number"
            validateFirst
            validateTrigger="onSubmit"
            rules={[
              { required: true },
              {
                validator: (_, value) => {
                  if (value.toString().length !== 12) {
                    return Promise.reject(
                      "AADHAR Number must be exactly 12 digits"
                    );
                  }
                  return Promise.resolve();
                },
              },
              { whitespace: true },
            ]}
          >
            <Input
              placeholder="Enter Auth Sign AADHAR Number"
              maxLength={12}
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value.replace(
                  /\D/g,
                  ""
                );
              }}
            />
          </Form.Item>

          <Form.Item
            label="Auth Sign Email ID"
            name="Auth Sign Email ID"
            validateFirst
            validateTrigger="onSubmit"
            rules={[
              { required: true },
              { type: "email" },
              { whitespace: true },
            ]}
          >
            <Input placeholder="Enter Auth Sign Email ID" />
          </Form.Item>

          <Form.Item
            label="Dashboard Password"
            name="Dashboard Password"
            validateFirst
            validateTrigger="onSubmit"
            rules={[
              { required: true },
              {
                validator(_, value) {
                  if (!value) return Promise.resolve();
                  if (value.length < 8) {
                    return Promise.reject(
                      "Password must be at least 8 characters long"
                    );
                  }
                  if (!/[A-Z]/.test(value)) {
                    return Promise.reject(
                      "Must contain at least one uppercase letter"
                    );
                  }
                  if (!/[a-z]/.test(value)) {
                    return Promise.reject(
                      "Must contain at least one lowercase letter"
                    );
                  }
                  if (!/[0-9]/.test(value)) {
                    return Promise.reject("Must contain at least one number");
                  }
                  if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
                    return Promise.reject(
                      "Must contain at least one special character"
                    );
                  }
                  return Promise.resolve();
                },
              },
              { whitespace: true },
            ]}
          >
            <Input.Password placeholder="Enter Dashboard Password" />
          </Form.Item>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
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

export default MerchantManagementStep1;
