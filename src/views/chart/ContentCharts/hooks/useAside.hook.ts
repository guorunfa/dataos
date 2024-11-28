import { ref } from 'vue'
import { renderLang, renderIcon } from '@/utils'
import { menuOptions } from '../../hooks/useAside.hook'
import { usePackagesStore } from '@/store/modules/packagesStore/packagesStore'
import { PackagesCategoryEnum, PackagesCategoryName, ConfigType } from '@/packages/index.d'
import { icon } from '@/plugins'

const { AirPlaneOutlineIcon, ImageIcon, BarChartIcon } = icon.ionicons5
const { TableSplitIcon, RoadmapIcon, SpellCheckIcon, GraphicalDataFlowIcon } = icon.carbon
// 图表
export type MenuOptionsType = {
  key: string
  icon: ReturnType<typeof renderIcon>
  label: ReturnType<typeof renderLang>
  // list: ConfigType[]
}
const packagesListObj = {
  [PackagesCategoryEnum.CHARTS]: {
    icon: renderIcon(RoadmapIcon),
    label: PackagesCategoryName.CHARTS
  },
  [PackagesCategoryEnum.INFORMATIONS]: {
    icon: renderIcon(SpellCheckIcon),
    label: PackagesCategoryName.INFORMATIONS
  },
  [PackagesCategoryEnum.TABLES]: {
    icon: renderIcon(TableSplitIcon),
    label: PackagesCategoryName.TABLES
  },
  [PackagesCategoryEnum.DECORATES]: {
    icon: renderIcon(GraphicalDataFlowIcon),
    label: PackagesCategoryName.DECORATES
  },
  [PackagesCategoryEnum.PHOTOS]: {
    icon: renderIcon(ImageIcon),
    label: PackagesCategoryName.PHOTOS
  },
  [PackagesCategoryEnum.ICONS]: {
    icon: renderIcon(AirPlaneOutlineIcon),
    label: PackagesCategoryName.ICONS
  }
}
export const useAsideHook = () => {
  const packagesStore = usePackagesStore()
  const menuOptions: MenuOptionsType[] = []
  const selectValue = ref<string>('0')
  // 处理列表
  const handlePackagesList = () => {
    console.log('🚀 ~ handlePackagesList ~ packagesStore.packagesList:', packagesStore.packagesList)
    for (const val in packagesStore.packagesList) {
      menuOptions.push({
        key: val,
        // @ts-ignore
        icon: packagesListObj[val].icon,
        // @ts-ignore
        label: packagesListObj[val].label,
        // @ts-ignore
        list: packagesStore.packagesList[val]
      })
    }
  }
  handlePackagesList()
  const clickItemHandle = () => {}
  return {
    selectValue,
    menuOptions,
    clickItemHandle
  }
}
