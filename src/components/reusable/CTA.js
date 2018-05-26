import React from 'react'
import Styled from 'styled-components'

const CallToAction = Styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    text-align: center;
    align-items: center;
    height: 15em;
    margin: 20px
    padding: 0 20px;
    flex-wrap: wrap;
    background-color: #D90000 
    text-transform: uppercase
    border: 4px solid black
    overflow: hidden
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    width: ${props => (props.small ? '15em' : '20em')};
    height: ${props => (props.small ? '15em' : '20em')};

      h2 {
        position: absolute
        margin: 0
        font-size: 3rem;
        color: ${props => (props.white ? '#fff' : '#000000')};
      }

      img {
        width: 160%

        &:hover {
          transition: ease all .2s;
          background: rgba(0,0,0,.5);
        }
      }
`

export default ({ innerTitle, img, white, imgAlt, small }) => {
  return (
    <CallToAction white={white} small={small}>
      <img src={img} alt={imgAlt} />
      <h2>{innerTitle}</h2>
    </CallToAction>
  )
}
