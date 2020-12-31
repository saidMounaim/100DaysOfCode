import React from 'react'
import styled, { keyframes } from 'styled-components'

const Loader = () => {
    return (
        <LoaderStyle></LoaderStyle>
    )
}

const rotate = keyframes`
  /* 100% keyframe for  clockwise. 
     use 0% instead for anticlockwise */
     100% {
    -webkit-transform: rotate(360deg);
  }
`


const LoaderStyle = styled.div`
    height: 0;
    width: 0;
    padding: 15px;
    border: 6px solid #ccc;
    border-right-color: #888;
    border-radius: 22px;
    -webkit-animation: ${rotate} 1s infinite linear;
    /* left, top and position just for the demo! */
    position: absolute;
    left: 50%;
    top: 50%;
`
export default Loader
