import appointments from './appointmentTypes';

const initialState = {
    loading: false,
    appointments: [],
    error: ''
}

const appointmentReducer = (state = initialState, action) => {
    switch(action.type) {
      case appointments.FETCH_APPOINTMENTS_REQUEST:
          return {
              ...state,
              loading: true
          }

      case appointments.FETCH_APPOINTMENTS_SUCCESS:
          return {
              ...state,
              loading: false,
              appointments: action.payload,
              error: ''
          }

      case appointments.FETCHl_APPOINTMENTS_FAILURE:
          return {
              ...state,
              loading: false,
              appointments: [],
              error: action.payload
          }

      default:
          return state
    }
}

export default appointmentReducer;
