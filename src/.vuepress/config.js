// const webpack = require('webpack');

module.exports = {
  dest: process.cwd() + '/docs',
  title: 'LiuYang',
  description: '刘洋的个人博客',
  themeConfig: {
    customData: {
      DOMAINNAME: 'https://1.15.90.226',
    },

    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'https://github.com/web-liuyang',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: 'GitHub',
    nav: [
      { text: '指南', link: '/guide/' },
      { text: 'Node', link: '/node/' },
      { text: 'TypeScript', link: '/typescript/' },
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
          return time.toLocaleDateString().replace(/\//g, '-') + ' ' + time.toTimeString().substr(0, 8);
        },
      },
    ],
  ],
  markdown: {
    extendMarkdown: (md) => {
      // console.log(md.parse('[源码点我]'))
      // const tokens = md.parse('[源码点我](http)')
      // console.log(tokens)
      // console.log(tokens[0].children[0].attrs)
      // console.log(md.core.process.toString())

      const linkOpen = md.renderer.rules.link_open;
      console.log('123123123');
      // console.log(linkOpen.toString());
      md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
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

        linkOpen(tokens, idx, options, env, self)

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
      };
    },
  },
};
