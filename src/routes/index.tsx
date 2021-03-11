import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Income from '../pages/Income';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login" component={Login} />
        <Route path="/register/perfil" component={Register} />
        <Route path="/register/income" component={Income} isPrivate />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
