import  React from 'react';
import {Link} from "react-router-dom";

function Projects(){
    
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
          </ul>
        </nav>
        </div>);
}
export default Projects;