import React from 'react';
import { Container, Row } from 'reactstrap';
import ImageCard from './home/cards/ImageCard';

export default class Content extends React.Component {

	deckDisplay() {
		let content = null;
		let files = [];
		content = files.map(file => <ImageCard key={file} file={file} file_path={this.props.file_path} />);

		return <Row>
			{content}
		</Row>;
	}


	render() {
		return (
			<Container>
				<h1 className="mt-5">Manage Display Files</h1>
				{this.deckDisplay()}
			</Container>
		);
	}
}
