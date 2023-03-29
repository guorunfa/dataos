<template>
  <n-loading-bar-provider>
    <n-dialog-provider>
      <dialog-content></dialog-content>
      <loading-content></loading-content>
      <n-notification-provider>
        <n-message-provider>
          <message-content></message-content>
          <slot></slot>
        </n-message-provider>
      </n-notification-provider>
    </n-dialog-provider>
  </n-loading-bar-provider>
</template>

<script lang="ts" setup>
import { NDialogProvider, NNotificationProvider, NMessageProvider, NLoadingBarProvider } from 'naive-ui'
import { useMessage, useDialog, useLoadingBar } from 'naive-ui'
//挂载在 window 方便与在js中使用
window['$message'] = useMessage()
window['$loading'] = useLoadingBar()
window['$loading'].finish()
window['$dialog'] = useDialog()
</script>
