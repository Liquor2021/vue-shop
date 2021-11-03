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
} from 'vant';
Vue.use(Tabbar).use(TabbarItem); //Tabbar 标签栏
Vue.use(Tab).use(Tabs); //顶部标签页

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')