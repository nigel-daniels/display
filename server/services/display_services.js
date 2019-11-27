import Debug from 'debug';
import fs from 'fs';
import * as process from 'child_process';

const files = [];

const debug = Debug('display_services');

function getFileList() {
	debug('getFileList, called.');
	let files = fs.readdirSync(__dirname + '/public/images-display/');
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
		imageFile.mv(`${__dirname}/public/images-display/${imageFile.name}`, function(err) {
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
		fs.unlink(__dirname + '/public/images-display/' + fileName, (err) => {
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

export function  startDisplay(req, res) {
	debug('startDisplay, called');
	const fim = process.spawn('fim', ['-a', '-q', '-c', '"while(1){next;display;sleep \'20\';};"', '/home/pi/display/dist/public/images-display/'],{
		detatch: true,
		stdio: 'ignore'
	});

	fim.unref();

	return res.send();

	/*process.exec('fim -a -q -c "while(1){next;display;sleep \'20\';};" /home/pi/display/dist/public/images-display/', (err, stdout, stderr) => {
		if (err) {
			return res.status(500).send({message: 'There was an error starting the display.'});
		} else {
			debug('startDisplay: ' + stdout);
			return res.send();
		}

	});*/
}

export function  stopDisplay(req, res) {
	debug('stopDisplay, called');
	process.exec('pkill -f "fim"', (err, stdout, stderr) => {
		if (err) {
			return res.status(500).send({message: 'There was an error starting the display.'});
			debug('startDisplay: ' + stdout);
		} else {
			return res.send();
		}

	});
}
