import axios from 'axios';
import removeAppTypes from './removeAppTypes';

const removeAppointmentRequest = () => ({
  type: removeAppTypes.REMOVE_APPOINTMENT_REQUEST,
});

const removeAppointmentSuccess = (data) => ({
  type: removeAppTypes.REMOVE_APPOINTMENT_SUCCESS,
  payload: data,
});

const removeAppointmentFailure = (error) => ({
  type: removeAppTypes.REMOVE_APPOINTMENT_FAILURE,
  payload: error,
});

const removeAppointment = (id) => (dispatch) => {
  dispatch(removeAppointmentRequest());
  axios.delete('/appointmens', id)
    .then((response) => {
      dispatch(removeAppointmentSuccess(response.data));
    })
    .catch((error) => {
      dispatch(removeAppointmentFailure(error.message));
    });
};

export default removeAppointment;
