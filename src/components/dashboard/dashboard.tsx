import dayjs from "dayjs";
import "./dashboard.css";
import { useEffect, useState } from "react";
import Sidebar from "./sidebar";

const Dashboard = () => {
  const [ip, setIp] = useState("");

  useEffect(() => {
    fetch("https://api64.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => setIp(data.ip))
      .catch((err) => console.error("Failed to fetch IP", err));
  }, []);

  return (
    <div className="initial-screen">
      <div className="header">
        <img src="/trustlypay_image.svg" />
        <div className="right-side-header">
          <div>Time:{dayjs().format("YYYY-MM-DD HH:mm:ss")}</div>
          <div>Login-IP:{ip}</div>
          <img src="/profile-icon.svg" />
          <img src="/logout.svg" />
        </div>
      </div>
      <section className="section">
        <Sidebar />
        <div className="main">
          <div> Welcome , Kiran</div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>Pay In Overview</p>
            <div>
              <p>date</p>
              <p>date</p>
              <button>update</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
