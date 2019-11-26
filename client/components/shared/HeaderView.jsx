import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, NavbarBrand, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTv } from '@fortawesome/free-solid-svg-icons';

class HeaderView extends React.Component {

	start(event) {
		this.props.startDisplay();
	}

	stop(event) {
		this.props.stopDisplay();
	}

	render() {
		return (
			<header>
				<Navbar color="dark" expand="md" dark fixed="top">
					<NavbarBrand href="#"><FontAwesomeIcon icon={faTv}/> Display Config</NavbarBrand>
					<UncontrolledDropdown nav inNavbar>
						<DropdownToggle nav caret>
							Options
						</DropdownToggle>
						<DropdownMenu right>
							<DropdownItem onClick={(event) => { this.start(event); }}>
								Start
							</DropdownItem>
							<DropdownItem onClick={(event) => { this.stop(event); }}>
								Stop
							</DropdownItem>
							<DropdownItem divider />
							<DropdownItem>
								<NavLink href="/config">Configure</NavLink>
							</DropdownItem>
						</DropdownMenu>
	            	</UncontrolledDropdown>
				</Navbar>
			</header>
		);
	}
}

HeaderView.propTypes = {
	startDisplay:			PropTypes.func,
	stopDisplay:		PropTypes.func
};

export default HeaderView;
