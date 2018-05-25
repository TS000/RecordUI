import React, { Component } from 'react'
import Styled from 'styled-components'

import CTA from '../components/reusable/CTA'
import Banner from '../components/reusable/Banner'

// I designed and created all assets (minus Font Awesome)
import imgRekids from '.../../../dist/img/rekids.png'

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
          <Banner
            light
            innerTitle="take a photo of a record"
            innerBody="automatically add it to your crate"
          />
        </Row>
        <Row>
          <CTA innerTitle="share" />
          <CTA innerTitle="organize" />
          <CTA innerTitle="any time" />
          <CTA innerTitle="anywhere" />
        </Row>
        <Banner light innerTitle="a personal assitant for your vinyl collection" />
        <Row>
          <CTA innerTitle="Science" />
          <CTA innerTitle="Meets" />
          <CTA innerTitle="Collection" />
        </Row>
        <Row>
          <Banner light half innerTitle="Welcome" innerBody="this is a cta" />
          <Banner light half innerTitle="Welcome" innerBody="this is also a cta" />
        </Row>
        <Row>
          <CTA innerTitle="Your" />
          <CTA innerTitle="Collection" />
          <CTA innerTitle="At All" />
          <CTA innerTitle="Times" />
        </Row>
      </div>
    )
  }
}
