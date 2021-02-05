module.exports = {
  dest: process.cwd() + '/docs',
  title: 'LiuYang',
  description: '刘洋的个人博客',
  themeConfig: {
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'https://github.com/web-liuyang',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: 'GitHub',
    nav: [
      { text: '指南', link: '/guide/' },
      { text: 'React', link: '/react/' },
      { text: 'Node', link: '/node/' },
      { text: 'TypeScript', link: '/typescript/' },
      {
        text: 'Vue',
        ariaLabel: 'Vue Menu',
        items: [{ text: 'Vuepress', link: '/vue/vuepress/' }],
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
    /* 
    sidebar: {
      '/typescript/': [
        {
          title: 'WEB',
          sidebarDepth: 3,
          collapsable: false,
          children: ['', 'Description', 'HTML', 'CSS', 'JAVASCRIPT', 'TYPESCRIPT', 'VUE', 'REACT'],
        },
        {
          title: 'JAVA',
          sidebarDepth: 3,
          collapsable: false,
          children: ['', 'Description', 'HTML', 'CSS', 'JAVASCRIPT', 'TYPESCRIPT', 'VUE', 'REACT'],
        },
      ],
      '/uniapp/components/': [
        {
          title: 'WEB',
          sidebarDepth: 3,
          collapsable: false,
          children: ['', 'Description', 'HTML', 'CSS', 'JAVASCRIPT', 'TYPESCRIPT', 'VUE', 'REACT'],
        },
        {
          title: 'JAVA',
          sidebarDepth: 3,
          collapsable: false,
          children: ['', 'Description', 'HTML', 'CSS', 'JAVASCRIPT', 'TYPESCRIPT', 'VUE', 'REACT'],
        },
      ],
    },
     */
    lastUpdated: '最后更新时间',
  },
  plugins: [
    ['@vuepress/back-to-top'],
    ['vuepress-plugin-code-copy', true],
    ['vuepress-plugin-handle-sidebar'],
    [
      '@vuepress/plugin-last-updated',
      {
        transformer: (timestamp, lang) => {
          let time = new Date(timestamp);
          return time.toLocaleDateString().replace(/\//g, '-') + ' ' + time.toTimeString().substr(0, 8);
        },
      },
    ],
    // require('../../plugin/vuepress-sidebar.js'),
  ],
};
