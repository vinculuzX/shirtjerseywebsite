import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const productStore = new Vuex.Store({
    state: {
        products: []
    },

})