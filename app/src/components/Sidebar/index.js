import React from 'react';
import { Link } from 'react-router-dom';
import EventNote from 'material-ui-icons/EventNote';

import NavItem from './navItem';
import styles from './sidebar.scss';
import logo from './logo.svg';

const Sidebar = () => (
  <div className={styles.sidebar}>
    <Link to="/">
      <img src={logo} className={styles.logo} alt="Home" />
    </Link>
    <ul>
      <NavItem to="/todos" activeClassName={styles.active}>
        <EventNote />
      </NavItem>
    </ul>
  </div>
)

export default Sidebar;