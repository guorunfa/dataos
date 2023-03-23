<script setup lang="ts">
import i18n from '@/i18n'
import { FormInst, useMessage } from 'naive-ui'
import { ref, getCurrentInstance } from 'vue'
//调用
console.log('18', i18n.global.t('global.sys_set'))
const formRef = ref<FormInst | null>(null)
const message = useMessage()
</script>

<template>
  <div class="home-header"></div>
  <div class="home-body">
    <p>
      <n-form ref="formRef" inline :label-width="80" :model="formValue" :rules="rules" :size="size">
        <n-form-item label="$t('global.form_password')" path="user.name">
          <n-input v-model:value="formValue.user.name" placeholder="输入账号" />
        </n-form-item>
        <n-form-item label="密码" path="phone">
          <n-input v-model:value="formValue.phone" placeholder="输入密码" />
        </n-form-item>
        <n-form-item>
          <n-button attr-type="button" @click="handleValidateClick"> 验证 </n-button>
        </n-form-item>
      </n-form>
    </p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
