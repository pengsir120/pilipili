import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import axios from './utils/axios'
import '../public/iconfont/iconfont.css'

const app = createApp(App)
app.config.globalProperties.$request = axios
app.mount('#app')
