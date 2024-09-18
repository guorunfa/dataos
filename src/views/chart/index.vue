<template>
  <div>
    <!-- <n-menu v-model:value="selectValue" :options="menuOptions"> </n-menu> -->
    <n-icon size="14" :depth="2">
      <bar-chart-icon></bar-chart-icon>
    </n-icon>
    <!-- <charts-search v-show="getCharts" :menuOptions="menuOptions"></charts-search> -->
    <n-input-group>
      <n-input
        size="small"
        placeholder="搜索组件"
        v-model:value.trim="search"
        @focus="focusHandle(true)"
        @blur="focusHandle(false)"
      >
        <template #suffix>
          <!-- <n-icon v-show="!loading" :component="SearchIcon" /> -->
        </template>
      </n-input>
    </n-input-group>
    <n-menu
      class="menu-width"
      v-model:value="selectValue"
      :options="menuOptions"
      :icon-size="16"
      :indent="18"
      @update:value="clickItemHandle"
    ></n-menu>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { menuOptions } from './hooks/useAside.hook'
import { icon } from '@/plugins'
const ChartList = [...Bars, ...Lines, ...Pies, ...Scatters, ...Maps, ...Mores]
enum PackagesCategoryEnum {
  CHARTS = 'Charts',
  TABLES = 'Tables',
  INFORMATIONS = 'Informations',
  DECORATES = 'Decorates'
}
export let packagesList: any = {
  [PackagesCategoryEnum.CHARTS]: ChartList,
  [PackagesCategoryEnum.INFORMATIONS]: InformationList,
  [PackagesCategoryEnum.TABLES]: TableList,
  [PackagesCategoryEnum.DECORATES]: DecorateList
}
const selectValue = ref('1')
const isFocus = ref<boolean>(false)
const search = ref<string | null>(null)
const { BarChartIcon } = icon.ionicons5
// 聚焦设置
const focusHandle = (value: boolean) => {
  isFocus.value = value
}
</script>
<style lang="scss"></style>
