import {connect} from 'react-redux'
import {LineComponent} from './Line.component';
import {selectLineX1, selectLineX2, selectLineY1, selectLineY2} from '../line.selectors';

const mapStateToProps = state => ({
    x1: selectLineX1(state),
    y1: selectLineY1(state),
    x2: selectLineX2(state),
    y2: selectLineY2(state),
});

export const Line = connect(
    mapStateToProps,
    null
)(LineComponent);
