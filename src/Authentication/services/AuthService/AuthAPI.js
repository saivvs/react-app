import { create } from 'apisauce';
import { networkCallWithApisauce } from '../../utils/APIUtils';
import { apiMethods } from '../../constants/APIConstants';

import endpoints from '../endpoints';
class AuthService {
    
    api
    
    constructor(){
        this.api = create ({
            baseURL : 'https://5ea1a14db9f5ca00166c1f27.mockapi.io/api/'
        });
    }
    
    signinAPI(){
        const signinPromise = networkCallWithApisauce(
            this.api,
            endpoints.signIn,
            {},
            apiMethods.get
            );
            return signinPromise;
    }
}

export default AuthService;