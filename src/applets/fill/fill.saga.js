import {call, fork, put, select, take} from 'redux-saga/effects';

import {validationMessages} from '../../App.constants';
import {selectCanvasHeight, selectCanvasWidth} from '../canvas';
import {SET_FILL_REQUEST, setFillFailure, setFillSuccess} from './fill.actions';

function* validateFillSaga({width, height, color}) {
    const canvasHeight = yield select(selectCanvasHeight);
    const canvasWidth = yield select(selectCanvasWidth);
    if (!width || width < 0 || width > canvasWidth) return validationMessages.fillWidthRule(canvasWidth);
    if (!height || height < 0 || height > canvasHeight) return validationMessages.fillHeightRule(canvasHeight);
    if (!color.match( /#[a-f0-9]{6}/gi )) return validationMessages.invalidColor;
}

export function* setFillSaga() {
    while (true) {
        const {payload} = yield take(SET_FILL_REQUEST);
        const errorMessage = yield call(validateFillSaga, payload);
        errorMessage ? yield put(setFillFailure(errorMessage)) : yield put(setFillSuccess(payload));
    }
}

export function* fillSaga() {
    yield fork(setFillSaga);
}
