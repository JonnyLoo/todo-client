import { createStore, compose, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunkMiddleware from 'redux-thunk';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from './reducers/root-reducer';
import rootEpic from './epics/root-epic';

const epicMiddleware = createEpicMiddleware();

// setup epic middleware and reducers
export default (initialState) => {
  const middlewares = [
    reduxImmutableStateInvariant(),
    thunkMiddleware,
    epicMiddleware
  ];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(...middlewares)
  ));

  epicMiddleware.run(rootEpic);

  // do hot reloading
  if (module.hot) {
    module.hot.accept('./reducers/root-reducer', () => {
      const nextReducer = require('./reducers/root-reducer').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};
