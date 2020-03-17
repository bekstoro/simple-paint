import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {selectCanvasHeight, selectCanvasWidth} from '../canvas';
import {setRectangleRequest} from './rectangle.actions';
import {RectangleComponent} from './rectangle.component';
import {selectRectangleIsFailed, selectRectangleIsLoading} from './rectangle.selectors';

const mapStateToProps = state => ({
    canvasHeight: selectCanvasHeight(state),
    canvasWidth: selectCanvasWidth(state),
    isFailed: selectRectangleIsFailed(state),
    isLoading: selectRectangleIsLoading(state)
});

const mapDispatchToProps = dispatch => ({
    setRectangleRequest: bindActionCreators(setRectangleRequest, dispatch)
});

export const Rectangle = connect(
    mapStateToProps,
    mapDispatchToProps
)(RectangleComponent);
