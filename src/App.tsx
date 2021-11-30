import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import store from 'store';

import { history } from 'services/history';

import Route from './routes';

import GlobalStyle from 'styles/global';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route />
        <GlobalStyle />
      </Router>
    </Provider>
  );
}

export default App;
