import React, {useState} from 'react';
import {connect} from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames'
import PropTypes from 'prop-types';

import {selectCanvas} from '../applets/canvas';
import {selectFill} from '../applets/fill';
import {selectLines} from '../applets/line';
import {selectRectangles} from '../applets/rectangle';
import {fillBoard, getBoard, getLinesCoordinates, getRectanglesCoordinates} from '../helpers/board.helper';

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
                            lines,
                            rectangles,
                            classes
                        }) {
    const linesCoordinates = getLinesCoordinates(lines);
    const rectanglesCoordinates = getRectanglesCoordinates(rectangles);
    const [board, setBoard] = useState(getBoard(canvas.height, canvas.width, linesCoordinates, rectanglesCoordinates));
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
    lines: PropTypes.array.isRequired,
    rectangles: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    canvas: selectCanvas(state),
    fill: selectFill(state),
    lines: selectLines(state),
    rectangles: selectRectangles(state)
});

export const Board = connect(
    mapStateToProps,
    null
)(withStyles(styles)(BoardComponent));
