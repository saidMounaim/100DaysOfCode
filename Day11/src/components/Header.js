import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
    return (
        <HeaderStyle>
            <h3>Movie App</h3>
            <ul>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/favourite" >Favourite</Link></li>
            </ul>
        </HeaderStyle>
    )
}

const HeaderStyle = styled.div`
    display: flex;
    align-items:center;
    justify-content: space-between;
    padding:22px 140px;
    background-color:#1D1D44;
    h3 {
        font-size: 23px;
    color: white;
    }
    ul {
        display: flex;
        li {
            font-size: 19px;
            color: white;
            margin-left: 30px;
            list-style: none;
            a {
                color: #fff;
            }
        }
    }
`

export default Header
