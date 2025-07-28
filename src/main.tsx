import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./utils/error-boundary.tsx";
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (e) => {
      console.error("---  queryCache  ---", e);
    },
  }),
  mutationCache: new MutationCache({
    onError: (e) => {
      console.error("---  mutationCache  ---", e);
    },
  }),
});

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);
