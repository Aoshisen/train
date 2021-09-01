import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  history:{
    type:"hash"
  },
  publicPath: '/train/07/shopping-cart/dist/'
  // publicPath:"./"
});
