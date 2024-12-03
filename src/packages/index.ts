import { PackagesCategoryEnum, PackagesType, ConfigType, FetchComFlagType } from '@/packages/index.d'
import { ChartList } from '@/packages/components/Charts/index'
// import { DecorateList } from '@/packages/components/Decorates/index'
// import { InformationList } from '@/packages/components/Informations/index'
// import { TableList } from '@/packages/components/Tables/index'
const indexModules: Record<string, { default: string }> = import.meta.glob('./components/**/index.vue', {
  eager: true // 预加载
})

const configModules: Record<string, { default: string }> = import.meta.glob('./components/**/config.vue', {
  eager: true
})
// * 所有图表数据汇总
export let packagesList: PackagesType = {
  [PackagesCategoryEnum.CHARTS]: ChartList
  // [PackagesCategoryEnum.INFORMATIONS]: InformationList,
  // [PackagesCategoryEnum.TABLES]: TableList,
  // [PackagesCategoryEnum.DECORATES]: DecorateList
}

/**
 * * 获取配置组件
 * @param {ConfigType} dropData 配置项
 */
export const fetchConfigComponent = (dropData: ConfigType) => {
  const { key } = dropData
  return fetchComponent(key, FetchComFlagType.CONFIG)?.default
}
/**
 * * 获取组件
 * @param {string} chartName 名称
 * @param {FetchComFlagType} flag 标识 0为展示组件, 1为配置组件
 */
const fetchComponent = (chartName: string, flag: FetchComFlagType) => {
  const module = flag === FetchComFlagType.VIEW ? indexModules : configModules
  for (const key in module) {
    const urlSplit = key.split('/')
    if (urlSplit[urlSplit.length - 2] === chartName) {
      return module[key]
    }
  }
}

/**
 * * 获取展示组件
 * @param {ConfigType} dropData 配置项
 */
export const fetchChartComponent = (dropData: ConfigType) => {
  const { key } = dropData
  return fetchComponent(key, FetchComFlagType.VIEW)?.default
}
