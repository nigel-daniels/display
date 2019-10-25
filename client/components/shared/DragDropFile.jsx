import React from 'react';

export default class DragAndDrop extends React.Component {

	// Needed to allow the onDrop!
	handleDrag(event) {
		event.stopPropagation();
		event.preventDefault();
	}

	handleDragIn(event) {
		event.stopPropagation();
		event.preventDefault();

		if (event.dataTransfer.files) {
			$('.dd-file-block').addClass('dd-drag-over');
		}
	}

	handleDragOut(event) {
		event.stopPropagation();
		event.preventDefault();

		$('.dd-file-block').removeClass('dd-drag-over');
	}

	handleDrop(event) {
		event.stopPropagation();
		event.preventDefault();

		if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
			this.props.handleDrop(event.dataTransfer.files[0]);
		}
		
		event.dataTransfer.clearData();
	}

	render() {
		return (
			<div className="dd-file-block"
				onDragEnter={(event) => {this.handleDragIn(event);}}
				onDragLeave={(event) => {this.handleDragOut(event);}}
				onDragOver={(event) => {this.handleDrag(event);}}
				onDrop={(event) => {this.handleDrop(event);}}>
				{this.props.children}
			</div>
		);
	}
}
