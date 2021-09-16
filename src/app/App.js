import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Login, Signup } from '../pages';

export const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/">
        <Signup />
      </Route>
    </Switch>
  </BrowserRouter>
);
