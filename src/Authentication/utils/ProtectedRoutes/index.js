import React from 'react';
import {observable} from 'mobx'
import {Route,Redirect} from 'react-router-dom';

import {getAccessToken} from '../StorageUtils.js';


export const ProtectedRoute = (
    props
    )=>{
        const {componentPath,renderComponent} = props;
        //console.log(renderComponent,'sgddyufc');
        const isLoggedIn = Boolean(getAccessToken());
        return isLoggedIn?(
            <Route path={componentPath} component={renderComponent}/>
            ):(
                <Redirect to={{pathname:"/Sign-In-Page"}}/>);
    };
    
// export {ProtectedRoute};