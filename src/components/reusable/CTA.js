import React from 'react'
import Styled from 'styled-components'

import Particles from './Particles'

const CallToAction = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20em;
    margin:20px
    background-color: red 
    text-transform: uppercase
    border: 4px solid black
    width: ${props => (props.small ? '10em' : '20em')};
    border: 4px black solid

      h2 {
        position: absolute
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
