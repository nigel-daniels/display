import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTv } from '@fortawesome/free-solid-svg-icons';

export default class Header extends React.Component {
	render() {
		return (
			<header>
				<Navbar bg="dark" expand="md" variant="dark" fixed="top">
					<Navbar.Brand href="#"><FontAwesomeIcon icon={faTv}/> Display Config</Navbar.Brand>
				</Navbar>
			</header>
		);
	}
}
