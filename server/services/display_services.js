import Debug from 'debug';
import fs from 'fs';
const files = [];

const debug = Debug('display_services');

function getFileList() {
	debug('getFileList, called.');
	let files = fs.readdirSync(__dirname + '/public/images/');
	return files.filter(file => file.indexOf('.') !== -1);
}
/* ***************************************
 *  GET, getRecipe
 * ***************************************/
export function getFiles(req, res) {
	debug('getFiles, called.');
	let files = getFileList();
	return res.send({'files': files});
}

export function addFile(req, res) {
	debug('addFile, called.');
	let files = getFileList();
	return res.send({'files': files});
}
export function deleteFile(req, res) {
	debug('deleteFile, called.');
	let files = getFileList();
	return res.send({'files': files});
}
