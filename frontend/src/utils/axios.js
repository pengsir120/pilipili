import axios from 'axios'

const service = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASE, // 域名配置
  timeout: 50000
})

// request拦截器
service.interceptors.request.use((config) => {
  config.headers['Authorization'] = sessionStorage.getItem('authorization') ? `Bearer ${sessionStorage.getItem('authorization')}` : ''
  config.headers['Content-Type'] = config.headers['Content-Type'] || 'application/json'
  if(config.type == 'file') {
    config.headers['Content-Type'] = 'application/multipart/form-data'
  }else if(config.type == 'form') {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  }
  return config
}, (error) => {
  Promise.reject(error)
})

// response拦截器
service.interceptors.response.use((response) => {
  // console.log(response);
  return response
}, (error) => {
  return error
})

export default service