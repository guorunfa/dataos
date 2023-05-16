import Img_404 from '../assets/images/exception/image-404.png'
import Color from 'color'
import { getLocalStorage } from './storage'
import { LocalStorageEnum } from '@/enums/localStorageEnum'
const { GO_DESIGN_STORE } = LocalStorageEnum
export function requireErrorImg() {
  return Img_404
}
/**
 * * 颜色变亮
 * hsl(100, 50%, 10%) -> hsl(100, 50%, 50%)
 * @param color 颜色
 * @param concentration 0~1 浓度
 * @returns
 */
export function lighten(color: string, concentration: number) {
  return Color(color).lighten(concentration).toString()
}
/**
 * * 颜色变暗
 * hsl(100, 50%, 50%) -> hsl(100, 50%, 25%)
 * @param color 颜色
 * @param concentration 0~1 浓度
 * @returns
 */
export function darken(color: string, concentration: number) {
  return Color(color).darken(concentration).toString()
}
/**
 * * hsla 转换
 * @param color 颜色
 * @param alpha 默认1
 * @returns
 */
export function alpha(color: string, alpha = 1) {
  return Color(color).alpha(alpha).toString()
}
/**
 * * 颜色透明
 * rgba(10, 10, 10, 0.8) -> rgba(10, 10, 10, 0.4)
 * @param color 颜色
 * @param concentration 0~1 浓度
 * @returns
 */
export function fade(color: string, fade: number) {
  return Color(color).fade(fade).toString()
}
// 动态修改自动定义颜色
const setCssVar = (prop: string, val: any, dom = document.documentElement) => {
  dom.style.setProperty(prop, val)
}
/**
 * * 批量处理颜色浓度变量
 * @param color 主题色
 * @param prop 变量名
 * @returns any
 */
export const dealMainColorDarkenLighten = (prop: string, color: string) => {
  for (let i = 1; i < 11; i++) {
    setCssVar(prop + '--' + i, darken(color, i / 10))
    setCssVar(prop + '-' + i, lighten(color, i / 10))
  }
}

// 配色加载读取本地存储
export const keepTheme = () => {
  const GoDesignStore = getLocalStorage(GO_DESIGN_STORE)
  dealMainColorDarkenLighten('--mainPrimaryColor', GoDesignStore?.appTheme)
  if (GoDesignStore?.darkTheme) {
    dealMainColorDarkenLighten('--darkThemeColor', '#000000')
  } else {
    dealMainColorDarkenLighten('--darkThemeColor', '#ffffff')
  }
}
