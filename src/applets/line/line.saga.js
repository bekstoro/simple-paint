import {call, fork, put, select, take} from 'redux-saga/effects';
import {SET_LINE_SETTINGS_REQUEST, setLineSettingsFailure, setLineSettingsSuccess} from './line.actions';
import {selectCanvasHeight, selectCanvasWidth} from '../canvas';

function* validateLineSettingsSaga({x1, y1, x2, y2}) {
    const canvasWidth = yield select(selectCanvasWidth);
    const canvasHeight = yield select(selectCanvasHeight);
    // TODO check if in canvas area
    return true;
}

function* setLineSettingsSaga() {
    const {payload} = yield take(SET_LINE_SETTINGS_REQUEST);
    const isValid = yield call(validateLineSettingsSaga, payload);
    isValid ? yield put(setLineSettingsSuccess(payload)) : yield put(setLineSettingsFailure());
}

export function* lineSaga() {
    yield fork(setLineSettingsSaga);
}
