import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

declare global {
  interface Console {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    tron: any;
  }
}

const tron = Reactotron.configure()
  .use(compose(reactotronRedux(), sagaPlugin({ except: [''] })))
  .connect();

const sagaMonitor = tron.createSagaMonitor?.();
const createEnhancer = tron.createEnhancer?.();

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middleware = [sagaMiddleware];

const enhancer =
  process.env.NODE_ENV === 'development' && createEnhancer
    ? compose(applyMiddleware(...middleware), createEnhancer)
    : applyMiddleware(...middleware);

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
