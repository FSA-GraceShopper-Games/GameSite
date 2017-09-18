/*  filter product */
const FILTER_PRODUCT = "FILTER_PRODUCT"; 

// ******* filter products ****** //
export function filterByProducts(products){
  return {
    type: FILTER_PRODUCT,
    products
  }
}

export default function reducer(state = [], action) {
  switch (action.type) {
    case FILTER_PRODUCT:
    return action.products
    default:
      return state;
  }
}