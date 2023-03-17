// 全局注册组件
import { App } from 'vue'
const modules = import.meta.glob('./components/*/*.vue')
export async function componentRegistration(app: App) {
  for (const path in modules) {
    const module: any = await modules[path]()
    const pathSplit = path.split('/')
    app.component(pathSplit[pathSplit.length - 2], module?.default)
  }
}
