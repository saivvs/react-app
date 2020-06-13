import { create } from 'apisauce';
import { networkCallWithApisauce } from '../../utils/APIUtils';
import { apiMethods } from '../../constants/APIConstants';

import endpoints from '../endpoints';
class AuthAPI {

    api

    constructor(){
        this.api = create ({
            baseURL : 'https://eb1e66624b73.ngr0.i0/api/essential_kit_management/'
        });
    }

    signinAPI(){
        const signinPromise = networkCallWithApisauce(
            this.api,
            'user/V1',
            {},
            apiMethods.get
            );
            return signinPromise;
    }
}

export   {AuthAPI};