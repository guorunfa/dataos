import { defineStore } from 'pinia'
import { SystemStoreType, UserInfoType, FetchInfoType } from './systemStore.d'
import { LocalStorageEnum } from '@/enums/localStorageEnum'
import { getLocalStorage, setLocalStorage } from '@/utils'
const { GO_LOGIN_INFO_STORE } = LocalStorageEnum

const storageSystem: SystemStoreType = getLocalStorage(GO_LOGIN_INFO_STORE)
// 系统数据记录
export const useSystemStore = defineStore('useSystemStore', {
  state: (): SystemStoreType =>
    storageSystem || {
      userInfo: {
        userId: undefined,
        userName: undefined,
        userToken: undefined,
        nickName: undefined
      }
      // fetchInfo: {
      //   OSSUrl: undefined
      // }
    },
  getters: {
    getUserInfo(): UserInfoType {
      return this.userInfo
    },
    getFetchInfo(): FetchInfoType {
      return this.fetchInfo
    }
  },
  actions: {
    setItem<T extends keyof SystemStoreType, K extends SystemStoreType[T]>(key: T, value: K): void {
      this.$patch(state => {
        state[key] = value
      })
      setLocalStorage(GO_LOGIN_INFO_STORE, this.$state)
    }
  }
})
