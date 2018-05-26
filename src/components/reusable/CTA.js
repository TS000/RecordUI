import React from 'react'
import Styled from 'styled-components'

const CallToAction = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 15em;
    margin: 20px
    flex-wrap: wrap;
    background-color: #D90000 
    text-transform: uppercase
    border: 4px solid black
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    width: ${props => (props.small ? '15em' : '20em')};
    height: ${props => (props.small ? '15em' : '20em')};
    border: 4px black solid
    overflow: hidden

      h2 {
        position: absolute
        margin: 0
      }

      img {
        width: 160%
      }
`


export default ({ innerTitle, img, imgAlt, small }) => {
  return (
    <CallToAction small={small}>
      <img src={img} alt={imgAlt} />
      <h2>{innerTitle}</h2>
    </CallToAction>
  )
}
