import "./App.css";
import { ConfigProvider } from "antd";
import AppRoutes from "./routes";
import Sidebar from "./components/dashboard/sidebar";
import Header from "./components/header/header";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { routeMapMini } from "./route-map";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const parts = localStorage.getItem("token")?.split(".");
    if (parts && JSON.parse(atob(parts[1])).exp > dayjs().unix()) {
      navigate(location.pathname ?? routeMapMini.dashboard);
    } else {
      navigate(routeMapMini.login);
    }
  }, []);

  return (
    <div className="app">
      <ConfigProvider
        theme={{
          token: {
            fontFamily: "Manrope",
            colorPrimary: "#26B24B",
          },
        }}
      >
        <div className="initial-screen">
          {localStorage.getItem("token") && <Header />}
          <section className="sidebar-main">
            {localStorage.getItem("token") && <Sidebar />}
            <AppRoutes />
          </section>
        </div>
      </ConfigProvider>
    </div>
  );
}

export default App;
