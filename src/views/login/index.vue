<script setup lang="ts">
import i18n from '@/i18n'
import { FormInst } from 'naive-ui'
import { ref, reactive } from 'vue'
import { icon } from '@/plugins'
import { setLocalStorage } from '../../utils/storage'
import { LocalStorageEnum } from '@/enums/localStorageEnum'
import LangSelect from '@/components/LangSelect/index'
const { PersonOutlineIcon, LockClosedOutlineIcon } = icon.ionicons5

//调用
const formRef = ref<FormInst | null>(null)
const { GO_LOGIN_INFO_STORE } = LocalStorageEnum
const formValue = reactive({
  username: 'admin',
  password: '123456'
})
const rules = {
  username: {
    required: true,
    message: i18n.global.t('global.form_account'),
    trigger: ['blur', 'input']
  },
  password: {
    required: true,
    message: i18n.global.t('global.form_password'),
    trigger: ['blur', 'input']
  }
}
const handleLoginClick = (e: MouseEvent) => {
  e.preventDefault()
  formRef.value?.validate(errors => {
    if (!errors) {
      const { username, password } = formValue
      window['$message'].success(`${i18n.global.t('login.login_success')}!`)
      setLocalStorage(
        GO_LOGIN_INFO_STORE,
        JSON.stringify({
          username,
          password
        })
      )
    } else {
      console.log(errors)
      window['$message'].error('Invalid')
    }
  })
}
</script>

<template>
  <div class="home-header">
    <LangSelect></LangSelect>
  </div>
  <div class="home-body">
    <n-card class="home-body-login">
      <n-form ref="formRef" :label-width="80" label-placement="left" :model="formValue" :rules="rules" size="large">
        <n-form-item :label="$t('login.user_name')" path="username">
          <n-input v-model:value="formValue.username" :placeholder="$t('global.form_account')">
            <template #prefix>
              <n-icon size="18">
                <PersonOutlineIcon></PersonOutlineIcon>
              </n-icon>
            </template>
          </n-input>
        </n-form-item>
        <n-form-item :label="$t('login.password')" path="password">
          <n-input v-model:value="formValue.password" :placeholder="$t('global.form_password')">
            <template #prefix>
              <n-icon size="18">
                <LockClosedOutlineIcon></LockClosedOutlineIcon>
              </n-icon>
            </template>
          </n-input>
        </n-form-item>
        <n-form-item>
          <n-button type="primary" attr-type="button" @click="handleLoginClick">
            {{ $t('login.form_button') }}
          </n-button>
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
