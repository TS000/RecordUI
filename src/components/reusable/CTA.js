import React from 'react'
import Styled from 'styled-components'

import Particles from './Particles'

const CallToAction = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20em;
    margin:20px
    flex-wrap: wrap;
    width: 100%;
    background-color: #D90000 
    text-transform: uppercase
    border: 4px solid black
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    width: ${props => (props.small ? '10em' : '20em')};
    border: 4px black solid

      h2 {
        position: absolute
        margin: 0
      }
`

export default ({ innerTitle }) => {
  return (
    <CallToAction>
    <Particles />
      <h2>{innerTitle}</h2>
    </CallToAction>
  )
}
