// ------------------------------------
// Screen -- Home
// ------------------------------------
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Screen } from '../../../../lib'

export default class Home extends PureComponent {
  
  constructor (props) {
    super(props)
  }
  
  render() {
    const { location } = this.props
    return (
      <Screen />
    )
  }
}