import { useNavigate } from "react-router-dom";
import { routeMapMini } from "../../route-map";
import { App, Button, Form, Input, Select } from "antd";

const formData = {
  userName: "Kiran Reddy",
  userID: "TP-User-2025",
  firstName: "Kiran ",
  lastName: " Reddy",
  mobileNumber: "8234567898",
  designation: "full stack developer",
  officialEmailID: "kiran@trustlypay.com",
  personalEmailID: "kiran@trustlypay.com",
};

const AccessManagement = () => {
  const navigate = useNavigate();
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
      <div className="section-header">
        <div className="playfair-display">User Access Controls</div>
        <div className="sub-route-items">
          <button
            className="sub-route"
            onClick={() => {
              navigate(routeMapMini.addNewUser);
            }}
          >
            <img src="/add.png" />
            Add New User
          </button>
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
          <div
            className="form-grid-2"
            style={{
              alignItems: "center",
              gridTemplateColumns: "60% 40%",
            }}
          >
            <Form.Item
              style={{
                justifySelf: "end",
              }}
              label="Select User"
              name="Select USer"
            >
              <Select
                style={{ width: "300px" }}
                placeholder="Select User"
                defaultValue={"All"}
              >
                <Select.Option value="U1">U1</Select.Option>
                <Select.Option value="U2">U2 </Select.Option>
                <Select.Option value="U3">U3</Select.Option>
                <Select.Option value="U4">U4</Select.Option>
                <Select.Option value="U5">U5</Select.Option>
              </Select>
            </Form.Item>
            <Button style={{ justifySelf: "start" }}>Rset User PIN</Button>
          </div>

          <div className="form-grid-2">
            <Form.Item
              label="User Name"
              name="User Name"
              initialValue={formData.userName}
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
              label="User ID"
              name="User ID"
              initialValue={formData.userID}
            >
              <Input placeholder="Enter User ID" disabled />
            </Form.Item>

            <Form.Item
              label="First Name"
              name="First Name"
              initialValue={formData.firstName}
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
              initialValue={formData.lastName}
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
              initialValue={formData.mobileNumber}
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
              initialValue={formData.designation}
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
              initialValue={formData.officialEmailID}
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
              initialValue={formData.personalEmailID}
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
              label="Access Group"
              name="Access Group"
              validateFirst
              validateTrigger="onSubmit"
              rules={[{ required: true }]}
            >
              <Select
                placeholder="Select Access Group"
                style={{ width: "100%" }}
                options={[]}
              />
            </Form.Item>

            <Form.Item
              label="Component Level Access"
              name="Component Level Access"
              validateFirst
              validateTrigger="onSubmit"
              rules={[{ required: true }]}
            >
              <Select
                placeholder="Select Component Level Access"
                style={{ width: "100%" }}
                options={[]}
              />
            </Form.Item>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button htmlType="submit" type="primary">
              Save Changes
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AccessManagement;
