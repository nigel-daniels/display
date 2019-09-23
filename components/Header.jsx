import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

export default class Header extends React.Component {
	render() {
		return (
			<header>
				<Navbar bg="dark" expand="md" variant="dark" fixed="top">
					<Navbar.Brand href="#">Display Config</Navbar.Brand>
				</Navbar>
			</header>
		);
	}
}
