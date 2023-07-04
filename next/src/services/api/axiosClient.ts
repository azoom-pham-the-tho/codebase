import axios from "axios";


const axiosClient = axios.create({
  baseURL: process.env.DOMAIN_BE,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    Authorization: globalThis.window?.sessionStorage.getItem("token"),
  },
});

axiosClient.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosClient;
