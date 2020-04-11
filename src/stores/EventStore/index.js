import {observable,action,reaction,computed} from 'mobx';

import MobxEvent from '../models/Event/index.js';

class EventStore{
    @observable events = [];
    
    
    @action.bound
    onAddEvent(userName,UserLoacation){
        this.events.push(new MobxEvent(userName,UserLoacation));
    }
    @action.bound
    onDeleteEvent(){
        
    }
    @computed
    noOfEvents(){
        let numberOfEvents=this.events.length;
        return numberOfEvents;
    }
}

const eventStore = new EventStore();
export default eventStore;