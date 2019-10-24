import {connect} from 'react-redux';
import * as actions from '../../actions';
import HomeView from './HomeView';
import Debug from 'debug';

let debug = Debug('Home');

const mapStateToProps = (state) => {
	debug('mapStateToProps: called');
	return {
		isworking:	state.display.isworking,
		err:		state.display.err,
		files:		state.display.files
	};
};

const mapDispatchToProps = (dispatch) => {
	debug('mapDispatchToProps, called');
	return {
		getFiles: () => {dispatch(actions.getFiles());},
		addFile: (file) => {dispatch(actions.addFile(file));}
	};
};

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeView);

export default Home;
