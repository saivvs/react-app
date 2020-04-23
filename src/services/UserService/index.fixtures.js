import {bindPromiseWithOnSuccess} from '@ib/mobx-promise';
import {create} from 'apisauce';
import {networkCallWithApisauce} from  '../../utils/APIUtils';
import {apiMethods} from '../../constants/APIConstants';
import userResponse from '../../fixtures/getUsersResponse.json';

class UserFixtureServices{
    
    getUserAPI(){
        return new Promise((resolve,reject)=>{
            resolve(userResponse);
        });
    }
}

export default UserFixtureServices;