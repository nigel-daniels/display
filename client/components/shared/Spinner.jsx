import React, {Component} from 'react';
import Debug from 'debug';

let debug = Debug('Spinner');

export class Spinner extends Component{

	render () {
		debug('render, called.');
		return 	<div className="row">
			<div id="await" className="text-center">
				<div className="spinner-border" style={{width: 50, height: 50}} role="status">
					<span className="sr-only">Loading...</span>
				</div>
			</div>
		</div>;
	}
}
