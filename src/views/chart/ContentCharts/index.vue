<template>
  <div>
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
<script setup lang="ts">
import { useAsideHook } from './hooks/useAside.hook'
const {  selectValue, menuOptions , clickItemHandle} = useAsideHook()
console.log("🚀 ~ menuOptions:", menuOptions)


</script>