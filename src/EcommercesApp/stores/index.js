import ProductService from '../services/ProductServices/ProductApi.js';
import ProductStore from './ProductStore/ProductStore.js';
import CartStore from './CartStore/CartStore.js';

const productService = new ProductService;
const productStore = new ProductStore(productService);
const cartStore = new CartStore();

export default {productStore,cartStore} ;