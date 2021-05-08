import axios from 'axios';
import suitItemTypes from './suitItemTypes';

const suitItemRequest = () => {
    return {
        type: suitItemTypes.FETCH_SUIT_ITEM_REQUEST
    }
}

const suitItemSuccess = data => {
    return {
        type: suitItemTypes.FETCH_SUIT_ITEM_SUCCESS,
        payload: data
    }
}

const suitItemFailure = error => {
    return {
        type: suitItemTypes.FETCH_SUIT_ITEM_FAILURE,
        payload: error
    }
}

const getsuitItem = id => dispatch => {
    dispatch(suitItemRequest())
    axios.get(`/suits/${id}`, { mode: 'cors'})
    .then(response => {
        dispatch(suitItemSuccess(response.data))
    })
    .catch(error => {
        dispatch(suitItemFailure(error.message))
    })
}

export default getsuitItem;
