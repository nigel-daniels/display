import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Debug from 'debug';
import { Container, Row, Button } from 'reactstrap';
import ImageCard from './cards/ImageCard';
import { Spinner } from '../shared/Spinner';


let debug = Debug('HomeView');


class HomeView extends Component {
	componentDidMount() {
		this.props.getFiles();
	}

	deckDisplay() {
		if (this.props.files) {
			let content = null;
			content = this.props.files.map(file => <ImageCard key={file} file={file} file_path={this.props.file_path} />);

			return <Row>
				{content}
			</Row>;
		} else {
			return <Spinner/>;
		}
	}

	render () {
		debug('render, called.');

		return 	<Container>
			<h1 className="mt-5">Manage Display Files</h1>
			{this.deckDisplay()}
			<Button outline color="danger" onClick={this.delete}>Delete</Button>
		</Container>;


	}
};

HomeView.propTypes = {
	files:			PropTypes.array,
	getFiles:		PropTypes.func
};

export default HomeView;
