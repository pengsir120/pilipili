import { getCurrentInstance } from "vue"

export default function userGetGlobalProperties() {
  const instance = getCurrentInstance()
  const globalProperties = instance?.appContext.config.globalProperties
  return {
    ...globalProperties
  }
}