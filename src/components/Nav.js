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
    left: '35px',
    top: '35px'
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
    background: '#C9D787',
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

const LogoWrap = Styled.div`
text-align: center;
  img {
    width: 55px;
    padding: 5px;

    @media screen and (min-width: 1400px) {
      width: 100px
    }
}
`

const ItemWrap = Styled.div`
  a {
     text-decoration: none;
     display: block;
     padding: 1em;
     color: #000000;
     font-weight: 700
     font-size: 4rem;
     transition: ease all .2s;
       &:hover {
         color: #FFF;
       }

        @media screen and (min-width: 1000px) {
      font-size: 2rem;
      padding: .5rem;
    }
`

export default class Nav extends Component {
  // Controlling state to close the menu when a Nav link is selected
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  }

  closeMenu() {
    this.setState({ menuOpen: false })
  }

  render() {
    return (
      <Menu
        isOpen={this.state.menuOpen}
        onStateChange={state => this.handleStateChange(state)}
        width={250}
        styles={styles}
      >
        <LogoWrap>
          <img src={Logo} alt='Logo' />
        </LogoWrap>
        <ItemWrap>
          <NavLink onClick={() => this.closeMenu()} exact to='/' activeClassName='active'>
            <span>Home</span>
          </NavLink>
        </ItemWrap>
        <ItemWrap>
          {/*
          <NavLink
            onClick={() => this.closeMenu()}
            to="/crateless" activeClassName="active">
            <span>Crateless</span>
          </NavLink>
        */}
        </ItemWrap>
        <ItemWrap>
          <NavLink onClick={() => this.closeMenu()} to='/about' activeClassName='active'>
            <span>About</span>
          </NavLink>
        </ItemWrap>
      </Menu>
    )
  }
}
