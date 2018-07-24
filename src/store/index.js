import Vue from 'vue';
import Vuex from 'vuex';
import products from './modules/productStore'

Vue.use(Vuex);

const store  = new Vuex.store({
    modules:{
        products
    }
})

export default store;