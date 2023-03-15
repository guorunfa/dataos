import { createApp, defineAsyncComponent } from 'vue'
import './style.css'
import App from './App.vue'
const app = createApp(App)

// 全局注册组件
const modules = import.meta.glob('./components/*/*.vue')

for (const path in modules) {
  const module:any = await modules[path]()
  const pathSplit = path.split('/')
  app.component(pathSplit[pathSplit.length -2], module?.default)
}
app.mount('#app')
