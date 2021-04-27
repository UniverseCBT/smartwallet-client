import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Register from '../pages/Register';

// Private routes
import Income from '../pages/Income';
import Expense from '../pages/Expense';
import Overview from '../pages/Overview';

import Dashboard from '../pages/Dashboard';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register/perfil" component={Register} />

        <Route path="/register/income" component={Income} isPrivate />
        <Route path="/register/expense" component={Expense} isPrivate />
        <Route path="/register/overview" component={Overview} isPrivate />

        <Route path="/" exact component={Dashboard} isPrivate />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
