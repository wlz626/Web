import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let defaultCity = "武汉";

export default new Vuex.Store({
  state: {
    cityName:defaultCity
  },
  mutations: {
    changeCity(state,cName){
      state.cityName = cName;
      localStorage.setItem("city",cName);
      defaultCity = localStorage.getItem("city");
    }
  },
  actions: {
  },
  modules: {
  }
})
