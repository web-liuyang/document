// const webpack = require('webpack');
const path = require('path');

const resolve = (pathname) => {
  return path.resolve(__dirname, '..', pathname);
};

/*

 */

module.exports = {
  dest: process.cwd() + '/docs',
  title: 'LiuYang',
  description: '刘洋的个人博客',
  head: [
    [
      'script',
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
      DOMAINNAME: 'https://webliuyang.com/',
    },

    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'https://github.com/web-liuyang',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: 'GitHub',
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '开发规范', link: '/standard/' },
      // { text: '个人简历', link: '/info/' },
      { text: 'Node', link: '/node/' },
      {
        text: 'TypeScript',
        ariaLabel: 'TypeScript Menu',
        items: [
          { text: 'l-native-tools', link: '/typescript/l-native-tools/' },
          { text: 'l-browser-storage', link: '/typescript/l-browser-storage/' },
        ],
      },
      {
        text: 'Vue',
        ariaLabel: 'Vue Menu',
        items: [{ text: 'Vuepress', link: '/vue/vuepress/' }],
      },
      {
        text: 'React',
        ariaLabel: 'React Menu',
        items: [
          { text: 'Components', link: '/react/components/' },
          { text: 'Hooks', link: '/react/hooks/' },
        ],
      },
      {
        text: 'Uniapp',
        ariaLabel: 'uniapp Menu',
        items: [
          { text: 'Components', link: '/uniapp/components/' },
          { text: 'SDK', link: '/uniapp/sdk/' },
        ],
      },
    ],
    lastUpdated: '最后更新时间',
  },
  plugins: [
    ['@vuepress/back-to-top'],
    ['vuepress-plugin-code-copy', true],
    [
      'vuepress-plugin-handle-sidebar',
      {
        handleSidebar: (sidebar) => {
          for (const k in sidebar) {
            const { children } = sidebar[k][0];
            const idx = children.indexOf('');
            if (idx !== 0) {
              children.splice(idx, 1);
              children.unshift('');
            }
          }

          return sidebar;
        },
      },
    ],
    [
      '@vuepress/plugin-last-updated',
      {
        transformer: (timestamp, lang) => {
          let time = new Date(timestamp);
          return (
            time.toLocaleDateString().replace(/\//g, '-') + ' ' + time.toTimeString().substr(0, 8)
          );
        },
      },
    ],
  ],
  configureWebpack: (config) => {
    config.resolve.alias['@api'] = resolve('api');
    config.resolve.alias['@utils'] = resolve('utils');
    // console.log(process.cwd());
    // console.log(__dirname);
    // console.log(__filename);

    // console.log(resolve('api'));
  },
  markdown: {
    extendMarkdown: (md) => {
      // console.log(md.parse('[源码点我]'))
      // const tokens = md.parse('[源码点我](http)')
      // console.log(tokens)
      // console.log(tokens[0].children[0].attrs)
      // console.log(md.core.process.toString())
      // console.log(md.ruler)
      // function myToken(tokens, idx, options, env, self) {
      //   console.log(idx)
      //   setInterval(() => {
      //     console.log('进入了哈')
      //   }, 1000);
      //   return '';
      // };
      // md.renderer.rules['my_token'] = myToken;
      // console.log(md.renderer.rules);
      // md.renderer.ruler.after('text', 'my_rule', function replace(state) {
      //   //...
      //   console.log('123')
      // });
      // const linkOpen = md.renderer.rules.link_open;
      // console.log('123123123');
      // console.log(linkOpen.toString());
      // md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
      // console.log(idx)
      // const { relativePath } = env;
      // console.log(tokens)
      // console.log(token)
      // const token = tokens[idx];
      // const hrefIndex = token.attrIndex('href');
      // if (hrefIndex >= 0) {
      //   const link = token.attrs[hrefIndex];
      //   const href = link[1];
      //   const valid = /#DOMAINNAME/;
      //   if(valid.test(href)){
      //     console.log('成功')
      //     tokens[idx].attrs[hrefIndex][1] = href.replace(valid,'https://1.15.90.226');
      //     console.log(tokens[idx].attrs[hrefIndex])
      //     // console.log(linkOpen.toString())
      //   }
      // }
      // linkOpen(tokens, idx, options, env, self)
      // const { relativePath } = env;
      // const token = tokens[idx];
      // const hrefIndex = token.attrIndex('href');
      // if (hrefIndex >= 0) {
      //   const link = token.attrs[hrefIndex];
      //   const href = link[1];
      //   const isExternal = /^https?:/.test(href);
      //   const isSourceLink = /(\/|\.md|\.html)(#.*)?$/.test(href);
      //   const valid = /#DOMAINNAME/;
      //   if (valid.test(href)) {
      //     console.log('成功');
      //     tokens[idx].attrs[hrefIndex][1] = href.replace(valid, 'https://1.15.90.226');
      //     console.log(tokens[idx].attrs[hrefIndex]);
      //   }
      //   if (isExternal) {
      //     Object.entries(externalAttrs).forEach(([key, val]) => {
      //       token.attrSet(key, val);
      //     });
      //     if (/_blank/i.test(externalAttrs['target'])) {
      //       hasOpenExternalLink = true;
      //     }
      //   } else if (isSourceLink) {
      //     hasOpenRouterLink = true;
      //     tokens[idx] = toRouterLink(token, link, relativePath);
      //   }
      // }
      // return self.renderToken(tokens, idx, options);
      // };
    },
  },
};
