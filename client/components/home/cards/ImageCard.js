import {connect} from 'react-redux';
import * as actions from '../../../actions';
import ImageCardView from './ImageCardView';
import Debug from 'debug';

let debug = Debug('ImageCard');

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
	};
};

const ImageCard = connect(mapStateToProps, mapDispatchToProps)(ImageCardView);

export default ImageCard;
