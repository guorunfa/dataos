<template>
  <n-modal
    v-model:show="showModal"
    :mask-closable="false"
    block-scroll
    :close-on-esc="closeEsc"
    preset="dialog"
    :show-icon="confirmInfoObj.showIcon"
    :title="confirmInfoObj.title"
    :closable="confirmInfoObj.closable"
    @close="onNegativeClick"
  >
    {{ confirmInfoObj.massage }}
    <div class="g-modal-footer">
      <n-button @click="onNegativeClick"> {{ $t('global.r_cancel') }} </n-button>
      <n-button @click="onPositiveClick" type="primary"> {{ $t('global.r_confirm') }} </n-button>
    </div>
  </n-modal>
</template>

<script lang="ts">
import { reactive, toRefs, watchEffect } from 'vue'
import i18n from '@/i18n'
export default {
  name: 'Modal',
  props: {
    // 模态框显示
    visible: {
      type: Boolean,
      default: false
    },

    // 按下esc是否关闭模态框
    closeEsc: {
      type: Boolean,
      default: true
    },

    // 二次确认数据
    confirmInfo: {
      type: Object,
      default: () => {}
    }
  },
  setup(props, { emit }) {
    const state = reactive({
      showModal: false,
      heightModal: 0,
      confirmInfoObj: {
        title: `${i18n.global.t('global.h_hintTitle')}`, // title
        massage: `${i18n.global.t('global.h_hint')}`, // 信息
        positiveText: `${i18n.global.t('global.r_confirm')}`, // 提交
        negativeText: `${i18n.global.t('global.r_cancel')}`, // 取消
        showIcon: true,
        closable: true
      }
    })
    watchEffect(() => {
      state.showModal = props.visible
      // 设置高度

      //  处理默认值
      state.confirmInfoObj = { ...state.confirmInfoObj, ...props.confirmInfo }
    })
    const onNegativeClick = () => {
      emit('confirmCallback', false)
    }
    const onPositiveClick = () => {
      emit('confirmCallback', true)
    }

    return {
      ...toRefs(state),
      onNegativeClick,
      onPositiveClick
    }
  }
}
</script>
<style lang="scss" src scoped></style>
<style>
.n-card > .n-card-header {
  padding: 16px 20px !important;
}
</style>
