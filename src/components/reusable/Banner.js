import React from 'react'
import Styled from 'styled-components'

// To handle options for my components I use simple logic in my CSS
const Banner = Styled.div`
  display: flex
  justify-content: center
  align-items: center
  height: 10em
  position: relative;
  border: 4px solid black
  overflow: hidden;
  text-transform: uppercase;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  background-color: ${props => (props.light ? '#FF2D00' : '#D90000')};
  width: ${props => (props.half ? '60rem' : 'inherit')};
  color: ${props => (props.white ? '#fff' : '#000000')};
  margin: ${props => (props.hero ? '0rem;' : '2rem')};
  font-size: ${props => (props.hero ? '4em' : '2em')};
  font-family: ${props => (props.hero ? 'Lato' : 'open-sans')};
  text-shadow: ${props => (
    props.hero ? '3px 6px 0px rgba(0,0,0,0.85)' : 'initial'
  )};

  p {
    text-shadow: ${props => (props.hero ? '7px 3px 0px rgba(0,0,0,0.85)' : 'none')};
    color: ${props => (props.hero ? '#fff' : '#000000')};
    font-weight: 600;
    font-size: 4rem;
  }
  
    img {
      width: 100%
    }
`
const Inner = Styled.div`
  position: absolute
  margin: 0 auto
  text-align: center
`

export default ({ 
  innerTitle, 
  innerBody, 
  half, 
  light, 
  img, 
  imgAlt, 
  white, 
  hero 
}) => {
  return (
    <Banner hero={hero} white={white} half={half} light={light}>
      <img src={img} alt={imgAlt} />
      <Inner>
        <h1>{innerTitle}</h1>
        <p>{innerBody}</p>
      </Inner>
    </Banner>
  )
}
