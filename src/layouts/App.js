import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Styled, { injectGlobal } from 'styled-components'
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

injectGlobal`
  body {
    height: 100%
    width: 100%
    margin: 0
    background: #FF8C00
    font-size: 100%
    font-family: 
      -apple-system,
      BlinkMacSystemFont,
      Segoe UI,Roboto,
      Oxygen-Sans,
      Ubuntu,
      Cantarell,
      Helvetica Neue,
      sans-serif
  }
`

const Wrap = Styled.div`
  display: block
  background-color: #FF8C00;


  >p {
    font-size: 200px
    color: black
  }
`

const FullWidth = Styled.div`
width: 100%
`

console.log(
  `%c

                    ▄█▀▄
                  ▄██▀▀▀▀▄
                ▄███▀▀▀▀▀▀▀▄
              ▄████▀▀▀▀▀▀▀▀▀▀▄
            ▄█████▀▀▀▀▀▀▀▀▀▀▀▀█▄

              PYRAMIDS, AWESOME
              `,
  'font-family:monospace'
)

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
