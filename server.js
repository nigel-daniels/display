import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import {collectInitial} from 'node-style-loader/collect';
import App from './components/App';

const PORT = 2048;
const app = express();
const initialStyleTag = collectInitial();
const file_path = process.env.FILE_PATH ? process.env.FILE_PATH : '/Users/ndaniels/git/display/public';

app.use( express.static( path.resolve( __dirname, '../public' ) ) );

app.get( '/*', ( req, res ) => {
	const jsx = ( <App /> );
	const reactDom = renderToString( jsx );

	res.writeHead( 200, { 'Content-Type': 'text/html' } );
	res.end( htmlTemplate( reactDom ) );
} );

app.listen( PORT );
console.log('Display server listening on ' + PORT);

function htmlTemplate( reactDom ) {
	return `<!DOCTYLE html>
        <html>
        <head>
            <meta charset="utf-8">
			<meta viewport="width=device-width, initial-scale=1, shrink-to-fit=no">
            <title>Display</title>
			${initialStyleTag}
		</head>

        <body>
            <div id="app">${ reactDom }</div>
            <script id="app_start" src="./app.bundle.js" file_path="${file_path}"></script>
        </body>
        </html>
    `;
}
