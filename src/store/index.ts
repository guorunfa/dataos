import { App } from 'vue'
import { createPinia } from 'pinia'

const pinia = createPinia()
export function setPinia(app: App) {
  app.use(pinia)
}
