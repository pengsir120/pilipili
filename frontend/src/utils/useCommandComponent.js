import { createVNode, getCurrentInstance, render } from 'vue'

const getAppendToElement = (appendTo = document.body) => {
  if (appendTo) {
    if (typeof appendTo === 'string') {
      appendTo = document.querySelector(appendTo)
    }
    if (!(appendTo instanceof HTMLElement)) {
      appendTo = document.body
    }
  }
  return appendTo
}

const initInstance = (component, props, container, appContext) => {
  const vNode = createVNode(component, props)
  vNode.appContext = appContext
  render(vNode, container)

  getAppendToElement(props.appendTo).appendChild(container)
  return vNode
}

const useCommandComponent = (component) => {
  const appContext = getCurrentInstance()?.appContext
  if (appContext) {
    const currentProvides = getCurrentInstance()?.provides
    Reflect.set(appContext, 'provides', { ...appContext.provides, ...currentProvides })
  }

  const container = document.createElement('div')
  const close = () => {
    render(null, container)
    container.parentNode?.removeChild(container)
  }

  const commandComponent = (options) => {
    if (!Reflect.has(options, 'visible')) {
      options.visible = true
    }
    if (typeof options.onClose !== 'function') {
      options.onClose = close
    } else {
      const originOnClose = options.onClose
      options.onClose = () => {
        originOnClose()
        close()
      }
    }
    const vNode = initInstance(component, options, container, appContext)
    const vm = vNode.component?.proxy
    for (const prop in options) {
      if (Reflect.has(options, prop) && !Reflect.has(vm.$props, prop)) {
        vm[prop] = options[prop]
      }
    }
    return vNode
  }

  commandComponent.close = close
  return commandComponent
}

export default useCommandComponent