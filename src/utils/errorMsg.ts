import { ResultEnum } from '@/enums/httpEnum'
export const showStatus = (status: number) => {
  let message = ''
  switch (status) {
    case ResultEnum.SERVER_FORBIDDEN:
      message = '拒绝访问(403)'
      break
    case ResultEnum.NOT_FOUND:
      message = '请求出错(404)'
      break
    case ResultEnum.TIMEOUT:
      message = '请求超时(60000)'
      break
    case ResultEnum.SERVER_ERROR:
      message = '服务器错误(500)'
      break
    default:
      message = `连接出错(${status})!`
  }
  return `${message}，请检查网络或联系管理员！`
}
