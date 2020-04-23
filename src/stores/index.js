import UserService from '../services/UserService/index.api.js';
import TodoService from '../services/TodoServices/index.api.js';

import CounterStore from './CounterStore';
import UsersStore from './UserStores';
import TodoStores from './TodoStores';

const counterStore = new CounterStore();

const userService = new UserService();
const userStore = new UsersStore (userService);

const todoService = new TodoService();
const todoStore = new TodoStores(todoService);


export default{
    counterStore,
    userStore,
    todoStore,
};