import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {setLineRequest} from './line.actions';
import {LineComponent} from './line.component';
import {selectLineErrorMessage, selectLineIsLoading, selectLineIsSuccess} from './line.selectors';

const mapStateToProps = state => ({
    errorMessage: selectLineErrorMessage(state),
    isLoading: selectLineIsLoading(state),
    isSuccess: selectLineIsSuccess(state)
});

const mapDispatchToProps = dispatch => ({
    setLineRequest: bindActionCreators(setLineRequest, dispatch)
});

export const Line = connect(
    mapStateToProps,
    mapDispatchToProps
)(LineComponent);
