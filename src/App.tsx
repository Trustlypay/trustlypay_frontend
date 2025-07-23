import { Input } from "antd";
import "./App.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { userService } from "./services/users/user.service";

function App() {
  return (
    <div
      className="app"
      style={{
        backgroundImage: 'url("/trustlypay_bg.jpg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        color: "black",
      }}
    >
      <div className="card">
        <img src="./trustlypay_image.svg" />
        <p className="login-text playfair-display">LOGIN</p>
        <Input
          onChange={() => {
            console.log();
          }}
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
          style={{
            background: "#26B24B",
            fontSize: "24px",
            padding: "10px 24px",
            border: "none",
            borderRadius: "8px",
          }}
          onClick={async () => {
            await userService.login("string2", "string").then((res) => {
              localStorage.setItem("token", res);
            });

            await userService.currentUser().then((res) => console.log(res));
          }}
          className="manrope"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
