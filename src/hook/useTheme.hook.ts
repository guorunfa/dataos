import { borderRadius } from '@/settings/designSetting'
import { useDesignStore } from '@/store/modules/designStore/designStore'
import { alpha, lighten } from '@/utils'
import { darkTheme, GlobalThemeOverrides } from 'naive-ui'
import { computed, toRefs } from 'vue'
// 设置全局主题配色
export const useThemeOverridesHook = () => {
  const designStore = useDesignStore()
  const { getAppTheme } = toRefs(designStore)
  const darkTheme = computed((): GlobalThemeOverrides => {
    const commonObj = {
      common: {
        primaryColor: getAppTheme.value,
        primaryColorHover: lighten(alpha(getAppTheme.value), 0.1),
        primaryColorPressed: lighten(alpha(getAppTheme.value), 0.1),
        primaryColorSuppl: getAppTheme.value,
        borderRadius,
      },
    }
    // 亮色主题
    const lightObject = {
      common: {
        ...commonObj.common,
      },
    }
    // 暗色主题
    const dartObject = {
      common: {
        ...commonObj.common,
      },
      LoadingBar: {
        colorLoading: getAppTheme.value,
      },
    }
    return designStore.getDarkTheme ? dartObject : lightObject
  })
  return darkTheme
}
// 设置暗黑主题
export const useThemeHook = () => {
  const designStore = useDesignStore()
  return computed(() => (designStore.getDarkTheme ? darkTheme : undefined))
}
