import { PageEnum } from '@/enums/pageEnums'
import { App } from 'vue'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { LoginRoute } from './base'
import { navigationGuards } from './navigationGuards'
import Layout from '@/layout/index.vue'
const RootRoute: any[] = [
  {
    path: '/',
    name: 'home',
    redirect: PageEnum.BASE_HOME,
    component: Layout,
    meta: {
      title: 'home',
    },
  },
  LoginRoute,
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: RootRoute,
})

export function setupRouter(app: App) {
  app.use(router)
  navigationGuards(router)
}
