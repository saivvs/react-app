import  React from 'react';
import {Link,Redirect} from "react-router-dom";
import {observer} from 'mobx-react';
import {observable,action } from 'mobx';

@observer
class Projects extends React.Component{
    
    @observable isLogged=false;
    
    @action.bound
    gotoGridScreenIfLoggedIn(){
        if(this.isLogged){
            this.isLogged = false; 
        }
        else{
            this.isLogged = true; 
        }
        return (
            <Redirect 
                to={{
                pathname:'/MyApps',
                }}
            />
            );
    }
   
    render(){
      if(this.isLogged){
             return this.gotoGridScreenIfLoggedIn();
         }
          return(
              <div>
            <input tpe='text' placeholder='enterYourName'/>
            <input type='password' placeholder='password' />
            
            <button onClick={this.gotoGridScreenIfLoggedIn}>LOGIN</button>
        </div>);
        
    }
}
export default Projects;