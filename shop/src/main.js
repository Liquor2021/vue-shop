import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import 'reset-css' //引入重置样式
import "amfe-flexible/index" //rem字体大小
import 'vant/lib/index.css' //引入vant  css样式

import {
  Tabbar,
  TabbarItem,
  Tab, Tabs,
  Swipe, SwipeItem,
  Grid, GridItem,
} from 'vant';
Vue.use(Tabbar).use(TabbarItem); //Tabbar 标签栏
Vue.use(Tab).use(Tabs); //顶部标签页
Vue.use(Swipe).use(SwipeItem);//热门推荐轮播图
Vue.use(Grid).use(GridItem);//热门推荐-宫格

Vue.config.productionTip = false

new Vue({
  router,
  store,
  data:{
    active:0
  },
  render: h => h(App)
}).$mount('#app')