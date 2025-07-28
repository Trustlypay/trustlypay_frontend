import dayjs from "dayjs";
import { useEffect, useState } from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";
import { routeMapMini } from "../../route-map";

const Header = () => {
  const navigate = useNavigate();
  const [ip, setIp] = useState("");
  const [currentTime, setCurrentTime] = useState(
    dayjs().format("YYYY-MM-DD HH:mm:ss")
  );

  useEffect(() => {
    fetch("https://api64.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => setIp(data.ip))
      .catch((err) => console.error("Failed to fetch IP", err));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(dayjs().format("YYYY-MM-DD HH:mm:ss"));
    }, 1000);

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <div className="header">
      <img src="/trustlypay_image.svg" />
      <div className="right-side-header">
        <div className=" right-side-header-content">
          <div className="header-container">
            <span className="f-w-700-color">Time:</span>
            <div className="time-value">{currentTime}</div>
          </div>
          <div className="header-container">
            <span className="f-w-700-color  ellipsis-text">Login-IP:</span>
            {ip}
          </div>
        </div>
        <div className=" right-side-header-content">
          <img src="/profile-icon.svg" />
          <img
            src="/logout.svg"
            onClick={() => {
              localStorage.removeItem("token");
              navigate(routeMapMini.login);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
