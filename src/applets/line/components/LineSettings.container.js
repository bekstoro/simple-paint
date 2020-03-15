import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {LineSettingsComponent} from './LineSettings.component';
import {setLineSettingsRequest} from '../line.actions';
import {selectLineSettingsIsFailed, selectLineSettingsIsLoading} from '../line.selectors';

const mapStateToProps = state => ({
    isFailed: selectLineSettingsIsFailed(state),
    isLoading: selectLineSettingsIsLoading(state)
});

const mapDispatchToProps = dispatch => ({
    setLineSettingsRequest: bindActionCreators(setLineSettingsRequest, dispatch)
});

export const LineSettings = connect(
    mapStateToProps,
    mapDispatchToProps
)(LineSettingsComponent);
