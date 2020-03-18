import {call, fork, put, select, take} from 'redux-saga/effects';

import {validationMessages} from '../../App.constants';
import {selectCanvasHeight, selectCanvasWidth} from '../canvas';
import {SET_LINE_REQUEST, setLineFailure, setLineSuccess} from './line.actions';

function* validateLineSaga({x1, y1, x2, y2}) {
    const canvasHeight = yield select(selectCanvasHeight);
    const canvasWidth = yield select(selectCanvasWidth);
    if (!x1 || !y1 || x1 < 0 || x1 > canvasWidth || y1 < 0 || y1 > canvasHeight) return validationMessages.point1IsOutOfCanvas;
    if (!x2 || !y2 || x2 < 0 || x2 > canvasWidth || y2 < 0 || y2 > canvasHeight) return validationMessages.point2IsOutOfCanvas;
    if (x1 === x2 && y1 === y2) return validationMessages.pointsAreEqual;
    if (x1 !== x2 && y1 !== y2) return validationMessages.shouldBeEqualByXYCoordinates;
}

function* setLineSaga() {
    while (true) {
        const {payload} = yield take(SET_LINE_REQUEST);
        const errorMessage = yield call(validateLineSaga, payload);
        errorMessage ? yield put(setLineFailure(errorMessage)) : yield put(setLineSuccess(payload));
    }
}

export function* lineSaga() {
    yield fork(setLineSaga);
}
