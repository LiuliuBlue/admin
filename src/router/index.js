import { createRouter, createWebHashHistory } from 'vue-router'
// import profile from '../views/profile.vue'
// 公有路由表
const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },

  {
    path: '/uste',
    name: 'uste',
    component: () => import('../uste/uste.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})
export default router
