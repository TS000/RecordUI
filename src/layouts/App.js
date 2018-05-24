import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Styled from 'styled-components'
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from 'react-router-dom'

import Crate from '../pages/Crate'
import Home from '../pages/Home'
import ErrorPage from '../pages/Error'

const Navigation = Styled.ul`
  list-style: none;
  margin: 0;
  background: #04756F;
  display: flex;
  flex-flow: row wrap;
  flex-wrap: wrap;
  justify-content: flex-start;
  border-bottom: 4px solid black

  a {
    text-decoration: none;
    display: block;
    padding: 1em;
    color: #000000;
    font-weight: 700
      &:hover {
        background: #D90000;
      }

    @media (max-width: 800px) {

      justify-content: space-around;
    }
  }

@media (max-width: 600px) {

  flex-flow: column wrap;
  padding: 0;
    a {
      text-align: center;
      padding: 10px;
      border-top: 1px solid rgba(255,255,255,0.3);
      border-bottom: 1px solid rgba(0,0,0,0.1);
    }
      li:last-of-type a {
        border-bottom: none;
      }
}

`

const FullWidth = Styled.div`
width: 100%
`

export default class App extends Component {
  render() {
    return (
      <Router>
        <FullWidth>
          <Navigation>
            <li>
              <NavLink exact to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/crate" activeClassName="active">
                Crate
              </NavLink>
            </li>
          </Navigation>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/crate" component={Crate} />
          </Switch>
        </FullWidth>
      </Router>
    )
  }
}
