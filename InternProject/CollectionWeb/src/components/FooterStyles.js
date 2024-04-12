import styled from "styled-components";

// Global font-family style
const fontFamily = '"Montserrat", sans-serif';

export const Box = styled.div`
	padding: 5% 2.5%;
	// position: absolute;
	bottom: 0;
	width: 100%;
	font-family: ${fontFamily};

	@media (max-width: 1000px) {
		// padding: 70px 30px;
	}
`;

export const FooterContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1200px;
	font-family: ${fontFamily};
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	margin-left: 20px;
	font-family: ${fontFamily};
`;

export const Row = styled.div`
	display: grid;
	grid-template-columns: repeat(
		auto-fill,
		minmax(185px, 1fr)
	);
	grid-gap: 87px;

	@media (max-width: 1300px) {
		grid-template-columns: repeat(
			auto-fill,
			minmax(200px, 1fr)
		);
	}
	font-family: ${fontFamily};
`;

export const FooterLink = styled.a.attrs(props => ({
	className: 'footer-link' // Özel sınıf adı
  }))`
	color: #949494;
	margin-bottom: 20px;
	font-size: 18px;
	text-decoration: none;
	font-family: ${fontFamily};

	&:hover {
		color: #FF7B29;
		transition: 200ms ease-in;
	}
`;

export const Heading = styled.p`
	font-size: 20px;
	color: #000000;
	margin-bottom: 40px;
	font-weight: bold;
	font-family: ${fontFamily};
`;
