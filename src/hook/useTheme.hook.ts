import { useDesignStore } from '@/store/modules/designStore/designStore'
import { darkTheme } from 'naive-ui'
import { computed } from 'vue'
export const useThemeHook = () => {
  const designStore = useDesignStore()
  return computed(() => (designStore.getDarkTheme ? darkTheme : undefined))
}
