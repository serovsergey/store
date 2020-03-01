import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import ProductsMain from './components/cat/products/table/ProductsMain';
import { BrowserRouter as Router, Switch, Link, Route, Redirect } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import Home from './components/pages/Home';
import Admin from './components/pages/Admin';
//import { AuthContext } from "./context/auth_old";
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import {CircularProgress, Backdrop} from '@material-ui/core';
import {StateProvider} from './store'

require('./bootstrap');

export default function App(props){
    return (
        <StateProvider>
          <Router>
            <Switch>
              <PrivateRoute exact path="/" component={Home}/>
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/cat/:catName" component={Admin} />
              <PrivateRoute path="/admin" component={Admin} />
              <Route>
                <Redirect to="/"/>
              </Route>
            </Switch>
          </Router>
        </StateProvider>
    );
}

window.addEventListener("beforeunload", function(e){
  console.log('beforeunload');
  e.returnValue = `1. Are you sure you want to leave?`;
});

// window.addEventListener("unload", function(e){
//   console.log('unload');
//   e.returnValue = `2. Are you sure you want to unload?`;
// });

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}