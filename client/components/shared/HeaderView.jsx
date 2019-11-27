import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, NavbarBrand, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTv } from '@fortawesome/free-solid-svg-icons';

class HeaderView extends React.Component {

	reboot(event) {
		this.props.rebootDisplay();
	}

	shutdown(event) {
		this.props.shutdownDisplay();
	}

	render() {
		return (
			<header>
				<Navbar color="dark" expand="md" dark fixed="top">
					<NavbarBrand href="#"><FontAwesomeIcon icon={faTv}/> Display Config</NavbarBrand>
					<UncontrolledDropdown nav inNavbar>
						<DropdownToggle nav caret>
							Control
						</DropdownToggle>
						<DropdownMenu right>
							<DropdownItem onClick={(event) => { this.reboot(event); }}>
								Reboot
							</DropdownItem>
							<DropdownItem onClick={(event) => { this.shutdown(event); }}>
								Shutdown
							</DropdownItem>
						</DropdownMenu>
	            	</UncontrolledDropdown>
				</Navbar>
			</header>
		);
	}
}

HeaderView.propTypes = {
	rebootDisplay:			PropTypes.func,
	shutdownDisplay:		PropTypes.func
};

export default HeaderView;
