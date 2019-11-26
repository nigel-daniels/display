import { handle } from 'redux-pack';
import * as actions from '../actions';
import Debug from 'debug';

let debug = Debug('display_reducer');

const INITIAL_STATE = {
	isworking: false,
	files: null,
	err: null
};

export default function reducer(state = INITIAL_STATE, action) {
	debug('reducer, called.');
	const { type, payload } = action;

	//debug('action : ' + JSON.stringify(action));

	switch (action.type) {
	case actions.GET_FILES: {
		debug('GET_FILES is called');
		//debug('payload : ' + JSON.stringify(payload));
		return handle(state, action, {
			start: prevState => ({...prevState, isworking: true, files: null, err: null}),
			finish: prevState => ({ ...prevState, isworking: false }),
			failure: prevState => ({ ...prevState, err: payload.message }),
			success: prevState => ({ ...prevState, files: payload.files })
		});
	}
	case actions.ADD_FILE: {
		debug('ADD_FILE is called');
		//debug('payload : ' + JSON.stringify(payload));
		return handle(state, action, {
			start: prevState => ({...prevState, isworking: true, files: null, err: null}),
			finish: prevState => ({ ...prevState, isworking: false }),
			failure: prevState => ({ ...prevState, err: payload.message }),
			success: prevState => ({ ...prevState, files: payload.files })
		});
	}
	case actions.DELETE_FILE: {
		debug('DELETE_FILE is called');
		//debug('payload : ' + JSON.stringify(payload));
		return handle(state, action, {
			start: prevState => ({...prevState, isworking: true, files: null, err: null}),
			finish: prevState => ({ ...prevState, isworking: false }),
			failure: prevState => ({ ...prevState, err: payload.message }),
			success: prevState => ({ ...prevState, files: payload.files })
		});
	}
	case actions.START_DISPLAY: {
		debug('START_DISPLAY is called');
		//debug('payload : ' + JSON.stringify(payload));
		return handle(state, action, {
			start: prevState => ({...prevState, isworking: true, err: null}),
			finish: prevState => ({ ...prevState, isworking: false }),
			failure: prevState => ({ ...prevState, err: payload.message }),
			success: prevState => ({ ...prevState })
		});
	}
	case actions.STOP_DISPLAY: {
		debug('STOP_DISPLAY is called');
		//debug('payload : ' + JSON.stringify(payload));
		return handle(state, action, {
			start: prevState => ({...prevState, isworking: true, err: null}),
			finish: prevState => ({ ...prevState, isworking: false }),
			failure: prevState => ({ ...prevState, err: payload.message }),
			success: prevState => ({ ...prevState })
		});
	}
	default:
		return state;
	}
}
