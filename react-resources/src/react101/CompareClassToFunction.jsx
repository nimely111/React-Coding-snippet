import React, { Component } from 'react'
import PropTypes from 'prop-types'

 class CompareClassToFunction extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        <h1>Hello World from class</h1>
      </div>
    )
  }
}

export default CompareClassToFunction;
