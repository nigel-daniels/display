import {start, getFiles} from '../services';

export default function (app) {
	app.get('/', start);
	app.get('/files/', getFiles);
}
