import './index.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './store'
import Routes from './routes'
import AllProducts from './components/AllProducts/main.js'

// establishes socket connection
import './socket'

// sidebar addition
import './index.scss'

ReactDOM.render(
  <Provider store={store}>
    <Routes/>
  </Provider>,
  document.getElementById('app')
)
