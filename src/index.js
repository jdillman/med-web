import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import * as serviceWorker from './serviceWorker';

import App from './App';

const store = configureStore();

const ConnectedApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<ConnectedApp />, document.getElementById('root'));

// Offline first!!!!
serviceWorker.register();
