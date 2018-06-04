import React from 'react'
import styled from 'styled-components'

const CoolInput = styled.input`
    padding: 9px 22px
    background-color: #f0bd1d
    border: 1px solid gold
    color: #fff
    text-transform: uppercase
    border-radius: 5px
    transition: all .1s
    &:hover {
      background: grey
      color: #fff
      cursor: pointer
      border: 1px solid #fff
    }
   &:active {
      box-shadow: inset 0 0 10px #000000
   }
   &:focus {
    outline: none
    }
`

export default ({ value, id, type, disabled }) =>
  <CoolInput value={value} id={id} type={type} disabled={disabled}/>
