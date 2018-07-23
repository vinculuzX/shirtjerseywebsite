import IndexPage from '../pages/IndexPage.vue';
import ProductsPage from '../pages/ProductsPage.vue';

let routes = [{
    path: '',
    name: 'Index',
    component: IndexPage
}, {
    path: '/products',
    name: 'Products',
    component: ProductsPage
}];

export default routes;