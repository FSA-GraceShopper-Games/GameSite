import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import user from './user'

import allproducts from './AllProducts'
import cart from './Cart'
import order from './Order'
import reviews from './review'

const reducer = combineReducers({user, allproducts, cart, order, reviews})
const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
const store = createStore(reducer, middleware)

export default store

export * from './Cart'
export * from './user';
export * from './order';
export * from './AllProducts';
export * from './review'

