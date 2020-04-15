import React from 'react';
import { observer } from "mobx-react";
import AddEvent from '../EventApp/index';
@observer
class EventApp extends React.Component{
    render(){
        return(
            <div>
        <AddEvent />
        {/*<EventList />*/}
        </div>
        );
    }
}
export default EventApp;