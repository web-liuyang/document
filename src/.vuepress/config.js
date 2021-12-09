// const webpack = require('webpack');
const path = require("path");
/** Gzip 压缩 */
const CompressionWebpackPlugin = require("compression-webpack-plugin");

const resolve = pathname => {
  return path.resolve(__dirname, "..", pathname);
};

module.exports = {
  dest: process.cwd() + "/docs",
  title: "LiuYang",
  description: "刘洋的个人博客",
  head: [
    [
      "link",
      {
        rel: "icon",
        sizes: "32x32",
        type: "image/png",
        href: "/favicon.png",
      },
    ],
    [
      "script",
      null,
      `
  var _hmt = _hmt || [];
  (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?79f707827aeccbcc6ce48133731d010c";
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);
  })();
  `,
    ],
  ],
  themeConfig: {
    customData: {
      DOMAINNAME: "https://webliuyang.com/",
    },

    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: "https://github.com/web-liuyang",
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: "GitHub",
    nav: [
      { text: "指南", link: "/guide/" },
      { text: "开发规范", link: "/standard/" },
      // { text: '个人简历', link: '/info/' },
      { text: "Node", link: "/node/" },
      {
        text: "Linux",
        ariaLabel: "Linux Menu",
        items: [
          { text: "package", link: "/linux/package/" },
          { text: "command", link: "/linux/command/" },
          { text: "shell", link: "/linux/shell/" },
        ],
      },
      {
        text: "TypeScript",
        ariaLabel: "TypeScript Menu",
        items: [
          { text: "l-native-tools", link: "/typescript/l-native-tools/" },
          { text: "l-browser-storage", link: "/typescript/l-browser-storage/" },
        ],
      },
      {
        text: "Vue",
        ariaLabel: "Vue Menu",
        items: [{ text: "Vuepress", link: "/vue/vuepress/" }],
      },
      {
        text: "React",
        ariaLabel: "React Menu",
        items: [
          { text: "Components", link: "/react/components/" },
          { text: "Hooks", link: "/react/hooks/" },
          { text: "Problem", link: "/react/problem/" },
        ],
      },
      {
        text: "Uniapp",
        ariaLabel: "uniapp Menu",
        items: [
          { text: "Components", link: "/uniapp/components/" },
          { text: "SDK", link: "/uniapp/sdk/" },
        ],
      },
    ],
    lastUpdated: "最后更新时间",
  },
  plugins: [
    ["@vuepress/back-to-top"],
    ["vuepress-plugin-code-copy", true],
    [
      "vuepress-plugin-handle-sidebar",
      {
        handleSidebar: sidebar => {
          for (const k in sidebar) {
            const { children } = sidebar[k][0];
            const idx = children.indexOf("");
            if (idx !== 0) {
              children.splice(idx, 1);
              children.unshift("");
            }
          }

          return sidebar;
        },
      },
    ],
    [
      "@vuepress/plugin-last-updated",
      {
        transformer: (timestamp, lang) => {
          let time = new Date(timestamp);
          return (
            time.toLocaleDateString().replace(/\//g, "-") + " " + time.toTimeString().substr(0, 8)
          );
        },
      },
    ],
  ],

  configureWebpack: config => {
    config.resolve.alias["@api"] = resolve("api");
    config.resolve.alias["@utils"] = resolve("utils");
    // config.plugins.push(
    //   ...[
    //     new CompressionWebpackPlugin({
    //       algorithm: "gzip",
    //       /** 匹配的文件 */
    //       test: /\.js$|\.css$\.html$|/,
    //       /** 超过10kb 压缩 */
    //       threshold: 10240,
    //       /** 不删除原文件 */
    //       deleteOriginalAssets: false,
    //     }),
    //   ]
    // );
  },
  markdown: {},
};
