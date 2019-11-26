import {start, getFiles, addFile, deleteFile, startDisplay, stopDisplay} from '../services';

export default function (app) {
	app.get('/', start);
	app.get('/files/', getFiles);
	app.post('/files/', addFile);
	app.delete('/files/:file', deleteFile);
	app.get('/display/start', startDisplay);
	app.get('/display/stop', stopDisplay);
}
