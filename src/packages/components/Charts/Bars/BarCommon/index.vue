<template>
  <v-chart ref="vChartRef" :theme="themeColor"></v-chart>
</template>
<script setup lang="ts">
const props = defineProps({
  themeSetting: {
    type: Object,
    required: true
  },
  themeColor: {
    type: Object,
    required: true
  }
})
</script>
