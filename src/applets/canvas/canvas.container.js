import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {setCanvasRequest} from './canvas.actions';
import {CanvasComponent} from './canvas.component';
import {selectCanvasIsFailed, selectCanvasIsLoading} from './canvas.selectors';

const mapStateToProps = state => ({
    isFailed: selectCanvasIsFailed(state),
    isLoading: selectCanvasIsLoading(state)
});

const mapDispatchToProps = dispatch => ({
    setCanvasRequest: bindActionCreators(setCanvasRequest, dispatch)
});

export const Canvas = connect(
    mapStateToProps,
    mapDispatchToProps
)(CanvasComponent);
