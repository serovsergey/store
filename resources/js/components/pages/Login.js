import React, { useState } from "react";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
//import logoImg from "../img/logo.jpg";
import { Card, Logo, Form/*, Input, Button*/, Error } from '../AuthForm';
import {Button} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import {FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Snackbar} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert'
import {Visibility, VisibilityOff} from '@material-ui/icons'
//import { useAuth } from "../../context/auth_old";
import useAuth from '../../auth';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    //width: 200,
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Login(props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  //const { setUserData } = useAuth();

  const referer = props.location.state ? (props.location.state.referer ? props.location.state.referer : '/') : '/';

  const emailLabel = React.useRef(null);
  const paaswordLabel = React.useRef(null);
  const [labelsWidths, setLabelsWidths] = React.useState({});
  React.useEffect(() => {
    setLabelsWidths({email: emailLabel.current.offsetWidth, password: paaswordLabel.current.offsetWidth});
  }, []);

  const classes = useStyles();

  const Auth = useAuth();

  function postLogin() {
    setLoading(true);
    Auth.login(email, password, 1)
        .then(() => (setLoggedIn(true)))
        .catch(() => {
            setError(true);
            setLoading(false);
        })
  }

  if(loggedIn) {
    //console.log('Login redirect to ', referer)
    return <Redirect to={referer} />;
  }

  const handleClose = (event, reason) => {
      setError(false);
  };

  //console.log('redraw', Auth)
  return (
    <Card>
      {/*<Logo src={logoImg} />*/}
      <Snackbar open={error} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Е-мейл и/или пароль не верны!
          
        </Alert>
      </Snackbar>
      <Form>
        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          <InputLabel ref={emailLabel} htmlFor="outlined-adornment-email">Е-мейл</InputLabel>
          <OutlinedInput
            id="outlined-adornment-email"
            value={email}
            autoFocus = {true}
            error = {error}
            onChange={e => {setEmail(e.target.value);}}
            labelWidth={labelsWidths.email}
          />
        </FormControl>
        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          <InputLabel ref={paaswordLabel} htmlFor="outlined-adornment-password">Пароль</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            error = {error}
            onChange={e => {setPassword(e.target.value);}}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  onMouseDown={(e) => e.preventDefault()}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={labelsWidths.password}
          />
        </FormControl>
        <Button variant='contained' color='primary' disabled={loading} onClick={postLogin}>
          {loading ? <><CircularProgress size={24} style={{marginRight: '0.5em', color: 'grey'}} /> ВХОД...</> : 'ВОЙТИ'}
        </Button>
      </Form>
    </Card>
  );
}

export default Login;