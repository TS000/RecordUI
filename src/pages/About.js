import React from 'react'
import Styled from 'styled-components'

import Logo from '../img/cloud.png'

const AboutWrap = Styled.div`
    padding: 5rem 20rem
`

const LogoWrap = Styled.div `
text-align: left;
  img {
    width: 55px;
    padding: 5px;

    @media screen and (min-width: 1400px) {
      width: 200px
    }
}
`

const Bold = Styled.span`
    font-weight: 600
`

const Italic = Styled.span`
    font-style: italic
`

const AboutPage = () => {
    return (
        <AboutWrap>
            <LogoWrap>
              <img src={Logo} alt="Logo" />
            </LogoWrap>
            <h1>Crateless - Why?</h1>
            <p>
                The world of vinyl collecting is expensive, frustrating, and
                time consuming. <Bold>Crateless</Bold> solves each of these
                issues with <Bold>Deep Learning</Bold> and{' '}
                <Bold>The Cloud</Bold>.
            </p>
            <h3>
                There are <Bold>4</Bold> main features of Crateless:
            </h3>
            <ul>
                <li>
                    Adding a vinyl record's information to your{' '}
                    <Italic>crate</Italic>.
                </li>
                <li>Searching for records on the internet.</li>
                <li>Selling records on the internet.</li>
                <li>
                    Record price <Italic>awareness</Italic>.
                </li>
            </ul>
            <h4>
                Searching for records and selling records are self explanatory
                so let's dive into the other features which use Deep Learning
                and The Cloud to achieve their functionality.
            </h4>
            <p>
                The way <Bold>Crateless</Bold> adds a record to your collection
                starts with taking a photo of a record. The photo is then either
                automatically matched to it's information or if{' '}
                <Bold>Crateless</Bold> thinks it's a new entry, asks the user to
                manually input information on the record. New entries expand{' '}
                <Bold>Crateless'</Bold> database so that the next time that
                record is checked, information is pulled.
            </p>
            <p>
                Record price awareness is something record sellers are going to
                love. <Bold>Crateless</Bold> checks the top 10 records in a
                user's collection that are worth the most and keeps tabs on how
                the record is doing in the world marketplace. Users will also be
                able to simply search for price information but the top 10 will
                be presented in a view that allows the user to keep track of
                their top 10.
            </p>
            <p />
        </AboutWrap>
    )
}
export default AboutPage
