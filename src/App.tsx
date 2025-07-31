import "./App.css";
import { ConfigProvider, theme } from "antd";
import AppRoutes from "./routes";
import Sidebar from "./components/sidebar/sidebar";
import Header from "./components/header/header";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { routeMapMini } from "./route-map";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const parts = token?.split(".");

    if (parts && JSON.parse(atob(parts[1])).exp > dayjs().unix()) {
      navigate(
        location.pathname !== routeMapMini.login
          ? location.pathname
          : routeMapMini.dashboard
      );
    } else {
      localStorage.removeItem("token");
      navigate(routeMapMini.login);
    }
  }, [token]);

  return (
    <div className="app">
      <ConfigProvider
        theme={{
          token: {
            fontFamily: "Manrope",
            colorPrimary: "#26B24B",
          },
          algorithm: [theme.darkAlgorithm],
        }}
      >
        <div className="initial-screen">
          {token && <Header />}
          <section className="sidebar-main">
            {token && <Sidebar />}
            <AppRoutes />
          </section>
        </div>
      </ConfigProvider>
    </div>
  );
}

export default App;
