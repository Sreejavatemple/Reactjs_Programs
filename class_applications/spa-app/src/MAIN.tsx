import React,{Component} from "react";
import {BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import MEAN from "./MEAN";
import MVEN from "./MVEN";
import MERN from "./MERN";

export default class MAIN extends React.Component{
    render():any{
        return(
            <React.Fragment>
          <Router>
          <NavLink to="/mern" 
                            activeStyle={{color:"palevioletred"}}
                            exact strict
                            style={{marginRight:100}}><b>mern</b></NavLink>

<NavLink to="/mean" 
                            activeStyle={{color:"palevioletred"}}
                            exact strict
                            style={{marginRight:100}}><b>mean</b></NavLink>

<NavLink to="/mven" 
                            activeStyle={{color:"palevioletred"}}
                            exact strict
                            style={{marginRight:100}}><b>mven</b></NavLink>


          
                            <Route path="/mern" exact strict component={MERN}/>
                            <Route path="/mean" exact strict component={MEAN}/>
                            <Route path="/mven" exact strict component={MVEN}/>

          </Router>

            </React.Fragment>
        )
    }
}