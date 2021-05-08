import appointmentTypes from './addAppTypes';

const initialState = {
  loading: false,
  message: '',
  error: '',
};

const addAppReducer = (state = initialState, action) => {
  switch (action.type) {
    case appointmentTypes.ADD_APPOINTMENT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case appointmentTypes.ADD_APPOINTMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
        error: '',
      };

    case appointmentTypes.ADD_APPOINTMENT_FAILURE:
      return {
        ...state,
        loading: false,
        message: '',
        error: action.payload,
      };

    default:
      return state;
  }
};

export default addAppReducer;
