import axios from 'axios';
import signUp from './signupTypes';

const signupRequest = () => ({
  type: signUp.SIGNUP_REQUEST,
});

const signupSuccess = (user) => ({
  type: signUp.SIGNUP_SUCCESS,
  payload: user,
});

const signupFailure = (error) => ({
  type: signUp.SIGNUP_FAILURE,
  payload: error,
});

const requestSignUp = (data) => (dispatch) => {
  dispatch(signupRequest());
  axios
    .post('signup', data)
    .then((response) => {
      dispatch(signupSuccess(response.data));
      window.location.href = '/suits';
    })
    .catch((error) => dispatch(signupFailure(error.message)));
};

export default requestSignUp;
