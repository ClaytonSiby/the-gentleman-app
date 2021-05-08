import axios from 'axios';
import appointmentTypes from './appointmentTypes';

const addAppointmentRequest = () => {
  return {
      type: appointmentTypes.ADD_APPOINTMENT_REQUEST
  }
}

const addAppointmentSuccess = data => {
    return {
        type: appointmentTypes.ADD_APPOINTMENT_SUCCESS,
        payload: data
    }
}

const addAppointmentFailure = error => {
    return {
        type: appointmentTypes.ADD_APPOINTMENT_FAILURE,
        payload: error
    }
}

const postAppointment = data => dispatch => {
    dispatch(addAppointmentRequest());
    axios.post('/appointments')
    .then(response => {
        dispatch(addAppointmentSuccess(response.data))
    })
    .catch(error => {
        dispatch(addAppointmentFailure(error.message))
    })
}

export default postAppointment;
