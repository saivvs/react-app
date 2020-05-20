import React from "react";
import {observer} from 'mobx-react';
//import { configure } from 'mobx';
import{
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import {E_COMMERCE_SIGN_IN_PATH} from './Authentication/constants/RouteConstants';
import {E_COMMERCE_PRODUCTS_PATH} from './EcommercesApp/constants/RouteConstants';
import {ADVANCED_CONCEPTS_PRACTICE_PATH} from './common/constants/RouteConstants';
//import {routes} from './EcommercesApp/routes';
import {ProtectedRoute} from './Authentication/utils/ProtectedRoutes';
import {SignInRouteWithRouter} from './Authentication/routes/SignInRoute';
import {ProductsPage} from './EcommercesApp/routes/ProductsPageRoute/ProductsPageRoute.js';
import {AdvancedConceptPractice} from './common/routes/PracticeAdvancedConceptsRoute/PracticeAdvancedConceptsRoute.js';
//import {}
//import {DummyComponent} from './common/DummyComponent'
//import {sizeFilterRoute} from './EcommercesApp/routes';

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
import Projects from './components/Project';
import MyApps from './components/MyApps.js';
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
import {stores} from './stores';
import PracticeDataApp from './components/practices';

 class App extends React.Component{
  
//   getCurrentTheme = () =>{
//     let temp = themeStore.selectedTheme;
//     return temp;
//   }
//   setCurrentTheme = () =>{
//     themeStore.updateTheme();
//     //this.selectedTheme = theme;
//   }
//   onChangeTheme=()=>{
//     this.setCurrentTheme();
//    }

render(){ 
  return (
    <Provider {...stores} >
    <Router>
        <Switch>
      <Route path={E_COMMERCE_SIGN_IN_PATH} component={SignInRouteWithRouter}/>
      <Route path={E_COMMERCE_PRODUCTS_PATH} component={ProductsPage} /> 
      <Route path={ADVANCED_CONCEPTS_PRACTICE_PATH} component={AdvancedConceptPractice}/>
      <Route path='/' component={Home} />  
      
        {/*{authenticationRoute}
        {routes}
        {console.log(SignInRoute,'authenticationRoute')}
        <Route path="/" component={authenticationRoute}/>
        <ProtectedRoute componentPath={E_COMMERCE_SIGN_IN_PATH} renderComponent={SignInRoute}/>     
        
        */}
        
          {/*<Route path="/counter-page">
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
          {/*<Router path='/mobxTodoList'>
          <A/>
          </Router>
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
          <Route path='/MyApps'>
            <MyApps/>
          </Route>
          <Route path="/">
          <Projects/>
          </Route>*/}
        </Switch>
    </Router>
    </Provider>
  );
    }
}

function Home(){
  return(
    <Redirect
        to={{
            //pathname:E_COMMERCE_SIGN_IN_PATH,
            pathname:ADVANCED_CONCEPTS_PRACTICE_PATH,
            }}
            />
    );
}


export default App;

    

