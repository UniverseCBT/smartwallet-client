import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './route';

import Login from '../pages/Login';
import Register from '../pages/Register';

// Private routes
import Income from '../pages/Income';
import Expense from '../pages/Expense';
import Overview from '../pages/Overview';

import Dashboard from '../pages/Dashboard';

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register/perfil" component={Register} />

      <Route
        path="/register/income"
        component={Income}
        isPrivate
        registerStep
      />
      <Route
        path="/register/expense"
        component={Expense}
        isPrivate
        registerStep
      />
      <Route
        path="/register/overview"
        component={Overview}
        isPrivate
        registerStep
      />

      <Route path="/" exact component={Dashboard} isPrivate />
      <Route path="/historic" component={Dashboard} isPrivate />
    </Switch>
  );
};

export default Routes;
