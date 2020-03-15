import {connect} from 'react-redux'
import {CanvasComponent} from './Canvas.component';
import {selectCanvasHeight, selectCanvasWidth} from '../canvas.selectors';

const mapStateToProps = state => ({
    height: selectCanvasHeight(state),
    width: selectCanvasWidth(state)
});

export const Canvas = connect(
    mapStateToProps,
    null
)(CanvasComponent);
