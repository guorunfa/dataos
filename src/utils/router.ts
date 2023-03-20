import { getLocalStorage } from './storage'
import { LocalStorageEnum } from '../enums/localStorageEnum'
export const loginCheck = () => {
  const loginInfo = getLocalStorage(LocalStorageEnum.GO_LOGIN_INFO_STORE)
  if (!loginInfo) {
    return false
  } else {
    return true
  }
}
