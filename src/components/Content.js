//import fs from 'fs';
import React from 'react';
import { Container, Row } from 'reactstrap';
import ImageCard from './ImageCard';

export default class Content extends React.Component {

	deckDisplay() {
		let files = [];//fs.readdirSync(this.props.file_path);
		let content = null;

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
