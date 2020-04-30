import { observable,action } from 'mobx';
import { API_INTIAL,API_FETCHING,API_SUCCESS,API_FAILED } from '@ib/api-constants';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise';
import {setAccessToken,clearUserSession} from '../../utils/StorageUtils.js';

class AuthStore{
    
    @observable getUserSignInAPIStatus
    @observable getUserSignInAPIERROR
    @observable token
    authAPIService
    
    constructor(authService){
        this.authAPIService = authService;
        this.initilise();    
    }
    
    @action.bound
    initilise(){
        this.getUserSignInAPIStatus = API_INTIAL;
        this.getUserSignInAPIERROR = null;
        
    }
    
    @action.bound
    setUserSignInAPIResponse(response){
        this. token = response.map((token)=>token.access_token);
        //console.log("token",token)
        setAccessToken(this.token);
    }
    
    @action.bound
    setGetUserSignInAPIError(error){
        this.getUserSignInAPIERROR = error;
    }
    
    @action.bound
    setGetUserSignInAPIStatus(apiStatus){
           this.getUserSignInAPIStatus = apiStatus;
    }
    
    @action.bound
    userSignIn(){
     const signInPromise = this.authAPIService.signinAPI();  
     //console.log('signInPromise=',signInPromise);
     return bindPromiseWithOnSuccess(signInPromise)
     .to(this.setGetUserSignInAPIStatus,this.setUserSignInAPIResponse)
     .catch(this.setGetUserSignInAPIError);
    }
    
    
    @action.bound
    userSignOut(){
        this.initilise();
        clearUserSession();
    }
    
}

export default AuthStore;