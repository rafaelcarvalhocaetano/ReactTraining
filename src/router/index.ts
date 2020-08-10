import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: () => '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/_component/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/register/_component/Register.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/dashboard/_component/Dashboard.vue'),
    redirect: () => '/dashboard/kanban',
    children: [
      {
        path: 'kanban',
        component: () => import('@/views/kanban/_component/Kanban.vue')
      },
      {
        path: 'configuration',
        component: () => import('@/views/configuration/_components/Configuration.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
