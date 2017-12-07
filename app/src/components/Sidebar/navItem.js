import React from 'react';
import { Route, Link } from 'react-router-dom';

const NavItem = ({children, to, exact, activeClassName}) => (
  <Route path={to} exact={exact} children={({match}) => (
    <li className={match ? activeClassName : null}>
        <Link to={to}>{children}</Link>
    </li>
  )}/>
)

export default NavItem;