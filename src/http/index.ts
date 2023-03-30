// http.ts
import { ContentTypeEnum } from '@/enums/httpEnum'
import axios from 'axios'
import { axiosPre, MyRequestInstance, ReqData } from './http.config'

export const axiosService = axios.create({
  baseURL: `${import.meta.env.PROD ? import.meta.env.VITE_PRO_PATH : ''}${axiosPre}`,
  // 是否跨站点访问控制请求
  withCredentials: true,
  timeout: 30000,
  // 对拿到的数据进行转换
  transformResponse: [
    (data) => {
      if (typeof data === 'string' && data.startsWith('{')) {
        data = JSON.parse(data)
      }
      return data
    },
  ],
}) as unknown as MyRequestInstance
export const get = <T = any>(url: string, params: ReqData) => {
  return axiosService<T>({
    url: url,
    method: 'get',
    params: params.data,
  })
}
export const post = <T = any>(url: string, params: ReqData) => {
  return axiosService<T>({
    url: url,
    method: 'post',
    data: params.data,
    headers: {
      'Content-Type': params.headersType || ContentTypeEnum.JSON,
    },
  })
}
export const patch = <T = any>(url: string, params: ReqData) => {
  return axiosService<T>({
    url: url,
    method: 'patch',
    data: params.data,
    headers: {
      'Content-Type': params.headersType || ContentTypeEnum.JSON,
    },
  })
}

export const put = <T = any>(url: string, params: ReqData) => {
  return axiosService<T>({
    url: url,
    method: 'put',
    data: params.data,
    headers: {
      'Content-Type': params.headersType || ContentTypeEnum.JSON,
    },
  })
}

export const del = <T = any>(url: string, params?: object) => {
  return axiosService<T>({
    url: url,
    method: 'delete',
    params,
  })
}

// 获取请求函数，默认get
export const http = (url: string, params: ReqData) => {
  switch (params.type) {
    case 'get':
      return get(url, params)
    case 'post':
      return post(url, params)

    case 'patch':
      return patch(url, params)

    case 'put':
      return put(url, params)

    case 'delete':
      return del(url, params)

    default:
      return get(url, params)
  }
}
export default http
