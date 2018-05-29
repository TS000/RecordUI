import React, { Component } from 'react'
import Styled from 'styled-components'

import CTA from '../components/reusable/CTA'
import Banner from '../components/reusable/Banner'
import Particles from  '../components/reusable/Particles'

// All images have been compressed with Image Magick
import imgRekids from '../img/rekids.png'
import imgHard from '../img/hard.png'
import imgHard2 from '../img/hard2.png'
import imgTyler from '../img/tyler.png'
import imgCondesa from '../img/condesa2.png'
import imgRoom from '../img/room.png'
import imgOrto from '../img/orto.png'
import imgCrate from '../img/crate.png'
import imgTylerDJ from '../img/tylerDJ.png'

const Row = Styled.div`
  display: flex
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  width: 80%;
  margin: 0 auto;
`

// Extending styles is one of the nice features of Styled Components
const RowLarge = Row.extend`
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
          white
          innerTitle="crateless"
          innerBody="your record collection + AI"
          imgAlt="Close up picture of vinyl records"
          img={imgRekids}
        />
        <Row>
          <CTA
            innerTitle="price alerts"
            img
            white
            imgAlt="Tyler Snow at Weird Touch"
            img={imgTyler}
          />
          <CTA
            innerTitle="collection control"
            img
            white
            imgAlt="Condessa Mixers"
            img={imgCondesa}
          />
          <CTA
            innerTitle="iOS & android"
            img
            white
            imgAlt="Hard Wax Berlin listening stations"
            img={imgHard}
          />
        </Row>
        <RowLarge>
          <Banner light half img={imgRoom} />
          <Banner
            light
            half
            innerTitle="dig with it"
            imAlt="Massive vinyl collection"
            innerBody="q4 2018"
          />
        </RowLarge>
        <Row>
          <CTA
            innerTitle="1. take a photo of a record"
            img
            white
            imgAlt="Records in a imgCrate"
            img={imgCrate}
          />
          <CTA
            innerTitle="2. updates your crate"
            img
            white
            imgAlt="Ortofon and Technics 1200mk5"
            img={imgOrto}
          />
          <CTA
            innerTitle="3. instant info on your record"
            img
            white
            imgAlt="Stack of vinyl records"
            img={imgTylerDJ}
          />
        </Row>
        <RowLarge>
          <Banner
            light
            innerTitle="a personal assistant for your vinyl collection"
            white
            imgAlt="Woman shopping at Hard Wax Berlin"
            img={imgHard2}
          />
        </RowLarge>
        <Row>
          <CTA
            innerTitle="4. check market prices"
            img
            white
            imgAlt="Condessa Mixers"
            img={imgCondesa}
          />
          <CTA
            innerTitle="5. order records"
            img
            white
            imgAlt=""
            imgAlt="Hard Wax Berlin listening stations"
            img={imgHard}
          />
          <CTA
            innerTitle="6. sell records"
            img
            white
            imgAlt="Tyler Snow at Weird Touch"
            img={imgTyler}
          />
        </Row>
      </div>
    )
  }
}
