import React from 'react';
import PropTypes from 'prop-types';
import Debug from 'debug';
import { Card, CardImg, CardBody, CardFooter} from 'reactstrap';
import DragDropFile from '../../shared/DragDropFile';

let debug = Debug('NewImageCardView');

class NewImageCardView extends React.Component {

	add(files) {
		this.props.addFile(files[0]);
	}

	render() {
		debug('render, called.');
		return (<Card className="basic-card new-image-card">
			<DragDropFile handleDrop={this.add.bind(this)}>
				<CardImg top src="/images/server/drop-img.jpeg" />
			</DragDropFile>
			<CardBody>
				<p className="text-muted">Drop new images above to upload them to the display. This accepts .gif, .jpg, .jpeg and .png images.</p>
			</CardBody>
			<CardFooter className="text-center">New!</CardFooter>
		</Card>);

	}
}

NewImageCardView.propTypes = {
	addFile:		PropTypes.func
};

export default NewImageCardView;
