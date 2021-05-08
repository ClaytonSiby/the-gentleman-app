import removeAppTypes from './removeAppTypes';

const initialState = {
  loading: false,
  message: '',
  error: '',
};

const removeAppReducer = (state = initialState, action) => {
  switch (action.type) {
    case removeAppTypes.REMOVE_APPOINTMENT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case removeAppTypes.REMOVE_APPOINTMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
        error: '',
      };

    case removeAppTypes.REMOVE_APPOINTMENT_FAILURE:
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

export default removeAppReducer;
