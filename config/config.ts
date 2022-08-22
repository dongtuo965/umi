import { defineConfig } from 'umi';
// 导入路由
import routes from './routers'
// 导入默认配置
import defaultSettings from './defaultSettings'
import proxy from './proxy'
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  title:defaultSettings.title,
  fastRefresh: {},
  proxy:proxy['dev'],
  // mock:false,
});
