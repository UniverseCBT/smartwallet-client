import React from 'react';
import { Switch } from 'react-router-dom';

import Dashboard from 'pages/Dashboard';
import Expense from 'pages/Expense';
import Income from 'pages/Income';
import Login from 'pages/Login';
import Overview from 'pages/Overview';
import Register from 'pages/Register';

import Route from './route';

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register/perfil" component={Register} />

      {/* Private routes */}
      <Route
        path="/register/income"
        component={Income}
        registerStep
        isPrivate
      />
      <Route
        path="/register/expense"
        component={Expense}
        registerStep
        isPrivate
      />
      <Route
        path="/register/overview"
        component={Overview}
        registerStep
        isPrivate
      />

      <Route path="/" exact component={Dashboard} isPrivate />
    </Switch>
  );
};

export default Routes;
