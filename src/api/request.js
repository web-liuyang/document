import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://api.github.com/users/web-liuyang",
  timeout: 10000,
});

axios.interceptors.request.use(
  config => {
    return config;
  },
  error => Promise.reject(error)
);

axios.interceptors.response.use(
  res => {
    if (res.status !== 200) {
      return Promise.reject(res);
    }

    return Promise.resolve(res);
  },
  error => Promise.reject(error)
);

export default axios;
