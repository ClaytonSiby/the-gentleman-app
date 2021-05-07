import axios from 'axios';
import login from './loginTypes';

const loginRequest = () => {
    return {
        type: login.LOGIN_REQUEST
    }
}

const loginSuccess = token => {
    return {
        type: login.LOGIN_SUCCESS,
        payload: token
    }
}

const loginFailure = error => {
    return {
        type: login.LOGIN_FAILURE,
        payload: error
    }
}

const requestToLogin = data => dispatch => {
    dispatch(loginRequest());
    axios.post('/auth/login', data)
    .then(response => {
        dispatch(loginSuccess(response.data))
        window.location.href = '/suits'
    })
    .catch(error => dispatch(loginFailure(error.message)))
}

export default requestToLogin;
