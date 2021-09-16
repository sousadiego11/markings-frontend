import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Login } from '../Components/Login/Login';

export const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/">
        <Login />
      </Route>
    </Switch>
  </BrowserRouter>
);
