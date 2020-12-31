import React from 'react'
import styled from 'styled-components'

const Error = ({ children }) => {
    return (
        <ErrorStyle>
            {children}
        </ErrorStyle>
    )
}

const ErrorStyle = styled.div`
    display: flex;
    padding: 15px;
    background-color: #69AFBE;
    color: white;
    font-size: 25px;
    margin-top: 60px;
`

export default Error
