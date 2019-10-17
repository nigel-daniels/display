import React from 'react';
import { Card, CardImg, CardBody, CardTitle, Button, Row} from 'reactstrap';

export default class ImageCard extends React.Component {


	getImagePath() {
		return '/images/' + this.props.file;
	}

	delete(event) {
		console.log('delete called for ' + this.props.file);
	}


	render() {

		return (<Card className="image-card">
			<CardImg top src={this.getImagePath()} />
			<CardBody>
				<CardTitle>{this.props.file}</CardTitle>
				<Row><Button outline color="danger" onClick={this.delete}>Delete</Button></Row>
			</CardBody>
		</Card>);

	}
}
