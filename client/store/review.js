import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_REVIEWS = 'GET_REVIEWS'
const REMOVE_REVIEWS = 'REMOVE_REVIEW'

/**
 * INITIAL STATE
 */
const defaultReview = [];

/**
 * ACTION CREATORS
 */
const getReviews = reviews => ({type: GET_REVIEWS, reviews})
const removeReview = () => ({type: REMOVE_REVIEWS})

/**
 * THUNK CREATORS
 */
export const fetchAllReviews = () =>
  dispatch =>
    axios.get(`/api/review/`)
      .then(res =>
        dispatch(getReviews(res.data || defaultReview)))
      .catch(err => console.log(err))


/**
 * REDUCER
 */
export default function (state = defaultReview, action) {
  switch (action.type) {
    case GET_REVIEWS:
      return action.reviews
    case REMOVE_REVIEWS:
      return defaultReview
    default:
      return state
  }
}
