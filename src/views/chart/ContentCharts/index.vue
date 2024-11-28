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
  <div class="menu-component-box">
          <!-- <go-skeleton :load="!selectOptions" round text :repeat="2" style="width: 90%"></go-skeleton> -->
          <charts-option-content
            v-if="selectOptions"
            :selectOptions="selectOptions"
            :key="selectValue"
          ></charts-option-content>
        </div>
</template>
<script setup lang="ts">
import chartsOptionContent from './components/ChartsOptionContent/index.vue'
import { useAsideHook } from './hooks/useAside.hook'
const {  selectValue, menuOptions , clickItemHandle, selectOptions} = useAsideHook()
console.log("🚀 ~ menuOptions:", menuOptions,'selectOptions', selectOptions.value)


</script>