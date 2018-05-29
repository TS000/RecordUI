import React, { Component } from 'react'
import styled from 'styled-components'

const PageFour = styled.div`
    height: 100%;
    width: 100%;
    left: 0
    top: 0
    background-color: #2E0927
    position: absolute
    text-align: center

    > h1 {
        position: relative
        top: 30%
        font-size: 80px
        color: white
    } 

    > h2 {
        position: relative
        top: 30%
            font-size: 40px
    color: white
}
`
const ErrorPage = () => {
    return (
        <PageFour>
            <h1>404</h1>
            <h2>Page Not Found</h2>
        </PageFour>
    )
}

export default ErrorPage
