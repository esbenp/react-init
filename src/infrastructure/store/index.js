/* @flow */

import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createLogger from './logger'
import rootReducer from '../reducers'

const configureStore = (history) => {
  const store = createStore(
    rootReducer,
    undefined,
    applyMiddleware(
        thunk,
        routerMiddleware(history),
        createLogger()
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configureStore
