<script setup lang="ts">
import { fetchPathByName, routerTurnByPath } from '@/utils/router'
import { ChartEnum, PageEnum } from '@/enums/pageEnums'
import { getUUID } from '@/utils'
import { LayoutHeaderPro } from '@/layout/components/LayoutHeaderPro'
import HeaderLeftBtn from '@/views/chart/ContentHeader/headerLeftBtn/index.vue'
import contentCharts from '@/views/chart/ContentCharts/index.vue'
import ContentConfigurations from '@/views/chart/ContentConfigurations/index.vue'
const goTo = () => {
  console.log('cc', PageEnum)
  const id = getUUID()
  const path = fetchPathByName(ChartEnum.CHART_HOME_NAME, 'href')
  routerTurnByPath(path, [id], undefined, true)
}
</script>
<template>
  <div class="go-chart">
    <layout-header-pro>
        <template #left>
          <header-left-btn></header-left-btn>
        </template>
      </layout-header-pro>
      <n-layout-content content-style="overflow:hidden; display: flex">
        <div style="overflow:hidden; display: flex">
          <content-charts></content-charts>
          <!-- <content-layers></content-layers> -->
        </div>
        <ContentConfigurations></ContentConfigurations>
        </n-layout-content>
  </div>
</template>
<style scoped lang="scss">
.test {
  width: 100px;
  height: 100px;
  background: #ff0;

}
</style>                                              
