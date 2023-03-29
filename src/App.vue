<template>
  <n-config-provider :theme="darkTheme" :theme-overrides="overridesTheme">
    <n-message-provider>
      <router-view></router-view>
    </n-message-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { NConfigProvider } from 'naive-ui'
import { useThemeHook, useThemeOverridesHook } from '@/hook'
// 暗黑模式
const darkTheme = useThemeHook()
// 主题模式颜色配置
const overridesTheme = useThemeOverridesHook()
</script>
<style scoped></style>
