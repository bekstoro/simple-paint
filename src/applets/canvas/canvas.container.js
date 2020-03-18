import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {setCanvasRequest} from './canvas.actions';
import {CanvasComponent} from './canvas.component';
import {selectCanvasErrorMessage, selectCanvasIsLoading, selectCanvasIsSuccess} from './canvas.selectors';

const mapStateToProps = state => ({
    errorMessage: selectCanvasErrorMessage(state),
    isLoading: selectCanvasIsLoading(state),
    isSuccess: selectCanvasIsSuccess(state)
});

const mapDispatchToProps = dispatch => ({
    setCanvasRequest: bindActionCreators(setCanvasRequest, dispatch)
});

export const Canvas = connect(
    mapStateToProps,
    mapDispatchToProps
)(CanvasComponent);
