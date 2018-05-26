import React, { Component } from 'react'
import Styled from 'styled-components'

import CTA from '../components/reusable/CTA'
import Banner from '../components/reusable/Banner'

// All images have been compressed with Image Magick
import imgRekids from '../img/rekids.png'
import imgStack from '../img/stack.png'
import imgHard from '../img/hard.png'
import imgHard2 from '../img/hard2.png'
import imgTyler from '../img/tyler.png'
import imgCondesa from '../img/condesa2.png'
import imgRoom from '../img/room.png'
import imgOrto from '../img/orto.png'
import imgCrate from '../img/crate.png'

const Row = Styled.div`
  display: flex
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  width: 80%;
  margin: 0 auto;
`

// Extending styles is one of the nice features of Styled Components
const RowLarge = Row.extend `
  width: 100%;
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
          <CTA innerTitle="price alerts" img white img={imgTyler} />
          <CTA innerTitle="collection control" img white img={imgCondesa} />
          <CTA innerTitle="iOS & android" img white img={imgHard} />
        </Row>
        <RowLarge>
          <Banner light half img={imgRoom} />
          <Banner light half innerTitle="dig with it" innerBody="q4 2018" />
        </RowLarge>
        <Row>
          <CTA innerTitle="1. take a photo of record" img white img={imgCrate} />
          <CTA innerTitle="2. crateless updates your crate" img white img={imgOrto} />
          <CTA innerTitle="3. instant info on your record" img white img={imgHard} />
        </Row>
        <RowLarge>
        <Banner light innerTitle="a personal assistant for your vinyl collection" white img={imgHard2} />
        </RowLarge>
        <Row>
          <CTA innerTitle="records" img white img={imgHard} />
          <CTA innerTitle="meet" img white img={imgHard} />
          <CTA innerTitle="science" img white img={imgHard} />
        </Row>
      </div>
    )
  }
}
