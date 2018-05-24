import React from 'react'
import Styled from 'styled-components'
import Particles from './Particles'

// In this Banner Style I use a bit of logic to define colors and sizes
const Banner = Styled.div`
  display: flex
  justify-content: center
  align-items: center
  height: 20em
  margin:20px
  border: 4px solid black
  background-color: ${props => (props.light ? '#FF2D00' : '#D90000')};
  text-transform: uppercase
  width: ${props => (props.half ? '50%' : '100%')};
`
const Inner = Styled.div`
  position: absolute
  margin: 0 auto
  text-align: center
`

export default ({ innerTitle, innerBody, half, light }) => {
  return (
    <Banner half={half} light={light}>
    <Particles />
      <Inner>
        <h1>{innerTitle}</h1>
        <p>{innerBody}</p>
      </Inner>
    </Banner>
  )
}
