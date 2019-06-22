import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HomeView from './views/HomeView';
import DemoView from './views/DemoView';

// todo dynamic import
import AdminView from './views/AdminViewContainer';
import AccountView from './views/AccountView';

import { RouterContext } from '../lib/context';

export default function HookedBrowserRouter() {
  return (
    <BrowserRouter>
      <Route>
        {routeProps => (
          <RouterContext.Provider value={routeProps}>
            <Route exact path='/' component={HomeView} />
            <Route exact path='/demo' component={DemoView} />

            <Route exact path='/admin/account/:id' component={AccountView} />
            <Route exact path='/admin' component={AdminView} />
          </RouterContext.Provider>
        )}
      </Route>
    </BrowserRouter>
  );
}
