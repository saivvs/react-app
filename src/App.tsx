import React from "react";
import {TodoList} from './components/Todolist/index.js';
import {CarsList} from './components/CarsList/index.js';
import Form from './components/forms/Forms.js';
import {Greetings} from './components/forms/greeting.js';
import {FavouriteDesert} from './components/forms/desert.js';
import {VisitedCities} from './components/forms/cities.js';
import {YourState} from './components/forms/yourstate.js';
import {Disable} from './components/forms/disable.js';
import CountryDashboardApp from './components/Countries-Dashboard/CountriesDashboardApp.js';
import CountryDetails from './components/Countries-Dashboard/CountryDetails.js';
 import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Projects from './components/Project.js';
import EmojiGameApp from  './components/EmojisGameApp/EmojiGameApp/index.js';
import A from  './components/mobxTodolist/TodolistApp.js';
import CounterApp from './components/CounterApp/CounterApp.js';
import CounterPage from './components/CounterPage/index.js';
import {observer} from 'mobx-react';
import { configure } from 'mobx';
import themeStore from './stores/stores/index.js';
import TodoApp from './NewTodoList/TodoApp/index.js';
import EventApp from './components/EventApp/EventApp/index.js';
configure ({ enforecActions: true});
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
    <Router>

        <Switch>
          <Route path="/counter-page">
            <CounterPage />
          </Route>
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
          <Router path='/mobxTodoList'>
          <A/>
          </Router>
          <Router path='/NewTodoList'>
          <TodoApp/>
          </Router>
          <Router path='/EventApp'>
          <EventApp/>
          </Router>
          <Route path="/">
          <Projects/>
          </Route>
        </Switch>
    
    </Router>
  );
    }
}

export default App;

