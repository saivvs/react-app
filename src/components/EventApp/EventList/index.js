import React from 'react';
import { observer } from "mobx-react";
import Todo from '../Todo/index.js';
import eventStore from '../../stores/TodoStores/index.js';
@observer
class EventList extends React.Component{
    render(){
        return(
            <TodoListTag>
            {eventStore.Events.map(eachEvent=><Event   eachEvent={eachEvent}  key={eachEvent.eventId} />)}
            </TodoListTag>
            );
    }
}
export default EventList;