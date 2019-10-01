import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

const app = document.getElementById( 'app' );
//const file_path = document.getElementById('app_start').getAttribute('file_path');
const file_path = process.env.FILE_PATH ? process.env.FILE_PATH : __dirname + '/public';


console.log('client: ' + file_path);

ReactDOM.hydrate( <App file_path={file_path}/>, app );
