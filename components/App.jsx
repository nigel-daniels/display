import '../css/index.css';

import React from 'react';

import Header from 'Header';
import Content from 'Content';
import Footer from 'Footer';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		console.log('App props: ' + JSON.stringify(props));
		let state_path = props.file_path ? props.file_path : __dirname + '/public';
		this.state = {file_path: state_path};
	}

	render() {
		return (
			<div className="d-flex flex-column h-100">
				<Header/>
				<main role="main" className="flex-shrink-0">
					<Content file_path={this.state.file_path}/>
				</main>
				<Footer/>
			</div>
		);
	}
}
