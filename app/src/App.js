import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';

import routes from './routes/';

// import logo from './logo.svg';
import styles from './styles/app.scss';


import Sidebar from './components/Sidebar/';

class App extends Component {
  render() {
    return (
      <Router>
        <div className={styles.app}>
          <Sidebar/>
          <section className={styles.appContent}>
            {routes.map((route, i) => (
              <Route key={i} exact={route.exact} path={route.path} component={route.component}/>
            ))}
          </section>
        </div>
      </Router>
    );
  }
}

export default App;