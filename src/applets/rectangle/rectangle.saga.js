import {call, fork, put, select, take} from 'redux-saga/effects';
import {SET_RECTANGLE_SETTINGS_REQUEST, setRectangleSettingsFailure, setRectangleSettingsSuccess} from './rectangle.actions';
import {selectCanvasHeight, selectCanvasWidth} from '../canvas';

function* validateRectangleSettingsSaga({x1, y1, x2, y2}) {
    const canvasWidth = yield select(selectCanvasWidth);
    const canvasHeight = yield select(selectCanvasHeight);
    // TODO check if in canvas area
    // TODO check if no cross with line
    return true;
}

function* setRectangleSettingsSaga() {
    const {payload} = yield take(SET_RECTANGLE_SETTINGS_REQUEST);
    const isValid = yield call(validateRectangleSettingsSaga, payload);
    isValid ? yield put(setRectangleSettingsSuccess(payload)) : yield put(setRectangleSettingsFailure());
}

export function* rectangleSaga() {
    yield fork(setRectangleSettingsSaga);
}
