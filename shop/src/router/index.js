import Vue from 'vue'
import VueRouter from 'vue-router'
import Load from '../views/Load.vue'
import vuexs from '@/store/index'
//重写VueRouter的push函数
const OriginPush = VueRouter.prototype.push
VueRouter.prototype.push = function (location, onResolve, onReject) {
  if (onResolve || onReject) return OriginPush.call(this.location, onReject, onResolve)
  //如果出现异常不显示异常
  return OriginPush.call(this, location).catch(err => err);
}

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Load',
    component: Load,
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      'navs': true
    },
    children: [{
        path: '/home/recommend',
        name: 'Recommend',
        props: true,
        meta: {
          'navs': true
        },
        component: () => import('../views/Recommend'),
      },
      {
        path: '/home/appliances',
        name: 'Appliances',
        props: true,
        meta: {
          'navs': true
        },
        component: () => import('../views/Appliances'),
      },
      {
        path: '/home/clothing',
        name: 'Clothing',
        props: true,
        meta: {
          'navs': true
        },
        component: () => import('../views/Clothing'),
      },
      {
        path: '/home/audio',
        name: 'Audio',
        props: true,
        meta: {
          'navs': true
        },
        component: () => import('../views/Audio'),
      },
      {
        path: '/home/food',
        name: 'Food',
        props: true,
        meta: {
          'navs': true
        },
        component: () => import('../views/Food'),
      },
      {
        path: '/home/life',
        name: 'Life',
        props: true,
        meta: {
          'navs': true
        },
        component: () => import('../views/Life'),
      },
    ],
  },
  {
    path: '/new',
    name: 'New',
    meta: {
      'navs': true
    },
    component: () => import('../views/New.vue')
  },
  {
    path: '/classify',
    name: 'Classify',
    meta: {
      'navs': true
    },
    component: () => import('../views/Classify.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    meta: {
      'navs': true
    },
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/me',
    name: 'Me',
    meta: {
      'navs': true,
      'login': true
    },
    component: () => import('../views/Me.vue'),
    children: [{ //会员特权
      path: '/member',
      name: 'Member',
      component: () => import('../views/Member.vue'),
    }]
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
  { //领券中心
    path: '/coupon',
    name: 'Coupon',
    component: () => import('../views/Coupon.vue')
  },
  { //我的订单进度
    path: '/plan',
    name: 'Plan',
    component: () => import('../views/Plan.vue')
  },
  { //我的评价
    path: '/evaluate',
    name: 'Evaluate',
    component: () => import('../views/Evaluate.vue')
  },
  { //售后/退款
    path: '/refund',
    name: 'Refund',
    component: () => import('../views/Refund.vue')
  },
  { //C币专享
    path: '/coin',
    name: 'Coin',
    component: () => import('../views/Coin.vue')
  },
  { //我的活动
    path: '/activity',
    name: 'Activity',
    component: () => import('../views/Activity.vue')
  },
  { //积分兑换
    path: '/integral',
    name: 'Integral',
    component: () => import('../views/Integral.vue')
  },
  { //积分商城
    path: '/shop',
    name: 'Shop',
    component: () => import('../views/Shop.vue')
  },
  { //我的足迹
    path: '/footprint',
    name: 'Footprint',
    component: () => import('../views/Footprint.vue')
  },
  { //设置
    path: '/set',
    name: 'Set',
    component: () => import('../views/Set.vue')
  },
  { //修改密码
    path: '/password',
    name: 'Password',
    component: () => import('../views/Password.vue')
  },
  { //登陆界面
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  { //分类商品列表
    path: '/ClassifyList',
    name: 'ClassifyList',
    component: () => import('../views/ClassifyList.vue')
  },
  { //商品详情--数据
    path: '/details',
    name: 'Details',
    component: () => import('../views/Details.vue')
  },
  { //商品详情1--jsoip
    path: '/details1',
    name: 'Details1',
    component: () => import('../views/Details1.vue')
  },
  { //商品详情2 --首页新品
    path: '/details2',
    name: 'Details2',
    component: () => import('../views/Details2.vue')
  },
  { //收货地址
    path: '/address',
    name: 'Address',
    component: () => import('../views/Address.vue')
  },
  { //收货地址
    path: '/editaddress',
    name: 'Editaddress',
    component: () => import('../views/Editaddress.vue')
  },
  { //收货地址1
    path: '/editaddress1',
    name: 'Editaddress1',
    component: () => import('../views/Editaddress1.vue')
  },
  { //提交订单
    path: '/submit',
    name: 'Submit',
    component: () => import('../views/Submit.vue')
  },
  { //订单支付成功
    path: '/PaySucceed',
    name: 'PaySucceed',
    component: () => import('../views/PaySucceed.vue')
  },
]

const router = new VueRouter({
  routes
});

//全局路由守卫
router.beforeEach((to, from, next) => {
  if (to.meta.login && !vuexs.getters.logintoken) {
    next('/login')
  } else {
    next();
  }
})

export default router