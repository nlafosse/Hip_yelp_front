// import React from 'react';
// import "./Footer.css";

// const Footer = () => {
//     return(
//         <div className="col">
//             <h4>YELP</h4>
//             <ul>
//                 <li><a href="/Foods">About Us</a></li>
//                 <br />
//             <div className="col">
//                 <h4>Address</h4>
//                 <li><a href="/Foods">Coupons</a></li>
//                 <br />
//             </div>
//                 <li><a href="/Drinks">Contact Us</a></li>
//             </ul>
//         </div>
//     )
// }

// export  default Footer

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
			<FooterLink href="#">Our Story</FooterLink>
			<FooterLink href="#">Our Team</FooterLink>
			<FooterLink href="#">Testimonials</FooterLink>
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="#">Foods</FooterLink>
			<FooterLink href="#">Drink</FooterLink>
			<FooterLink href="#">Night Life</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">East Coast</FooterLink>
			<FooterLink href="#">West Coast</FooterLink>
			<FooterLink href="#">All Location</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
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
	</Container>
	</Box>
);
};
export default Footer;
