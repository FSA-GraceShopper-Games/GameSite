import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import user from './user'
import order from './Order'
import allproducts from './AllProducts'

import filterProducts from './filterProducts'



const reducer = combineReducers({user, order, allproducts, filterProducts})
const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
const store = createStore(reducer, middleware)

export default store
export * from './user';
export * from './order';
export * from './AllProducts';
export * from './filterProducts';

