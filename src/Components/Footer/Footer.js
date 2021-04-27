import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "green",
				textAlign: "center",
				marginTop: "-50px" }}>
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="/Story">Our Story</FooterLink>
			<FooterLink href="/Team">Our Team</FooterLink>
			<FooterLink href="/Testimonials">Testimonials</FooterLink>
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="/Foods">Foods</FooterLink>
			<FooterLink href="/Drinks">Drinks</FooterLink>
			<FooterLink href="/Drinks">Night Life</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="/Contact">East Coast</FooterLink>
			<FooterLink href="/Contact">West Coast</FooterLink>
			<FooterLink href="/Newsletter">Newsletter</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink target="_blank" href="https://www.facebook.com">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink target="_blank" href="https://www.instagram.com">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink target="_blank" href="https://www.twitter.com">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			{/* <FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink> */}
		</Column>
		</Row>
		@All right reserve Copyright 2021 Terms and Conditions Apply              
		</Container>
	</Box>
);
};
export default Footer;
