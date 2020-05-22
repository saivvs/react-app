import { observable,action } from 'mobx';
import { API_INTIAL,API_FETCHING,API_SUCCESS,API_FAILED } from '@ib/api-constants';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise';
import {setAccessToken,clearUserSession} from '../../utils/StorageUtils.js';

class AuthStore{
    @observable getUserSignInAPIStatus
    @observable getUserSignInAPIERROR
    @observable token
    authAPIService
    
    constructor(authAPIService){
        this.authAPIService = authAPIService;
        this.initialise();    
    }
    
    @action.bound
    initialise(){
        this.getUserSignInAPIStatus = API_INTIAL;
        this.getUserSignInAPIError = null;
    }
    
    @action.bound
    setUserSignInAPIResponse(response){
        this.token = response.map((token)=>token.access_token);
        setAccessToken(this.token);
    }
    
    @action.bound
    setGetUserSignInAPIError(error){
        //console.log(error,'error')
        this.getUserSignInAPIError = error;
    }
    
    @action.bound
    setGetUserSignInAPIStatus(apiStatus){
        //console.log(apiStatus)
           this.getUserSignInAPIStatus = apiStatus;
    }
    
    @action.bound
    userSignIn(request, onSuccess, onFailure){
        alert('store');
        //console.log('authstore');
     const signInPromise = this.authAPIService.signinAPI();  
     return bindPromiseWithOnSuccess(signInPromise)
     .to(this.setGetUserSignInAPIStatus,response=>{
         this.setUserSignInAPIResponse(response);
         //onSuccess();
     })
     .catch(error=>{
         this.setGetUserSignInAPIError(error);
         //onFailure();
         
     });
    }
    
    @action.bound
    userSignOut(){
        this.initialise();
        clearUserSession();
    }
    
}

export {AuthStore};