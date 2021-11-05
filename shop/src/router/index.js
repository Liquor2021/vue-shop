import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '/home/recommend',
        name: 'Recommend',
        props: true,
        component: () => import('../views/Recommend'),
      },
      {
        path: '/home/appliances',
        name: 'Appliances',
        props: true,
        component:  () => import('../views/Appliances'),
      },
      {
        path: '/home/clothing',
        name: 'Clothing',
        props: true,
        component: () => import('../views/Clothing'),
      },
      {
        path: '/home/audio',
        name: 'Audio',
        props: true,
        component: () => import('../views/Audio'),
      },
      {
        path: '/home/smart',
        name: 'Smart',
        props: true,
        component: () => import('../views/Smart'),
      },
      {
        path: '/home/phone',
        name: 'Phone',
        props: true,
        component: () => import('../views/Phone'),
      },
      {
        path: '/home/live',
        name: 'Live',
        props: true,
        component: () => import('../views/Live'),
      },
    ],
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
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router