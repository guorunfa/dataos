<template>
  <div class="content-left">
    <div
      class="content-left-item go-mb-0"
      v-for="(item, index) in designColorRecommend"
      :key="index"
      @click="colorSelectHandle(item)"
    >
      <n-space>
        <div class="content-left-item-color" :style="{ backgroundColor: item.hex }"></div>
        <n-space vertical>
          <n-space>
            <span :style="{ color: item.hex }">{{ item.name }}</span>
            <span class="Pinyin-upper">{{ item.pinyin.toUpperCase() }}</span>
          </n-space>
          <n-text>
            {{ item.hex }}
            <n-divider vertical></n-divider>
            {{ `rgb(${item.RGB[0]}, ${item.RGB[1]}, ${item.RGB[2]})` }}
          </n-text>
        </n-space>
      </n-space>
    </div>
    <n-divider></n-divider>
    <div
      class="content-left-item"
      v-for="(item, index) in props.designColor"
      :key="index"
      @click="colorSelectHandle(item)"
    >
      <n-space>
        <div class="content-left-item-color" :style="{ backgroundColor: item.hex }"></div>
        <n-space vertical>
          <n-space>
            <span :style="{ color: item.hex }">{{ item.name }}</span>
            <span class="Pinyin-upper">{{ item.pinyin.toUpperCase() }}</span>
          </n-space>
          <n-text>
            {{ item.hex }}
            <n-divider vertical></n-divider>
            {{ `rgb(${item.RGB[0]}, ${item.RGB[1]}, ${item.RGB[2]})` }}
          </n-text>
        </n-space>
      </n-space>
    </div>
  </div>
</template>
<script lang="ts" setup>
import designColorRecommend from '@/staticData/designColorRecommend.json'
import { AppThemeColorType } from '@/store/modules/designStore/designStore.d'
const emits = defineEmits(['colorSelectHandle'])
const props = defineProps<{
  designColor: AppThemeColorType[]
}>()
const colorSelectHandle = (color: AppThemeColorType) => {
  emits('colorSelectHandle', color)
}
</script>
<style lang="scss" scoped>
.content-left {
  display: flex;
  flex-wrap: wrap;
  margin-right: 200px;
  .content-left-item {
    position: relative;
    display: flex;
    margin-bottom: 10px;
    margin-right: 10px;
    padding: 10px 20px;
    min-width: 300px;
    border-radius: 5px;
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0);
    &::after {
      content: '';
      z-index: -1;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.7;
      overflow: hidden;
      border-radius: 5px;
      // @extend .go-background-filter-shallow;
    }
    &-color {
      width: 8px;
      height: 40px;
      border-radius: 2px;
    }
    .Pinyin-upper {
      font-size: 8px;
    }
  }
}
</style>
