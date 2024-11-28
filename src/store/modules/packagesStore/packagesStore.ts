import { defineStore } from 'pinia'
import { packagesList } from '@/packages/index'
export const usePackagesStore = defineStore('usepackagesStore', {
  state: () => ({
    packagesList: Object.freeze(packagesList)
  }),
  getters: {
    getpackagesList: state => state.packagesList
  }
})
