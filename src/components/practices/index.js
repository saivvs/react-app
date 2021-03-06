import React,{Component} from 'react';
import {observer,inject} from 'mobx-react';

import LoadingWrapperWithFailure from '../common/LoadingWrapperWithFailure';
import NoDataView from '../common/NoDataView';


@inject('userStore')
@observer
class PracticeDataApp extends Component{
    
    componentDidMount(){
        this.doNetworkCalls();
    }
    
    doNetworkCalls=()=>{
        this.getUserStore().getUsersAPI();
    }
    getUserStore=()=>{
        return this.props.userStore;
    }
    
    renderUsersList=()=>{
        const{users} = this.getUserStore();
        if(users.length === 0){
            return <NoDataView/>;
        }
        return users.map(userName=> <div>{userName}</div>);
    }
    
    render(){
        const {getUsersApiStatus,getUsersApiError} = this.getUserStore();
        return(
            <LoadingWrapperWithFailure 
            apiStatus={getUsersApiStatus} 
            apiError={getUsersApiError}
            onRetryClick={this.doNetworkCalls}
            renderSuccessUI={this.renderUsersList}
            />
            );
    }
}

export default PracticeDataApp;