import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { componentRegistration, setupNaiveUI } from '@/plugins'
import { setPinia } from '@/store'

async function appInit() {
  const app = createApp(App)
  //注册vue component组件
  componentRegistration(app)
  // 注册全局常用的 naive-ui 组件（按需引入）
  setupNaiveUI(app)
  setPinia(app)
  app.mount('#app')
}
void appInit()
