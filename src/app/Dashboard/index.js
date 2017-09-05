/* @flow */

import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dashboard extends Component<void, void, void> {
  render() {
    return (
      <div>
        Dashboard
      </div>
    )
  }
}

export default connect()(Dashboard)
