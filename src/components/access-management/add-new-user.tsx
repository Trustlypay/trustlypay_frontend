import { App, Button, Form, Input, Select, TreeSelect } from "antd";
import MainContentHeader from "../common/main-content-header";
import { RolePermissionsEnum } from "../sidebar/role-permissions.enum";

const treeData = [
  {
    title: "Pay-In",
    value: "Pay-In",
    key: "Pay-In",
    children: [
      {
        title: "Pay-In Transactions",
        value: "Pay-In Transactions",
        key: "Pay-In Transactions",
      },
      {
        title: "Check Status",
        value: "Check Status",
        key: "Check Status",
      },
      {
        title: "Update Transactions",
        value: "Update Transactions",
        key: "Update Transactions",
      },
    ],
  },
  {
    title: "Settlements",
    value: "Settlements",
    key: "Settlements",
    children: [
      {
        title: "Settlements Transactions",
        value: "Settlements Transactions",
        key: "Settlements Transactions",
      },
      {
        title: "Bulk Adjustment",
        value: "Bulk Adjustment",
        key: "Bulk Adjustment",
      },
      {
        title: "Chargeback/Refund",
        value: "Chargeback/Refund",
        key: "Chargeback/Refund",
      },
    ],
  },
  {
    title: "Pay-Out",
    value: "Pay-Out",
    key: "Pay-Out",
    children: [
      {
        title: "Pay-Out Transactions",
        value: "Pay-Out Transactions",
        key: "Pay-Out Transactions",
      },
      {
        title: "Pay-Out Account",
        value: "Pay-Out Account",
        key: "Pay-Out Account",
      },
      {
        title: "Pay-Out Statement",
        value: "Pay-Out Statement",
        key: "Pay-Out Statement",
      },
    ],
  },
  {
    title: "Technical",
    value: "Technical",
    key: "Technical",
    children: [
      {
        title: "Add vendor",
        value: "Add vendor",
        key: "Add vendor",
      },
      {
        title: "Edit Keys",
        value: "Edit Keys",
        key: "Edit Keys",
      },
      {
        title: "Merchant Logs",
        value: "Merchant Logs",
        key: "Merchant Logs",
      },
      {
        title: "View Keys",
        value: "View Keys",
        key: "View Keys",
      },
    ],
  },
  {
    title: "Merchant Management",
    value: "Merchant Management",
    key: "Merchant Management",
    children: [
      {
        title: "Add Merchant",
        value: "Add Merchant",
        key: "Add Merchant",
      },
      {
        title: "View Merchant Details",
        value: "View Merchant Details",
        key: "View Merchant Details",
      },
      {
        title: "Edit Merchant Details",
        value: "Edit Merchant Details",
        key: "Edit Merchant Details",
      },
      {
        title: "KYC Approval",
        value: "KYC Approval",
        key: "KYC Approval",
      },
      {
        title: "Edit Price Setting",
        value: "Edit Price Setting",
        key: "Edit Price Setting",
      },
      {
        title: "Edit Routing Config",
        value: "Edit Routing Config",
        key: "Edit Routing Config",
      },
    ],
  },
  {
    title: "Complaince/Security",
    value: "Complaince/Security",
    key: "Complaince/Security",
    children: [],
  },
  {
    title: "Reseller",
    value: "Reseller",
    key: "Reseller",
    children: [
      {
        title: "Add Reseller",
        value: "Add Reseller",
        key: "Add Reseller",
      },
      {
        title: "Edit Reseller Rates",
        value: "Edit Reseller Rates",
        key: "Edit Reseller Rates",
      },
      {
        title: "Merchant Mapping",
        value: "Merchant Mapping",
        key: "Merchant Mapping",
      },
    ],
  },
  {
    title: "Reports",
    value: "Reports",
    key: "Reports",
    children: [
      {
        title: "Download Reports",
        value: "Download Reports",
        key: "Download Reports",
      },
    ],
  },
  {
    title: "Access-Management",
    value: "Access-Management",
    key: "Access-Management",
    children: [
      {
        title: "Add User",
        value: "Add User",
        key: "Add User",
      },
      {
        title: "Edit User Details",
        value: "Edit User Details",
        key: "Edit User Details",
      },
      {
        title: "Edit Access Controls",
        value: "Edit Access Controls",
        key: "Edit Access Controls",
      },
    ],
  },
];

const AddNewUser = () => {
  const { message } = App.useApp();
  const [form] = Form.useForm();

  const onFinish = () => {
    void form.validateFields().then(() => {
      message.success("Saved");
      console.log(form.getFieldsValue());
    });
  };

  const onFinishFailed = (err: any) => {
    console.log(err);
    message.error("Submit failed!");
  };

  return (
    <div className="main scrollbar">
      <MainContentHeader title="Add New User" />
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
            label="User Name"
            name="User Name"
            validateFirst
            validateTrigger="onSubmit"
            rules={[
              { required: true },
              { required: true, min: 3 },
              { whitespace: true },
            ]}
          >
            <Input placeholder="Enter User Name" />
          </Form.Item>

          <Form.Item
            label="First Name"
            name="First Name"
            validateFirst
            validateTrigger="onSubmit"
            rules={[
              { required: true },
              { required: true, min: 3 },
              { whitespace: true },
            ]}
          >
            <Input placeholder="Enter First Name" />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="Last Name"
            validateFirst
            validateTrigger="onSubmit"
            rules={[
              { required: true },
              { required: true, min: 3 },
              { whitespace: true },
            ]}
          >
            <Input placeholder="Enter Last Name" />
          </Form.Item>

          <Form.Item
            label="Mobile Number"
            name="Mobile Number"
            validateFirst
            validateTrigger="onSubmit"
            rules={[
              { required: true },
              {
                validator: (_, value) => {
                  if (value.toString().length !== 10) {
                    return Promise.reject(
                      "Mobile Number must be exactly 10 digits"
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
              placeholder="Enter Mobile Number"
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
            label="Designation"
            name="Designation"
            validateFirst
            validateTrigger="onSubmit"
            rules={[
              { required: true },
              { required: true, min: 3 },
              { whitespace: true },
            ]}
          >
            <Input placeholder="Enter Designation" />
          </Form.Item>

          <Form.Item
            label="Official Email ID"
            name="Official Email ID"
            validateFirst
            validateTrigger="onSubmit"
            rules={[
              { required: true },
              { type: "email" },
              { whitespace: true },
            ]}
          >
            <Input placeholder="Enter Official Email ID" />
          </Form.Item>

          <Form.Item
            label="Personal Email ID"
            name="Personal Email ID"
            validateFirst
            validateTrigger="onSubmit"
            rules={[
              { required: true },
              { type: "email" },
              { whitespace: true },
            ]}
          >
            <Input placeholder="Enter Personal Email ID" />
          </Form.Item>

          <Form.Item
            label="Create PIN"
            name="Create PIN"
            validateFirst
            validateTrigger="onSubmit"
            rules={[
              { required: true },
              {
                validator: (_, value) => {
                  if (value.toString().length !== 6) {
                    return Promise.reject(
                      "Create PIN must be exactly 6 digits"
                    );
                  }
                  return Promise.resolve();
                },
              },
            ]}
          >
            <Input.Password
              placeholder="Enter 6 digit PIN"
              onChange={(e) => {
                const { value: inputValue } = e.target;
                const reg = /^-?\d*(\.\d*)?$/;
                if (
                  reg.test(inputValue) ||
                  inputValue === "" ||
                  inputValue === "-"
                ) {
                  form.setFieldsValue({ "Create PIN": inputValue });
                }
              }}
              maxLength={6}
            />
          </Form.Item>

          <Form.Item
            label="Re Enter PIN"
            name="Re Enter PIN"
            validateFirst
            validateTrigger="onSubmit"
            rules={[
              {
                required: true,
                message: "Please confirm your Create PIN",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("Create PIN") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The Create PIN that you entered do not match!")
                  );
                },
              }),
              {
                validator: (_, value) => {
                  if (value.toString().length !== 6) {
                    return Promise.reject(
                      "Re Enter PIN must be exactly 6 digits"
                    );
                  }
                  return Promise.resolve();
                },
              },
            ]}
          >
            <Input.Password
              placeholder="Re Enter 6 digit PIN"
              onChange={(e) => {
                const { value: inputValue } = e.target;
                const reg = /^-?\d*(\.\d*)?$/;
                if (
                  reg.test(inputValue) ||
                  inputValue === "" ||
                  inputValue === "-"
                ) {
                  form.setFieldsValue({ "Re Enter PIN": inputValue });
                }
              }}
              maxLength={6}
            />
          </Form.Item>

          <Form.Item
            label="Access Group"
            name="Access Group"
            validateFirst
            validateTrigger="onSubmit"
            rules={[{ required: true }]}
          >
            <Select
              placeholder="Select Access Group"
              options={Object.entries(RolePermissionsEnum).map(
                ([key, value]) => ({
                  label: key,
                  value: value,
                })
              )}
            />
          </Form.Item>

          <Form.Item
            label="Component Level Access"
            name="Component Level Access"
            validateFirst
            validateTrigger="onSubmit"
            rules={[{ required: true }]}
          >
            <TreeSelect
              treeData={treeData}
              treeCheckable={true}
              showCheckedStrategy="SHOW_PARENT"
              placeholder="Select Component Level Access"
            />
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
            onClick={() => {
              form.resetFields();
            }}
          >
            Cancel
          </Button>
          <Button htmlType="submit" type="primary">
            Add User
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddNewUser;
