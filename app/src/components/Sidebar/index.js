import React from 'react';
import { Link } from 'react-router-dom';
import EventNote from 'material-ui-icons/EventNote';

import NavItem from './navItem';
import './sidebar.css';
import logo from '../../logo.svg';

const Sidebar = () => (
  <div className="sidebar">
    <Link to="/">
      <img src={logo} className="logo" alt="Home" />
    </Link>
    <ul>
      <NavItem to="/todos" activeClassName="active">
        <EventNote />
      </NavItem>
    </ul>
  </div>
)

export default Sidebar;