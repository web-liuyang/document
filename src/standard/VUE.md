# VUE

## 1. 目录

按照以下目录结构进行扩展

```cpp
├── index.html                            入口页面
├── build                                 构建脚本目录
│   ├── build.js                          生产环境构建（编译打包）脚本
│   ├── check-versions.js                 版本验证工具
│   ├── utils.js                          主要用来处理css类文件的loader
│   ├── vue-loader.conf.js                处理vue中的样式
│   ├── webpack.base.conf.js              webpack基础配置
│   ├── webpack.dev.conf.js               webpack开发环境配置
│   └── webpack.prod.conf.js              webpack生产环境配置
├── config                                项目配置
│   ├── dev.env.js                        开发环境变量
│   ├── index.js                          项目配置文件
│   ├── prod.env.js                       生产环境变量
│   └── test.env.js                       测试环境变量
├── dist                                  打包好的项目
│   ├── html                              静态问件
│   ├── conf                              nginx配置文件
│   └── 其他                               nginx需要的文件
├── node_modules                          项目依赖模块    
├── src                                   项目源码目录    
│   ├── main.js                           入口js文件
│   ├── app.vue                           根组件
│   ├── components                        公共组件目录
│   ├── assets                            资源目录，资源会被wabpack构建
│   │   └── css                           第三方css文件，全局css文件
│   │   └── font                          字体
│   │   └── less                          全局less
│   │   └── images                        图片
│   │       └── logo.png
│   ├── router                            前端路由
│   │   └── index.js
│   ├── pages                             前端页面文件
│   │   └── index.vue
│   ├── store                              应用级数据（state）
│   │   └── store.js                     
│   ├── uitls                             工具库
│   │   └── index.js
├── static                                纯静态资源，不会被wabpack构建。
```

## 2. 其他规范

其他规范统一使用 [Vue 官方规范](https://cn.vuejs.org/v2/style-guide/)

