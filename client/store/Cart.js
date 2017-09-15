import axios from 'axios';

// ACTION TYPES
const GET_CART = 'GET_CART'
const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
// const ADD_CURR_PRODUCT= 'ADD_CURR_PRODUCT';
// const 

// ACTION CREATORS
export function addProductForUser(product) {
  return {
    type: ADD_PRODUCT_TO_CART,
    product
  };
}

export function getCart(prod) {
    return {
        GET_CART,
        prod
    };
  }

// THUNK CREATORS


// REDUCER
export default function reducer(state = [], action) {
    switch (action.type) {
      case ADD_PRODUCT_TO_CART:
        return [...state, action.product];
      case GET_CART:
        return state
      default:
        return state;
    }
}
  