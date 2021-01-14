import styled from 'styled-components';
import Link from 'next/link';

const Header = () => {
	return (
		<HeaderStyled>
			<h1>
				<Link href="/">
					<a>Finder Jobs</a>
				</Link>
			</h1>
		</HeaderStyled>
	);
};

const HeaderStyled = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 15px;
	background-color: #ebb34b;
	h1 {
		font-size: 24px;
		color: white;
	}
	a {
		color: white;
		text-decoration: none;
	}
`;

export default Header;
