import React from 'react'
import Styled from 'styled-components'

const AddButton = Styled.button
`
        background: none;
    border: 2px #7D8A2E solid;
    color: #7D8A2E;
    border-radius: 64px;
    height: 30px;
    width: 30px;
    font-weight: 700;
    cursor: pointer;
    float: right;
    -webkit-transform: perspective(1px) translateZ(0);
    -webkit-transform: perspective(1px) translateZ(0);
    -ms-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0,0,0,0);
    -webkit-transition-duration: 0.3s;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    -webkit-transition-property: -webkit-transform;
    -webkit-transition-property: transform;
    transition-property: transform;
    position: absolute;
    top: 20%;
    right: 5%;
    &:hover {
      -webkit-transform: scale(1.1);
    transform: scale(1.1);
    }
`

export default ({handleClick}) =>
   <AddButton onClick={handleClick}> + </AddButton>