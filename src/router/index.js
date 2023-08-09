import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ManageView from '@/views/ManageView.vue'

const routes = [
  {
    name: 'home',
    path: '/',
    component: HomeView
  },
  {
    name: 'about',
    path: '/about',
    component: AboutView
  },
  {
    name: 'manage',
    alias: '/manage',
    path: '/manage-music',
    component: ManageView
  },
  {
    path: '/:catchAll(.*)*',
    redirect: { name: 'home' }
  }
]

/**
 * * 使用linkExactAtiveClass来自定义精准匹配路由时的router-link样式
 */

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-yellow-500'
})

export default router
