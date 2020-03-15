import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {RectangleSettingsComponent} from './RectangleSettings.component';
import {setRectangleSettingsRequest} from '../rectangle.actions';
import {selectRectangleSettingsIsFailed, selectRectangleSettingsIsLoading} from '../rectangle.selectors';

const mapStateToProps = state => ({
    isFailed: selectRectangleSettingsIsFailed(state),
    isLoading: selectRectangleSettingsIsLoading(state)
});

const mapDispatchToProps = dispatch => ({
    setRectangleSettingsRequest: bindActionCreators(setRectangleSettingsRequest, dispatch)
});

export const RectangleSettings = connect(
    mapStateToProps,
    mapDispatchToProps
)(RectangleSettingsComponent);
