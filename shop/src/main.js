import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import 'reset-css' //引入重置样式
import "amfe-flexible/index" //rem字体大小
import 'vant/lib/index.css' //引入vant  css样式
import 'font-awesome/css/font-awesome.min.css'//图标库

import {
  Tabbar,
  TabbarItem,
  Tab, Tabs,
  Swipe, SwipeItem,
  Grid, GridItem,
  NoticeBar,
  Button,
  NavBar,
  Divider,
  Search ,
  Image as VanImage,
  Cell, CellGroup,
  Form ,Field ,
  Toast,
  Dialog,
  Area,
  GoodsAction, GoodsActionIcon, GoodsActionButton,
  Sku,
  Overlay,
  Popup,
  SubmitBar ,
  Icon,
  RadioGroup, Radio,
  Checkbox, CheckboxGroup,
  SwipeCell,
  Card ,
  ContactCard,
  AddressList,
  AddressEdit,
  CouponCell, CouponList,
} from 'vant';
Vue.use(Tabbar).use(TabbarItem); //Tabbar 标签栏
Vue.use(Tab).use(Tabs); //顶部标签页
Vue.use(Swipe).use(SwipeItem);//热门推荐轮播图
Vue.use(Grid).use(GridItem);//热门推荐-宫格
Vue.use(NoticeBar);//热门推荐-通知栏
Vue.use(Button);//按钮
Vue.use(NavBar);//导航栏
Vue.use(Divider);//分割线
Vue.use(Search);//搜索
Vue.use(VanImage);//Image图片
Vue.use(Cell).use(CellGroup);//单元格
Vue.use(Form).use(Field);//表单
Vue.use(Toast);//轻提示
Vue.use(Dialog);//弹出框
Vue.use(Area);//省市区选择
Vue.use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton);//商品导航栏
Vue.use(Sku);//商品规格
Vue.use(Overlay);//遮罩层
Vue.use(Popup);//弹出层
Vue.use(SubmitBar);//提交订单栏
Vue.use(Icon);//图标
Vue.use(Radio).use(RadioGroup);//单选框
Vue.use(Checkbox).use(CheckboxGroup);//复选框
Vue.use(SwipeCell);//滑动单元格
Vue.use(Card);//商品卡片
Vue.use(ContactCard);//联系人卡片
Vue.use(AddressList);//地址列表
Vue.use(AddressEdit);//地址编辑
Vue.use(CouponCell).use(CouponList);//优惠券选择器

Vue.config.productionTip = false

new Vue({
  router,
  store,
  data:{
    active:0
  },
  render: h => h(App)
}).$mount('#app')