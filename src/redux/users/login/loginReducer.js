import login from './loginTypes';

const initialState = {
  loading: false,
  loggedIn: false,
  user: {},
  userToken: localStorage.getItem('userToken'),
  error: '',
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case login.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case login.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: true,
        user: action.payload,
        userToken: localStorage.setItem('userToken', action.payload.auth_token),
        error: '',
      };

    case login.LOGIN_FAILURE:
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

export default loginReducer;
