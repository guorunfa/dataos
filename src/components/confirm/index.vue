<script lang="ts">
import { useNotification, NotificationType } from 'naive-ui'
export default {
  name: '',
  props: {
    content: {
      type: String,
      default: ''
    },
    meta: {
      type: String,
      default: ''
    },
    duration: {
      type: Number,
      default: 1000
    },
    keepAliveOnHover: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const notification = useNotification()
    return {
      notify(type: NotificationType) {
        notification[type]({
          content: props.content,
          meta: props.meta,
          duration: props.duration,
          keepAliveOnHover: props.keepAliveOnHover
        })
      }
    }
  }
}
</script>
