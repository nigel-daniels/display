import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import {collectInitial} from 'node-style-loader/collect';
import App from './components/App';

const PORT = 2048;
const app = express();
const initialStyleTag = collectInitial();

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
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
			${initialStyleTag}
		</head>

        <body>
            <div id="app">${ reactDom }</div>
            <script src="./app.bundle.js"></script>
        </body>
        </html>
    `;
}
