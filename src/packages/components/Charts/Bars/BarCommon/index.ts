import image from '@/assets/images/chart/charts/bar_x.png'
import { ConfigType, PackagesCategoryEnum, ChartFrameEnum } from '@/packages/index.d'
import { ChatCategoryEnum, ChatCategoryEnumName } from '../../index.d'
export const BarCommonConfig: ConfigType = {
  key: ChatCategoryEnum.BAR,
  chartKey: ChatCategoryEnum.BAR,
  conKey: ChatCategoryEnum.BAR,
  title: '柱状图',
  category: PackagesCategoryEnum.CHARTS,
  categoryName: ChatCategoryEnumName.BAR,
  package: 'chart',
  chartFrame: ChartFrameEnum.ECHARTS,
  image: image
}
