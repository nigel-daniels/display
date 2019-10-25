import {connect} from 'react-redux';
import * as actions from '../../../actions';
import NewImageCardView from './NewImageCardView';
import Debug from 'debug';

let debug = Debug('NewImageCard');

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
		addFile: (file) => {dispatch(actions.addFile(file));},
	};
};

const NewImageCard = connect(mapStateToProps, mapDispatchToProps)(NewImageCardView);

export default NewImageCard;
