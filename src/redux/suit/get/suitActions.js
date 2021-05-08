import axios from 'axios';
import suits from '../suitTypes';

const fetchSuitsRequest = () => ({
  type: suits.FETCH_SUITS_REQUEST,
});

const fetchSuitsSuccess = (suits) => ({
  type: suits.FETCH_SUITS_SUCCESS,
  payload: suits,
});

const fetchSuitsFailure = (error) => ({
  type: suits.FETCH_SUITS_FAILURE,
  payload: error,
});

const fetchSuits = () => (dispatch) => {
  dispatch(fetchSuitsRequest());
  axios.get('/suits', { mode: 'cors' })
    .then((response) => {
      dispatch(fetchSuitsSuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchSuitsFailure(error.message));
    });
};

export default fetchSuits;
