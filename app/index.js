import React from 'react'
import ReactDOM from 'react-dom'
import routes from './config/routes'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import users from 'redux/modules/users'

const store = createStore(users)

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('app')
)
