import * as index from '../index';
import * as actions from './action_types';
import * as services from '../services';

export const getFiles = () => ({type: actions.GET_FILES, promise: services.getFiles()});
export const addFile = (file) => ({type: actions.ADD_FILE, promise: services.addFile(file)});
export const deleteFile = (file) => ({type: actions.DELETE_FILE, promise: services.deleteFile(file)});
