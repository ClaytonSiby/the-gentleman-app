import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import suitItemReducer from './suitItem/suitItemReducer';
import addAppReducer from './appointments/post/add/addAppReducer';
import removeAppReducer from './appointments/post/remove/removeAppReducer';
import appointmentReducer from './appointments/get/appointmentReducer';
import suitReducer from './suits/get/suitReducer';
import loginReducer from './users/login/loginReducer';
import signupReducer from './users/signup/signupReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['suitItem', 'addAppointment', 'removeAppointment', 'appointments', 'suits', 'login', 'signup'],
};

const rootReducer = combineReducers({
  suitItem: suitItemReducer,
  addAppointment: addAppReducer,
  removeAppointment: removeAppReducer,
  appointments: appointmentReducer,
  suits: suitReducer,
  login: loginReducer,
  signup: signupReducer,
});

export default persistReducer(persistConfig, rootReducer);
