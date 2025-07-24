import "./App.css";
import { ConfigProvider } from "antd";
import AppRoutes from "./routes";
import Sidebar from "./components/dashboard/sidebar";
import Header from "./components/header/header";

function App() {
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
          <Header />
          <section className="sidebar-main">
            <Sidebar />
            <AppRoutes />
          </section>
        </div>
      </ConfigProvider>
    </div>
  );
}

export default App;
