import React from 'react';
import { Card, CardImg, CardBody, CardFooter} from 'reactstrap';

export default class ImageCard extends React.Component {


	getImagePath() {
		return '/images/' + this.props.file;
	}

	select() {
		// Set all image-cards unselected
		// Set this to selected
	}


	render() {

		return (<Card className="image-card" onClick={this.select}>
			<CardImg top src={this.getImagePath()} />
			<CardBody />
			<CardFooter className="text-center">{this.props.file}</CardFooter>
		</Card>);

	}
}
