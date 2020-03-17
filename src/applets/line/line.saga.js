import {call, fork, put, select, take} from 'redux-saga/effects';

import {selectCanvasHeight, selectCanvasWidth} from '../canvas';
import {SET_LINE_REQUEST, setLineFailure, setLineSuccess} from './line.actions';

function* validateLineSaga({x1, y1, x2, y2}) {
    const canvasWidth = yield select(selectCanvasWidth);
    const canvasHeight = yield select(selectCanvasHeight);
    // TODO check if in canvas area
    return true;
}

function* setLineSaga() {
    const {payload} = yield take(SET_LINE_REQUEST);
    const isValid = yield call(validateLineSaga, payload);
    isValid ? yield put(setLineSuccess(payload)) : yield put(setLineFailure());
}

export function* lineSaga() {
    yield fork(setLineSaga);
}
