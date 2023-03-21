export const setLocalStorage = <T>(key: string, v: T) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(v))
  } catch (error) {
    return false
  }
}

/**
 * * 获取本地会话数据
 * @param key 键名
 * @returns any
 */
export const getLocalStorage = (key: string) => {
  const item = window.localStorage.getItem(key)
  try {
    return item ? JSON.parse(item) : item
  } catch (error) {
    return item
  }
}

/**
 * * 清除本地会话数据
 * @param name
 */
export const clearLocalStorage = (name: string) => {
  window.localStorage.removeItem(name)
}
