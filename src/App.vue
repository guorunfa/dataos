<template>
  <n-config-provider :theme="darkTheme"> <router-view></router-view></n-config-provider>
</template>

<script setup lang="ts">
import { NConfigProvider } from 'naive-ui'
import { useThemeHook } from '@/hook'
const darkTheme = useThemeHook()
console.log('darkTheme', darkTheme)
</script>
<style scoped></style>
