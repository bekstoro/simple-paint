import {call, fork, put, select, take} from 'redux-saga/effects';
import {SET_FILL_SETTINGS_REQUEST, setFillSettingsFailure, setFillSettingsSuccess} from './fill.actions';
import {selectCanvasHeight, selectCanvasWidth} from '../canvas';

function* validateFillSettingsSaga({width, height, color}) {
    const canvasWidth = yield select(selectCanvasWidth);
    const canvasHeight = yield select(selectCanvasHeight);
    // TODO check if in canvas area
    return true;
}

function* setFillSettingsSaga() {
    const {payload} = yield take(SET_FILL_SETTINGS_REQUEST);
    const isValid = yield call(validateFillSettingsSaga, payload);
    isValid ? yield put(setFillSettingsSuccess(payload)) : yield put(setFillSettingsFailure());
}

export function* fillSaga() {
    yield fork(setFillSettingsSaga);
}
