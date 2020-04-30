import AuthService from '../services/AuthService/AuthAPI.js';

import AuthStore from './AuthStore/AuthStore.js';

const authService = new AuthService();
const authStore = new AuthStore(authService);

export default {authStore};