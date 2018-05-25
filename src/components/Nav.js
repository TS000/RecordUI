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

import Logo from '../../dist/img/cloud.png'

const Navigation = Styled.ul`
  position: fixed;
  top: 0;
  padding: 0 15rem;
  z-index: 100;
  width: 100%;
  list-style: none;
  margin: 0;
  background: #04756F;
  display: flex;
  flex-flow: row wrap;
  flex-wrap: wrap;
  justify-content: flex-start;
  border-bottom: 4px solid black
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

  a {
    text-decoration: none;
    display: block;
    padding: 1em;
    color: #000000;
    font-weight: 700
    transition: ease all .2s;
      &:hover {
        background: #2E0927;
        color: white;
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

const LogoWrap = Styled.div `
  img {
    width: 55px;
    padding: 5px;
}
`

export default () => {
    return (
          <Navigation>
          <li>
          <LogoWrap>
            <img src={Logo} alt="Logo"/>
          </LogoWrap>
          </li>
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
    )
}
