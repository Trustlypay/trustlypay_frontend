import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./utils/error-boundary.tsx";
import ReactQueryClient from "./queryclient.tsx";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <ReactQueryClient>
          <App />
        </ReactQueryClient>
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);
