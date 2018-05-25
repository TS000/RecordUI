import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Styled from 'styled-components'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom'

import Crate from '../pages/Crate'
import Home from '../pages/Home'
import ErrorPage from '../pages/Error'
import Footer from '../components/Footer'
import Navigation from '../components/Nav'

const FullWidth = Styled.div`
width: 100%
`

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <div>
        <Navigation />
          <FullWidth>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/crate" component={Crate} />
              <Route path="/*" component={ErrorPage} />
            </Switch>
          </FullWidth>
          </div>
        </Router>
        <Footer />
      </div>
    )
  }
}
