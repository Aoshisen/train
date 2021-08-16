import React, { Component } from 'react';
import {
  NavLink, Switch, useHistory, useLocation,
} from 'react-router-dom';
import { nav } from '../router.js';

const Header = () => (
  <Switch>
    <>
      {nav.map((item, index) => <NavLink to={item.path} key={index} activeStyle={{ color: 'red' }} style={{ width: '200px', marginRight: '50px' }} exact>{item.name}</NavLink>)}
    </>
  </Switch>
);
export default Header;
