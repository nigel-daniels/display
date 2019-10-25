import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Debug from 'debug';
import { Container, Row } from 'reactstrap';
import ImageCard from './cards/ImageCard';
import NewImageCard from './cards/NewImageCard';
import { Spinner } from '../shared/Spinner';

let debug = Debug('HomeView');

class HomeView extends Component {
	componentDidMount() {
		this.props.getFiles();
	}

	deckDisplay() {
		if (this.props.files) {
			let content = null;
			content = this.props.files.map(file => <ImageCard key={file} file={file}/>);

			return <Row>
				{content}
				<NewImageCard/>
			</Row>;
		} else {
			return <Spinner/>;
		}
	}

	submit(event) {
		event.preventDefault();
		debug('submit, called.');
		debug('selected: ' + JSON.stringify($('#newFileInput').get(0).files));
	}

	render () {
		debug('render, called.');

		return 	<Container>
			<h1 className="mt-5">Manage Display Files</h1>
			{this.deckDisplay()}
		</Container>;


	}
};

HomeView.propTypes = {
	files:			PropTypes.array,
	getFiles:		PropTypes.func
};

export default HomeView;
