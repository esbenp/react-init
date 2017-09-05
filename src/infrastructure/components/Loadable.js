/* @flow */

import React from 'react'
import L from 'react-loadable'

const LoadingComponent = () => (
  <div>Loading...</div>
)

const Loadable = (opts) => L({
  loading: LoadingComponent,
  ...opts
})

export default Loadable
