import { ResultEnum } from '@/enums/httpEnum'
import axios, { AxiosResponse, AxiosRequestConfig, AxiosInstance } from 'axios'
export const axiosPre = '/api'
export interface MyResponseType<T> {
  code: ResultEnum
  data: T
  message: string
}
export interface MyRequestInstance extends AxiosInstance {
  <T = any>(config: AxiosRequestConfig): Promise<MyResponseType<T>>
}
export interface ReqData {
  type?: string
  data?: object
  headersType?: string
}
