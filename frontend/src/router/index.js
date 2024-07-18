import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('@/views/detail/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router