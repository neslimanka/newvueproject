import Vue from 'vue'
import Vuex from 'vuex'
import product from './modules/product/product';
import * as getters from "./getters";
import * as actions from "./actions";
import * as mutations from "./mutations";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    purchase: 0.0, //ürün girişinde set edilecek alan
    sale: 0.0, //ürün çıkışı ile beraber değişecek alan
    balance: 0.0 //sale-purchase ile değişecek alan
  },
  getters,
  mutations,
  actions,
  modules: {
    product
  }
})
