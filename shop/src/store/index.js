import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
  },
  getters:{
    logintoken(state){
      if(state.token==null||state.token.length<1){
        state.token=Cookies.get("token");
        if(!state.token){
          state.token=localStorage.getItem("token");
        }
      }
      return state.token;
    }
  },
  mutations: {
    saveToken(state, payload) {
      state.token = payload;
      Cookies.set("token", payload, {
        expires: 1
      }) //把token存储cookies里时间为一天
      localStorage.setItem("token",payload);
    },
    removeToken(state){
      state.token=null;
      Cookies.remove("token");
      localStorage.removeItem("token");
    }
  },
  actions: {},
  modules: {}
})