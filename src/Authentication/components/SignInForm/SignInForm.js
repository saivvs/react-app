import React,{Component} from 'react';
import {observer} from 'mobx-react';
import CookieConsent, { Cookie } from "react-cookie-consent";
import {AiOutlineLoading3Quarters} from 'react-icons/ai';
import {SignInPage,SignInBox,UserNameTag,PasswordTag,SignInButton,ErrorMessageTag} from './styledComponents.js';

@observer
class SignInForm extends Component{
    userNameRef = React.createRef();
    componentDidMount(){
        console.log('componentDidMount');
        this.userNameRef.current.focus();
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
                    <UserNameTag placeholder="Username" onChange={onChangeUsername} value={userName} ref={this.userNameRef}>
                    </UserNameTag>
                    <PasswordTag placeholder='Password' onChange={onChangePassword} value={password} >
                    </PasswordTag>
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