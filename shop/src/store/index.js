import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    msg: [], //被点击商品信息
    cartShop: ["1"], //购物车商品
  },
  getters: {
    //localStorage获取
    //登录token
    logintoken(state) {
      if (state.token == null || state.token.length < 1) {
        state.token = Cookies.get("token");
        if (!state.token) {
          state.token = localStorage.getItem("token");
        }

      }
      return state.token;
    },
    //产品详情
    getmsg(state) {
      if (state.msg == null || state.msg.length < 1) {
        state.msg = JSON.parse(localStorage.getItem("msg"));
      }
      return state.msg;
    },
    //购物车信息
    getcart(state) {
      // console.log(state.cartShop);
      if (state.cartShop == null || state.cartShop.length < 2) {
        state.cartShop = JSON.parse(localStorage.getItem("cartShop"));
        if (!state.cartShop) {
          state.cartShop = ["1"]
        }
      }
      // console.log(state.cartShop);
      return state.cartShop;
    }
  },
  mutations: {
    //保存登录token
    saveToken(state, payload) {
      state.token = payload;
      Cookies.set("token", payload, {
        expires: 1
      }) //把token存储cookies里时间为一天
      localStorage.setItem("token", payload);
    },
    //删除登录token
    removeToken(state) {
      state.token = null;
      Cookies.remove("token");
      localStorage.removeItem("token");
    },
    //产品详情
    msg(state, payload) {
      state.msg = payload;
      localStorage.setItem("msg", JSON.stringify(payload));
    },
    //加入购物车
    addcart(state, payload) {
      let key = false;
      // console.log(state.cartShop);
      if (state.cartShop) {
        if (state.cartShop.length > 1) {
          state.cartShop.forEach((v) => {
            if (v.id == payload.id) {
              key = true;
            }
          })
        }
      }

      if (key) return;
      state.cartShop.unshift(payload);
      // console.log(state.cartShop);
      localStorage.setItem("cartShop", JSON.stringify(state.cartShop));
    },
    //清空购物车
    removecart(state) {
      localStorage.removeItem("cartShop");
      state.cartShop = ["1"];
      localStorage.setItem("cartShop", JSON.stringify(state.cartShop));
    },
    //删除单个商品
    delecart(state, payload) {
      state.cartShop = JSON.parse(localStorage.getItem("cartShop"));
      for (let i = 0; i < state.cartShop.length; i++) {
        if (state.cartShop[i].id == payload.id) {
          state.cartShop.splice(i, 1);
          localStorage.setItem("cartShop", JSON.stringify(state.cartShop));
          return;
        }
      }
      // let index = state.cartShop.lastIndexOf(payload);
      // state.cartShop.splice(index, 1);
      // localStorage.setItem("cartShop", JSON.stringify(state.cartShop));
    },
  },
  actions: {},
  modules: {},
})