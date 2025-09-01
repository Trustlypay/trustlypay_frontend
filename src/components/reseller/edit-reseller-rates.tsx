import { App, Button, Form, Input } from "antd";
import MainContentHeader from "../common/main-content-header";
import { routeMapMini } from "../../route-map";
import { useNavigate } from "react-router-dom";
import SelectMerchant from "../common/select-merchant";
import "./edit-reseller.rates.css";
import WhiteBorder from "../common/white-border";

const EditResellerRates = () => {
  const navigate = useNavigate();
  const { message } = App.useApp();
  const [form] = Form.useForm();

  const onFinish = () => {
    void form.validateFields().then(() => {
      message.success("Saved");
      navigate(routeMapMini.reseller);
      console.log(form.getFieldsValue());
    });
  };

  const onFinishFailed = (err: any) => {
    console.log(err);
  };

  return (
    <div className="main scrollbar">
      <MainContentHeader title="SunrisePay" />
      <Form
        style={{
          margin: "0px auto",
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
        <Form.Item
          label="Select Merchant"
          name="Select Mercant"
          layout="horizontal"
          className="display-flex-justify-content-center"
        >
          <SelectMerchant />
        </Form.Item>

        <div className="manrope-24px">Pay In Charges</div>
        <div className="form-grid-2">
          <Form.Item label="QR Code" name="QR Code">
            <Input
              placeholder="Enter QR Code Rate"
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value
                  .replace(/[^0-9.]/g, "")
                  .replace(/^(\d*\.\d*).*$/, "$1");
              }}
            />
          </Form.Item>

          <Form.Item label="UPI" name="UPI">
            <Input
              placeholder="Enter UPI Rate"
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value
                  .replace(/[^0-9.]/g, "")
                  .replace(/^(\d*\.\d*).*$/, "$1");
              }}
            />
          </Form.Item>
        </div>

        <WhiteBorder />
        <div className="manrope-24px">Pay Out Charges</div>
        <div
          style={{
            display: "flex",
            gap: "24px",
            padding: "18px",
          }}
        >
          <div>
            <div className="manrope-20px">Flat</div>
            <Form.Item label="Volume Count" name="Volume Count">
              <Input
                placeholder="Enter Volume Count"
                onInput={(e) => {
                  e.currentTarget.value = e.currentTarget.value
                    .replace(/[^0-9.]/g, "")
                    .replace(/^(\d*\.\d*).*$/, "$1");
                }}
              />
            </Form.Item>

            <div className="form-grid-2">
              <Form.Item label="IMPS" name="IMPS">
                <Input
                  placeholder="Enter IMPS Rate"
                  onInput={(e) => {
                    e.currentTarget.value = e.currentTarget.value
                      .replace(/[^0-9.]/g, "")
                      .replace(/^(\d*\.\d*).*$/, "$1");
                  }}
                />
              </Form.Item>

              <Form.Item label="NEFT" name="NEFT">
                <Input
                  placeholder="Enter NEFT Rate"
                  onInput={(e) => {
                    e.currentTarget.value = e.currentTarget.value
                      .replace(/[^0-9.]/g, "")
                      .replace(/^(\d*\.\d*).*$/, "$1");
                  }}
                />
              </Form.Item>

              <Form.Item label="RTGS" name="RTGS">
                <Input
                  placeholder="Enter RTGS Rate"
                  onInput={(e) => {
                    e.currentTarget.value = e.currentTarget.value
                      .replace(/[^0-9.]/g, "")
                      .replace(/^(\d*\.\d*).*$/, "$1");
                  }}
                />
              </Form.Item>

              <Form.Item label="UPI" name="UPI">
                <Input
                  placeholder="Enter UPI Rate"
                  onInput={(e) => {
                    e.currentTarget.value = e.currentTarget.value
                      .replace(/[^0-9.]/g, "")
                      .replace(/^(\d*\.\d*).*$/, "$1");
                  }}
                />
              </Form.Item>
            </div>
          </div>

          <div style={{ borderLeft: "0.5px solid #CFD8D7" }}></div>

          <div>
            <div className="manrope-20px">Percentage</div>
            <div style={{ height: "54px", marginBottom: "24px" }}></div>
            <div className="form-grid-2">
              <Form.Item label="IMPS" name="IMPS">
                <Input
                  placeholder="Enter IMPS Rate"
                  onInput={(e) => {
                    e.currentTarget.value = e.currentTarget.value
                      .replace(/[^0-9.]/g, "")
                      .replace(/^(\d*\.\d*).*$/, "$1");
                  }}
                />
              </Form.Item>

              <Form.Item label="NEFT" name="NEFT">
                <Input
                  placeholder="Enter NEFT Rate"
                  onInput={(e) => {
                    e.currentTarget.value = e.currentTarget.value
                      .replace(/[^0-9.]/g, "")
                      .replace(/^(\d*\.\d*).*$/, "$1");
                  }}
                />
              </Form.Item>

              <Form.Item label="RTGS" name="RTGS">
                <Input
                  placeholder="Enter RTGS Rate"
                  onInput={(e) => {
                    e.currentTarget.value = e.currentTarget.value
                      .replace(/[^0-9.]/g, "")
                      .replace(/^(\d*\.\d*).*$/, "$1");
                  }}
                />
              </Form.Item>
              <Form.Item label="UPI" name="UPI">
                <Input
                  placeholder="Enter UPI Rate"
                  onInput={(e) => {
                    e.currentTarget.value = e.currentTarget.value
                      .replace(/[^0-9.]/g, "")
                      .replace(/^(\d*\.\d*).*$/, "$1");
                  }}
                />
              </Form.Item>
            </div>
          </div>
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
  );
};

export default EditResellerRates;
