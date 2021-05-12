import {
  FETCH_SUITS_REQUEST,
  FETCH_SUITS_FAILURE,
  FETCH_SUITS_SUCCESS
} from './suitTypes'

const initialState = {
  loading: false,
  suits: [],
  error: '',
};

const suitReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUITS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_SUITS_SUCCESS:
      return {
        ...state,
        loading: false,
        suits: action.payload,
        error: '',
      };

    case FETCH_SUITS_FAILURE:
      return {
        ...state,
        loading: false,
        suits: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default suitReducer;
