import React, { Fragment } from 'react'
import Crate from '../components/Crate'
import Account from '../components/Account'
import Styled from 'styled-components'
import Markets from '../components/Markets'

const AppWrap = Styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

`

const Crateless = () => {
  return (
    <Fragment>
      <AppWrap>
        <Account />
        <Crate />
        <Markets />
      </AppWrap>
    </Fragment>
  )
}
export default Crateless
