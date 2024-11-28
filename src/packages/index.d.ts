// 包分类枚举
export enum PackagesCategoryEnum {
  CHARTS = 'Charts',
  TABLES = 'Tables',
  INFORMATIONS = 'Informations',
  PHOTOS = 'Photos',
  ICONS = 'Icons',
  DECORATES = 'Decorates'
}
// 图表包类型
export type PackagesType = {
  [PackagesCategoryEnum.CHARTS]: ConfigType[]
  // [PackagesCategoryEnum.INFORMATIONS]: ConfigType[]
  // [PackagesCategoryEnum.TABLES]: ConfigType[]
  // [PackagesCategoryEnum.DECORATES]: ConfigType[]
}

// 包分类名称
export enum PackagesCategoryName {
  CHARTS = '图表',
  TABLES = '列表',
  INFORMATIONS = '信息',
  PHOTOS = '图片',
  ICONS = '图标',
  DECORATES = '小组件'
}

export enum ChartFrameEnum {
  // 支持 dataset 的 echarts 框架
  ECHARTS = 'echarts',
  // UI 组件框架
  NAIVE_UI = 'naiveUI',
  // 自定义带数据组件
  COMMON = 'common',
  // 无数据变更
  STATIC = 'static'
}
// 组件配置
export type ConfigType = {
  key: string
  chartKey: string
  conKey: string
  title: string
  category: string
  categoryName: string
  package: string
  chartFrame?: ChartFrameEnum
  image: string | (() => Promise<typeof import('*.png')>)
}
