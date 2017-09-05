/* @flow */

import { routerReducer, LOCATION_CHANGE } from 'react-router-redux'
import Immutable from 'immutable'

const initState = Immutable.fromJS({})

export default function reducers(state = initState, action = {}) {
  switch(action.type) {
    case LOCATION_CHANGE:
      return state.set('routing', routerReducer(state.get('routing'), action))
    default:
      return state
  }
}
