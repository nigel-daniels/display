import { Action, combineReducers } from 'redux';
import display_reducer from './display_reducer';

const reducer = combineReducers({
	display: display_reducer
});

export default reducer;
