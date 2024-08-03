import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import axios from './utils/axios'
import '../public/iconfont/iconfont.css'
import moment from "moment";
import 'moment/dist/locale/zh-cn'
import store from './store'
import mitt from 'mitt'
import router from './router/index'
// import popover from '@/utils/popover'
import Antd from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.css'

const Mit = mitt()

const app = createApp(App)
// app.directive('popover', popover)
app.config.globalProperties.$request = axios
app.config.globalProperties.$moment = moment
app.config.globalProperties.$bus = Mit
app.use(store).use(router).use(Antd).mount('#app')
