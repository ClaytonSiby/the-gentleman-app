import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persit';
import persistReducer from './rootReducer';

const store = createStore(persistReducer, composeWithDevTools(applyMiddleware(thunk)));

const persistor = persistStore(store);

export default { store, persistor };
