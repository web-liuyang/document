# Webpack 配置

在 `React` 开发中默认的 `wbbpack` 配置不能满足个性化需求，比如说 **别名的设置，添加Less等。**

在 `Creact-React-App`  提供的 `scripts` 中可以使用 `npm run eject` 来暴露所有的 `webpack` 配置。

这样的一个操作是 **不可逆转的** 而且增大的项目体积不好维护。

所以为了解决这部分需求 可以使用 `react-app-rewired`  和 `customize-cra` 这两个库来解决。

步骤如下：

1. 安装 `react-app-rewired`  和 `customize-cra` 

```shell
# yarn
# yarn add react-app-rewired customize-cra

# npm
# npm i react-app-rewired customize-cra
```

2. 修改 `package.json` 中的 `scripts` 字段

```json
{
  "scripts": {
   // - "start": "react-scripts start",
    "start": "react-app-rewired start",
    
   // -  "build": "react-scripts build",
    "build": "react-app-rewired build",
    
   // - "test": "react-scripts test",
    "test": "react-app-rewired test",
  }
}
```

3. 在根目录增加 `config-overrides.js` 文件让 `react-app-rewired` 读取

**文件名一定要是** `config-overrides.js` **不能改成其他文件名以及后缀**

```js
// config-overrides.js

const {
  override,
  overrideDevServer,
  addWebpackAlias,
  addLessLoader,
  addWebpackExternals,
} = require('customize-cra');

function resolve(dir) {
  return path.join(__dirname, '.', dir);
}

module.exports = {
  // webpack 配置
  webpack: override(
    addWebpackAlias({
      '@': resolve('src'),
      '@api': resolve('src/api'),
    }),
    addLessLoader(),
    addWebpackExternals({
      react: 'react',
    })
  ),
  // dev-server 环境
  devServer: overrideDevServer(config => {
    config.headers = {
      'Access-Control-Allow-Origin': '*',
    };
    return config;
  }),
};
```

操作没有问题的话，运行一下试试呢。