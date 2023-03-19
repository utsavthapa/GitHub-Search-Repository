import axios from "axios";
import ApiError from "./axios-helper/api-error";

let SERVER_DOMAIN = `${process.env.REACT_APP_API_URL}`;

let Axios = axios.create({
  baseURL: SERVER_DOMAIN,
  withCredentials: false,
});

Axios.interceptors.request.use(
  (requestConfig) => {
    return requestConfig;
  },
  (error) => {
    return ApiError.errorHandler(error);
  }
);

Axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return ApiError.errorHandler(error);
  }
);

export default Axios;
