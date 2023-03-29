<script setup lang="ts">
import i18n from '@/i18n'
import { FormInst } from 'naive-ui'
import { ref, reactive } from 'vue'
import { icon } from '@/plugins'
const { PersonOutlineIcon, LockClosedOutlineIcon } = icon.ionicons5
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
const handleLoginClick = (e: MouseEvent) => {
  e.preventDefault()
  formRef.value?.validate()
  formRef.value?.validate((errors) => {
    if (!errors) {
      window['$message'].success('Valid')
    } else {
      console.log(errors)
      window['$message'].error('Invalid')
    }
  })
}
</script>

<template>
  <div class="home-header"></div>
  <div class="home-body">
    <n-card class="home-body-login">
      <n-form ref="formRef" :label-width="80" label-placement="left" :model="formValue" :rules="rules" size="large">
        <n-form-item :label="$t('login.user_name')" path="name">
          <n-input v-model:value="formValue.name" :placeholder="$t('global.form_account')">
            <template #prefix>
              <n-icon size="18">
                <PersonOutlineIcon></PersonOutlineIcon>
              </n-icon>
            </template>
          </n-input>
        </n-form-item>
        <n-form-item :label="$t('login.password')" path="pwd">
          <n-input v-model:value="formValue.pwd" :placeholder="$t('global.form_password')">
            <template #prefix>
              <n-icon size="18">
                <LockClosedOutlineIcon></LockClosedOutlineIcon>
              </n-icon>
            </template>
          </n-input>
        </n-form-item>
        <n-form-item>
          <n-button type="primary" attr-type="button" @click="handleLoginClick"> {{ $t('login.form_button') }} </n-button>
        </n-form-item>
      </n-form>
    </n-card>
  </div>
</template>

<style scoped lang="scss">
.home-body {
  display: flex;
  &-login {
    @extend .go-background-filter;
    box-shadow: 0 0 20px 5px rgba(40, 40, 40, 0.3);
  }
}
</style>
