import React from "react";
import {TodoList} from './components/Todolist/index.js';
import {CarsList} from './components/CarsList/index.js';
import Form from './components/forms/Forms.js';
import {Greetings} from './components/forms/greeting.js';
import {FavouriteDesert} from './components/forms/desert.js';
import {VisitedCities} from './components/forms/cities.js';
import {YourState} from './components/forms/yourstate.js';
import {Disable} from './components/forms/disable.js';
import CountryDashboardApp from './components/Countries-Dashboard/Countries-Dashboard-App.js';
import CountryDetails from './components/Countries-Dashboard/newPage.js';
 import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
const mode={
        light: {
            id: '0',
            name: '#fff',
            style: {
                backgroundColor: '#fff',
                color: 'black'
            }
        },
        dark: {
            id: '1',
            name: '#2b3945',
            style: {
                backgroundColor: '#2b3945',
                color: 'white'
            }
        }
    };
class App extends React.Component{
  state={
    selectedTheme:mode.light,
  }
  onChangeTheme=()=>{
        this.setState({
            selectedTheme:this.state.selectedTheme=== mode.light?mode.dark:mode.light,
        });
    }
    render(){
  return (
    <Router>
      <div>
        <nav>
          <ul>
          <h2>Projects</h2>
          <li>
          <Link to="/CarsList">CarsList</Link>
          </li>
          <li>
          <Link to="/TodoList">TodoList</Link>
          </li>
          <li>
          <Link to="/forms">Forms</Link>
          </li>
          <li>
          <Link to="/CountryDashboardApp">CountryDashboardApp</Link>
          </li>
          </ul>
        </nav>
        <Switch>
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
          <CountryDashboardApp onChangeTheme={this.onChangeTheme} selectedTheme={this.state.selectedTheme}/>
          </Route>
          <Route path='/newPage/:countryId'>
          <CountryDetails onChangeTheme={this.onChangeTheme} selectedTheme={this.state.selectedTheme}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
    }
}

export default App;

