// ACTION TYPES
const DISPLAY_ADD_PRODUCT_ERROR = 'DISPLAY_ADD_PRODUCT_ERROR';

// ACTION CREATORS
export function gotAddProductErrorFromServer(error) {
  return {
    type: DISPLAY_ADD_PRODUCT_ERROR,
    error
  };
}

// REDUCER
export default function reducer(state = null, action) {
  switch (action.type) {
    case DISPLAY_ADD_PRODUCT_ERROR:
      return action.error;
    default:
      return state;
  }
}
