import { icon } from '@/plugins/icon'
import { renderLang, renderIcon } from '@/utils'
import { PackagesCategoryEnum, PackagesType } from '@/packages/index.d'
// 图标
const { BarChartIcon } = icon.ionicons5
const { TableSplitIcon, RoadmapIcon, SpellCheckIcon, GraphicalDataFlowIcon } = icon.carbon

// 图表
export type MenuOptionsType = {
  key: string
  icon: ReturnType<typeof renderIcon>
  label: ReturnType<typeof renderLang>
  list: PackagesType
}

const menuOptions: MenuOptionsType[] = []
export { menuOptions }
