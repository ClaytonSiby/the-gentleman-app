import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger';
import { persistStore } from 'redux-persist';
import persistReducer from './rootReducer';

const store = createStore(
  persistReducer,
  composeWithDevTools(applyMiddleware(logger, thunk)),
);

const persistor = persistStore(store);

export { store, persistor };
