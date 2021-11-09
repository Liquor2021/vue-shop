import Vue from 'vue'
import VueRouter from 'vue-router'
import Load from '../views/Load.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'Load',
    component:Load,
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta:{'navs':true},
    children: [
      {
        path: '/home/recommend',
        name: 'Recommend',
        props: true,
        meta:{'navs':true},
        component: () => import('../views/Recommend'),
      },
      {
        path: '/home/appliances',
        name: 'Appliances',
        props: true,
        meta:{'navs':true},
        component:  () => import('../views/Appliances'),
      },
      {
        path: '/home/clothing',
        name: 'Clothing',
        props: true,
        meta:{'navs':true},
        component: () => import('../views/Clothing'),
      },
      {
        path: '/home/audio',
        name: 'Audio',
        props: true,
        meta:{'navs':true},
        component: () => import('../views/Audio'),
      },
      {
        path: '/home/food',
        name: 'Food',
        props: true,
        meta:{'navs':true},
        component: () => import('../views/Food'),
      },
      {
        path: '/home/life',
        name: 'Life',
        props: true,
        meta:{'navs':true},
        component: () => import('../views/Life'),
      },
    ],
  },
  {
    path: '/new',
    name: 'New',
    meta:{'navs':true},
    component: () => import('../views/New.vue')
  },
  {
    path: '/classify',
    name: 'Classify',
    meta:{'navs':true},
    component: () => import('../views/Classify.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    meta:{'navs':true},
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/me',
    name: 'Me',
    meta:{'navs':true},
    component: () => import('../views/Me.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search.vue')
  },
  {
    path: '/newArrival',
    name: 'NewArrival',
    component: () => import('../views/NewArrival.vue')
  },
  {
    path: '/hot',
    name: 'Hot',
    component: () => import('../views/Hot.vue')
  },
  {
    path: '/coupon',
    name: 'Coupon',
    component: () => import('../views/Coupon.vue')
  },
  {//我的订单进度
    path: '/plan',
    name: 'Plan',
    component: () => import('../views/Plan.vue')
  },
  {//我的评价
    path: '/evaluate',
    name: 'Evaluate',
    component: () => import('../views/Evaluate.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router