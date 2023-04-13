<template>
  <n-notification-provider>
    <n-loading-bar-provider>
      <n-dialog-provider>
        <dialog-content></dialog-content>
        <loading-content></loading-content>
        <confirm-message></confirm-message>
        <n-message-provider>
          <message-content></message-content>
          <slot></slot>
        </n-message-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </n-notification-provider>
</template>

<script lang="ts" setup>
import { NDialogProvider, NNotificationProvider, NMessageProvider, NLoadingBarProvider } from 'naive-ui'

import { MessageContent } from '@/components/GlobalPlugins/MessageContent'
import { DialogContent } from '@/components/GlobalPlugins/DialogContent'
import { LoadingContent } from '@/components/GlobalPlugins/LoadingContent'
import { ConfirmMessage } from '@/components/GlobalPlugins/ConfirmMessage'
</script>
