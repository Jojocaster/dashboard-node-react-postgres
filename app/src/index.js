import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import ApiHelper from 'helpers/api';

const store = createStore(
  reducer,
  applyMiddleware(thunk.withExtraArgument(ApiHelper))
);

store.subscribe(() => {
  console.log('new state', store.getState());
})

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root'));
registerServiceWorker();
