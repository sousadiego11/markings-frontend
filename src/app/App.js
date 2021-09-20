import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Map } from '../pages';

export const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/">
        <Map />
      </Route>
    </Switch>
  </BrowserRouter>
);
