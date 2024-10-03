import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SCNU大讲堂",
  description: "华南师范大学计算机学院综测项目团队知识库",
  base: '/wiki/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/start/quick-start' }
    ],

    sidebar: [
      {
        text: '起步',
        collapsed: true,
        items: [
          { text: '快速开始', link: '/start/quick-start' },
          { text: '文档贡献', link: '/start/contribute' }
        ]
      },
      {
        text: '前端开发',
        collapsed: false,
        items: [
          { text: '浏览器渲染过程和原理', link: '/frontend/browser' },
          { text: 'JS 事件循环机制', link: '/frontend/event-loop' },
          { text: '工程化: JS 包管理器', link: '/frontend/pkg-manager' },
          { text: '工程化: Monorepo', link: '/frontend/monorepo' },
        ]
      },
      {
        text: 'DevOps',
        collapsed: false,
        items: [
          { text: 'Git', link: '/devops/git' },
          { text: 'VSCode', link: '/devops/vscode' },
          { text: '流水线和持续集成', link: '/devops/pipelines' },
          { text: 'Markdown', link: '/devops/markdown' },
        ],
      },
      {
        text: '网络协议',
        collapsed: false,
        items: [
          { text: 'HTTP 代理和抓包', link: '/network/http-proxy' },
        ],
      },
      // {
      //   text: '后端开发',
      //   collapsed: false,
      //   items: [],
      // },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/scnu-dev/wiki' }
    ]
  }
})
