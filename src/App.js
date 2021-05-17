
import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { BrowserRouter as Router , Switch , Route  } from 'react-router-dom';
import Login from './pages/Login.js';
import logout from './pages/Logout.js';
import mobile from './pages/Mobile.js';
import isp from './pages/Isp.js';
import fixed from './pages/Fixed.js';

//import 'bootstrap/dist/css/bootstrap.min.css';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      
    

    <div className="auth-wrapper">
        <div className="auth-inner">
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/api/mobile" exact component={mobile} />
        <Route path="/api/isp" exact component={isp} />
        <Route path="/api/fixed" exact component={fixed} />
        <Route path="/logout" exact component={logout} />
      </Switch>
    </Router>
    </div>
    </div>
    </div>
  );
}

export default App;
