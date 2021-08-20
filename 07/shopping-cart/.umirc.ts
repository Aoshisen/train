import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  base:"./dist",
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
});
