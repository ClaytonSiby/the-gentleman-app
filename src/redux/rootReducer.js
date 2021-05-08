import { combineReducers } from 'redux';
import suitAppointmentReducer from './suitAppointment/suitAppointmentReducer';
import addAppReducer from './appointments/post/add/addAppReducer';
import removeAppReducer from './appointments/post/remove/removeAppReducer';
import appointmentReducer from './appointments/get/appointmentReducer';
import suitReducer from './suits/get/suitReducer';
import loginReducer from './users/login/loginReducer';
import signupReducer from './users/signup/signupReducer';

const rootReducer = combineReducers({
    suitAppointment: suitAppointmentReducer,
})