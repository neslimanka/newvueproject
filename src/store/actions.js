import Vue from "vue";

export const setTradeResult = ({state,commit},tradeResult) => {
commit("updateTradeResult",tradeResult);
let tradeData= {
    purchase: state.purchase,
    sale: state.sale
} 
Vue.http.put("https://urun-islemleri-prod-7dcf2-default-rtdb.firebaseio.com/trade-result.json",tradeData)
.then(response => {
    console.log(response)
})

}
export const getTradeResult = ({commit}) => {

    Vue.http.get("https://urun-islemleri-prod-7dcf2-default-rtdb.firebaseio.com/trade-result.json")
    .then(response => {
        commit("updateTradeResult",response.body)
    })
}   