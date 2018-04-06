import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify APP Header</h1>
    <p><NavLink to ="/" activeClassName="is-active" exact={true}>Dashboard</NavLink></p>
    <p><NavLink to ="/create" activeClassName="is-active">Create Expense</NavLink></p>
  </header>
);

export default Header;