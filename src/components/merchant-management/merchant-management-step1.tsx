import { App, Form, Input, Button, Select } from "antd";
import WhiteBorder from "../common/white-border";
import { StepForwardOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { routeMapMini } from "../../route-map";
import MerchantSteps from "../common/merchant-steps";
import {
  useCreateMerchantStep1,
  useGetMerchantManagementBusinessCategory,
  useGetMerchantManagementBusinessSubCategory,
  useGetMerchantManagementBusinessType,
  useGetMerchantManagementMonthlyExpenditure,
  useGetMerchantManagementState,
} from "../../services/merchant-management/merchant-management.service.hook.";
import { useState } from "react";
import type { IMerchantManagementBusinessSubCategory } from "../../services/merchant-management/interfaces/merchant-management-business-sub-category.interface";

const MerchantManagementStep1 = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { message } = App.useApp();
  const [subCategories, setSubCategories] = useState<
    IMerchantManagementBusinessSubCategory[]
  >([]);

  const {
    data: merchantManagementState,
    isLoading: merchantManagementStateLoading,
  } = useGetMerchantManagementState();

  const {
    data: merchantManagementBusinessCategory,
    isLoading: merchantManagementBusinessCategoryLoading,
  } = useGetMerchantManagementBusinessCategory();

  const {
    data: merchantManagementBusinessSubCategory,
    isLoading: merchantManagementBusinessSubCategoryLoading,
  } = useGetMerchantManagementBusinessSubCategory();

  const {
    data: merchantManagementBusinessType,
    isLoading: merchantManagementBusinessTypeLoading,
  } = useGetMerchantManagementBusinessType();

  const {
    data: merchantManagementMonthlyExpenditure,
    isLoading: merchantManagementMonthlyExpenditureLoading,
  } = useGetMerchantManagementMonthlyExpenditure();

  const { mutateAsync: createMerchantStep1Mutate } = useCreateMerchantStep1();

  const onFinish = () => {
    void form.validateFields().then(() => {});

    createMerchantStep1Mutate({
      createMerchantStep1: {
        fk_monthly_expenditure_option_id: form.getFieldValue(
          "Business Monthly Expenditure"
        ),
        business_name: form.getFieldValue("Business Name"),
        address_line1: form.getFieldValue("Address 1st Line"),
        address_line2: form.getFieldValue("Address 2nd Line"),
        city: form.getFieldValue("City"),
        fk_state_id: form.getFieldValue("State"),
        pincode: Number(form.getFieldValue("Pincode")),
        country: form.getFieldValue("Country"),
        business_website: form.getFieldValue("Business Website"),
        business_pan: form.getFieldValue("Business PAN Number"),
        business_gst: form.getFieldValue("Business GST Number"),
        fk_business_type_id: form.getFieldValue("Business Type"),
        fk_business_category_id: form.getFieldValue("Business Category"),
        fk_business_sub_category_id: form.getFieldValue(
          "Business Sub Category"
        ),
        bank_name: form.getFieldValue("Bank Name"),
        ifsc_code: form.getFieldValue("IFSC Code"),
        bank_account_number: form.getFieldValue("Bank Account Number"),
        auth_sign_name: form.getFieldValue("Auth Sign Name"),
        auth_sign_contact_number: Number(
          form.getFieldValue("Auth Sign Contact Number")
        ),
        auth_sign_pan: form.getFieldValue("Auth Sign PAN Number"),
        auth_sign_aadhar: form.getFieldValue("Auth Sign AADHAR Number"),
        auth_sign_email: form.getFieldValue("Auth Sign Email ID"),
        dashboard_password: form.getFieldValue("Dashboard Password"),
      },
      onSuccess: (data) => {
        console.log("data", data);
        message.success("Saved and proceed to next step");
        navigate(
          `${routeMapMini.merchantManagementStep2}?step=2&merchantid=${data?.pk_merchant_management_id}`
        );
      },
      onError: () => {},
    });
  };

  const onFinishFailed = (err: any) => {
    console.log("fill all required fields" + err);
  };

  return (
    <div className="main scrollbar" style={{ alignItems: "center" }}>
      <MerchantSteps />
      <div className="playfair-display-24"> Merchant Details</div>
      <WhiteBorder />
      <Form
        initialValues={{
          "Business Name": "abc",
          "Business Monthly Expenditure": 2,
          "Address 1st Line": "abc",
          "Address 2nd Line": "abc",
          City: "hyderabad",
          State: 7,
          Pincode: "500007",
          Country: "india",
          "Business Website": "http",
          "Business PAN Number": "ABCCR4567F",
          "Business GST Number": "27AAACT2727Q1ZW",
          "Business Type": 7,
          "Business Category": 4,
          "Business Sub Category": 35,
          "Bank Name": "ert",
          "IFSC Code": "234",
          "Bank Account Number": "123",
          "Re-Enter Bank Account Number": "123",
          "Auth Sign Name": "abc",
          "Auth Sign Contact Number": "8234567890",
          "Auth Sign PAN Number": "ABCPP4567F",
          "Auth Sign AADHAR Number": "123456789123",
          "Auth Sign Email ID": "kiran@123.com",
          "Dashboard Password": "Dashboard@123",
        }}
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
            rules={[{ required: true }]}
          >
            <Select
              placeholder="Select Business Monthly Expenditure"
              loading={merchantManagementMonthlyExpenditureLoading}
              style={{ width: "100%" }}
              options={merchantManagementMonthlyExpenditure?.map((item) => {
                return {
                  value: item.pk_monthly_expenditure_option_id,
                  label: item.monthly_expenditure,
                };
              })}
            />
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
            rules={[{ required: true }]}
          >
            <Select
              placeholder="Select State"
              loading={merchantManagementStateLoading}
              style={{ width: "100%" }}
              options={merchantManagementState?.map((item) => {
                return { value: item.pk_state_id, label: item.state_name };
              })}
            />
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
                form.setFieldsValue({ "Business PAN Number": value });
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
            rules={[{ required: true }]}
          >
            <Select
              placeholder="Select Business Type"
              loading={merchantManagementBusinessTypeLoading}
              style={{ width: "100%" }}
              options={merchantManagementBusinessType?.map((item) => {
                return {
                  value: item.pk_business_type_id,
                  label: item.type_name,
                };
              })}
            />
          </Form.Item>

          <Form.Item
            label="Business Category"
            name="Business Category"
            validateFirst
            validateTrigger="onSubmit"
            rules={[{ required: true }]}
          >
            <Select
              placeholder="Select Business Category"
              loading={merchantManagementBusinessCategoryLoading}
              style={{ width: "100%" }}
              options={merchantManagementBusinessCategory?.map((item) => {
                return {
                  value: item.pk_business_category_id,
                  label: item.category_name,
                };
              })}
              onChange={(categoryId) => {
                form.setFieldsValue({ "Business Sub Category": undefined });
                const filtered = merchantManagementBusinessSubCategory?.filter(
                  (sub) => sub?.fk_business_category_id === categoryId
                );

                setSubCategories(filtered ?? []);
              }}
            />
          </Form.Item>

          <Form.Item
            label="Business Sub Category"
            name="Business Sub Category"
            validateFirst
            validateTrigger="onSubmit"
            rules={[{ required: true }]}
          >
            <Select
              placeholder="Select Business Sub Category"
              loading={merchantManagementBusinessSubCategoryLoading}
              style={{ width: "100%" }}
              options={subCategories?.map((item) => {
                return {
                  value: item.pk_business_sub_category_id,
                  label: item.sub_category_name,
                };
              })}
            />
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
                  if (
                    !value ||
                    getFieldValue("Bank Account Number") === value
                  ) {
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
                form.setFieldsValue({ "Auth Sign PAN Number": value });
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
