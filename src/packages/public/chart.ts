import merge from 'lodash/merge'
import pick from 'lodash/pick'
export const mergeTheme = <T, U>(option: T, themeSetting: U, includes: string[]) => {
  return (option = merge({}, pick(themeSetting, includes), option))
}
