import React,{Component} from 'react';
import {observer} from 'mobx-react';
import CookieConsent, { Cookie } from "react-cookie-consent";
import {AiOutlineLoading3Quarters} from 'react-icons/ai';
import {SignInPage,SignInBox,UserNameTag,PasswordTag,SignInButton,ErrorMessageTag} from './styledComponents.js';
import {InputElement} from '../../../common/components/InputElement';
@observer
class SignInForm extends Component{
   // userNameRef = React.createRef();
    componentDidMount(){
        //console.log('componentDidMount');
        //this.userNameRef.current.focus();
        //document.getElementById('userName').focus();
    }
    render(){
        const {
            onChangeUsername,
            onChangePassword,
            onClickSignIn,
            errorMessage,
            userName,
            password,isLoading
        } = this.props;
        return(
            
            <SignInPage>
                <SignInBox>
                    Sign In
                    <InputElement placeholder="Username" onChangeHandler={onChangeUsername}  defaultValue={userName} type='text'/>
                    <InputElement placeholder="Password" onChangeHandler={onChangePassword}  defaultValue={password} type='password'/>
                    <SignInButton data-testid='sign-in-button' onClick={onClickSignIn}>
                        {isLoading?<AiOutlineLoading3Quarters className='fa-spin' />:'Sign In'}
                    </SignInButton>
                    <ErrorMessageTag>
                        {errorMessage}
                    </ErrorMessageTag>
                </SignInBox>
                <CookieConsent>
                    This website uses cookies to enhance the user experience.
                </CookieConsent>
            </SignInPage>
            );
    }
}

export {SignInForm};