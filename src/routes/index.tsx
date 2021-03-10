import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from '../pages/Login';
import Register from '../pages/Register';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login" component={Login} />
        <Route path="/register/perfil" component={Register} />
        <Route path="/register/income" component={Register} />
        <Route path="/register/expense" component={Register} />
        <Route path="/register/overview" component={Register} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
