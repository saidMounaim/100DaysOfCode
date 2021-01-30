import React from 'react';
import styled from 'styled-components';

const Header = () => {
	return (
		<HeaderStyle>
			<h1>Todo List</h1>
		</HeaderStyle>
	);
};

const HeaderStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 20px;
	background-color: #3a4490;
	h1 {
		font-size: 30px;
		font-weight: 600;
		color: #fff;
	}
`;

export default Header;
