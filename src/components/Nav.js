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

background: deepskyblue;

display: -webkit-box;
display: -moz-box;
display: -ms-flexbox;
display: -webkit-flex;
display: flex;
-webkit-flex-flow: row wrap;
justify-content: flex-start;

a {
text-decoration: none;
display: block;
padding: 1em;
color: white;
&:hover {
background: red;
}

@media (max-width: 800px) {

justify-content: space-around;
}
}

@media (max-width: 600px) {

-webkit-flex-flow: column wrap;
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

const FullWidth = Styled.div `
width: 100%
`

export default class Nav extends Component {
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
