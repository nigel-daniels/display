import React from 'react';
import Container from 'react-bootstrap/Container';

export default class Content extends React.Component {

	render() {
		return (
			<Container>
				<h1 className="mt-5">Sticky footer with fixed navbar</h1>
				<p className="lead">Pin a footer to the bottom of the viewport in desktop browsers with this custom HTML and CSS. A fixed navbar has been added with <code>padding-top: 60px;</code> on the <code>main &gt; .container</code>.</p>
				<p>Back to <a href="/docs/4.3/examples/sticky-footer/">the default sticky footer</a> minus the navbar.</p>
			</Container>
		);
	}
}
