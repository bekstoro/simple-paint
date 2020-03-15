import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {CanvasSettingsComponent} from './CanvasSettings.component';
import {setCanvasSettingsRequest} from '../canvas.actions';
import {selectCanvasSettingsIsFailed, selectCanvasSettingsIsLoading} from '../canvas.selectors';

const mapStateToProps = state => ({
    isFailed: selectCanvasSettingsIsFailed(state),
    isLoading: selectCanvasSettingsIsLoading(state)
});

const mapDispatchToProps = dispatch => ({
    setCanvasSettingsRequest: bindActionCreators(setCanvasSettingsRequest, dispatch)
});

export const CanvasSettings = connect(
    mapStateToProps,
    mapDispatchToProps
)(CanvasSettingsComponent);
