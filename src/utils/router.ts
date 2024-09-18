import { LocalStorageEnum } from '../enums/localStorageEnum'
import { ResultEnum } from '@/enums/httpEnum'
import { ErrorPageNameMap, PageEnum } from '@/enums/pageEnums'
import router from '@/router'
import { clearLocalStorage, getLocalStorage } from './storage'

/**
 * * 判断是否是预览页
 * @returns boolean
 */
export const isPreview = () => {
  return document.location.hash.includes('preview')
}
export const loginCheck = () => {
  const loginInfo = getLocalStorage(LocalStorageEnum.GO_LOGIN_INFO_STORE)
  if (!loginInfo) {
    return false
  } else {
    return true
  }
}

/**
 * * 根据名字跳转路由
 * @param pageName
 * @param isReplace
 * @param windowOpen
 */
export const routerTurnByName = (pageName: string, isReplace?: boolean, windowOpen?: boolean) => {
  if (windowOpen) {
    const path = fetchPathByName(pageName, 'href')
    openNewWindow(path)
    return
  }
  if (isReplace) {
    router.replace({
      name: pageName
    })
    return
  }
  router.push({
    name: pageName
  })
}
/**
 * * 新开页面
 * @param url
 */
export const openNewWindow = (url: string) => {
  return window.open(url, '_blank')
}
/**
 * * 根据名称获取路由信息
 * @param pageName
 * @param pageName
 */
export const fetchPathByName = (pageName: string, p?: string) => {
  try {
    const pathData = router.resolve({
      name: pageName
    })
    return p ? (pathData as any)[p] : pathData
  } catch (error) {
    window['$message'].warning('查询路由信息失败，请联系管理员！')
  }
}

/**
 * * 根据路径跳转路由
 * @param path
 * @param query
 * @param isReplace
 * @param windowOpen
 */
export const routerTurnByPath = (
  path: string,
  query?: Array<string | number>,
  isReplace?: boolean,
  windowOpen?: boolean
) => {
  let fullPath = ''
  if (query?.length) {
    fullPath = `${path}/${query.join('/')}`
  }
  if (windowOpen) {
    return openNewWindow(fullPath)
  }
  if (isReplace) {
    router.replace({
      path: fullPath
    })
    return
  }
  router.push({
    path: fullPath
  })
}
/**
 * * 错误页重定向
 * @param icon
 * @returns
 */
export const redirectErrorPage = (code: ResultEnum) => {
  if (!code) return false
  const pageName = ErrorPageNameMap.get(code)
  if (!pageName) return false
  routerTurnByName(pageName)
}

/**
 * * 退出
 */
export const logout = () => {
  clearLocalStorage(LocalStorageEnum.GO_LOGIN_INFO_STORE)
  routerTurnByName(PageEnum.BASE_LOGIN_NAME)
}
