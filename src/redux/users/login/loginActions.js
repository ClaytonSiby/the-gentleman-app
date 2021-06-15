import axios from 'axios';
import login from './loginTypes';

const loginRequest = () => ({
  type: login.LOGIN_REQUEST,
});

const loginSuccess = (token) => ({
  type: login.LOGIN_SUCCESS,
  payload: token,
});

const loginFailure = (error) => ({
  type: login.LOGIN_FAILURE,
  payload: error,
});

const requestToLogin = (data) => (dispatch) => {
  dispatch(loginRequest());
  axios.post('https://the-gentleman-api.herokuapp.com/auth/login', data)
    .then((response) => {
      dispatch(loginSuccess(response.data));
      if (response.statusText === 'OK') {
        window.location.href = '/suits';
      }
    })
    .catch((error) => dispatch(loginFailure(error.message)));
};

export default requestToLogin;
