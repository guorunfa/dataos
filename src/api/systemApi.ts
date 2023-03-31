import http from '@/http'
export const loginApi = async (data: object) => {
  const res = await http('xxx', data)
  return res
}
