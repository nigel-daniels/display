import React from 'react';
import PropTypes from 'prop-types';
import Debug from 'debug';
import { Card, CardImg, CardBody, CardFooter} from 'reactstrap';

let debug = Debug('ImageCardView');

class ImageCardView extends React.Component {

	getImagePath() {
		return '/images/' + this.props.file;
	}

	delete(event) {
		let del = window.confirm('Delete ' + JSON.stringify(event.currentTarget) + ' image?');
		if (del) {
			$('.image-card').removeClass('image-card-selected'); // Set all image-cards unselected
			$(event.currentTarget).addClass('image-card-selected');// Set this to selected
		}
	}


	render() {
		debug('recder, called.');
		return (<Card className="image-card" onClick={this.delete}>
			<CardImg top src={this.getImagePath()} />
			<CardBody />
			<CardFooter className="text-center">{this.props.file}</CardFooter>
		</Card>);

	}
}

ImageCardView.propTypes = {
	files:			PropTypes.array,
	getFiles:		PropTypes.func
};

export default ImageCardView;
