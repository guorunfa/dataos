import { defineStore } from 'pinia'
import { MenuEnum } from '@/enums/editPageEnum'
import {
  ChartEditStoreEnum,
  EditCanvasType,
  MousePositionType,
  TargetChartType,
  ChartEditStoreType
} from './chartEditStore.d'
export const useChartEditStore = defineStore('useChartEditStore', {
  state: (): any => ({
    // 画布属性
    editCanvas: {
      // 编辑区域 Dom
      editLayoutDom: null,
      editContentDom: null,
      // 偏移量
      offset: 20,
      // 系统控制缩放
      scale: 1,
      // 用户控制的缩放
      userScale: 1,
      // 锁定缩放
      lockScale: false,
      // 初始化
      isCreate: false,
      // 拖拽中
      isDrag: false,
      // 框选中
      isSelect: false,
      // 代码编辑中
      isCodeEdit: false
    }
  }),
  actions: {
    // * 移动位置
    setMove(keyboardValue: MenuEnum) {
      console.log(keyboardValue)
    },

    // * 设置 editCanvas 数据项
    setEditCanvas<T extends keyof EditCanvasType, K extends EditCanvasType[T]>(key: T, value: K) {
      this.editCanvas[key] = value
    },
    // * 设置目标数据 select
    setTargetSelectChart(selectId?: string | string[], push: boolean = false) {
      console.log('todo', selectId, push)

      if (selectId) {
        if (push) {
          this.targetChart.selectId.push(selectId)
        } else {
          this.targetChart.selectId = [selectId]
        }
      } else {
        this.targetChart.selectId = []
      }
    }
  }
})
