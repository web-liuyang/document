# 介绍

[源码点我](https://github.com/web-liuyang/l-browser-storage)

通过typescript编写对浏览器存储方法封装，可以进行数据加密

封装的方法有localStorage、sessionStorage、cookie

cookie是使用 [js-cookie](https://www.npmjs.com/package/js-cookie), 具体可以看官方文档

## 安装

```sh
# npm
npm i l-browser-storage

# yarn
yarn add l-browser-storage
```

## 使用

```tsx
// ES
import { local, session, cookie } from "l-browser-storage";

// CommonJS
const { local, session, cookie }  = require("l-browser-storage");
```

