import axios from 'axios';
import appointmentTypes from './addAppTypes';

const addAppointmentRequest = () => ({
  type: appointmentTypes.ADD_APPOINTMENT_REQUEST,
});

const addAppointmentSuccess = (data) => ({
  type: appointmentTypes.ADD_APPOINTMENT_SUCCESS,
  payload: data,
});

const addAppointmentFailure = (error) => ({
  type: appointmentTypes.ADD_APPOINTMENT_FAILURE,
  payload: error,
});

const postAppointment = (id, authToken) => (dispatch) => {
  dispatch(addAppointmentRequest());
  axios.post('https://the-gentleman-api.herokuapp.com/appointments', {
      headers: {
        Authorization: `Basic ${authToken}`,
        'Content-Type': 'application/json',
      },
      data: {
        "suit_id": `${id}`,
      }
    })
    .then((response) => {
      dispatch(addAppointmentSuccess(response.data));
    })
    .catch((error) => {
      dispatch(addAppointmentFailure(error.response.data.error));
    });
};

export default postAppointment;
