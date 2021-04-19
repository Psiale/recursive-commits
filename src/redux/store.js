import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose,
  } from 'redux';
  import thunk from 'redux-thunk';
  import fetchReducer from './reducers/fetching';
  import errorReducer from './reducers/error';
  import commitsReducer from './reducers/commits';
  
  const root = combineReducers({
    fetchStore: fetchReducer,
    errorStore: errorReducer,
    commitStore: commitsReducer,
  });
  
  const composeEnhancers = typeof window === 'object'
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) : compose;
  
  const enhancer = composeEnhancers(
    applyMiddleware(thunk),
  );
  
  const store = createStore(root, enhancer);
  
  export default store;
  