import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './components/App';

const PORT = 2048;
const app = express();

delete process.env.BROWSER;

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
		</head>

        <body>
            <div id="app">${ reactDom }</div>
        </body>
		<script src="./app.bundle.js"></script>
        </html>
    `;
}
