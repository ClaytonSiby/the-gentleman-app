import axios from 'axios';
import appointments from './appointmentTypes';

const fetchAppointmentsRequest = () => ({
  type: appointments.FETCH_APPOINTMENTS_REQUEST,
});

const fetchAppointmentsSuccess = (data) => ({
  type: appointments.FETCH_APPOINTMENTS_SUCCESS,
  payload: data,
});

const fetchAppointmentsFailure = (error) => ({
  type: appointments.FETCH_APPOINTMENTS_FAILURE,
  payload: error,
});

const fetchAppointments = (authToken) => (dispatch) => {
  dispatch(fetchAppointmentsRequest());
  axios.get('https://the-gentleman-api.herokuapp.com/appointments', {
    headers: {
      Authorization: `Basic ${authToken}`,
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      dispatch(fetchAppointmentsSuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchAppointmentsFailure(error.response.data.error));
    });
};

export default fetchAppointments;
