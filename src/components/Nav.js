import React, { Component } from 'react'
import Styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { push as Menu } from 'react-burger-menu'

import Logo from '../img/cloud.png'

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#fff'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#fff'
  },
  bmMenu: {
    background: '#04756f',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
    overflow: 'hidden'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#04756f',
    padding: '0.8em',
    textAlign: 'center',

    a: {
      color: '#000000',
      listStyle: 'none'
    }
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

const LogoWrap = Styled.div `
text-align: center;
  img {
    width: 55;
    padding: 5px;

    @media screen and (min-width: 1400px) {
      width: 100px
    }
}
`

const ItemWrap = Styled.div `
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
`

export default class Nav extends Component {
  render() {
    return (
      <Menu width={250} styles={styles}>
        <LogoWrap>
          <img src={Logo} alt="Logo" />
        </LogoWrap>
        <ItemWrap>
          <NavLink exact to="/" activeClassName="active">
            <span>Home</span>
          </NavLink>
        </ItemWrap>
        <ItemWrap>
          <NavLink to="/crate" activeClassName="active">
            <span>Crate</span>
          </NavLink>
        </ItemWrap>
        <ItemWrap>
          <NavLink to="/about" activeClassName="active">
            <span>About</span>
          </NavLink>
        </ItemWrap>
      </Menu>
    )
  }
}
