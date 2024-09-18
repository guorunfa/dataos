<script setup lang="ts">
import { fetchPathByName, routerTurnByPath } from '@/utils/router'
import { ChartEnum, PageEnum } from '@/enums/pageEnums'
import { getUUID } from '@/utils'
import { LayoutHeaderPro } from '@/layout/components/LayoutHeaderPro'
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
          <!-- <header-left-btn></header-left-btn> -->
        </template>
        
      </layout-header-pro>
  </div>
</template>
<style scoped lang="scss">
.test {
  width: 100px;
  height: 100px;
  background: #ff0;

}
</style>
