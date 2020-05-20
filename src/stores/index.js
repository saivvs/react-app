import UserService from '../services/UserService/index.api.js';
import TodoService from '../services/TodoServices/index.api.js';
import {AuthAPI} from '../Authentication/services/AuthService/AuthAPI.js'
import ProductService from '../EcommercesApp/services/ProductServices/ProductApi.js';

import CounterStore from './CounterStore';
import UsersStore from './UserStores';
import TodoStores from './TodoStores';
import {AuthStore} from '../Authentication/stores/AuthStore';
import {ProductStore} from '../EcommercesApp/stores/ProductStore';
import {CartStore} from '../EcommercesApp/stores/CartStore';

const counterStore = new CounterStore();

const userService = new UserService();
const userStore = new UsersStore (userService);

const todoService = new TodoService();
const todoStore = new TodoStores(todoService);

const authAPI = new AuthAPI();
const authStore = new AuthStore(authAPI);

const productService = new ProductService();
const productStore = new ProductStore(productService);
const cartStore = new CartStore(productStore);


const stores= {counterStore,
    userStore,
    todoStore,
    authStore,
    productStore,
    cartStore
  };


export {
    stores
};






