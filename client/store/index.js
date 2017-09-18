import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import user from './user'
import allProducts from './AllProducts'
import cart from './Cart'
import order from './Order'
import reviews from './review'

import filterProducts from './filterProducts'

const reducer = combineReducers({user, order, allProducts, filterProducts})


const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
const store = createStore(reducer, middleware)

export default store
export * from './Cart'
export * from './user';
export * from './order';
export * from './AllProducts';
export * from './review'
export * from './filterProducts';

