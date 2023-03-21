import { LocalStorageEnum } from '@/enums/localStorageEnum'
import { theme } from '@/settings/designSetting'
import { AppThemeColorType, DesignStateType } from './designStore.d'
import { getLocalStorage } from '@/utils'
import { defineStore } from 'pinia'
import { setLocalStorage } from '@/utils/storage'
const { GO_DESIGN_STORE } = LocalStorageEnum
const storageDesign = getLocalStorage(GO_DESIGN_STORE)
// const { darkTheme, appTheme, appThemeDetail } = theme
export const useDesignStore = defineStore('useDesignStore', {
  state: (): DesignStateType => storageDesign || theme,
  getters: {
    getDarkTheme(): boolean {
      return this.darkTheme
    },
    getAppTheme(): string {
      return this.appTheme
    },
    getAppThemeDetail(): AppThemeColorType | null {
      return this.appThemeDetail
    },
  },
  actions: {
    // 切换主题
    changeTheme(): void {
      this.darkTheme = !this.darkTheme
      setLocalStorage(GO_DESIGN_STORE, this.$state)
    },
    // 设置颜色
    setAppColor(color: AppThemeColorType): void {
      this.appTheme = color.hex
      this.appThemeDetail = color
      setLocalStorage(GO_DESIGN_STORE, this.$state)
    },
  },
})
