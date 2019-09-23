import '../css/index.css';

import React from 'react';

import Header from 'Header';
import Content from 'Content';
import Footer from 'Footer';

export default class App extends React.Component {
	render() {
		return (
			<div className="d-flex flex-column h-100">
				<Header/>
				<main role="main" className="flex-shrink-0">
					<Content/>
				</main>
				<Footer/>
			</div>
		);
	}
}
