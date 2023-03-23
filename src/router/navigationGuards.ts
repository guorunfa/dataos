import { PageEnum } from '@/enums/pageEnums'
import { loginCheck } from '@/utils/router'
import { Router } from 'vue-router'
export function navigationGuards(router: Router) {
  router.beforeEach(async (to, from, next) => {
    console.log('nav')
    console.log('to', to)

    const pagesVerification = router.getRoutes().findIndex((item) => {
      return item.name === to.name
    })
    console.log('router.getRoutes()', router.getRoutes(), 'pagesVerification', pagesVerification)

    if (pagesVerification === -1) {
      next({ name: PageEnum.ERROR_PAGE_404 })
    }
    if (!loginCheck()) {
      if (to.name === PageEnum.BASE_LOGIN_NAME) {
        next()
      }
      next({ name: PageEnum.BASE_LOGIN_NAME })
    }
    next()
  })
  // 错误
  router.onError((error) => {
    console.log(error, '路由错误')
  })
}
