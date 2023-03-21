import { PageEnum } from '@/enums/pageEnums'
import { loginCheck } from '@/utils/router'
import { Router } from 'vue-router'
export function navigationGuards(router: Router) {
  router.beforeEach(async (to, from, next) => {
    console.log('nav')

    const pagesVerification = router.getRoutes().findIndex((item) => item.name === to.name)

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
