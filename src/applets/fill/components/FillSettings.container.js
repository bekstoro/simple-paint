import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {FillSettingsComponent} from './FillSettings.component';
import {setFillSettingsRequest} from '../fill.actions';
import {selectFillSettingsIsFailed, selectFillSettingsIsLoading} from '../fill.selectors';

const mapStateToProps = state => ({
    isFailed: selectFillSettingsIsFailed(state),
    isLoading: selectFillSettingsIsLoading(state)
});

const mapDispatchToProps = dispatch => ({
    setFillSettingsRequest: bindActionCreators(setFillSettingsRequest, dispatch)
});

export const FillSettings = connect(
    mapStateToProps,
    mapDispatchToProps
)(FillSettingsComponent);
