<template>
  <n-loading-bar-provider>
    <n-dialog-provider>
      <n-notification-provider>
        <n-message-provider>
          <slot></slot>
        </n-message-provider>
      </n-notification-provider>
    </n-dialog-provider>
  </n-loading-bar-provider>
</template>

<script lang="ts" setup>
import { NDialogProvider, NNotificationProvider, NMessageProvider, NLoadingBarProvider, useNotification } from 'naive-ui'
import { useMessage, useDialog, useLoadingBar } from 'naive-ui'
//挂载在 window 方便与在js中使用
window['$loading'] = useLoadingBar()
window['$dialog'] = useDialog()
window['$notification'] = useNotification()
window['$message'] = useMessage()
</script>
