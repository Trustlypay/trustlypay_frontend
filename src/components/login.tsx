import { Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { routeMapMini } from "../route-map";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="card">
        <img src="./trustlypay_image.svg" />
        <p className="login-text playfair-display">LOGIN</p>
        <Input
          className="custom-input"
          size="large"
          variant="underlined"
          prefix={<UserOutlined />}
          placeholder="Enter Username"
          style={{ backgroundColor: "inherit", color: "white" }}
        />
        <Input
          className="custom-input"
          size="large"
          variant="underlined"
          prefix={<LockOutlined />}
          placeholder="Enter 6 digit PIN"
          style={{ backgroundColor: "inherit", color: "white" }}
        />
        <button
          className="manrope submit-btn"
          onClick={async () => {
            // await userService.login("string2", "string").then((res) => {
            //   localStorage.setItem("token", res);
            // });
            // await userService.currentUser().then((res) => console.log(res));
            navigate(routeMapMini.dashboard);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
