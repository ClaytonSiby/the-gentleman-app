import { combineReducers } from 'redux';
import suitItemReducer from './suitItem/suitItemReducer';
import addAppReducer from './appointments/post/add/addAppReducer';
import removeAppReducer from './appointments/post/remove/removeAppReducer';
import appointmentReducer from './appointments/get/appointmentReducer';
import suitReducer from './suits/get/suitReducer';
import loginReducer from './users/login/loginReducer';
import signupReducer from './users/signup/signupReducer';

const rootReducer = combineReducers({
  suitItem: suitItemReducer,
  addAppointment: addAppReducer,
  removeAppointment: removeAppReducer,
  appointments: appointmentReducer,
  suits: suitReducer,
  login: loginReducer,
  signup: signupReducer,
});

export default rootReducer;
