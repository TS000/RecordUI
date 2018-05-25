import React, { Component } from 'react'
import Styled, { injectGlobal } from 'styled-components'
import {
  BrowserRouter as Router,
  Route,
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

// On MVP projects I like to use native fonts that look decent on any system
// A bit of math is used to keep text fluid between views (calc)
injectGlobal`
  html {
    height: 100%
    width: 100%
    margin: 0
    background: #FF8C00
    font-size: 16px
    font-family: 
      -apple-system,
      BlinkMacSystemFont,
      Segoe UI,
      Roboto,
      Oxygen-Sans,
      Ubuntu,
      Cantarell,
      Helvetica Neue,
      sans-serif

    @media (min-width: 320px) {
      font-size: calc(16px + 6 * ((100vw - 320px) / 680));
    }

    @media screen and (min-width: 1000px) {
      font-size: 22px;
    }
  }
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
