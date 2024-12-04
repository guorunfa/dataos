<template> 
  <ContentBox :showTop="false"
    :showBottom="true"
    :xScroll="true"
    :disabledScroll="true"
    @mousedown="mousedownHandleUnStop"
    @drop="dragHandle"
    @dragover="dragoverHandle"
    @dragenter="dragoverHandle"></ContentBox>
</template>
<script lang='ts' setup> 
import ContentBox from '../ContentBox/index.vue'
import { dragHandle, dragoverHandle, mousedownHandleUnStop, useMouseHandle } from './hook/useDrag.hook'
</script>
<style lang='scss'>  </style>                                                                                                                                                                                                                                                                                                                                                                                          