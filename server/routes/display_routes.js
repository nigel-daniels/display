import {start, getFiles, addFile, deleteFile} from '../services';

export default function (app) {
	app.get('/', start);
	app.get('/files/', getFiles);
	app.post('/files/', addFile);
	app.delete('/files/', deleteFile);
}
