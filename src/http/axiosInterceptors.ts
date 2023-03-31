import { axiosService } from './index'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { ResultEnum } from '@/enums/httpEnum'
import { redirectErrorPage, routerTurnByName } from '@/utils/router'
import { ErrorPageNameMap, PageEnum } from '@/enums/pageEnums'
import { LocalStorageEnum } from '@/enums/localStorageEnum'
import i18n from '@/i18n'
import { getLocalStorage } from '@/utils'

// 请求拦截器
axiosService.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 获取 token
    const info = getLocalStorage(LocalStorageEnum.GO_LOGIN_INFO_STORE)
    // 重新登录
    if (!info) {
      routerTurnByName(PageEnum.BASE_LOGIN_NAME)
      return config
    }
    config.headers.Authorization = `${info}`
    return config
  },
  (error) => {
    // 错误抛到业务代码
    error.data = {}
    error.data.msg = '服务器异常，请联系管理员！'
    return Promise.resolve(error)
  }
)

// 响应拦截器
axiosService.interceptors.response.use(
  (res: AxiosResponse) => {
    const { code } = res.data as { code: number }
    if (code === undefined || code === null) return Promise.resolve(res)
    // 成功
    if (code === ResultEnum.SUCCESS) {
      return Promise.resolve(res.data)
    }

    //登陆过期
    if (code === ResultEnum.TOKEN_OVERDUE) {
      window['$message'].error(i18n.global.t('http.token_overdue_message'))
      routerTurnByName(PageEnum.BASE_LOGIN_NAME)
      return Promise.resolve(res.data)
    }

    // 固定错误码重定向
    if (ErrorPageNameMap.get(code)) {
      redirectErrorPage(code)
      return Promise.resolve(res.data)
    }
    return Promise.resolve(res.data)
  },
  (error: AxiosResponse) => {
    error.data.msg = '请求超时或服务器异常，请检查网络或联系管理员！'
    window['$message'].error(error.data.msg)
    Promise.reject(error)
  }
)
