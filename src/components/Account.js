import React, { Component } from 'react'
import Styled from 'styled-components'

import Particles from '../components/reusable/Particles'

const AppWrap = Styled.div`
  background: #FFFFFF;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  border-radius: 10px;
  padding: 0;
  position: relative;
  margin: 0 auto;
  top: 80px;
  width: 320px;
  left: 0;
  right: 0;

  @media screen and (min-width: 500px) {
      width: 450px;
    }

}
`
const Header = Styled.div`
  background: #af92ff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-bottom: 10px;
  height: 61px;
  overflow: hidden;
  -webkit-user-select: none;        
  -moz-user-select: none;
  -ms-user-select: none;
    h1 {
      color: #000000;
    letter-spacing: 1.6px;
    font-size: 30px;
  }

  @media screen and (max-width: 480px) {
      height: 200px;
    }
`
const Footer = Styled.div`
  background: whitesmoke;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 50px;
  position: relative;
`
const InnerHeader = Styled.div`
  position: absolute;
  top: 0px;
  left: 10px;
  margin: 0 20px;
    p {
      font-size: 14px;
      text-align: center;
    }
`

export default class Account extends Component {
  render() {
    return (
      <AppWrap>
        <Header>
          <Particles />
          <InnerHeader>
            <h1>Account</h1>
          </InnerHeader>
        </Header>
        <Footer />
      </AppWrap>
    )
  }
}
