import {connect} from 'react-redux'
import {FillComponent} from './Fill.component';
import {selectFillColor, selectFillHeight, selectFillWidth} from '../fill.selectors';

const mapStateToProps = state => ({
    width: selectFillWidth(state),
    height: selectFillHeight(state),
    color: selectFillColor(state),
});

export const Fill = connect(
    mapStateToProps,
    null
)(FillComponent);
