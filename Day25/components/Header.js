import styled from 'styled-components'

const Header = () => {
    return (
        <HeaderStyled>
            <h1>Finder Jobs</h1>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    padding: 15px;
    background-color:#EBB34B;
    h1 {
        font-size: 28px;
        color:white;
    }
`

export default Header;