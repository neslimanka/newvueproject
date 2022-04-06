import Vue from "vue";

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


            console.log(state.products);
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