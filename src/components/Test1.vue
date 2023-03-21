<script setup lang="ts">
import i18n from '@/i18n'
import { ref, getCurrentInstance } from 'vue'
//调用
console.log('18', i18n.global.t('global.sys_set'))

// import { I18n } from '@/components/I18n'
const _thiss: any = getCurrentInstance()?.appContext.config.globalProperties
console.log('getCurrentInstance()?.appContext.config.globalProperties', getCurrentInstance()?.appContext.config.globalProperties)

// 此处可打印_this查看是否存在$t方法 如果$t方法不存在
//检查一下i18n配置globalInjection: true是否发开如果打开了仍无效 查看下方代码
</script>

<template>
  <div class="card">
    <p>
      testtttt
      <code>components/test.vue {{ $t('global.sys_set') }}</code>
    </p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
