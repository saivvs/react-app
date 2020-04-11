import {observable,action} from 'mobx';

class MobxEventModel{
    @observable id
    @observable name
    @observable location
    constructor(userName,userLoaction){
        this.id = Math.floor(Math.random()*10000);
        this.name = userName;
        this.location = userLoaction;
    }
    
    @action.bound
    onUpdateEventDetails(updatedUserName,updatedUserLoaction){
        this.name = updatedUserName;
        this.location = updatedUserLoaction;
    }
}

export default MobxEventModel;