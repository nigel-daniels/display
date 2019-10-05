import React from 'react';
import { Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

export default class Footer extends React.Component {

	render() {
		return (
			<footer className="footer mt-auto py-3 bg-dark">
				<Container>
					<span className="text-muted">Copyright <FontAwesomeIcon icon={faCopyright}/> Initiate Thinking 2019.</span>
				</Container>
			</footer>
		);
	}
}
