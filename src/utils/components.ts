import { defineAsyncComponent, AsyncComponentLoader } from 'vue'
// import { AsyncLoading, AsyncSkeletonLoading } from '@/components/GoLoading'
/**
 * * 异步加载组件
 * @param loader
 * @returns
 */
export const loadAsyncComponent = (loader: AsyncComponentLoader) => defineAsyncComponent({ loader, delay: 20 })

/**
 * * 动态注册组件
 */
export const componentInstall = <T>(key: string, node: T) => {
  if (!window['$vue'].component(key) && node) {
    console.log('🚀 ~ componentInstall ~ key:', key)
    window['$vue'].component(key, node)
  }
}

export const loadSkeletonAsyncComponent = (loader: AsyncComponentLoader<any>) =>
  defineAsyncComponent({
    loader,
    // loadingComponent: AsyncSkeletonLoading,
    delay: 20
  })
