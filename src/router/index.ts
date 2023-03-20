import { App } from 'vue'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { LoginRoute } from './base'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [LoginRoute],
})

export function setupRouter(app: App) {
  app.use(router)
}
