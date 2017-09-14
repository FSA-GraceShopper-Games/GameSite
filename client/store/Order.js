import axios from 'axios';

// ACTION TYPES
const GOT_ORDERS_FOR_USER = 'GOT_ORDERS_FOR_USER';
// const GOT_CURR_ORDERS= 'GOT_CURR_ORDERS';
// const 

// ACTION CREATORS
export function gotOrdersForUser(orders) {
  return {
    type: GOT_ORDERS_FOR_USER,
    orders
  };
}

// THUNK CREATORS
export function fetchOrdersForUser(userId) {
    return function thunk(dispatch) {
      const toJson = response => response.data;
      const result = orders => {
        const action = gotOrdersForUser(orders);
        dispatch(action);
      };
      const error = console.error.bind(console);
      console.log('rignrignrgingingiUSERIDIDDDDDDDDDD', userId)
      return axios.get('/api/order/user/' + userId)
      .then(toJson)
      .then(result)
      .catch(error);
    };
}

// REDUCER
export default function reducer(state = [], action) {
    switch (action.type) {
      case GOT_ORDERS_FOR_USER:
        return action.orders;
      default:
        return state;
    }
}
  
  

// export function addProduct(product) {
//   return {
//     type: ADD_PRODUCT,
//     product
//   };
// }


// export function postProduct(product, history) {
//   return function thunk(dispatch) {
//     const toJson = response => response.data;
//     const result = product => {
//       const addProductAction = addProduct(product);

//       dispatch(addProductAction);

//       history.push('/products');
//     };
//     const error = console.error.bind(console);

//     return axios.post('/api/products', product)
//     .then(toJson)
//     .then(result)
//     .catch(error);
//   };
// }

// export function updateProduct(productId, product, history) {
//   return function thunk(dispatch, getState) {
//     const toJson = response => response.data;
//     const result = updatedProduct => {
//       const products = getState().products.map(product => (
//         product.id === updatedProduct.id ? updatedProduct : product
//       ));

//       const gotProductsFromServerAction = gotProductsFromServer(products);

//       dispatch(gotProductsFromServerAction);

//       history.push('/products');
//     };
//     const error = console.error.bind(console);

//     return axios.put(`/api/products/${productId}`, product)
//     .then(toJson)
//     .then(result)
//     .catch(error);
//   };
// }

// export function removeProduct(productId) {
//   return function thunk(dispatch, getState) {
//     const result = () => {
//       const products = getState().products.filter(product => {
//         return product.id !== productId;
//       });

//       const gotProductsFromServerAction = gotProductsFromServer(products);

//       dispatch(gotProductsFromServerAction);
//     };
//     const error = console.error.bind(console);

//     return axios.delete(`/api/products/${productId}`)
//     .then(result)
//     .catch(error);
//   };
// }

// REDUCER
// export default function reducer(state = [], action) {
//   switch (action.type) {
//     case GOT_PRODUCTS_FROM_SERVER:
//       return action.products;
//     case ADD_PRODUCT:
//       return [...state, action.product];
//     default:
//       return state;
//   }
// }
