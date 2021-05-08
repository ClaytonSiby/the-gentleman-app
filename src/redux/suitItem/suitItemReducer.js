import suitItemTypes from './suitItemTypes';

const initialState = {
  loading: false,
  suitItem: {},
  error: '',
};

const suitItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case suitItemTypes.FETCH_SUIT_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case suitItemTypes.FETCH_SUIT_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        suitItem: action.payload,
        error: '',
      };

    case suitItemTypes.FETCH_SUIT_ITEM_FAILURE:
      return {
        ...state,
        loading: false,
        suitItem: '',
        error: action.payload,
      };

    default:
      return state;
  }
};

export default suitItemReducer;
