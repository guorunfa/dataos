<template> 
    <!-- 每个小模块的公共样式 -->
    <div class="content-box">
    <div class="content" >
      <template v-if="disabledScroll">
        <slot></slot>
      </template>
      <template v-else-if="xScroll">
        <n-scrollbar x-scrollable>
          <n-scrollbar>
            <slot></slot>
          </n-scrollbar>
        </n-scrollbar>
      </template>

      <template v-else>
        <n-scrollbar>
          <slot></slot>
        </n-scrollbar>
      </template>
    </div>
    <div v-if="showBottom" class="bottom go-mt-0">
      <slot name="bottom"></slot>
    </div>
    <div class="aside">
      <slot name="aside"></slot>
    </div>
    </div>
</template>
<script lang='ts' setup> 
const emit = defineEmits(['back'])

defineProps({
  title: String,
  showTop: {
    type: Boolean,
    default: true
  },
  showBottom: {
    type: Boolean,
    default: false
  },
  flex: {
    type: Boolean,
    default: false
  },
  // back
  backIcon: {
    type: Boolean,
    default: true
  },
  // 背景深度
  depth: {
    type: Number,
    default: 1
  },
  // x 轴滚动
  xScroll: {
    type: Boolean,
    default: false
  },
  disabledScroll: {
    type: Boolean,
    default: false
  },
})
</script>
<style lang='scss'>  </style>