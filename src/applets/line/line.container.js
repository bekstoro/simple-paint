import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {selectCanvasHeight, selectCanvasWidth} from '../canvas';
import {setLineRequest} from './line.actions';
import {LineComponent} from './line.component';
import {selectLineIsFailed, selectLineIsLoading} from './line.selectors';

const mapStateToProps = state => ({
    canvasHeight: selectCanvasHeight(state),
    canvasWidth: selectCanvasWidth(state),
    isFailed: selectLineIsFailed(state),
    isLoading: selectLineIsLoading(state)
});

const mapDispatchToProps = dispatch => ({
    setLineRequest: bindActionCreators(setLineRequest, dispatch)
});

export const Line = connect(
    mapStateToProps,
    mapDispatchToProps
)(LineComponent);
