import React from 'react';
import { observer } from "mobx-react";

import eventStore from '../../stores/TodoStores/index';

import Todo from '../Todo/index.';

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