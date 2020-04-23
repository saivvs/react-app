import {bindPromiseWithOnSuccess} from '@ib/mobx-promise';
import {create} from 'apisauce';
import {networkCallWithApisauce} from  '../../utils/APIUtils';
import {apiMethods} from '../../constants/APIConstants';


class UserServices{
    
    api
    
    constructor(){
        this.api = create({
            baseURL :'https://jsonplaceholder.typicode.com/',
        });
    }
    
    
    getUserAPI(){
        const usersPromise = networkCallWithApisauce(
            this.api,
            'users/',
            {},
            apiMethods.get
            );
        // return bindPromiseWithOnSuccess(usersPromise)
        // .to(this.setUsersAPIStatus,this.setUsersAPIResponses)
        // .catch(this.setUsersAPIError);
        return usersPromise;
    }
}

export default UserServices;