import React from 'react';

export default class DragAndDrop extends React.Component {

	constructor(props) {
		super(props);
		this.state = {drag: false};
		this.dragCounter = 0;
		this.dropRef = React.createRef();
	}

	handleDrag(event) {
		event.preventDefault();
		event.stopPropagation();
	}

	handleDragIn(event) {
		event.preventDefault();
		event.stopPropagation();
		this.dragCounter++;
		if (event.dataTransfer.items && event.dataTransfer.items.length > 0) {
			this.setState({drag: true});
		}
	}

	handleDragOut(event) {
		event.preventDefault();
		event.stopPropagation();
		this.dragCounter--;
		if (this.dragCounter === 0) {
			this.setState({drag: false});
		}
	}

	handleDrop(event) {
		event.preventDefault();
		event.stopPropagation();
		this.setState({drag: false});

		if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
			this.props.handleDrop(event.dataTransfer.files);
			event.dataTransfer.clearData();
			this.dragCounter = 0;
		}
	}

	componentDidMount() {
		let div = this.dropRef.current;
		div.addEventListener('dragenter', this.handleDragIn);
		div.addEventListener('dragleave', this.handleDragOut);
		div.addEventListener('dragover', this.handleDrag);
		div.addEventListener('drop', this.handleDrop);
	}

	componentWillUnmount() {
		let div = this.dropRef.current;
		div.removeEventListener('dragenter', this.handleDragIn);
		div.removeEventListener('dragleave', this.handleDragOut);
		div.removeEventListener('dragover', this.handleDrag);
		div.removeEventListener('drop', this.handleDrop);
	}

	render() {
		return (
			<div className="dd-file-block" ref={this.dropRef}>
				{this.state.drag && <div className="dd-file-drag">
					<div className="dd-file-dropzone">
						<div>Drop your new image here! :)</div>
					</div>
				</div>
				}
				{this.props.children}
			</div>
		);
	}
}
