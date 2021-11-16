import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'
import {
  Toast
} from 'vant'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    msg: [], //被点击商品信息
    cartShop: ["1"], //购物车商品
    orders: [], //订单数据
    money: 0, //余额
    waits: [], //存储已完成待发货的订单数据
    time: [], //存储所有订单时间
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
    },
    //获取订单信息
    getOrders(state) {
      if (state.orders == null || state.orders.length < 1) {
        state.orders = JSON.parse(localStorage.getItem("orders"));
      }
      return state.orders;
    },
    // 获取余额
    getmoney(state) {
      if (state.money == null || state.money < 1) {
        state.money = Number(JSON.parse(localStorage.getItem("money")));
        if (state.money <= 0 || state.money == null) {
          state.money = 88888;
          localStorage.setItem("money", JSON.stringify(state.money));
        }
      }
      return state.money;
    },
    // 获取待发货数据
    getsend(state) {
      if (state.waits == null || state.waits.length < 1) {
        state.waits = JSON.parse(localStorage.getItem("waits"));
      }
      return state.waits;
    },
    //获取订单时间
    getTime(state) {
      if (state.time == null || state.time.length < 1) {
        state.time = JSON.parse(localStorage.getItem("time"));
      }
      return state.time;
    },

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
    },
    //加入订单
    order(state, payload) {
      if (state.orders.length < 1) {
        state.orders = payload;
        state.orders = Array(state.orders)
        localStorage.setItem("orders", JSON.stringify(state.orders));
      } else {
        state.orders.push(payload);
        localStorage.setItem("orders", JSON.stringify(state.orders));
      }
    },
    //清空订单数据
    removeOrder(state) {
      state.orders = [],
        localStorage.setItem("orders", JSON.stringify(state.orders));
    },
    //消费余额
    paymoney(state, payload) {
      state.money = Number(state.money) - payload;
      if (state.money < 0) {
        Toast.fail("余额不足，支付失败 !");
        return;
      }
      localStorage.setItem("money", JSON.stringify(state.money));
    },
    //存储已完成待发货的订单数据
    waitSend(state, payload) {
      if (state.waits == null || state.waits.length < 1) {
        state.waits = Array(payload);
        // if (typeof state.waits != Array) {
        //   state.waits = Array(state.waits);
        // }
        localStorage.setItem("waits", JSON.stringify(state.waits));
      } else {
        state.waits.unshift(payload);
        localStorage.setItem("waits", JSON.stringify(state.waits));
      }
    },
    //存储订单时间
    storageTime(state, payload) {
      if (state.time == null || state.time.length < 1) {
        state.time = payload;
        if (typeof state.time != Array) {
          state.time = Array(state.time);
        }
        localStorage.setItem("time", JSON.stringify(state.time));
      } else {
        state.time.unshift(payload);
        localStorage.setItem("time", JSON.stringify(state.time));
      }
    },
  },
  actions: {},
  modules: {},
})