import Vue from "vue";
import { router } from "../../../router/index.js"

const state = {
    products: []
}
const getters = {
    getProducts(state) {
        return state.products;
    },
    getProduct(state) {

    }
}
const mutations = {
    //senkton çalışıyor
    updateProductList(state,product) {
        state.products.push(product);
    }
}
const actions = {
    //asenkron çalışıyor-dış servislerde kullanamak mantıklı
    initApp( {commit}) {
        Vue.http.get("https://urun-islemleri-prod-7dcf2-default-rtdb.firebaseio.com/products.json")
        .then(response => {
            let data=response.body;
            for(let key in data){
                data[key].key=key;
                commit("updateProductList",data[key])
            }

        })
    },
    saveProduct( {dispatch,commit,state},product) {
        Vue.http.post("https://urun-islemleri-prod-7dcf2-default-rtdb.firebaseio.com/products.json",product)
        .then( (response) => {
            product.key=response.body.name;
            commit("updateProductList",product)
            let tradeResult = {
                purchase: product.price,
                sale: 0,
                count: product.count
            }
            dispatch("setTradeResult",tradeResult)
            router.replace("/urun-listesi")
        })
    },
    sellProduct({commit},payload) {
    }  
}

export default {
    state,
    getters,
    mutations,
    actions
}