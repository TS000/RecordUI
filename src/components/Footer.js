import React from 'react'
import FontAwesome from 'react-fontawesome'
import Styled from 'styled-components'

const Footer = Styled.div`
list-style: none;
  margin: 0;
  height: 65px;
  background: #2E0927;
  display: flex;
  flex-flow: row wrap;
  flex-wrap: wrap;
  justify-content: center;
  border-top: 4px solid black
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

  a {
    text-decoration: none;
    display: block;
    padding: 1em;
    color: #fff;
    font-size: 14px;
    font-weight: 700
    transition: ease all .2s;
      &:hover {
        background: #04756F;
        color: #000000;
      }

    @media (max-width: 800px) {

      justify-content: space-around;
    }
  }

@media (max-width: 700px) {
  height: initial;
  flex-flow: column wrap;
  padding: 0;
  border-top: none;
    a {
      text-align: center;
      padding: 10px;
      border-top: 1px solid rgba(255,255,255,0.3);
      border-bottom: 1px solid rgba(0,0,0,0.1);
    }
      li:last-of-type a {
        border-bottom: none;
      }
}

`

export default ({ half, light }) => {
  return (
    <div>
      <Footer half={half} light={light}>
        <a href="https://www.facebook.com">
          <li>
            <FontAwesome
              name="facebook"
              size="2x"
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />
          </li>
        </a>
        <a href="https://www.twitter.com">
          <li>
            <FontAwesome
              name="twitter"
              size="2x"
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />
          </li>
        </a>
        <a href="https://www.github.com/ts000">
          <li>
            <FontAwesome
              name="github"
              size="2x"
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />
          </li>
        </a>
      </Footer>
    </div>
  )
}
