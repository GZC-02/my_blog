import { defineConfig } from 'dumi';

const repo: string = 'my_blog'; // 项目名

export default defineConfig({
  themeConfig: {
    name: 'JAVA',
    socialLinks: {
      github: 'https://github.com/java/JAVA',
      yuque: 'https://www.yuque.com/yuqueyonghupqqdjr/gre6wb',
    },
    siteToken: {
      headerHeight: 64,
      footerHeight: 300,
      sidebarWidth: 240,
      tocWidth: 176,
      contentMaxWidth: 1152,
      demoInheritSiteTheme: false, // 默认的 demo 主题不会跟随网站主题变化
    },
  },
  logo: 'icon.svg',
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',

});
