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
          </ul>
        </nav>
        </div>);
}
export default Projects;