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
 *  GET, getFiles
 * ***************************************/
export function getFiles(req, res) {
	debug('getFiles, called.');
	let files = getFileList();
	return res.send({'files': files});
}


export function addFile(req, res) {
	debug('addFile, called.');

	if (req.files.file) {
		let imageFile = req.files.file;
		debug('addFile, file name: ' + imageFile.name);
		imageFile.mv(`${__dirname}/public/images/${imageFile.name}`, function(err) {
    		if (err) {
      			return res.status(500).send({message: 'There was an error adding the file. ' + err.message});
    		}

			let files = getFileList();
			return res.send({'files': files});
		});
	} else {
		return res.status(400).send({message: 'No file was sent.'});
	}
}


export function deleteFile(req, res) {
	debug('deleteFile, called.');
	let fileName = req.params.file;
	debug('deleteFile, file: ' + fileName);
	if (fileName) {
		fs.unlink(__dirname + '/public/images/' + fileName, (err) => {
			if (err) {
				return res.status(500).send({message: 'There was an error deleting the file. ' + err.message});
			}
			let files = getFileList();
			return res.send({'files': files});
		});
	} else {
		return res.status(400).send({message: 'No filename provided.'});
	}
}
