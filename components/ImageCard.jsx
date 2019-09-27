import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function DeleteModal(file) {
	const [show, setShow] = React.useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div>
			<Button variant="outline-danger" onClick={handleShow}>Delete</Button>

			<Modal show={show} onHide={handleClose} animation={false}>
				<Modal.Header closeButton>
					<Modal.Title>Delete</Modal.Title>
				</Modal.Header>
				<Modal.Body>You are about to delete {file}</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Cancel
					</Button>
					<Button variant="primary" onClick={handleClose}>
						Delete
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default class ImageCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {show: false};
	}

	closeModal(){
		this.setState({
			show: false,
		});
	}

	openModal(){
		this.setState({
			show: true,
		});
	}



	render() {
		return (
			<Card className="image-card">
				<Card.Img variant="top" src={this.props.file} />
				<Card.Body>
					<Card.Title>{this.props.file}</Card.Title>
					<DeleteModal file={this.props.file}/>
				</Card.Body>
			</Card>
		);
	}
}
