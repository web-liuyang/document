/**
 * @description 分割自己与其他人的项目
 * @param {*} repos - repos
 * @returns {array} 返回分割好的数组，0是自己，1是其他
 */
export const splitRepos = (repos) => {
  const _oneself = [];

  const _other = [];

  repos.forEach((item) => {
    item.fork ? _other.push(item) : _oneself.push(item);
  });

  return [_oneself, _other];
};
