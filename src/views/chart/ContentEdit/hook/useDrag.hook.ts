import { CreateComponentType, CreateComponentGroupType, PickCreateComponentType } from '@/packages/index.d'
import { useChartEditStore } from '@/store/modules/chartEditStore/chartEditStore'
const chartEditStore = useChartEditStore()
export const dragHandle = async (e: DragEvent) => {
  e.preventDefault()
  console.log('dragHandle', e)

  // const target = e.target as HTMLElement
  // const item = target.closest('.chart-item')
}
// * 鼠标事件
export const useMouseHandle = () => {
  // *  Click 事件, 松开鼠标触发
  const mouseClickHandle = (e: MouseEvent, item: CreateComponentType | CreateComponentGroupType) => {
    e.preventDefault()
    e.stopPropagation()
    if (item.status.lock) return
    // 若此时按下了 CTRL, 表示多选
    if (window.$KeyboardActive?.ctrl) {
      // 若已选中，则去除
      // if (chartEditStore.targetChart.selectId.includes(item.id)) {
      //   const exList = chartEditStore.targetChart.selectId.filter(e => e !== item.id)
      //   chartEditStore.setTargetSelectChart(exList)
      // } else {
      //   chartEditStore.setTargetSelectChart(item.id, true)
      // }
    }
  }
}
// * 进入拖拽区域
export const dragoverHandle = (e: DragEvent) => {
  e.preventDefault()
  e.stopPropagation()

  if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy'
}
// * 不拦截默认行为点击
export const mousedownHandleUnStop = (e: MouseEvent, item?: CreateComponentType | CreateComponentGroupType) => {
  if (item) {
    chartEditStore.setTargetSelectChart(item.id)
    return
  }
  chartEditStore.setTargetSelectChart(undefined)
}
