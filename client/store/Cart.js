import axios from 'axios';

// ACTION TYPES
const GET_CART = 'GET_CART'
const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
// const ADD_CURR_PRODUCT= 'ADD_CURR_PRODUCT';
// const 

// ACTION CREATORS

export function addProd(product, quantity) {
  product.quantity = quantity;
  return {
    type: ADD_PRODUCT_TO_CART,
    product
  };
}


export function setCart(prod) {
    return {
        type: GET_CART,
        prod
    };
  }

// THUNK CREATORS


export function addProductToCart(productId) {
  return function (dispatch) {
    return axios.get('/api/products/' + productId)
    .then((result) => result.data)
    .then((product) => {
      console.log('product in here', product)
      return axios.post('/api/cart', product)
    })
    .then((prod)=> prod.data)
    .then((prodInCart) => {
      console.log('this ran', prodInCart)
      dispatch(addProd(prodInCart))
      history.push('/home')      
    })
  }
}

export function fetchCart() {
  return function(dispatch) {
    return  axios.get('/api/cart')
    .then((res) => res.data)
    .then((resp) => {
      console.log('after ifetched')
      dispatch(setCart(resp))
    })
  }
}
// REDUCER
export default function reducer(state = [], action) {
    switch (action.type) {
      case GET_CART:
        return action.prod
      case ADD_PRODUCT_TO_CART:
        return [...state, action.product]
      default:
        return state;
    }
}
  