import React, { Component } from 'react'
import Styled from 'styled-components'

import CTA from '../components/reusable/CTA'
import Banner from '../components/reusable/Banner'

const Row = Styled.div`
  display: flex
  justify-content: space-around;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
`

export default class Home extends Component {
  render() {
    return (
      <div>
        <Row>
        <CTA innerTitle='Science' />
          <CTA innerTitle='Meets' />
          <CTA innerTitle='Collection' />
        </Row>
        <Row>
          <Banner light innerTitle='Welcome' innerBody='Things to know.' />
        </Row>
        <Row>
         <CTA innerTitle='Your' />
          <CTA innerTitle='Collection'/>
          <CTA innerTitle='At All'/>
          <CTA innerTitle='Times'/>
        </Row>
        <Banner />
        <Row>
        <CTA innerTitle='Science' />
          <CTA innerTitle='Meets' />
          <CTA innerTitle='Collection' />
        </Row>
        <Row>
          <Banner light innerTitle='Welcome' innerBody='Things to know.' />
        </Row>
        <Row>
         <CTA innerTitle='Your' />
          <CTA innerTitle='Collection'/>
          <CTA innerTitle='At All'/>
          <CTA innerTitle='Times'/>
        </Row>
      </div>
    )
  }
}
