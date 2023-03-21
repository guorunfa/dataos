<template>
  <no-config-provider :theme="darkTheme"> <router-view></router-view></no-config-provider>
</template>

<script setup lang="ts">
import { useThemeHook } from '@/hook'
const darkTheme = useThemeHook()
</script>
<style scoped></style>
