export default {
  mounted(el, binding, vnode) {
    console.log(el);
    // console.log(binding);
    console.log(el.parentNode);
  },
  updated() {

  },
  unmounted(el, binding) {
    // 解除事件监听
    
  }
}