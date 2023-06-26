import { PageEnum } from '@/enums/pageEnums'
// 引入路径
const importPath = {
  'PageEnum.BASE_HOME_NAME': () => import('@/views/project/index.vue')
}
const projectRoutes = {
  path: PageEnum.BASE_HOME,
  name: PageEnum.BASE_HOME_NAME,
  component: importPath['PageEnum.BASE_HOME_NAME'],
  meta: {
    title: '项目',
    isRoot: true,
    noKeepAlive: true
  }
}
export default projectRoutes
