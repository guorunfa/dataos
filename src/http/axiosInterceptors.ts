import { axiosService } from './index'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { showStatus } from '@/utils'
import { ResultEnum } from '@/enums/httpEnum'
import { routerTurnByName } from '@/utils/route'
import { PageEnum } from '@/enums/pageEnums'

// 请求拦截器
axiosService.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    let token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `${token}`
    }
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
      window['$message'].error(window['$t']('http.token_overdue_message'))
      routerTurnByName(PageEnum.BASE_LOGIN_NAME)
      return Promise.resolve(res.data)
    }

    // 固定错误码重定向
    // if (ErrorPageNameMap.get(code)) {
    //   redirectErrorPage(code)
    //   return Promise.resolve(res.data)
    // }

    if (code < 200 || code >= 300) {
      // 处理http错误，抛到业务代码
      const msg = showStatus(code)
    }
    return Promise.resolve(res.data)
  },
  (error: AxiosResponse) => {
    error.data.msg = '请求超时或服务器异常，请检查网络或联系管理员！'
    window['$message'].error(error.data.msg)
    Promise.reject(error)
  }
)
