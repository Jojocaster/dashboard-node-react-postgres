import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';

import routes from 'routes/';

import logo from './logo.svg';
import './app.css';

import Sidebar from 'components/Sidebar/';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Sidebar/>
          <div className="app-content">
            {routes.map((route, i) => (
              <Route key={i} path={route.path} component={route.component} />
            ))}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;