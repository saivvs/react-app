import React from "react";
import {observer} from 'mobx-react';
//import { configure } from 'mobx';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {TodoList} from './components/Todolist/index.js';
import {CarsList} from './components/CarsList/index.js';
import Form from './components/forms/Forms.js';
import {Greetings} from './components/forms/greeting.js';
import {FavouriteDesert} from './components/forms/desert.js';
import {VisitedCities} from './components/forms/cities.js';
import {YourState} from './components/forms/yourstate.js';
import {Disable} from './components/forms/disable.js';
import CountryDashboardApp from './components/Countries-Dashboard/CountriesDashboardApp';
import CountryDetails from './components/Countries-Dashboard/CountryDetails';
 
import './App.css';
import Projects from './components/Project.js';
import EmojiGameApp from  './components/EmojisGameApp/EmojiGameApp/index.js';
//import A from  './components/mobxTodolist/TodolistApp.js';
import CounterApp from './components/CounterApp/CounterApp';
//import CounterPage from './components/CounterPage/index';
import themeStore from './stores/stores/index';
import TodoApp from './components/NewTodoList/NewTodoList/TodoApp/index';
import EventApp from './components/EventApp/EventApp/index';
import GridMemoryGame from './components/GridMemoryGame/GridMemoryGame';

import UsersPage from './components/common/UsersPage';
import {Provider} from 'mobx-react';
import stores from './stores';
import PracticeDataApp from './components/practices';
//configure ({ enforecActions: true});
@observer
class App extends React.Component{
  
  getCurrentTheme = () =>{
    let temp = themeStore.selectedTheme;
    return temp;
  }
  setCurrentTheme = () =>{
    themeStore.updateTheme();
    //this.selectedTheme = theme;
  }
  onChangeTheme=()=>{
        
    this.setCurrentTheme()
    }
    render(){
  return (
    <Provider {...stores}>
    <Router>

        <Switch>
          {/*<Route path="/counter-page">
            <CounterPage />
          </Route>*/}
          <Route path="/CarsList">
            <CarsList />
          </Route>
          <Route path="/TodoList">
            <TodoList />
          </Route>
          <Route path='/Forms'>
          <Form />
          </Route>
          <Route path="/Greetings">
            <Greetings />
          </Route>
          <Route path ="/Favourite Desert">
          <FavouriteDesert />
          </Route>
         <Route path ="/Visited Cities">
          <VisitedCities cityList={["Hyderabad", "Chennai", "Bangalore", "Pune", "Mumbai", "Delhi"]}/>
          </Route>
          <Route path='/YourState'>
          <YourState />
          </Route>
          <Route path='/Disable'>
          <Disable />
          </Route>
          <Route path='/CountryDashboardApp'>
          <CountryDashboardApp onChangeTheme={this.onChangeTheme} selectedTheme={this.getCurrentTheme()}/>
          </Route>
          <Route path='/CountryDetails/:countryId'>
          <CountryDetails onChangeTheme={this.onChangeTheme} selectedTheme={this.getCurrentTheme()}/>
          </Route>
          <Route path='/EmojiGameApp'>
          <EmojiGameApp />
          </Route>
          <Route path='/CounterApp'>
          <CounterApp />
          </Route>
          {/*<Router path='/mobxTodoList'>
          <A/>
          </Router>*/}
          <Router path='/NewTodoList'>
          <TodoApp/>
          </Router>
          <Router path='/EventApp'>
          <EventApp/>
          </Router>
          <Router path='/GridMemoryGame'>
          <GridMemoryGame/>
          </Router>
          <Route path='/UsersPage'>
            <UsersPage/>
          </Route>
          <Route path='/PracticeDataApp'>
            <PracticeDataApp/>
          </Route>
          <Route path="/">
          <Projects/>
          </Route>
          
        </Switch>
    
    </Router>
    </Provider>
  );
    }
}

export default App;

