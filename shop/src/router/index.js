import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/new',
    name: 'New',
    component: () => import('../views/New.vue')
  },
  {
    path: '/classify',
    name: 'Classify',
    component: () => import('../views/Classify.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/me',
    name: 'Me',
    component: () => import('../views/Me.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
