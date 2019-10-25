import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Debug from 'debug';
import { Container, Row } from 'reactstrap';
import ImageCard from './cards/ImageCard';
import { Spinner } from '../shared/Spinner';
import Dropzone from 'react-dropzone';

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
			<Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
  				{({getRootProps, getInputProps}) => (
    				<section>
      					<div {...getRootProps()}>
        					<input {...getInputProps()} />
        					<p>Drag 'n' drop some files here, or click to select files</p>
      					</div>
    				</section>
  				)}
			</Dropzone>
		</Container>;


	}
};

HomeView.propTypes = {
	files:			PropTypes.array,
	getFiles:		PropTypes.func,
	addFile:		PropTypes.func
};

export default HomeView;
