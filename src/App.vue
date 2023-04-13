<template>
  <n-config-provider :theme="darkTheme" :theme-overrides="overridesTheme">
    <global-provider>
      <router-view></router-view>
      <n-global-style />
    </global-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { NConfigProvider, NGlobalStyle } from 'naive-ui'
import { GlobalProvider } from '@/components/GlobalProvider'
import { useThemeHook, useThemeOverridesHook } from '@/hook'
// 暗黑模式
const darkTheme = useThemeHook()
// 主题模式颜色配置
const overridesTheme = useThemeOverridesHook()
</script>
<style scoped></style>
