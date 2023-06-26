<template>
  <div>
    <n-menu v-model:value="selectValue" :options="menuOptions"> </n-menu>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { menuOptions } from './hooks/useAside.hook'

const selectValue = ref('1')
</script>
<style lang="scss"></style>
