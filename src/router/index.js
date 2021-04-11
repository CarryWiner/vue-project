import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/views/layout/layout'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home'),
      },
      {
        path: '/rules/:userId',
        name: 'Rules',
        component: () => import('@/views/rules')
      },
      {
        path: '/weekmonth',
        name: 'Weekmonth',
        component: () => import('@/views/weekmonth')
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
