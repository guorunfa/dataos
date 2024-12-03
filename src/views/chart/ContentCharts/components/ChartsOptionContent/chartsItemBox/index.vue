
<template>
  <div>
        <!-- 每一项组件的渲染 -->
        <!-- @dblclick="dblclickHandle(item)"
        @click="clickHandle(item)" -->
        <div
        class="item-box"
        v-for="(item, index) in menuOptions"
        :key="item.title"
        draggable
        @dragstart="!item.disabled && dragStartHandle($event, item)"
        @dragend="!item.disabled && dragendHandle()"
      >

      <n-text class="list-header-text" depth="3">
            <n-ellipsis>{{ item.title }}</n-ellipsis>
          </n-text>

          <div class="list-center go-flex-center go-transition" draggable="true">
          <!-- <GoIconify v-if="item.icon" class="list-img" :icon="item.icon" color="#999" width="48" style="height: auto" /> -->
          <!-- <chart-glob-image  class="list-img" :chartConfig="item" /> -->
          <img v-if="item.image" class="list-img" :src="item.image" />
        </div>
        </div>
  </div>
</template>

<script setup lang="ts">
import { omit } from 'lodash';
import { componentInstall, JSONStringify } from '@/utils'
import { DragKeyEnum } from '@/enums/editPageEnum'
import { fetchConfigComponent, fetchChartComponent } from '@/packages/index'
import { useChartEditStore } from '@/store/modules/chartEditStore/chartEditStore'
import {EditCanvasTypeEnum} from '@/store/modules/chartEditStore/chartEditStore.d'
const chartEditStore = useChartEditStore()
const props = defineProps({
  menuOptions: {                                                                                                                                                                                                                                                                                                                                                                          
    type: Array as any,
    default: () => []
  }
})
// 拖拽结束
const dragendHandle = () => {
  chartEditStore.setEditCanvas(EditCanvasTypeEnum.IS_CREATE, false)
}// 拖拽处理
const dragStartHandle = (e: DragEvent, item: any) => {
  if (item.disabled) return
  console.log('开始拖拽', item)  // 动态注册图表组件
  componentInstall(item.chartKey, fetchChartComponent(item))
  componentInstall(item.conKey, fetchConfigComponent(item))
  // 将配置项绑定到拖拽属性上
  
  e!.dataTransfer!.setData(DragKeyEnum.DRAG_KEY, JSONStringify(omit(item, ['image'])))
  // e!.dataTransfer!.setData(DragKeyEnum.DRAG_KEY, JSONStringify(item))
  // 修改状态
  chartEditStore.setEditCanvas(EditCanvasTypeEnum.IS_CREATE, true)
}
</script>

<style>
.list-img {
  width: 48px;
  height: 48px;
}

</style>