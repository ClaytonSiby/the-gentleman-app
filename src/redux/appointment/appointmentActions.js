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

const fetchAppointments = () => (dispatch) => {
  dispatch(fetchAppointmentsRequest());
  axios.get('/appointments', { mode: 'cors' })
    .then((response) => {
      dispatch(fetchAppointmentsSuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchAppointmentsFailure(error.response.data.error));
    });
};

export default fetchAppointments;
