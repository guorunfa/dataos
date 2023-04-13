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

import { MessageContent } from '@/components/GlobalPlugins/MessageContent'
import { DialogContent } from '@/components/GlobalPlugins/DialogContent'
import { LoadingContent } from '@/components/GlobalPlugins/LoadingContent'
</script>
