import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import user from './user'
import allProducts from './AllProducts'
import cart from './Cart'
import order from './Order'
import reviews from './review'
import filterProducts from './filterProducts'
import genres  from './genre'
import dirty from './dirty'
import addProductError from './addProductError'
import editProductError from './editProductError'
import deleteProductError from './deleteProductError'

const reducer = combineReducers({user, order, allProducts, filterProducts, cart, reviews, genres, dirty, addProductError, editProductError, deleteProductError})
const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
const store = createStore(reducer, middleware)

export default store
export * from './Cart'
export * from './user'
export * from './order'
export * from './AllProducts'
export * from './filterProducts'
export * from './genre'
export * from './review'
export * from  './dirty'