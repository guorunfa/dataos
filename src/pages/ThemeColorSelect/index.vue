<template>
  <n-button quaternary @click="modelShow = true">
    <n-icon size="20" :depth="1">
      <color-wand></color-wand>
    </n-icon>
  </n-button>
  <n-modal v-model:show="modelShow">
    <div class="system-color-setting">
      <n-space justify="space-between">
        <n-h3 class="title">主题颜色选择</n-h3>
        <n-icon size="20" class="cursor-pointer" @click="modelShow = false">
          <Close></Close>
        </n-icon>
      </n-space>
      <n-divider></n-divider>
      <div class="model-content" ref="contentLeftRef">
        <div class="content-left" v-if="modelShow">
          <color-list :designColor="designColorSplit" @colorSelectHandle="colorSelectHandle"></color-list>
        </div>
        <div class="content-right">
          <div class="color-name-detail">
            <n-text v-if="appThemeDetail" class="color-name">{{ appThemeDetail.name }}</n-text>
            <n-text v-else class="color-name">中国色</n-text>
            <n-text v-if="appThemeDetail" class="color-name-Pinyin">{{ appThemeDetail.pinyin.toUpperCase() }}</n-text>
            <div v-if="appThemeDetail" class="select-color" :style="{ backgroundColor: designStore.appTheme }"></div>
          </div>
          <!-- <img :src="themeColorLogo" /> -->
        </div>
      </div>
    </div>
  </n-modal>
</template>

<script lang="ts" setup>
import { AppThemeColorType } from '@/store/modules/designStore/designStore.d'
import { useDesignStore } from '@/store/modules/designStore/designStore'
import { ColorWand, Close } from '@vicons/ionicons5'
import ColorList from './components/ColorList.vue'
import designColor from '@/staticData/designColor.json'
import { useScroll } from '@vueuse/core'
import { ref, computed, toRefs, watch } from 'vue'
const modelShow = ref(false) // 弹窗显示隐藏
const contentLeftRef = ref<HTMLElement | null>(null) // 获取dom
const designStore = useDesignStore() // 主题颜色
const appThemeDetail = computed(() => designStore.appThemeDetail) // 主题颜色详情
let splitNumber = 50
const designColorSplit = ref(designColor.splice(0, splitNumber)) // 主题色分割加载
const { arrivedState } = useScroll(contentLeftRef, {
  offset: { bottom: 200 }
})
const { bottom } = toRefs(arrivedState)
const colorSelectHandle = (color: AppThemeColorType) => {
  designStore.setAppColor(color)
}
// 监听滚动到底部
watch(bottom, (value: boolean) => {
  if (value) {
    splitNumber = splitNumber + 50
    designColorSplit.value = designColor.slice(0, splitNumber)
  }
})
watch(
  () => modelShow.value,
  (modelShow: boolean) => {
    if (!modelShow) {
      splitNumber = 50
    }
  }
)
</script>

<style lang="scss" scoped>
$height: 85vh;
.system-color-setting {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 90%;
  min-width: 1000px;
  padding: 20px 25px;
  height: $height;
  border-radius: 15px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.9);
  .title {
    margin: 0;
  }
  .model-content {
    flex: 1;
    height: calc(#{$height} - 40px - 48px - 36px);
    overflow: auto;
    /* 右侧 */
    .content-right {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 300px;
      height: 100%;
      right: 50px;
      top: 0px;
      .color-name-detail {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 40px;
        .go-flex-items-center {
          flex-direction: column;
        }
        .select-color {
          margin-top: 20px;
          width: 100px;
          height: 20px;
          border-radius: 3px;
          background-image: url('@/assets/images/exception/texture.png');
        }
        .color-name {
          font-family: serif;
          font-size: 80px;
          color: #fff;
          margin: 0 auto;
          display: block;
          width: 110px;
          text-align: center;
          background-position: center top;
          background-repeat: no-repeat;
        }
        .color-name-Pinyin {
          text-align: center;
          font-family: Georgia;
          font-size: 16px;
        }
      }
    }
  }
  .model-footer {
    z-index: 1;
    text-align: end;
  }
}
</style>
