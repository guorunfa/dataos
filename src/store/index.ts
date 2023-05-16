import { App } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia()
export function setPinia(app: App) {
  pinia.use(piniaPluginPersistedstate)
  app.use(pinia)
}
