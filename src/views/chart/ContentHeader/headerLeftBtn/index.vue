<template>
 <n-space class="header-left-btn" :wrap="false" :size="25">
    <n-button size="small" quaternary @click="goHomeHandle()">
      <template #icon>
        <n-icon :depth="3">
          <home-icon></home-icon>
        </n-icon>
      </template>
    </n-button>
  </n-space>
</template>
<script setup lang="ts">
import { renderIcon, goDialog, goHome } from '@/utils'
import { icon } from '@/plugins'
const { LayersIcon, BarChartIcon, PrismIcon, HomeIcon, ArrowBackIcon, ArrowForwardIcon } = icon.ionicons5
// 返回首页
const goHomeHandle = () => {
  goDialog({
    message: '返回将不会保存任何操作',
    isMaskClosable: true,
    onPositiveCallback: () => {
      goHome()
      // useRemoveKeyboard()
    }
  })
}
</script>