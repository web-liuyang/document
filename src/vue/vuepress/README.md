# 自动生成侧边栏

## 介绍

因为vuepress官方并没有提供自动生成侧边栏的插件，所以就自己写了一个供大伙使用。

Let's Go！

## 安装

```sh
# npm
npm i vuepress-plugin-handle-sidebar -D

# yarn
yarn add vuepress-plugin-handle-sidebar -D
```

## 使用

```js {5}
// .vuepress -> config.js
module.exports = {
  // ...
  plugins: [
    ['vuepress-plugin-auto-sidebar']
  ]
  // ...
}
```

## 参数

|    属性名     |   类型   |      描述      |  默认值   |
| :-----------: | :------: | :------------: | :-------: |
|  collapsable  | boolean  | 标题是否可折叠 |   false   |
| sidebarDepth  |  number  |  内容标题深度  |     3     |
|   titleMode   |  string  |    标题样式    | lowerCase |
| handleSidebar | function |   侧边栏处理   |     -     |

### titleMode


|     属性值     |    描述    |
| :------------: | :--------: |
|   lowerCase    |    小写    |
|   upperCase    |    大写    |
| firstUpperCase | 首字母大写 |
| firstLowerCase | 首字母小写 |

```js {5-16}
// .vuepress -> config.js
module.exports = {
  // ...
  plugins: [
    ['vuepress-plugin-auto-sidebar',
      {
        collapsable: false, // 标题是否可折叠
        sidebarDepth: 3, // 标题深度
        titleMode: 'lowerCase', // 标题样式 可选值lowerCase、upperCase、firstUpperCase、firstLowerCase
        handleSidebar(sidebar){
          console.log(sidebar);
          // ... 编辑操作
          return sidebar
        }
      }
    ]
  ]
  // ...
}
```
