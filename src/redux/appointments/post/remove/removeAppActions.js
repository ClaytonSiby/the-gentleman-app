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

const removeAppointment = (id, authToken) => (dispatch) => {
  dispatch(removeAppointmentRequest());
  axios
    .delete(`https://the-gentleman-api.herokuapp.com/appointments/${id}`, {
      headers: {
        Authorization: `Basic ${authToken}`,
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      dispatch(removeAppointmentSuccess(response.data));
    })
    .catch((error) => {
      dispatch(removeAppointmentFailure(error.response));
    });
};

export default removeAppointment;
