import "./App.css";
import { ConfigProvider } from "antd";
import AppRoutes from "./routes";

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
        <AppRoutes />
      </ConfigProvider>
    </div>
  );
}

export default App;
