import React from "react";
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export default function Form() {
          return(
          <div>
          <nav>
          <ul>
          <li>
          <Link to="/greetings">Greetings</Link>
          </li>
          <li>
          <Link to="/Favourite Desert">Favourite Desert</Link>
          </li>
          <li>
          <Link to="/Visited Cities">Visited Cities</Link>
          </li>
          <li>
          <Link to="/YourState">Your State</Link>
          </li>
          <li>
          <Link to="/Disable">Disable Button</Link>
          </li>
          </ul>
          </nav>
          </div>
          );
}