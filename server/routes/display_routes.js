import {start, getFiles, addFile, deleteFile, rebootDisplay, shutdownDisplay} from '../services';

export default function (app) {
	app.get('/', start);
	app.get('/files/', getFiles);
	app.post('/files/', addFile);
	app.delete('/files/:file', deleteFile);
	app.get('/display/reboot', rebootDisplay);
	app.get('/display/shutdown', shutdownDisplay);
}
