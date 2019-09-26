import fs from 'fs';
//import path from 'path';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

export default class Content extends React.Component {

	tableContent() {
		let file_path = '/Users/ndaniels/git/display/public';
		let content = null;

		let files = fs.readdirSync(file_path);

		content = files.map(file => {
			//let stats = fs.lstatSync(file_path + '/' + file);

			return (<tr key='{{file}}'>
				<td>{file}</td>
			</tr>);
		});
		//<td>{path.extname(file)}</td>
		//<td>{stats.size}</td>
		return <tbody>
			{content}
		</tbody>;
	}

	render() {
		return (
			<Container>
				<h1 className="mt-5">Manage Display Files</h1>
				<Table className="file_list" responsive striped bordered hover>
					<thead>
						<th>Filename</th>
					</thead>
					{this.tableContent()}
				</Table>
			</Container>
		);
	}
	//<th>Type</th>
	//<th>Size</th>
}
