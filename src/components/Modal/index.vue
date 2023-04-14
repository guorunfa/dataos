<template>
  <n-modal
    v-model:show="showModal"
    preset="card"
    :mask-closable="false"
    block-scroll
    :close-on-esc="closeEsc"
    :title="modalInfoObj.title"
    :show-icon="false"
    :closable="modalInfoObj.closable"
    :style="{
      width: modalInfoObj.width + 'px',
      height: modalInfoObj.height + 'px',
      textAlign: modalInfoObj.titleAlign
    }"
    @close="closeClick"
  >
    <div class="g-modal-body" :style="{ height: heightModal + 'px' }">
      <slot></slot>
    </div>
    <div class="g-modal-footer">
      <slot name="footer"></slot>
    </div>
  </n-modal>
</template>

<script lang="ts">
import { reactive, toRefs, watchEffect } from 'vue'
import i18n from '@/i18n'
import { emit } from 'process'
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

    // 模态框内容
    modalInfo: {
      type: Object,
      default: () => {}
    }
  },
  setup(props, { emit }) {
    const state = reactive({
      showModal: false,
      heightModal: 0,
      modalInfoObj: {
        title: `${i18n.global.t('global.h_hintTitle')}`, // title
        width: 800,
        height: 600,
        titleAlign: 'center',
        closable: true
      }
    })
    watchEffect(() => {
      state.showModal = props.visible
      // 设置高度
      state.heightModal = props.modalInfo.height - 114
      //  处理默认值
      state.modalInfoObj = { ...state.modalInfoObj, ...props.modalInfo }
    })

    const closeClick = () => {
      emit('modalCallback', false)
    }

    return {
      ...toRefs(state),
      closeClick
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

<!-- 
    <Modal
    :visible="visible"
    :modalInfo="{
      width: 800,
      height: 600,
      titleAlign: 'center'
    }"
    @modalCallback="modalCallback"
  >
    <div class="form"></div>
    <template #footer>
      <n-button> {{ i18n.global.t('global.r_cancel') }} </n-button>
      <n-button type="primary"> {{ i18n.global.t('global.r_confirm') }} </n-button>
    </template>
  </Modal>
 -->
