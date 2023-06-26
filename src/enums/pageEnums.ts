import { ResultEnum } from './httpEnum'

export enum PageEnum {
  BASE_LOGIN_NAME = 'Login',
  ERROR_PAGE_404 = 'ErrorPage404',
  // 首页
  BASE_HOME = '/project',
  BASE_HOME_NAME = 'Project',

  // 错误
  ERROR_PAGE_NAME_403 = 'ErrorPage403',
  ERROR_PAGE_NAME_404 = 'ErrorPage404',
  ERROR_PAGE_NAME_500 = 'ErrorPage500'
}
export const ErrorPageNameMap = new Map([
  [ResultEnum.NOT_FOUND, PageEnum.ERROR_PAGE_NAME_404],
  [ResultEnum.SERVER_FORBIDDEN, PageEnum.ERROR_PAGE_NAME_403],
  [ResultEnum.SERVER_ERROR, PageEnum.ERROR_PAGE_NAME_500]
])
export enum ChartEnum {
  // 图表创建
  CHART_HOME = '/chart/home/:id(.*)*',
  CHART_HOME_NAME = 'ChartHome'
}
