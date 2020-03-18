import React, {useState} from 'react';
import {connect} from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames'
import PropTypes from 'prop-types';

import {selectCanvas} from '../applets/canvas';
import {selectFill} from '../applets/fill';
import {selectLine} from '../applets/line';
import {selectRectangle} from '../applets/rectangle';
import {fillBoard, getBoard, getLineCoordinates, getRectangleCoordinates} from '../helpers/board.helper';

const styles = () => ({
    table: {
        margin: '1em auto'
    },
    td: {
        border: '1px solid #DDD',
        height: '1em',
        width: '1em'
    },
    figure: {
        backgroundColor: '#3f51b5'
    }
});

function BoardComponent({
                            canvas,
                            fill,
                            line,
                            rectangle,
                            classes
                        }) {
    const lineCoordinates = getLineCoordinates(line);
    const rectangleCoordinates = getRectangleCoordinates(rectangle);
    const [board, setBoard] = useState(getBoard(canvas.height, canvas.width, lineCoordinates, rectangleCoordinates));
    return (
        <table className={classes.table}>
            <tbody>
            {
                board.map((row, i) =>
                    <tr key={i}>
                        {
                            row.map((cell, j) =>
                                <td
                                    key={j}
                                    onClick={() => {
                                        setBoard([]);
                                        setTimeout(() => {
                                            setBoard(fillBoard(board, i, j))
                                        }, 0)
                                    }}
                                    className={classNames(classes.td, {
                                        [classes.figure]: cell.value === 1
                                    })}
                                    style={{backgroundColor: cell.value === 2 && fill.color}}
                                />)
                        }
                    </tr>)
            }
            </tbody>
        </table>
    )
}

BoardComponent.propTypes = {
    canvas: PropTypes.object.isRequired,
    fill: PropTypes.object.isRequired,
    line: PropTypes.object.isRequired,
    rectangle: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    canvas: selectCanvas(state),
    fill: selectFill(state),
    line: selectLine(state),
    rectangle: selectRectangle(state)
});

export const Board = connect(
    mapStateToProps,
    null
)(withStyles(styles)(BoardComponent));
