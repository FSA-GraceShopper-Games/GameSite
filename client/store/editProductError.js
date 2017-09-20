// ACTION TYPES
const DISPLAY_EDIT_PRODUCT_ERROR = 'DISPLAY_EDIT_PRODUCT_ERROR';

// ACTION CREATORS
export function gotEditProductErrorFromServer(error) {
  return {
    type: DISPLAY_EDIT_PRODUCT_ERROR,
    error
  };
}

// REDUCER
export default function reducer(state = null, action) {
  switch (action.type) {
    case DISPLAY_EDIT_PRODUCT_ERROR:
      return action.error;
    default:
      return state;
  }
}
