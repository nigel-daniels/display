import React from 'react';
import { Card, CardImg, CardBody, CardTitle, Button, Row} from 'reactstrap';

export default class ImageCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isCSR: false, message: '' };
	}

	componentDidMount() {
		this.setState({ isCSR: true });
	}

	delete(event) {
		console.log('delete called ' + JSON.stringify(event));
		if (this.state.isCSR) {
			this.setState( {message: 'Clicked!!'});
		}
	}

	render() {

		return (<Card className="image-card">
			<CardImg top src={this.props.file} />
			<CardBody>
				<CardTitle>{this.props.file}</CardTitle>
				<Row><Button outline color="danger" onClick={this.delete}>Delete</Button><div id={this.props.file}>{this.state.message}</div></Row>
			</CardBody>
		</Card>);

	}
}
