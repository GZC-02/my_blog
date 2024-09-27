import { defineConfig } from 'dumi';

const repo: string = 'my_blog'; // 项目名

export default defineConfig({
  themeConfig: {
    name: 'JAVA',
    socialLinks: {
      github: 'https://github.com/GZC-02/my_blog',
      // yuque: 'https://www.yuque.com/yuqueyonghupqqdjr/gre6wb',
    },
    nprogress: true,
    siteToken: {
      // headerHeight: 64,
      footerHeight: 100,
      // sidebarWidth: 200,
      // tocWidth: 136,
      // contentMaxWidth: 1452,
      // demoInheritSiteTheme: false, // 默认的 demo 主题不会跟随网站主题变化
    },

  },
  logo: 'icon.svg',
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  cssMinifier: 'esbuild',
  cssMinifierOptions: {
    minifyWhitespace: true,
    minifySyntax: true,
  },
});
