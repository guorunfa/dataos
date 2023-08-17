<script setup lang="ts">
import { fetchPathByName, routerTurnByPath } from '@/utils/router'
import { ChartEnum, PageEnum } from '@/enums/pageEnums'
import { getUUID } from '@/utils'

const goTo = () => {
  console.log('cc', PageEnum)
  const id = getUUID()
  const path = fetchPathByName(ChartEnum.CHART_HOME_NAME, 'href')
  routerTurnByPath(path, [id], undefined, true)
}
</script>
<template>
  <n-button @click="goTo" class="xinjian" type="primary"> 新建 </n-button>
</template>
<style scoped lang="scss">
.test {
  width: 100px;
  height: 100px;
  background: #ff0;

}
</style>
