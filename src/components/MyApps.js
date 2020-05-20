import  React from 'react';
import {Link} from "react-router-dom";

class MyApps extends React.Component{
    render(){
         return(<div>
        <nav>
          <ul>
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
          <li>
          <Link to='/EmojiGameApp'>EmojiGameApp</Link>
          </li>
          <li>
          <Link to='/CounterApp'>CounterApp</Link>
          </li>
          <li>
          <Link to='/mobxTodolist'>mobxTodolist</Link>
          </li>
          <li>
          <Link to='/NewTodoList'>NewTodoList</Link>
          </li>
          <li>
          <Link to='/EventApp'>EventApp</Link>
          </li>
          <li>
          <Link to='/GridMemoryGame'>GridMemoryGame</Link>
          </li>
          <li>
          <Link to='/UsersPage'>UsersPage</Link>
          </li>
          <li>
          <Link to='/PracticeDataApp'>PracticeDataApp</Link>
          </li>
          <li>
          <Link to='/MyApps'>MyApps</Link>
          </li>
          <li>
          <Link to='/SigninForm'>SigninForm</Link>
          </li>
          </ul>
        </nav>
        </div>);
    }
}
export default MyApps;