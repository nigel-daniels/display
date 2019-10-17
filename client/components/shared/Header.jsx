import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTv } from '@fortawesome/free-solid-svg-icons';

export default class Header extends React.Component {
	render() {
		return (
			<header>
				<Navbar color="dark" expand="md" dark fixed="top">
					<NavbarBrand href="#"><FontAwesomeIcon icon={faTv}/> Display Config</NavbarBrand>
				</Navbar>
			</header>
		);
	}
}
