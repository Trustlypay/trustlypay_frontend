import dayjs from "dayjs";
import { useEffect, useState } from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";
import { routeMapMini } from "../../route-map";

const Header = () => {
  const navigate = useNavigate();
  const [ip, setIp] = useState("");

  useEffect(() => {
    fetch("https://api64.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => setIp(data.ip))
      .catch((err) => console.error("Failed to fetch IP", err));
  }, []);

  return (
    <div className="header">
      <img src="/trustlypay_image.svg" />
      <div className="right-side-header">
        <div>
          <span className="f-w-700-color">Time:</span>
          {dayjs().format("YYYY-MM-DD HH:mm:ss")}
        </div>
        <div>
          <span className="f-w-700-color">Login-IP:</span>
          {ip}
        </div>
        <img src="/profile-icon.svg" />
        <img
          src="/logout.svg"
          onClick={() => {
            navigate(routeMapMini.login);
          }}
        />
      </div>
    </div>
  );
};

export default Header;
