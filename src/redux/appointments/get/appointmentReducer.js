import appointments from './appointmentTypes';

const initialState = {
  loading: false,
  data: [],
  error: '',
};

const appointmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case appointments.FETCH_APPOINTMENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case appointments.FETCH_APPOINTMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: '',
      };

    case appointments.FETCHl_APPOINTMENTS_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default appointmentReducer;
