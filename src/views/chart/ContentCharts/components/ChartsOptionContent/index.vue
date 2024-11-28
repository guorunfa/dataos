<template>
  <div>
    <n-menu
      v-show="hidePackageOneCategory"
      class="chart-menu-width"
      v-model:value="selectValue"
      :options="packages.menuOptions"
      :icon-size="16"
      :indent="18"
      @update:value="clickItemHandle"
    ></n-menu>
  </div>
</template>

<script setup lang="ts">

import { reactive, ref , watch} from 'vue';
const props = defineProps({
  selectOptions: {
    type: Object,
    default: () => {}
  }
})
  const hidePackageOneCategory = ref(true);
  const selectValue = ref<string>('all')
    let packages = reactive<{
  [T: string]: any
}>({
  // 侧边栏
  menuOptions: [],
  // 当前选择
  selectOptions: {},
  // 分类归档
  categorys: {
    all: []
  },
  categoryNames: {
    all: '所有'
  },
  // 分类归档数量
  categorysNum: 0,
  // 存储不同类别组件进来的选中值
  saveSelectOptions: {}
})
// 设置初始列表
const setSelectOptions = (categorys: any) => {
  for (const val in categorys) {
    packages.selectOptions = categorys[val]
    break
  }
}
watch(
  // @ts-ignore
  () => props.selectOptions,
  (newData: { list: any[] }) => {
    packages.categorysNum = 0
    if (!newData) return
    newData.list.forEach((e: any) => {
      const value: any[] = (packages.categorys as any)[e.category]
      packages.categorys[e.category] = value && value.length ? [...value, e] : [e]
      packages.categoryNames[e.category] = e.categoryName
      packages.categorys['all'].push(e)
    })
    for (const val in packages.categorys) {
      packages.categorysNum += 1
      packages.menuOptions.push({
        key: val,
        label: packages.categoryNames[val]
      })
    }
    setSelectOptions(packages.categorys)
    // 默认选中处理
    selectValue.value = packages.menuOptions[0]['key']
  },
  {
    immediate: true
  }
)

// 处理点击事件
const clickItemHandle = (key: string) => {
  packages.selectOptions = packages.categorys[key]
}
</script>