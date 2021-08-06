import React from 'react';
import { Router } from 'react-router-dom';

import { history } from './services/history';

import GlobalStyle from './styles/global';
import Route from './routes';

function App() {
  return (
    <Router history={history}>
      <Route />
      <GlobalStyle />
    </Router>
  );
}

export default App;
