import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {setFillRequest} from './fill.actions';
import {FillComponent} from './fill.component';
import {selectFillErrorMessage, selectFillIsLoading, selectFillIsSuccess} from './fill.selectors';

const mapStateToProps = state => ({
    errorMessage: selectFillErrorMessage(state),
    isLoading: selectFillIsLoading(state),
    isSuccess: selectFillIsSuccess(state)
});

const mapDispatchToProps = dispatch => ({
    setFillRequest: bindActionCreators(setFillRequest, dispatch)
});

export const Fill = connect(
    mapStateToProps,
    mapDispatchToProps
)(FillComponent);
