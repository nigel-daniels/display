import React from 'react';
import { Card, CardImg, CardBody, CardTitle, Button,
	Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class ImageCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {show: false};

		this.toggle = this.toggle.bind(this);
	}

	handleClose() {
		this.setState({show: false});
	}

	toggle() {
		console.log('show called ' + this.state.show);
		this.setState(prevState => ({show: !prevState.show}));
	}

	render() {

		return (<div>
			<Card className="image-card">
				<CardImg top src={this.props.file} />
				<CardBody>
					<CardTitle>{this.props.file}</CardTitle>
					<Button outline color="danger" onClick={this.toggle}>Delete</Button>
				</CardBody>
			</Card>
			<Modal isOpen={this.state.show} toggle={this.toggle}>
				<ModalHeader toggle={this.toggle}>
					Delete
				</ModalHeader>
				<ModalBody>You are about to delete {this.props.file}</ModalBody>
				<ModalFooter>
					<Button variant="secondary" onClick={this.toggle}>
						Cancel
					</Button>
					<Button variant="primary" onClick={this.toggle}>
						Delete
					</Button>
				</ModalFooter>
			</Modal>
		</div>
		);
	}
}
