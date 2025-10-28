import { ref } from 'vue'

const currentApp = ref<string | null>(null)

export const useUseDesktop = () => {
  const openApp = (app: string) => {
    currentApp.value = app
  }

  const closeApp = () => {
    currentApp.value = null
  }

  return { currentApp, openApp, closeApp }
}