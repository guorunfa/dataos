<script setup lang="ts">
import i18n from '@/i18n'
import { FormInst } from 'naive-ui'
import { ref, reactive } from 'vue'
//调用
console.log('18', i18n.global.t('global.sys_set'))
const formRef = ref<FormInst | null>(null)
// const message = useMessage()
const formValue = reactive({
  name: 'admin',
  pwd: '123456',
})
const rules = {
  name: {
    required: true,
    message: i18n.global.t('global.form_account'),
    trigger: ['blur', 'input'],
  },
  pwd: {
    required: true,
    message: i18n.global.t('global.form_password'),
    trigger: ['blur', 'input'],
  },
}
const handleLoginClick = () => {}
</script>

<template>
  <div class="home-header"></div>
  <div class="home-body">
    <p>
      <n-form ref="formRef" inline :label-width="80" label-placement="left" :model="formValue" :rules="rules" size="large">
        <n-form-item :label="$t('login.user_name')" path="name">
          <n-input v-model:value="formValue.name" :placeholder="$t('global.form_account')" />
        </n-form-item>
        <n-form-item :label="$t('login.password')" path="pwd">
          <n-input v-model:value="formValue.pwd" :placeholder="$t('global.form_password')" />
        </n-form-item>
        <n-form-item>
          <n-button type="primary" attr-type="button" @click="handleLoginClick"> {{ $t('login.form_button') }} </n-button>
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
