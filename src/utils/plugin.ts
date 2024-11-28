import { DialogEnum } from '@/enums/pluginEnum'
import { icon } from '@/plugins'
import { DialogReactive } from 'naive-ui'
import { renderIcon } from '@/utils'
import { dialogIconSize, maskClosable } from '@/settings/designSetting'
const { InformationCircleIcon } = icon.ionicons5
export const goDialog = (params: {
  // 基本
  type?: DialogEnum
  // 标题
  title?: string | (() => any)
  // 提示
  message?: string
  // 确定提示词
  positiveText?: string
  // 取消提示词
  negativeText?: string
  // 是否不展示取消按钮
  closeNegativeText?: boolean
  // 点击遮罩是否关闭
  isMaskClosable?: boolean
  // 回调
  onPositiveCallback: Function
  onNegativeCallback?: Function
  // 异步
  promise?: boolean
  promiseResCallback?: Function
  promiseRejCallback?: Function
  [T: string]: any
}) => {
  const {
    type,
    title,
    message,
    positiveText,
    negativeText,
    closeNegativeText,
    isMaskClosable,
    onPositiveCallback,
    onNegativeCallback,
    promise,
    promiseResCallback,
    promiseRejCallback
  } = params

  const typeObj = {
    // 自定义
    [DialogEnum.DELETE]: {
      fn: window['$dialog'].warning,
      message: message || '是否删除此数据?'
    },
    // 原有
    [DialogEnum.WARNING]: {
      fn: window['$dialog'].warning,
      message: message || '是否执行此操作?'
    },
    [DialogEnum.ERROR]: {
      fn: window['$dialog'].error,
      message: message || '是否执行此操作?'
    },
    [DialogEnum.SUCCESS]: {
      fn: window['$dialog'].success,
      message: message || '是否执行此操作?'
    }
  }

  const dialog: DialogReactive = typeObj[type || DialogEnum.WARNING]['fn']({
    // 导入其余 NaiveUI 支持参数
    ...params,
    title: title || '提示',
    icon: renderIcon(InformationCircleIcon, { size: dialogIconSize }),
    content: typeObj[type || DialogEnum.WARNING]['message'],
    positiveText: positiveText || '确定',
    negativeText: closeNegativeText ? undefined : negativeText || '取消',
    // 是否通过遮罩关闭
    maskClosable: isMaskClosable || maskClosable,
    onPositiveClick: async () => {
      // 执行异步
      if (promise && onPositiveCallback) {
        dialog.loading = true
        try {
          const res = await onPositiveCallback()
          promiseResCallback && promiseResCallback(res)
        } catch (err) {
          promiseRejCallback && promiseRejCallback(err)
        }
        dialog.loading = false
        return
      }
      onPositiveCallback && onPositiveCallback(dialog)
    },
    onNegativeClick: async () => {
      onNegativeCallback && onNegativeCallback(dialog)
    }
  })
}
