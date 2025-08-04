import React from "react";
import { App, Button, Form, Input } from "antd";
import "./form.css";

const formData = {
  userName: "Kiran Reddy",
  userID: "TP-User-2025",
  firstName: "Kiran ",
  lastName: " Reddy",
  mobileNumber: "1234567898",
  designation: "full stack developer",
  officialEmailID: "kiran@trustlypay.com",
  personalEmailID: "kiran@trustlypay.com",
};

const AntdForm: React.FC = () => {
  const [form] = Form.useForm();
  const { message } = App.useApp();

  const onFinish = () => {
    void form.validateFields().then(() => {
      message.success("Submit success!");
      console.log(form.getFieldsValue());
    });
  };

  const onFinishFailed = (err: any) => {
    console.log(err);
    message.error("Submit failed!");
  };

  return (
    <Form
      style={{
        margin: "0px auto",
        minWidth: "600px",
      }}
      form={form}
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <div className="form-grid-2">
        <Form.Item
          label="User Name"
          name="userName"
          initialValue={formData.userName}
        >
          <Input placeholder="Enter User Name" disabled />
        </Form.Item>
        <Form.Item label="User ID" name="userID" initialValue={formData.userID}>
          <Input placeholder="Enter User ID" disabled />
        </Form.Item>
        <Form.Item
          label="First Name"
          name="firstName"
          initialValue={formData.firstName}
          validateFirst
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
          name="lastName"
          initialValue={formData.lastName}
          validateFirst
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
          name="mobileNumber"
          initialValue={formData.mobileNumber}
        >
          <Input placeholder="Enter Mobile Number" disabled />
        </Form.Item>
        <Form.Item
          label="Designation"
          name="designation"
          initialValue={formData.designation}
        >
          <Input placeholder="Enter Designation" disabled />
        </Form.Item>
        <Form.Item
          label="Official Email ID"
          name="officialEmailID"
          initialValue={formData.officialEmailID}
        >
          <Input placeholder="Enter Official Email ID" disabled />
        </Form.Item>
        <Form.Item
          label="Personal Email ID"
          name="personalEmailID"
          initialValue={formData.personalEmailID}
          rules={[
            { required: true },
            {
              type: "email",
              message: "Please enter a valid email address",
            },
          ]}
          validateFirst
        >
          <Input placeholder="Enter Personal Email ID" />
        </Form.Item>
      </div>

      <Form.Item
        style={{
          textAlign: "center",
        }}
      >
        <Button type="primary" htmlType="submit">
          Save Changes
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AntdForm;
