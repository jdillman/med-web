import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HomeView from './views/HomeView';
import DemoView from './views/DemoView';
import LocationView from './views/LocationView';
import PersonView from './views/PersonView';
import AdminView from './views/AdminView';
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

            <Route exact path='/admin' component={AdminView} />
            <Route path='/admin/accounts/:id?' component={AccountView} />

            <Route path='/locations/:id?' component={LocationView} />
            <Route path='/person/:id?' component={PersonView} />
          </RouterContext.Provider>
        )}
      </Route>
    </BrowserRouter>
  );
}
