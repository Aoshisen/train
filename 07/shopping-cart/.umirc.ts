import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  publicPath:"./dist/",
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
});
