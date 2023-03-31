import { getLocalStorage, setLocalStorage } from '@/utils'
import { defineStore } from 'pinia'
import { lang } from '@/enums/themeEnum'
import { LangStateType } from './langStore.d'
import { LocalStorageEnum } from '../../../enums/localStorageEnum'
import { LangEnum } from '@/enums/themeEnum'
import i18n from '@/i18n'
const { GO_LANG_STORE } = LocalStorageEnum
const storageLang: LangStateType = getLocalStorage(GO_LANG_STORE)
// 语言
export const useLangStore = defineStore('useLangStore', {
  state: (): LangStateType =>
    storageLang || {
      lang
    },
  getters: {
    getLang(): LangEnum {
      return this.lang
    }
  },
  actions: {
    changeLang(lang: LangEnum): void {
      // const settingStore = useSettingStore()
      if (this.lang === lang) return
      this.lang = lang
      i18n.global.locale.value = lang
      setLocalStorage(GO_LANG_STORE, this.$state)
      // if (settingStore.getChangeLangReload) {
      //   console.log('reload')
      //   reloadRoutePage()
      // }
    }
  }
})
