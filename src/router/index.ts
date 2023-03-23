import { PageEnum } from '@/enums/pageEnums'
import { App } from 'vue'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { LoginRoute } from './base'
import { navigationGuards } from './navigationGuards'
import Layout from '@/layout/index.vue'
const RootRoute: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: PageEnum.BASE_HOME,
    component: Layout,
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/components/Test1.vue'),
      },
    ],
  },
  LoginRoute,
]
const router = createRouter({
  history: createWebHashHistory(''),
  routes: RootRoute,
})

export function setupRouter(app: App) {
  app.use(router)
  navigationGuards(router)
}
export default router
