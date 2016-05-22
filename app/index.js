import React from 'react'
import ReactDOM from 'react-dom'
import routes from './config/routes'
import { Provider } from 'redux'

ReactDOM.render(
  <Provider>
    {routes}
  </Provider>,
  document.getElementById('app')
)
