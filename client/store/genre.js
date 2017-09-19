import axios from 'axios'

// ACTION TYPE
const GET_GENRES = 'GET_GENRES' 

// INITIAL STATE
const defaultGenres = []

// ACTION CREATOR

export const getGenre = genres => ({type: GET_GENRES, genres})

// THUNK CREATOR

export const fetchGenre = () => dispatch => {
    return axios.get('/api/genre')
      .then(res => res.data)
      .then(genres => {
          dispatch(getGenre(genres))
      })
}

// REDUCER
export default function reducer(state = defaultGenres, action){
    switch(action.type){
        case GET_GENRES:
          return action.genres
        default:
          return state
    }
}

