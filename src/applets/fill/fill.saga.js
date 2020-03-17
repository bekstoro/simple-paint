import {call, fork, put, select, take} from 'redux-saga/effects';

import {selectCanvasHeight, selectCanvasWidth} from '../canvas';
import {SET_FILL_REQUEST, setFillFailure, setFillSuccess} from './fill.actions';

function* validateFillSaga({width, height, color}) {
    const canvasWidth = yield select(selectCanvasWidth);
    const canvasHeight = yield select(selectCanvasHeight);
    // TODO check if in canvas area
    return true;
}

function* setFillSaga() {
    const {payload} = yield take(SET_FILL_REQUEST);
    const isValid = yield call(validateFillSaga, payload);
    isValid ? yield put(setFillSuccess(payload)) : yield put(setFillFailure());
}

export function* fillSaga() {
    yield fork(setFillSaga);
}
