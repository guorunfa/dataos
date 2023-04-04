// 语言
import { createI18n } from 'vue-i18n' //引入vue-i18n组件
import { getLocalStorage } from '@/utils'
import { LocalStorageEnum } from '@/enums/localStorageEnum'
import { LangEnum, lang } from '@/enums/themeEnum'
import { LangStateType } from '@/store/modules/langStore/langStore.d'
import zh from './zh/index'
import en from './en/index'

const langStorage: LangStateType = getLocalStorage(LocalStorageEnum.GO_LANG_STORE)

// // 语言数组
export const langList = [
  {
    label: '中文',
    key: LangEnum.ZH
  },
  {
    label: 'English',
    key: LangEnum.EN
  }
]

const i18n = createI18n({
  legacy: false,
  globalInjection: true, //全局使用$t方法
  locale: langStorage?.lang || lang,
  fallbackLocale: langStorage?.lang || lang, //  没有英文的时候默认中文语言
  messages: {
    [LangEnum.ZH]: zh,
    [LangEnum.EN]: en
  }
})

export default i18n
