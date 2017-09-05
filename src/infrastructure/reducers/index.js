/* @flow */

import { combineReducers } from 'redux-immutable';
import Router from './router'

export default combineReducers({
  routing: Router
})
