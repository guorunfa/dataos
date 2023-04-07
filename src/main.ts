import { createApp } from 'vue'
import App from './App.vue'
import { componentRegistration, setupNaiveUI } from '@/plugins'
import { setPinia } from '@/store'
import i18n from './i18n'
import router, { setupRouter } from './router'

async function appInit() {
  const app = createApp(App)
  //   app.config.globalProperties.$t = i18n.global.t
  //注册vue component组件
  componentRegistration(app)
  // 注册全局常用的 naive-ui 组件（按需引入）
  setupNaiveUI(app)
  // 挂载状态管理pinia
  setPinia(app)
  // 挂在路由
  setupRouter(app)
  // 路由准备就绪后挂载APP实例
  await router.isReady()
  // 语言注册
  app.use(i18n)
  // 挂载到页面
  app.mount('#app', true)
}
void appInit()
