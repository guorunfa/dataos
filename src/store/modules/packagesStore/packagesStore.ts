import { defineStore } from 'pinia'
import { packagesList } from '@/packages/index'
export const usePackagesStore = defineStore('usepackagesStore', {
  state: () => ({
    packagesList: packagesList
  }),
  getters: {
    getpackagesList: state => state.packagesList
  }
})
