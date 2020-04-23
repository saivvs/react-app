/*global fetch*/
import {observable,action} from 'mobx';
import {API_INTIAL,API_FETCHING,API_SUCCESS,API_FAILED} from '@ib/api-constants';
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise';
//import {create} from 'apisauce';
//import {networkCallWithApisauce} from  '../../utils/APIUtils';
//import {apiMethods} from '../../constants/APIConstants';
//import UserServices from '../../services/UserService/index.fixtures.js';
class UserStore{
    @observable getUsersApiStatus
    @observable getUSersApiErrors
    @observable users
    userService
    
    constructor(userService){
        this.userService = userService;
        this.init();
    }
    
    @action.bound
    init(){
        console.log('int');
        this.getUsersApiStatus = API_INTIAL;
        this.getUSersApiError = null;
        this.users=[];
    }
    
    @action.bound
    clearStore(){
        this.init();
    }
    @action.bound
    setUsersAPIResponses(users){
        this.users = users.map((user)=>user.name);
    }
    @action.bound
    setUsersAPIError(error){
        this.getUserApiError =error;
    }
    
    @action.bound
    setUsersAPIStatus(apiStatus){
            this.getUsersApiStatus = apiStatus;
            
    }
    @action.bound
    getUsersAPI(){
        const usersPromise = this.userService.getUserAPI();
        // const api = create({
        //     baseURL: 'https://jsonplaceholder.typicode.com/'
        // });
        // const usersPromise = networkCallWithApisauce(
        //     api,
        //     'users/',
        //     {},
        //     apiMethods.get
        //     );
        return bindPromiseWithOnSuccess(usersPromise)
        .to(this.setUsersAPIStatus,this.setUsersAPIResponses)
        .catch(this.setUsersAPIError);
    }
}


// const userService = new UserServices();
// const userStore = new UserStore(userService);
export default UserStore;