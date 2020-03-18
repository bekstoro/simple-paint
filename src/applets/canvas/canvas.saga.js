import {fork, put, take} from 'redux-saga/effects';

import {
    maxCanvasHeight,
    maxCanvasWidth,
    minCanvasHeight,
    minCanvasWidth,
    validationMessages
} from '../../App.constants';
import {SET_CANVAS_REQUEST, setCanvasFailure, setCanvasSuccess} from './canvas.actions';

const validateCanvasSaga = ({width, height}) => {
    if (!width || width < minCanvasWidth || width > maxCanvasWidth) return validationMessages.canvasWidth;
    if (!height || height < minCanvasHeight || height > maxCanvasHeight) return validationMessages.canvasHeight;
};

function* setCanvasSaga() {
    while (true) {
        const {payload} = yield take(SET_CANVAS_REQUEST);
        const errorMessage = validateCanvasSaga(payload);
        errorMessage ? yield put(setCanvasFailure(errorMessage)) : yield put(setCanvasSuccess(payload));
    }
}

export function* canvasSaga() {
    yield fork(setCanvasSaga);
}
