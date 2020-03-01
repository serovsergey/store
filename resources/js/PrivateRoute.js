import React, { useState, useEffect, useContext } from "react";
import { Route, Redirect } from "react-router-dom";
//import { useAuth } from "./context/auth_old";
import {CircularProgress, Backdrop} from '@material-ui/core';
import useAuth from './auth';
import {store} from './store';
//import useAuth2 from './auth';

function PrivateRoute({ component: Component, ...rest }) {
  const [loading, setLoading] = useState(true);
  const globalState = useContext(store);

  const Auth = useAuth();
  
  useEffect(() => {
    //console.log('useEffect', globalState.state)
    if(globalState.state.user)
        setLoading(false)        
  }, [globalState]);

  useEffect(() => {
    //console.log('useEffect');
    if(!globalState.state.user) 
      Auth.loadUserData()
        //.then(() => (console.log('then')))
        .catch(() => (setLoading(false)))
  }, []);

  //console.log('eee', Auth, 'loading', loading);

  return (
    <Route
      {...rest}
      render={props =>
        loading ? 
          (
          <Backdrop open={true} onClick={null}>
            <CircularProgress color="inherit" />
            <h2 style={{color: 'white', paddingLeft: '1em'}}>Загрузка данных пользователя...</h2>
          </Backdrop>
          ) : 
          globalState.state.user ? 
            ( 
              <Component {...props} />
            ) :
            (
              <Redirect
                to={{ pathname: "/login", state: { referer: props.location } }}
              />
            )
      }
    />
  );
}

export default PrivateRoute;