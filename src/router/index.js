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
        path: '/addRules',
        name: 'addRules',
        component: () => import('@/views/addRules')
      },
      {
        path: '/addDate',
        name: 'addDate',
        component: () => import('@/views/addDate')
      },
      {
        path: '/weekComments/:id',
        name: 'WeekComments',
        component: () => import('@/views/weekComments'),
      },
      {
        path: '/monthComments/:id',
        name: 'MonthComments',
        component: () => import('@/views/monthComments'),
      },
      {
        path: '/pdf',
        name: 'Pdf',
        component: () => import('@/views/pdf/index')
      },
      {
        path: '/suggestions',
        name: 'suggestions',
        component: () => import('@/views/suggestions')
      }
    ]
  },
]

const router = new VueRouter({
  // mode: 'history',
  routes
})

export default router
