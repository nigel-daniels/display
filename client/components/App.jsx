import React from 'react';

import Header from './shared/Header';
import Home from './home/Home';
import Footer from './shared/Footer';

export default class App extends React.Component {

	test() {
		console.log('Testing');
	}

	render() {
		return (
			<div className="d-flex flex-column h-100">
				<Header/>
				<main role="main" className="main flex-shrink-0">
					<Home/>
				</main>
				<Footer/>
			</div>
		);
	}
}
