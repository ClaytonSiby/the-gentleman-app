import signUp from './signupTypes';

const initialState = {
  loading: false,
  loggedIn: false,
  user: {},
  userToken: localStorage.getItem('userToken'),
  error: '',
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case signUp.SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case signUp.SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: true,
        user: action.payload,
        userToken: localStorage.setItem('userToken', action.payload.auth_token),
        error: '',
      };

    case signUp.SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        loggedIn: false,
        user: {},
        userToken: '',
        error: action.payload,
      };

    default:
      return state;
  }
};

export default signupReducer;
