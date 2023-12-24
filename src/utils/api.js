import axios from "axios";
import { getAccessToken } from "./users.util";

const api = (header) => {
  const accessToken = getAccessToken();
  
  if (!header) {
    header = { Accept: "application/json", "Content-Type": "application/json" };
  }

  const apiSet = axios.create({
    baseURL: 'http://182.176.169.225:19008/api/v1/',
    headers: accessToken ? { ...header, Authorization: `Bearer ${accessToken}` } : header
  });

  apiSet.interceptors.response.use(
    async (response) => {
      const method = response.config?.method || "";

      if (["post", "patch", "delete"].includes(method)) {
        return response;
      }

      return response;
    },
    (error) => {
      if (error.message === "Network Error") {
        throw error;
      }

      let { message } = error.response.data;

      if (!message) {
        message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
      return error.response;
    }
  );

  return apiSet;
};

export default api;