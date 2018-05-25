import React from 'react'
import Styled from 'styled-components'

// In this Banner Style I use a bit of logic to define colors and sizes
const Banner = Styled.div`
  display: flex
  justify-content: center
  align-items: center
  height: 10em
  border: 4px solid black
  overflow: hidden;
  text-transform: uppercase;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  background-color: ${props => (props.light ? '#FF2D00' : '#D90000')};
  width: ${props => (props.half ? '34rem' : 'inherit')};
  color: ${props => (props.textColorWhite ? '#fff' : '#000000')};
  margin: ${props => (props.hero ? '2rem 0rem;' : '2rem')};
  font-size: ${props => (props.hero ? '5em' : '2em')};
  text-shadow: ${props => (
    props.hero ? '4px 2px 0px #fff, 10px 6px 0px rgba(0,0,0,0.85);' : 'inital'
  )};

  p {
    text-shadow: none;
    color: ${props => (props.hero ? '#fff' : '#000000')};
  }
  


    img {
      width: 100%
    }
`
const Inner = Styled.div`
  position: absolute
  margin: 0 auto
  text-align: center
  font-size: 100%

`

export default ({ innerTitle, innerBody, half, light, img, imgAlt, textColorWhite, hero }) => {
  return (
    <Banner hero={hero} textColorWhite={textColorWhite} half={half} light={light}>
      <img src={img} alt={imgAlt} />
      <Inner>
        <h1>{innerTitle}</h1>
        <p>{innerBody}</p>
      </Inner>
    </Banner>
  )
}
