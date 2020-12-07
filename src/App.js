import './App.css';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from './Component/topmenu/NavBar.js';
import Header from './Component/topmenu/Header.js';
import Login from './Component/login/Login.js';
import Signup from './Component/signup/Signup.js';
import Tweet from './Tweet.js';
class App extends Component {
  render() {
    return (  
       <div>
          {<NavBar/>}
          <Router>
            <Switch>
              <Route path="/signup">
                {<Signup/>}
              </Route>
              <Route path="/login">
                {<Login/>}
              </Route>
             
              <Route path="/">
                {<Header/>}
              </Route>
            </Switch>
         </Router>
      
       </div>
    );
  }
}

export default App;

// export default App;
