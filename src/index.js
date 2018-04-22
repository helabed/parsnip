import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
// import { connect } from 'react-redux'
import { Provider } from 'react-redux'
import tasks from './reducers'
import App from './App';
import './index.css';
// import registerServiceWorker from './registerServiceWorker';

const store = createStore(tasks)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
// registerServiceWorker();
