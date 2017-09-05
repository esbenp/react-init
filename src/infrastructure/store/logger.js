/* @flow */

import { createLogger as createReduxLogger } from 'redux-logger'
import { Iterable } from 'immutable'

export default function createLogger() {
  return createReduxLogger({
    actionTransformer: convertImmutable,
    stateTransformer: convertImmutable
  });
}

const convertImmutable = input => {
  if (Iterable.isIterable(input)) return input.toJS();
  else return input;
}
