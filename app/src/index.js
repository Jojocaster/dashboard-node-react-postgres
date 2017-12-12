import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import './styles/index.scss';
import App from './app';
import reducer from './reducers';
import ApiHelper from 'helpers/api';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  reducer,
  applyMiddleware(thunk.withExtraArgument(ApiHelper))
);

store.subscribe(() => {
  console.log('new state', store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root'));
registerServiceWorker();
