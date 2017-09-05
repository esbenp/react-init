/* @flow */

import React from 'react'
import { Route, Switch } from 'react-router'
import { Loadable } from '../infrastructure/components'

const Component = Loadable({
  loader: () => import('./Component')
})

const Dashboard = Loadable({
  loader: () => import('./Dashboard')
})

export default (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/test" component={Component} />
  </Switch>
)