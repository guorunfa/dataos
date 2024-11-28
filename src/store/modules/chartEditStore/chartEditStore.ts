import { defineStore } from 'pinia'
import { MenuEnum } from '@/enums/editPageEnum'

export const useChartEditStore = defineStore({
  id: 'chartEditStore',
  state: () => ({
    chartData: []
  }),
  actions: {
    // * 移动位置
    setMove(keyboardValue: MenuEnum) {
      console.log(keyboardValue)
    }
  }
})
