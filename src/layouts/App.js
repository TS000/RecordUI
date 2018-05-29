import React, { Component } from 'react'
import Styled, { injectGlobal } from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Crateless from '../pages/Crateless'
import Home from '../pages/Home'
import About from '../pages/About'
import ErrorPage from '../pages/Error'
import Footer from '../components/Footer'
import Navigation from '../components/Nav'
import ScrollToTop from '../components/ScrollToTop'

const FullWidth = Styled.div`
  width: 100%;
  min-height: calc(100vh - 70px);
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
      font-size: calc(4px + 6 * ((100vw - 320px) / 680));
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

// React Router is my favorite way of managing views.
// Try navigating to a random relative path or attempt to log into the /admin or /wp-admin :)
export default class App extends Component {
  render() {
    return (
      <div>
        <FullWidth>
          <Router>
          <ScrollToTop>
              <Navigation />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/crateless" component={Crateless} />
                <Route path="/about" component={About} />
                <Route
                  path="/admin"
                  component={() =>
                    (window.location =
                      'https://www.youtube.com/watch?time_continue=116&v=dJRsWJqDjFE')
                  }
                />
                <Route
                  path="/wp-admin"
                  component={() =>
                    (window.location = 'https://youtu.be/djV11Xbc914?t=1m27s')
                  }
                />
                <Route component={ErrorPage} />
              </Switch>
            </ScrollToTop>
          </Router>
        </FullWidth>
        <Footer />
      </div>
    )
  }
}
