import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {setFillRequest} from './fill.actions';
import {FillComponent} from './fill.component';
import {selectFillIsFailed, selectFillIsLoading} from './fill.selectors';

const mapStateToProps = state => ({
    isFailed: selectFillIsFailed(state),
    isLoading: selectFillIsLoading(state)
});

const mapDispatchToProps = dispatch => ({
    setFillRequest: bindActionCreators(setFillRequest, dispatch)
});

export const Fill = connect(
    mapStateToProps,
    mapDispatchToProps
)(FillComponent);
