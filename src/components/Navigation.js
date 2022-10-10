import { Nav, NavDropdown, Navbar, Container } from "react-bootstrap";
import Game from "./Game";
import React, { useState, useEffect } from "react";

const Navigation = (props) => {
	const { setRootWord } = props;

	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand href="#home">Word Sandwich</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<NavDropdown title="Units" id="basic-nav-dropdown">
							<NavDropdown.Item>Unit 1</NavDropdown.Item>
							<NavDropdown.Item>Unit 2</NavDropdown.Item>
							<NavDropdown.Item>Unit 3</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Navigation;
