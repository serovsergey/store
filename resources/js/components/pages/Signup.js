import React from "react";
import { Link } from 'react-router-dom';
//import logoImg from "../img/logo.jpg";
import { Card, Logo, Form, Input, Button } from '../AuthForm';

function Signup() {
  return (
    <Card>
      {/*<Logo src={logoImg} />*/}
      <Form>
        <Input type="email" placeholder="Е-мейл" />
        <Input type="password" placeholder="Пароль" />
        <Input type="password" placeholder="Пароль ещё раз" />
        <Button>Зарегистрироваться</Button>
      </Form>
      <Link to="/login">Уже зарегистрированы?</Link>
    </Card>
  );
}

export default Signup;