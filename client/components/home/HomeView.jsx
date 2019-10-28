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

	deleteDisplay() {
		return this.props.files && this.props.files.length > 0 ? <p className="text-muted">&nbsp;Click on an image to delete it.</p> : null;
	}

	deckDisplay() {
		if (this.props.files) {
			let content = null;
			content = this.props.files.map(file => <ImageCard key={file} file={file}/>);

			return <Row>
				<NewImageCard/>
				{content}
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
			<Row className="home-text"><p className="text-muted">Recommended image size is 1920 x 1080 pixels (16:9).</p>{this.deleteDisplay()}</Row>
			{this.deckDisplay()}
		</Container>;


	}
};

HomeView.propTypes = {
	files:			PropTypes.array,
	getFiles:		PropTypes.func
};

export default HomeView;
