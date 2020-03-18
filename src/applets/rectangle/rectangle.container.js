import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {setRectangleRequest} from './rectangle.actions';
import {RectangleComponent} from './rectangle.component';
import {selectRectangleErrorMessage, selectRectangleIsLoading, selectRectangleIsSuccess} from './rectangle.selectors';

const mapStateToProps = state => ({
    errorMessage: selectRectangleErrorMessage(state),
    isLoading: selectRectangleIsLoading(state),
    isSuccess: selectRectangleIsSuccess(state)
});

const mapDispatchToProps = dispatch => ({
    setRectangleRequest: bindActionCreators(setRectangleRequest, dispatch)
});

export const Rectangle = connect(
    mapStateToProps,
    mapDispatchToProps
)(RectangleComponent);
