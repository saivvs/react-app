import React,{Component} from 'react';
import {observer,inject} from 'mobx-react';
import {observable,action} from 'mobx';
import {Redirect} from "react-router-dom";
import CookieConsent, { Cookies } from "react-cookie-consent";

import {getAccessToken} from "../../utils/StorageUtils.js";
import {SignInPage,SignInBox,UserNameTag,PasswordTag,SignInButton,ErrorMessageTag} from '../../styledComponents/SignInStyleComponents';

@inject('authStore')
@observer
class SignIn extends Component{
    @observable userName
    @observable password
    @observable errorMessage
    @observable token
    
    constructor(props){
        super(props);
        this.intilise();   
    }
    @action.bound
    intilise(){
        this.userName = '',
        this.password = '',
        this.errorMessage = '';
        this.token = '';
    }
    @action.bound
    onChangeUsername(){
     this.userName = event.target.value; 
    }
    @action.bound
    onChangePassword(){
        this.password = event.target.value;
    }
    @action.bound
    onClickSignIn(){
     if(this.userName === '' && this.password === ''){
         this.errorMessage = 'Please Enter UserName';
     }
     else if(this.password === ''){
         this.errorMessage = 'Please Enter Password';
     }
     else if(this.password !== '' && this.userName === ''){
         this.errorMessage = 'Please Enter UserName';
     }
     else{
         this.errorMessage = '';
         this.props.authStore.userSignIn();
         this.token=getAccessToken();
     }
    }
    @action.bound
    gotoProductsPage(){
        return(
            <Redirect
                to={{
                    pathname:'/productspage'
                }}
            />
            );
    }
    render(){
        if(this.token !== ''){
            return this.gotoProductsPage();
        }
        else{
        return(
            <SignInPage>
                <SignInBox>
                    Sign In
                    <UserNameTag onChange={this.onChangeUsername} placeholder='userName' type='text'>
                    </UserNameTag>
                    <PasswordTag onChange={this.onChangePassword} placeholder='password' type='password'>
                    </PasswordTag>
                    <SignInButton onClick={this.onClickSignIn}>
                        Sign In
                    </SignInButton>
                    <ErrorMessageTag>
                        {this.errorMessage}
                    </ErrorMessageTag>
                </SignInBox>
                   <CookieConsent>
                    This website uses cookies to enhance the user experience.
                </CookieConsent>
            </SignInPage>
                    );
         }
    }
}
export default SignIn;