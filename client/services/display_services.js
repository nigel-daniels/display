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
