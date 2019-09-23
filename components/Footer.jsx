import React from 'react';
import Container from 'react-bootstrap/Container';

export default class Footer extends React.Component {

	render() {
		return (
			<footer className="footer mt-auto py-3 bg-dark">
				<Container>
					<span className="text-muted">Place sticky footer content here.</span>
				</Container>
			</footer>
		);
	}
}
