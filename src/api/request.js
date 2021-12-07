import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://api.github.com/users/web-liuyang",
  timeout: 10000,
});

axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    console.error(error);
  }
);

axios.interceptors.response.use(
  res => {
    if (res.status !== 200) {
      console.error("响应错误：" + res);
      return;
    }

    return res;
  },
  error => {
    console.error(error);
  }
);

export default axios;
