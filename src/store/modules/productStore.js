import MoltinService from "../../services/moltin";

// initial state
const state = {
    all: []
}

//mutations
const mutations = {
        setProducts(state, products) {
            state.all = products;
        }
    }
    //actions
const actions = {
    getProductHomePage({ commit }) {
        MoltinService.getProducts().then(response => {
            commit('setProducts', response);
        })
    }
}

//getters
const getters = {}

export default {
    namespace: true,
    state,
    mutations,
    actions,
    getters
};