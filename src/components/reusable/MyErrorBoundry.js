import React, { Component } from 'react'
import Styled from 'styled-components'

const Center = Styled.div`
  text-align: center
  padding: 15px
`

export default class MyErrorBoundry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false
    }
  }
  // It's important to catch error's and respond in a succinct manor.
  // This imporoves UX and will prevent the ENTIRE APP from unmounting.
  componentDidCatch(error, info) {
    this.setState(state => ({ ...state, hasError: true }))
    // sendToErrorReporting(error, info)
  }
  render() {
    if (this.state.hasError) {
      return (
        <Center>
          <h1>Something has gone wrong. Please refresh and try again.</h1>
        </Center>
      )
    }
    return this.props.children
  }
}
