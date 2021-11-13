import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    msg: [], //被点击商品信息
  },
  getters: {
    logintoken(state) {
      if (state.token == null || state.token.length < 1) {
        state.token = Cookies.get("token");
        if (!state.token) {
          state.token = localStorage.getItem("token");
        }

      }
      return state.token;
    },
    getmsg(state) {
      if (state.msg == null || state.msg.length < 1) {
        state.msg=JSON.parse(localStorage.getItem("msg"));
      }
      return state.msg;
    }
  },
  mutations: {
    saveToken(state, payload) {
      state.token = payload;
      Cookies.set("token", payload, {
        expires: 1
      }) //把token存储cookies里时间为一天
      localStorage.setItem("token", payload);
    },
    removeToken(state) {
      state.token = null;
      Cookies.remove("token");
      localStorage.removeItem("token");
    },
    msg(state, payload) {
      state.msg = payload;
      localStorage.setItem("msg", JSON.stringify(payload));
    }
  },
  actions: {},
  modules: {}
})