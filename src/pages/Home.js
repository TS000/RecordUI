import React, { Component } from 'react'
import Styled from 'styled-components'

import CTA from '../components/reusable/CTA'
import Banner from '../components/reusable/Banner'

// I designed and created all assets (minus Font Awesome)
import imgRekids from '../img/rekids.png'
import imgStack from '../img/stack.png'
import imgHard from '../img/hard.png'

const Row = Styled.div`
  display: flex
  justify-content: space-around;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
`

// Reusable components help make future updates and additions a snap
export default class Home extends Component {
  render() {
    return (
      <div>
        <Banner
          hero
          light
          innerTitle="your collection"
          innerBody="leveraged with AI & the cloud"
          img={imgRekids}
        />
        <Row>
          <CTA innerTitle="price alerts" />
          <CTA innerTitle="marketplace" />
          <CTA innerTitle="iOS & android" />
        </Row>
        <Row>
          <Banner light half innerTitle="look for it" innerBody="q4 2018" />
          <Banner light half img={imgStack} />
        </Row>
        <Row>
          <CTA small innerTitle="share" />
          <CTA small innerTitle="organize" />
          <CTA small innerTitle="any time" />
          <CTA small innerTitle="anywhere" />
        </Row>
        <Banner light innerTitle="a personal assistant for your vinyl collection" />
        <Row>
          <CTA img img={imgHard} />
          <CTA innerTitle="meets" />
          <CTA innerTitle="science" />
        </Row>
      </div>
    )
  }
}
