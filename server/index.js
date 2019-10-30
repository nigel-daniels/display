import express from 'express';
import http from 'http';

// Now import some basic middleware for express
import fileUpload from 'express-fileupload';
import bodyParser from 'body-parser';
import favicon from 'serve-favicon';

// Now import the routes
import * as routes from './routes';

// Import useful file IO
import * as fs from 'fs';

// Set up debug for development
import Debug from 'debug';

// Now load up any config
import app_cfg from './config/app.json';

// Set the environment setting we are using
let env = !process.env.NODE_ENV ? app_cfg.defaultEnv : process.env.NODE_ENV;

// Set the application and the variables it uses
let app					= express();			// This app
let port		 		= env == 'production' ? app_cfg.port : app_cfg.devPort;	// The default port for the app
let shutdown			= false;				// Flag to see if we are shutting down
let startup				= true;					// Flag to show we are starting up

// Set up fileupload
app.use(fileUpload());

// Intercept any connection attempts while we are starting up
app.use(function (req, res, next) {
	if (!startup) return next();

	res.setHeader('Connection', 'close');
	res.status(503).send('Service is in the process of starting.');
});

// Set debug if it was not set
if (process.env.DEBUG == null) {
	switch (env) {
	case 'development':
		Debug.enable('*,-babel*');
		break;
	case 'production':
		Debug.disable();
		break;
	default:
		Debug.enable('*,-babel*');
		env = 'development';
		break;
	}
}
let debug = Debug('server');
debug('The env is set to: ' + env);

// Now configure the application
debug('Setting favicon');
app.use(favicon(__dirname + '/public/images-server/favicon.ico'));

//app.use(cookieParser());			// Read cookies (needed for auth)
debug('Setting body parser url encoded and json');
app.use(bodyParser.urlencoded({		// Needed for html forms
	limit: app_cfg.urlEncodeMax, extended: false
}));


// Now set up the initial view
debug('Set basic view');
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

// Get the client
debug('Set initial static hosting for the client and css');
debug('dir name: ' + __dirname);
app.use(express.static(__dirname + '/public'));


// Log all of the requests
if (env === 'development') {
	debug('Add listener to all to log everything.');
	app.all('*', function(req, res, next) {
		debug(req.method + ' ' + req.url);
		return next();
	});
}

// Load the routes we are going to use
debug('Loading routes');
routes.display_routes(app);

// Capture requests to shutdown and do it cleanly
debug('Setting up shutdown cleanup, and responses.');
process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);

// Check if we are shutting down if we are respond nicely
app.use(function (req, res, next) {
	if (!shutdown) return next();

	res.setHeader('Connection', 'close');
	res.status(503).send('Service is in the process of closing.');
});

// This needs to remain the last app.use to handle all 404's
app.use(function (req, res, next) {
	debug('404, on  ' + req.originalUrl);
	return res.render('404', {'url': req.originalUrl});
});

// Finally start the server
debug('Setting up the server');
let server = http.createServer(app).listen(port, function(){
	startup = false;
	console.log('Display conf server, listening on port ' + port + ', environment is ' + env);
});


// On a shutdown request clean up nicely
function cleanup () {
	shutdown = true;
	debug('cleanup : shutting down.');

	server.close( function () {
		process.exit();
	});

	setTimeout(function () {
		debug('cleanup : timed out, forcing shut down.');
		process.exit(1);
	}, app_cfg.shutdownTimout * 1000);
}
