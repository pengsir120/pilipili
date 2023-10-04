import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import axios from './utils/axios'
import '../public/iconfont/iconfont.css'
import moment from "moment";
import 'moment/dist/locale/zh-cn'
import store from './store'

const app = createApp(App)
app.config.globalProperties.$request = axios
app.config.globalProperties.$moment = moment
app.use(store).mount('#app')
