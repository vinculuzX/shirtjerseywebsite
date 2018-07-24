import MoltinService from "../../services/moltin";

// initial state
const state = {
    products:[]
}

//mutations
const mutations = {
    setProducts(state,payload){
        state.products = payload
    }
}
//actions
const actions  = {
    getProductHomePage({commit}){
        MoltinService.getProducts(4).then(response=>{
            commit('setProducts',response)
        })
    }
}

//getters
const getters = {}

export default {
    namespace:true,
    state,
    mutations,
    action,
    getters
}