import Vue from 'vue';
import App from './App.vue';
import router from './router';
import productStore from './store/productStore';

new Vue({
    el: '#app',
    components: { App },
    router,
    productStore,
    render: h => h(App)
})