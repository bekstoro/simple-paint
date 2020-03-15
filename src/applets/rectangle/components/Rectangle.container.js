import {connect} from 'react-redux'
import {RectangleComponent} from './Rectangle.component';
import {selectRectangleX1, selectRectangleX2, selectRectangleY1, selectRectangleY2} from '../rectangle.selectors';

const mapStateToProps = state => ({
    x1: selectRectangleX1(state),
    y1: selectRectangleY1(state),
    x2: selectRectangleX2(state),
    y2: selectRectangleY2(state)
});

export const Rectangle = connect(
    mapStateToProps,
    null
)(RectangleComponent);
