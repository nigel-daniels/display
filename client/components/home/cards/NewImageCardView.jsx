import React from 'react';
import PropTypes from 'prop-types';
import Debug from 'debug';
import { Card, CardImg, CardBody, CardFooter} from 'reactstrap';
import DragDropFile from '../../shared/DragDropFile';

let debug = Debug('NewImageCardView');
const validType = ['gif', 'png', 'jpg', 'jpeg'];

class NewImageCardView extends React.Component {

	typeOk(file) {
		let result = false;
		let filename = file.name;

		if (filename.lastIndexOf('.') !== -1) {
			let ext = filename.substring(filename.lastIndexOf('.')+1, filename.length);
			result = validType.includes(ext);
		}

		return result;
	}

	add(files) {
		if (files) {
			if (this.typeOk(files[0])) {
				this.props.addFile(files[0]);
			}
		}
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
