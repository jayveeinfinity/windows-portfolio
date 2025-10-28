import { defineStore } from 'pinia'
import type { ScreenType, OSType } from '@/types/app'

export const useAppStore = defineStore('app', {
  state: () => ({
    currentScreen: 'bootmenu' as ScreenType,
    currentBootManager: 'windows7' as OSType,
    currentOS: null as OSType,
    isLoading: false
  }),
  getters: {
    isBooting: (state) => state.currentScreen === 'boot',
    isBootMenu: (state) => state.currentScreen === 'bootmenu',
    isDesktop: (state) => state.currentScreen === 'desktop',
    isShutdown: (state) => state.currentScreen === 'shutdown',

    isBootManagerWindows7: (state) => state.currentBootManager === 'windows7',

    isWindows98: (state) => state.currentOS === 'windows98',
    isWindowsXP: (state) => state.currentOS === 'windowsxp',
    isWindows7: (state) => state.currentOS === 'windows7',
  },
  actions: {
    setActiveScreen(screen: ScreenType) {
      this.currentScreen = screen
      console.log(this.currentScreen)
    },

    setActiveBootManager(os: OSType) {
      this.currentBootManager = os
    },

    setActiveOS(os: OSType) {
      this.currentOS = os
      console.log(this.currentOS)
    },

    toggleLoading(state?: boolean) {
      this.isLoading = state ?? !this.isLoading
    },
  }
})
