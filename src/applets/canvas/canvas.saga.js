import {fork, put, take} from 'redux-saga/effects';

import {maxCanvasHeight, maxCanvasWidth, minCanvasHeight, minCanvasWidth} from '../../App.constants';
import {SET_CANVAS_REQUEST, setCanvasFailure, setCanvasSuccess} from './canvas.actions';

const validateCanvasSaga = ({width, height}) =>
    width && height && width >= minCanvasWidth && width <= maxCanvasWidth && height >= minCanvasHeight && height <= maxCanvasHeight;

function* setCanvasSaga() {
    const {payload} = yield take(SET_CANVAS_REQUEST);
    const isValid = validateCanvasSaga(payload);
    isValid ? yield put(setCanvasSuccess(payload)) : yield put(setCanvasFailure());
}

export function* canvasSaga() {
    yield fork(setCanvasSaga);
}
