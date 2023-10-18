import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/home.vue')
const Detail = () => import('../views/detail.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router