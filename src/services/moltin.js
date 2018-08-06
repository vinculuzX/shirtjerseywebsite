import { gateway as MoltinGateway } from '@moltin/sdk';

const Moltin = MoltinGateway({
    client_id: 'I8u3qDDphU5BkpRacKHTYMsTPGGllgcN3eRclvl3dh'
});

// object assign to products
let products = (() => {
    return {
        getProducts: () => {
            return Moltin.Products.Filter({}).With('main_image').Limit(4).All()
        },
    };

})();

export default products;