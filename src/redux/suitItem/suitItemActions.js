import axios from 'axios';
import suitItemTypes from './suitItemTypes';

const suitItemRequest = () => ({
  type: suitItemTypes.FETCH_SUIT_ITEM_REQUEST,
});

const suitItemSuccess = (data) => ({
  type: suitItemTypes.FETCH_SUIT_ITEM_SUCCESS,
  payload: data,
});

const suitItemFailure = (error) => ({
  type: suitItemTypes.FETCH_SUIT_ITEM_FAILURE,
  payload: error,
});

const getsuitItem = (id) => (dispatch) => {
  dispatch(suitItemRequest());
  axios.get(`/suits/${id}`, { mode: 'cors' })
    .then((response) => {
      dispatch(suitItemSuccess(response.data));
    })
    .catch((error) => {
      dispatch(suitItemFailure(error.message));
    });
};

export default getsuitItem;