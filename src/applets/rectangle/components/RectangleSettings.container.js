import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {RectangleSettingsComponent} from './RectangleSettings.component';
import {setRectangleSettingsRequest} from '../rectangle.actions';
import {selectRectangleSettingsIsFailed, selectRectangleSettingsIsLoading} from '../rectangle.selectors';
import {selectCanvasHeight, selectCanvasWidth} from '../../canvas';

const mapStateToProps = state => ({
    canvasHeight: selectCanvasHeight(state),
    canvasWidth: selectCanvasWidth(state),
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
