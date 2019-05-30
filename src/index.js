import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './configureStore';
import * as serviceWorker from './serviceWorker';

import App from './App';

const store = configureStore();

const ConnectedApp = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<ConnectedApp />, document.getElementById('root'));

// Offline first!!!!
serviceWorker.register();
