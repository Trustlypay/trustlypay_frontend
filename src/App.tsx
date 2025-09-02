import "./App.css";
import { ConfigProvider, theme } from "antd";
import AppRoutes from "./routes";
import Sidebar from "./components/sidebar/sidebar";
import Header from "./components/header/header";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { routeMapMini } from "./route-map";
import { App as AntdApp } from "antd";
import { useGetCurrentUser } from "./services/users/user.service.hook";
import UserContext from "./components/user-context";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const parts = token?.split(".");

    if (parts && JSON.parse(atob(parts[1])).exp > dayjs().unix()) {
      navigate(
        location.pathname !== routeMapMini.login
          ? location.pathname + location.search
          : routeMapMini.dashboard
      );
    } else {
      localStorage.removeItem("token");
      navigate(routeMapMini.login);
    }
  }, [token]);

  const { data: userDetails } = useGetCurrentUser();

  return (
    <div className="app">
      <AntdApp component={false}>
        <ConfigProvider
          theme={{
            token: {
              fontFamily: "Manrope",
              colorPrimary: "#26B24B",
            },
            algorithm: [theme.darkAlgorithm],
            components: {
              Form: { verticalLabelPadding: "0" },
              Button: { defaultBorderColor: "#26B24B" },
            },
          }}
        >
          <UserContext.Provider
            value={{
              userDetails: userDetails,
            }}
          >
            <div className="initial-screen">
              {token && <Header />}
              <section className="sidebar-main">
                {token && <Sidebar />}
                <AppRoutes />
              </section>
            </div>
          </UserContext.Provider>
        </ConfigProvider>
      </AntdApp>
    </div>
  );
}

export default App;
