import { devToolsEnhancer } from 'redux-devtools-extension';
// import registerServiceWorker from './registerServiceWorker';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
// import { connect } from 'react-redux'
import { Provider } from 'react-redux'
import tasks from './reducers'
import App from './App';
import './index.css';

const store = createStore(tasks, devToolsEnhancer())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(
      <Provider store={store}><NextApp /></Provider>,
      document.getElementById('root')
    );
  });

  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers').default;
    store.replaceReducer(nextRootReducer);
  });
}


// registerServiceWorker();
