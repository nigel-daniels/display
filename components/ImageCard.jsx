import React from 'react';
import { Card, CardImg, CardBody, CardTitle, Button, Row} from 'reactstrap';

export default class ImageCard extends React.Component {


	delete(event) {
		console.log('delete called ' + JSON.stringify(event));

	}

	render() {

		return (<Card className="image-card">
			<CardImg top src={this.props.file} />
			<CardBody>
				<CardTitle>{this.props.file}</CardTitle>
				<Row><Button outline color="danger" onClick={() => this.delete}>Delete</Button><div id={this.props.file}></div></Row>
			</CardBody>
		</Card>);

	}
}
