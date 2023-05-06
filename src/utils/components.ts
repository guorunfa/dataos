import { defineAsyncComponent, AsyncComponentLoader } from 'vue'
/**
 * * 异步加载组件
 * @param loader
 * @returns
 */
export const loadAsyncComponent = (loader: AsyncComponentLoader) => defineAsyncComponent({ loader, delay: 20 })
