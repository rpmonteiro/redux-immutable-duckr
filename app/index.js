import React from 'react'
import ReactDOM from 'react-dom'
import getRoutes from './config/routes'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import users from 'redux/modules/users'

const store = createStore(users, applyMiddleware(thunk))

function checkAuth () {
  console.log(arguments)
}

ReactDOM.render(
  <Provider store={store}>
    {getRoutes(checkAuth)}
  </Provider>,
  document.getElementById('app')
)
