import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import persistReducer from './rootReducer';

const store = createStore(
  persistReducer,
  composeWithDevTools(applyMiddleware(thunk, logger)),
);

const persistor = persistStore(store);

export { store, persistor };
