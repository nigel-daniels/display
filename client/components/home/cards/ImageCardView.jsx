import React from 'react';
import PropTypes from 'prop-types';
import Debug from 'debug';
import { Card, CardImg, CardBody, CardFooter} from 'reactstrap';

let debug = Debug('ImageCardView');

class ImageCardView extends React.Component {

	getImagePath() {
		return '/images-display/' + this.props.file;
	}

	delete(event) {
		let del = window.confirm('Delete ' + this.props.file + '?');
		if (del) {
			debug('delete, ' + this.props.file);
			this.props.deleteFile(this.props.file);
		}
	}


	render() {
		debug('render, called.');
		return (<Card className="basic-card image-card" onClick={(event) => { this.delete(event); }}>
			<CardImg top src={this.getImagePath()} />
			<CardBody />
			<CardFooter className="text-center">{this.props.file}</CardFooter>
		</Card>);

	}
}

ImageCardView.propTypes = {
	deleteFile:		PropTypes.func
};

export default ImageCardView;
