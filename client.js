import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

const app = document.getElementById( 'app' );
const file_path = document.getElementById('app_start').getAttribute('file_path');

console.log('client: ' + file_path);

ReactDOM.hydrate( <App file_path="/Users/ndaniels/git/display/public"/>, app );
