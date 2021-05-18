import axios from 'axios';
import {
  FETCH_SUITS_REQUEST,
  FETCH_SUITS_FAILURE,
  FETCH_SUITS_SUCCESS,
} from './suitTypes';

const fetchSuitsRequest = () => ({
  type: FETCH_SUITS_REQUEST,
});

const fetchSuitsSuccess = (suits) => ({
  type: FETCH_SUITS_SUCCESS,
  payload: suits,
});

const fetchSuitsFailure = (error) => ({
  type: FETCH_SUITS_FAILURE,
  payload: error,
});

const fetchSuits = (authToken) => (dispatch) => {
  dispatch(fetchSuitsRequest());
  axios
    .get('https://the-gentleman-api.herokuapp.com/suits', {
      headers: {
        Authorization: `Basic ${authToken}`,
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      dispatch(fetchSuitsSuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchSuitsFailure(error.response.data.message));
    });
};

export default fetchSuits;
