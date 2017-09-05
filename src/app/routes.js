/* @flow */

import React from 'react'
import { Route, Switch } from 'react-router'
import { Loadable } from '../infrastructure/components'

const Dashboard = Loadable({
  loader: () => import('./Dashboard')
})

export default (
  <Switch>
    <Route exact path="/" component={Dashboard} />
  </Switch>
)
