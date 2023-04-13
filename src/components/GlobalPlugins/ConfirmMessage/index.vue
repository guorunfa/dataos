<template></template>
<script lang="ts">
import { useNotification, NotificationType } from 'naive-ui'
export default {
  name: '',
  setup() {
    const notification = useNotification()
    window['$confirmMessage'] = (
      type: NotificationType = 'success',
      meta?: string,
      duration: number = 1500,
      content: string = '提示',
      keepAliveOnHover: boolean = true
    ) => {
      notification[type]({
        content,
        meta,
        duration,
        keepAliveOnHover
      })
    }
  }
}
</script>
