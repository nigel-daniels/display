import React from 'react';

export default class DragAndDrop extends React.Component {

	handleDragIn(event) {
		$('.dd-dropzone').addClass('dd-drag-over');
	}

	handleDragOut(event) {
		$('.dd-dropzone').removeClass('dd-drag-over');
	}

	handleDrop(event) {
		let dt = event.dataTransfer;
		let files = dt.files;

		if (files && files.length > 0) {
			this.props.handleDrop(files);
		}

		event.dataTransfer.clearData();
		$('.dd-dropzone').removeClass('dd-drag-over');
	}

	render() {
		return (
			<div className="dd-dropzone"
				onDragEnter={(event) => {event.stopPropagation(); event.preventDefault(); this.handleDragIn(event);}}
				onDragLeave={(event) => {event.stopPropagation(); event.preventDefault(); this.handleDragOut(event);}}
				onDragOver={(event) => {event.stopPropagation(); event.preventDefault();}}
				onDrop={(event) => {event.stopPropagation(); event.preventDefault(); this.handleDrop(event);}}>
				{this.props.children}
			</div>
		);
	}
}
