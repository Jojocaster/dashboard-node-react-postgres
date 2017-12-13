import React from 'react';

import styles from './header.scss';

const Header = ({title, children}) => (
  <header className={styles.header}>
    <div className={styles.inner}>
      <span className={styles.title}>{title}</span>
      <span className={styles.content}>
        {children}
      </span>
    </div>
  </header>
)

export default Header;