import {connect} from 'react-redux';
import * as actions from '../../actions';
import HeaderView from './HeaderView';
import Debug from 'debug';

let debug = Debug('Header');

const mapStateToProps = (state) => {
	debug('mapStateToProps: called');
	return {
		isworking:	state.display.isworking,
		err:		state.display.err
	};
};

const mapDispatchToProps = (dispatch) => {
	debug('mapDispatchToProps, called');
	return {
		rebootDisplay: () => {dispatch(actions.rebootDisplay());},
		shutdownDisplay: () => {dispatch(actions.shutdownDisplay());}
	};
};

const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderView);

export default Header;
