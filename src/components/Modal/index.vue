<template>
  <n-modal
    preset="dialog"
    :mask-closable="false"
    block-scroll
    :close-on-esc="closeEsc"
    :title="modalInfo.title"
    v-if="modalFlag"
    v-model:show="showModal"
  >
    <slot></slot>
  </n-modal>
  <n-modal
    v-else
    v-model:show="showModal"
    :mask-closable="false"
    block-scroll
    :close-on-esc="closeEsc"
    preset="dialog"
    :title="confirmInfo.title"
    :content="confirmInfo.content"
    :positive-text="confirmInfo.positiveText"
    :negative-text="confirmInfo.negativeText"
    @positive-click="onPositiveClick"
    @negative-click="onNegativeClick"
  />
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
    // 内容显示二次确认还是模态框
    modalFlag: {
      type: Boolean,
      default: true
    },
    // 按下esc是否关闭模态框
    closeEsc: {
      type: Boolean,
      default: true
    },
    // 二次确认数据
    confirmInfo: {
      type: Object,
      default: () => {
        return {
          title: `${i18n.global.t('global.h_hintTitle')}`,
          content: `${i18n.global.t('global.h_hint')}`,
          positiveText: `${i18n.global.t('global.r_confirm')}`,
          negativeText: `${i18n.global.t('global.r_cancel')}`
        }
      }
    },
    modalInfo: {
      type: Object,
      default: () => {
        return {
          title: `${i18n.global.t('global.h_hintTitle')}`,
          content: `${i18n.global.t('global.h_hint')}`,
          positiveText: `${i18n.global.t('global.r_confirm')}`,
          negativeText: `${i18n.global.t('global.r_cancel')}`
        }
      }
    }
  },
  setup(props, { emit }) {
    const state = reactive({
      showModal: false
    })
    watchEffect(() => {
      state.showModal = props.visible
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
<style scoped lang="less"></style>
