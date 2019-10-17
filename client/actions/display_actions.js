import * as index from '../index';
import * as actions from './action_types';
import * as services from '../services';

export const getFiles = () => ({type: actions.GET_FILES, promise: services.getFiles()});
