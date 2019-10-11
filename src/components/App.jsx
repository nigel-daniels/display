import React from 'react';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { Button } from 'reactstrap';

if (process.env.BROWSER) {
	require('../css/index.css');
}

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {file_path: __dirname + '/../images'};
	}

	test() {
		console.log('Testing');
	}

	render() {
		return (
			<div className="d-flex flex-column h-100">
				<Header/>
				<main role="main" className="flex-shrink-0">
					<Content file_path={this.state.file_path}/>
				</main>
				<Button onClick={this.test}>Test</Button>
				<Footer/>
			</div>
		);
	}
}
