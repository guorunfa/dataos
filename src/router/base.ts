export const LoginRoute = {
  path: '/login',
  name: 'Login',
  component: () => import('@/components/Test1.vue'),
  meta: {
    title: '登录',
  },
}
