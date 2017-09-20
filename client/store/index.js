import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import user from './user'

import allProducts from './AllProducts'
import cart from './Cart'
import order from './Order'

import filterProducts from './filterProducts'
import addProductError from './addProductError'
import editProductError from './editProductError'
import deleteProductError from './deleteProductError'

const reducer = combineReducers({user, order, allProducts, filterProducts, addProductError, editProductError, deleteProductError})

const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
const store = createStore(reducer, middleware)

export default store

export * from './Cart'
export * from './user'
export * from './order'
export * from './AllProducts'
export * from './filterProducts'
