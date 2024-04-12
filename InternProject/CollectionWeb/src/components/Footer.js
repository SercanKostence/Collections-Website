import React from "react";
import {
	Box,
	FooterContainer,
	Row,
	Column,
	FooterLink,
	Heading,
} from "./FooterStyles";

const Footer = () => {
	return (
		<Box>
			<FooterContainer>
				<Row style={{marginLeft:'5px'}}>
					<Column style={{width:'150px'}}>
						<Heading>Resources</Heading>
						<FooterLink href="soria" className="footer-link">
							Download
						</FooterLink>
						<FooterLink href="soria" className="footer-link">
							Help Center
						</FooterLink>
						<FooterLink href="soria" className="footer-link">
							Guide Book
						</FooterLink>
                        <FooterLink href="soria" className="footer-link">
							App Directory
						</FooterLink>
					</Column>
					<Column style={{width:'250px'}}>
						<Heading>Seboria</Heading>
						<FooterLink href="soria" className="footer-link">
							Why Seboria
						</FooterLink>
						<FooterLink href="soria" className="footer-link">
							Our Collection Process
						</FooterLink>
						<FooterLink href="" className="footer-link">
							Customer Stories
						</FooterLink>
						<FooterLink href="" className="footer-link">
							Instagram Post
						</FooterLink>
					</Column>
					<Column style={{width:'150px'}}>
						<Heading>Company</Heading>
						<FooterLink href="" className="footer-link">
							Antiques
						</FooterLink>
						<FooterLink href="" className="footer-link">
							Abour Seboria
						</FooterLink>
						<FooterLink href="" className="footer-link">
							Success
						</FooterLink>
						<FooterLink href="" className="footer-link">
							Information
						</FooterLink>
					</Column>
					<Column>
						<Heading>Get in Touch</Heading>
                        <FooterLink href="" className="footer-link" style={{width:'220px'}}>
                        Feel free to get in touch with us vai emalil
						</FooterLink>
						<FooterLink href="" className="footer-link" style={{ color: '#00B2FF', fontSize: '16px',width:'100px'}}>
                        shakir260@gmail.com
                        </FooterLink>
					</Column>
				</Row>
			</FooterContainer>
		</Box>
	);
};
export default Footer;
