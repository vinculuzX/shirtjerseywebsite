import { gateway as MoltinGateway } from '@moltin/sdk';

const Moltin = MoltinGateway({
    client_id: 'I8u3qDDphU5BkpRacKHTYMsTPGGllgcN3eRclvl3dh'
});

// object assign to products
let products = (() => {
    return {
        getProducts: (limit) => {
            return Moltin.Products.Limit(limit).All();
        },
        getProductsCategories: (category, limit) => {
            return Moltin.Products.Filter({ eq: { categories: category } }).Limit(limit).All();
        },
    };

})();

export default products;