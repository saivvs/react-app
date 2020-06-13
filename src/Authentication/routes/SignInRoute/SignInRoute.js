import React,{Component} from 'react';
import {observer,inject} from 'mobx-react';
import {observable,action} from 'mobx';
import {Redirect,withRouter} from 'react-router-dom';
import {getAccessToken} from '../../utils/StorageUtils.js';
import {SignInForm} from '../../components/SignInForm';
import {E_COMMERCE_PRODUCTS_PATH} from '../../../EcommercesApp/constants/RouteConstants';

@inject('authStore')
@observer
class SignInRoute extends Component{
        @observable userName
        @observable password
        @observable errorMessage
        @observable token
        @observable isLoading

     constructor(props){
         super(props);
         this.intilise();
     }
     @action.bound
     intilise(){
            this.username = '';
            this.password = '';
            this.errorMessage = '';
            this.token = '';
            this.isLoading = false;
        }


    onChangeUsername=(event)=>{
     this.username = event.target.value;
    }

    onChangePassword=(event)=>{
        this.password = event.target.value;
    }
    @action.bound
     onClickSignIn(){
        this.isLoading = true;
        const { userSignIn } = this.props.authStore;
     if(this.username === '' && this.password === ''){
         this.errorMessage = 'Please enter username';
     }
     else if(this.password === ''){
         this.errorMessage = 'Please enter password';
     }
     else if(this.password !== '' && this.username === ''){
         this.errorMessage = 'Please enter username';
     }
     else{
         this.errorMessage = '';
         userSignIn(
             {
                 username:this.username,
                 password:this.password
             },
             this.onSignInSuccess(),
             this.onSignInFailure()
             );
     }
    }
    onSignInSuccess= ()=>{
        this.gotoProductsPage();
    }
    onSignInFailure = () => {
    const { getUserSignInAPIError: apiError } = this.props.authStore;
    if (apiError !== null && apiError !== undefined) {
      this.errorMessage = 'Network Error';
    }
  };

    gotoProductsPage=()=>{
     this.props.history.push(E_COMMERCE_PRODUCTS_PATH);
    }

    render(){
       
        return(
            <SignInForm
                onChangeUsername={this.onChangeUsername}
                onChangePassword={this.onChangePassword}
                handleSignInButtonClick={this.onClickSignIn}
                errorMessage = {this.errorMessage}
                userName={this.userName}
                password={this.password}
                isLoading = {this.isLoading}
                />
            );
    }
}


const SignInRouteWithRouter=withRouter(SignInRoute);
export {SignInRouteWithRouter};
//export default withRouter(SignInRoute);