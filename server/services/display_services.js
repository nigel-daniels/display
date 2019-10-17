import Debug from 'debug';
import fs from 'fs';
const files = [];

const debug = Debug('display_services');

/* ***************************************
 *  GET, getRecipe
 * ***************************************/
export function getFiles(req, res) {
	debug('getFiles, called.');
	let files = fs.readdirSync(__dirname + '/public/images/');
	let result = files.filter(file => file.indexOf('.') !== 0);
	return res.send({files: result});
}
