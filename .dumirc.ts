import { defineConfig } from 'dumi';

const repo = 'my_blog'; // 项目名

export default defineConfig({
  themeConfig: {
    name: 'my_blog',
  },
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
});
