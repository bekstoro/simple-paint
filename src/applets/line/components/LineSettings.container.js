import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {LineSettingsComponent} from './LineSettings.component';
import {setLineSettingsRequest} from '../line.actions';
import {selectLineSettingsIsFailed, selectLineSettingsIsLoading} from '../line.selectors';
import {selectCanvasHeight, selectCanvasWidth} from '../../canvas';

const mapStateToProps = state => ({
    canvasHeight: selectCanvasHeight(state),
    canvasWidth: selectCanvasWidth(state),
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
