import axios from "./request";

const URL = {
  GET_USERINFO: "",
  GET_REPOS: "/repos?per_page=100",
};

/**
 * @description 获取个人数据
 * @return {*} 返回个人数据
 */
const getUserinfo = async () => {
  const res = await axios.get(URL.GET_USERINFO);
  return res;
};

/**
 * @description 获取项目信息
 * @return {*} 返回项目信息
 */
const getRepos = async () => {
  const res = await axios.get(URL.GET_REPOS);
  return res;
};

export { getUserinfo, getRepos };
