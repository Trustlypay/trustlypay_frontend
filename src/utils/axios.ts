import axios from "axios";

export const BASE_API_URL: string = import.meta.env.VITE_TRUSTLYPAY_API_URL;

const Axios = axios.create({
  baseURL: BASE_API_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

Axios.interceptors.request.use(async (config) => {
  const accessToken = localStorage.getItem("token");
  if (accessToken) {
    if (config.headers) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    } else {
      config.headers = {
        Authorization: `Bearer ${accessToken}`,
      } as typeof config.headers;
    }
  }
  return config;
});

Axios.interceptors.response.use(
  (res) => res,
  (err) => {
    console.error("Axios error:", err.message, err.code, err.config?.url);
    return Promise.reject(err);
  }
);

export const AxiosX = Axios;
