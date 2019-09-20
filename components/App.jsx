import '../css/index.css';
import React from 'react';

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			title: 'Test!'
		};
	}

	render() {
		return (
			<div>
				<h1>{ this.state.title }</h1>
			</div>
		);
	}
}
