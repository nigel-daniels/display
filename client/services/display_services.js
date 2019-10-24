import fetch from 'cross-fetch';
//import Fuse from 'fuse.js';
import { coreInit, fetchOk } from './service_utils';
import Debug from 'debug';

let debug = Debug('display_servcies');



export const getFiles = () => {
	debug('getFiles, called.');

	let init = {
		...coreInit,
		method:			'GET'
	};

	debug('getFiles, init is: ' + JSON.stringify(init));
	return fetchOk('/files/', init)
		.then((response) => {debug('getFiles, fetch ok.');return response;})
		.catch((error) => {debug('getFiles, fetch, caught err.'); throw error;});
};

export const addFile = (file) => {
	debug('addFile, called.');

	let init = {
		...coreInit,
		method:			'POST',
		body:			JSON.stringify({'file': file})
	};

	debug('addFile, init is: ' + JSON.stringify(init));
	return fetchOk('/files/', init)
		.then((response) => {debug('addFile, fetch ok.');return response;})
		.catch((error) => {debug('addFile, fetch, caught err.'); throw error;});
};

export const deleteFile = (file) => {
	debug('deleteFile, called.');

	let init = {
		...coreInit,
		method:			'DELETE',
		body:			JSON.stringify({'file': file})
	};

	debug('deleteFile, init is: ' + JSON.stringify(init));
	return fetchOk('/files/', init)
		.then((response) => {debug('deleteFile, fetch ok.');return response;})
		.catch((error) => {debug('deleteFile, fetch, caught err.'); throw error;});
};
