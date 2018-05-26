import React, { Component } from 'react'
import Styled, { injectGlobal } from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Crate from '../pages/Crate'
import Home from '../pages/Home'
import About from '../pages/About'
import ErrorPage from '../pages/Error'
import Footer from '../components/Footer'
import Navigation from '../components/Nav'

const FullWidth = Styled.div`
  width: 100%;
  margin-bottom: 40px;

    &:after {
      content: "";
      display: block;
    }
`

// On MVP projects I like to use native fonts that look decent on any system
// A bit of math is used to keep text fluid between views (calc)
injectGlobal`
  html, body {
    height: 100%
    width: 100%
    padding: 0
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

      body {
        margin: 0
        padding: 0
      }

    @media (min-width: 320px) {
      font-size: calc(3px + 6 * ((100vw - 320px) / 680));
    }

    @media screen and (min-width: 480px) {
      font-size: 5px;
    }

    @media screen and (min-width: 700px) {
      font-size: 9px;
    }

    @media screen and (min-width: 1000px) {
      font-size: 9px;
    }

    @media screen and (min-width: 1400px) {
      font-size: 14px;
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
      <FullWidth>
        <Router>
          <div>
            <Navigation />
            
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/crate" component={Crate} />
                 <Route path="/about" component={About} />
                <Route path="/*" component={ErrorPage} />
              </Switch>
  
          </div>
        </Router>
      </FullWidth>
       <Footer />
       </div>

    )
  }
}
