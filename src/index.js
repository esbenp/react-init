/* @flow */

import React from 'react'
import ReactDOM from 'react-dom'

import './app/global-styles'

import createHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import createStore from './infrastructure/store'
import Routes from './app/routes'
import registerServiceWorker from './registerServiceWorker'

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()
const store = createStore(history)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      { Routes }
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
