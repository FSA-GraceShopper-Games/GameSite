// ACTION TYPES
const DISPLAY_DELETE_PRODUCT_ERROR = 'DISPLAY_DELETE_PRODUCT_ERROR';

// ACTION CREATORS
export function gotDeleteProductErrorFromServer(error) {
  return {
    type: DISPLAY_DELETE_PRODUCT_ERROR,
    error
  };
}

// REDUCER
export default function reducer(state = null, action) {
  switch (action.type) {
    case DISPLAY_DELETE_PRODUCT_ERROR:
      return action.error;
    default:
      return state;
  }
}
