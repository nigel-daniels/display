import './css/index.css';
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { middleware as pack } from 'redux-pack';
import thunk from 'redux-thunk';
import App from './components/App';
import reducer from './reducer';
import '@babel/polyfill';

// Now set up the local debug
import Debug from 'debug';

let debug = Debug('index');

if ($('#app-script').attr('data-env') === 'development') {
	Debug.enable('*');
	debug('debug enabled');
} else {
	Debug.disable();
}

debug('creating redux store');
export const store = createStore(reducer, applyMiddleware(pack, thunk));

// Now set up the routing
debug('Rendering provider');
ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('app')
);
