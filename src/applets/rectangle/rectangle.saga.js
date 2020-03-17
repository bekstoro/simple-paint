import {call, fork, put, select, take} from 'redux-saga/effects';

import {selectCanvasHeight, selectCanvasWidth} from '../canvas';
import {SET_RECTANGLE_REQUEST, setRectangleFailure, setRectangleSuccess} from './rectangle.actions';

function* validateRectangleSaga({x1, y1, x2, y2}) {
    const canvasWidth = yield select(selectCanvasWidth);
    const canvasHeight = yield select(selectCanvasHeight);
    // TODO check if in canvas area
    // TODO check if no cross with line
    return true;
}

function* setRectangleSaga() {
    const {payload} = yield take(SET_RECTANGLE_REQUEST);
    const isValid = yield call(validateRectangleSaga, payload);
    isValid ? yield put(setRectangleSuccess(payload)) : yield put(setRectangleFailure());
}

export function* rectangleSaga() {
    yield fork(setRectangleSaga);
}
