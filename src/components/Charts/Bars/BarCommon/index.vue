<template>
  <v-chart
    ref="vChartRef"
    :theme="themeColor"
    :option="option"
    :manual-update="isPreview()"
    :update-options="{
      replaceMerge: replaceMergeArr
    }"
    autoresize
  ></v-chart>

  <div>{{}}</div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
import { mergeTheme } from '@/packages/public/chart'
import { isPreview } from '@/utils'
const props = defineProps({
  themeSetting: {
    type: Object,

    required: true
  },
  themeColor: {
    type: Object,
    required: true
  },
  chartConfig: {
    type: Object,
    required: true
  }
})
const replaceMergeArr = ref<string[]>()
const option = computed(() => {
  return mergeTheme(props.chartConfig.option, props.themeSetting, includes)
})
</script>
