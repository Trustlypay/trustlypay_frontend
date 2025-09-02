import { Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { routeMapMini } from "../../route-map";
import { useState } from "react";
import { useLogin } from "../../services/users/user.service.hook";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [passwordValue, setPasswordValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = e.target;
    const reg = /^-?\d*(\.\d*)?$/;
    if (reg.test(inputValue) || inputValue === "" || inputValue === "-") {
      setPasswordValue(inputValue);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
  };

  const { mutateAsync: loginMutate, error } = useLogin();

  const onSubmit = () => {
    if (!emailValue) {
      setEmailError("Email cannot be empty ");
      return;
    } else if (!validateEmail(emailValue)) {
      setEmailError("Invalid email format");
      return;
    } else {
      setEmailError("");
    }
    if (!passwordValue) {
      setPasswordError("Password cannot be empty ");
      return;
    }
    if (passwordValue.length !== 6) {
      setPasswordError("Password should be 6 digits");
      return;
    } else {
      setPasswordError("");
    }

    loginMutate({
      email: emailValue,
      password: passwordValue,
      onSuccess: (data: string) => {
        localStorage.setItem("token", data);
        navigate(routeMapMini.dashboard);
      },
    });
  };

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
          placeholder="Enter Email"
          style={{ backgroundColor: "inherit", color: "white" }}
          onChange={handleEmailChange}
          value={emailValue}
          status={emailError ? "error" : ""}
        />
        <Input.Password
          className="custom-input"
          size="large"
          variant="underlined"
          prefix={<LockOutlined />}
          placeholder="Enter 6 digit PIN"
          style={{ backgroundColor: "inherit", color: "white" }}
          onChange={handlePasswordChange}
          maxLength={6}
          value={passwordValue}
          status={passwordError ? "error" : ""}
        />
        {emailError || passwordError ? (
          <div style={{ color: "red", marginTop: "4px" }}>
            {emailError || passwordError}
          </div>
        ) : (
          axios.isAxiosError(error) && (
            <div style={{ color: "red", marginTop: "4px" }}>
              {error.response?.data?.message || "Unexpected error"}
            </div>
          )
        )}
        <button className="manrope submit-btn" onClick={onSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
