export type AppThemeColorType = {
  CMYK: number[]
  RGB: number[]
  hex: string
  name: string
  pinyin: string
}
export interface DesignStateType {
  darkTheme: boolean
  appTheme: string
  appThemeDetail: AppThemeColorType | null
}
