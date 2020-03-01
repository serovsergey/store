import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import {Button} from '@material-ui/core';
import ProductsMain from './../../components/cat/products/table/ProductsMain';
import MainMenu from '../MainMenu';
import Header from '../Header';
//import useAuth from '../../auth';

function Home(props) {
  return (
    (
      <div>
        <Header />
        <ProductsMain />
      </div>
    )
  );
}

export default Home;