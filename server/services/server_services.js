import Debug from 'debug';

const debug = Debug('server_services');

/* ***************************************
 *  GET, Start the app
 * ***************************************/
export function start(req, res) {
	debug('start, called.');

	let env = Debug.enabled ? 'development' : 'production';

	return res.render('index', {'env': env});
}
