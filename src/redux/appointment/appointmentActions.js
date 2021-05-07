import appointments from './appointmentTypes';

const fetchAppointmentsRequest = () => {
    return {
        type: appointments.FETCH_APPOINTMENTS_REQUEST
    }
}

const fetchAppointmentsSuccess = data => {
    return {
        type: appointments.FETCH_APPOINTMENTS_SUCCESS,
        payload: data
    }
}

const fetchAppointmentsFailure = error => {
    return {
        type: appointments.FETCH_APPOINTMENTS_FAILURE,
        payload: error
    }
}

const fetchAppointments = () => function (dispatch) {
  dispatch(fetchAppointmentsRequest());
  axios.get('/appointments', { mode: 'cors' })
  .then(response => {
      dispatch(fetchAppointmentsSuccess(response.data));
  })
  .catch(error => {
      dispatch(fetchAppointmentsFailure(error.response.data.error))
  })
}

export default fetchAppointments;
