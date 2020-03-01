import React from "react";
//import { Button } from "../AuthForm";
//import { useAuth } from "../../context/auth_old";
import useAuth from '../../auth'
import {Button} from '@material-ui/core'

function Admin(props) {
  const Auth = useAuth();

  function logOut() {
    Auth.logout();
  }

  return (
    <div>
      <div>Admin Page</div>
      <Button variant='contained' color='primary' onClick={logOut}>Log out</Button>
      <div>

      </div>
    </div>
  );
}

export default Admin;