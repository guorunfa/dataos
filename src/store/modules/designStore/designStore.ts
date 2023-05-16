import { LocalStorageEnum } from '@/enums/localStorageEnum'
import { theme } from '@/settings/designSetting'
import { AppThemeColorType, DesignStateType } from './designStore.d'
import { dealMainColorDarkenLighten, getLocalStorage } from '@/utils'
import { defineStore } from 'pinia'
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
    }
  },
  actions: {
    // 切换主题
    changeTheme(): void {
      this.darkTheme = !this.darkTheme
      if (this.darkTheme) {
        dealMainColorDarkenLighten('--darkThemeColor', '#000000')
      } else {
        dealMainColorDarkenLighten('--darkThemeColor', '#ffffff')
      }
    },
    // 设置颜色
    setAppColor(color: AppThemeColorType): void {
      this.appTheme = color.hex
      this.appThemeDetail = color
      dealMainColorDarkenLighten('--mainPrimaryColor', color.hex)
    }
  },
  persist: {
    // The key to use in localStorage
    key: GO_DESIGN_STORE,
    storage: localStorage
  }
})
