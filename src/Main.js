import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import Contact from "./Contact";

 
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
        <img class="logo" src="/jaybird5.png" alt="headphone"/>
          <ul className="header">
            <li class='headOne'><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/shop">Shop</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
         
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/shop" component={Shop}/>
            <Route path="/contact" component={Contact}/>


            
             
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;