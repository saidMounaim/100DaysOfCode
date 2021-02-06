import styled from 'styled-components';

const Header = () => {
	return (
		<HeaderStyled>
			<h1>Game Info</h1>
		</HeaderStyled>
	);
};

const HeaderStyled = styled.header`
	font-size: 15px;
	color: #fff;
	font-weight: bold;
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: #00b894;
`;

export default Header;
