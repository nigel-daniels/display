import {connect} from 'react-redux';
import * as actions from '../../../actions';
import ImageCardView from './ImageCardView';
import Debug from 'debug';

let debug = Debug('ImageCard');

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
		deleteFile: (file) => {dispatch(actions.deleteFile(file));},
	};
};

const ImageCard = connect(mapStateToProps, mapDispatchToProps)(ImageCardView);

export default ImageCard;
