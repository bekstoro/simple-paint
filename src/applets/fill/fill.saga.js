import {all, call, put, select, take} from 'redux-saga/effects';
import {SET_FILL_SETTINGS_REQUEST, setFillSettingsFailure, setFillSettingsSuccess} from './fill.actions';
import {selectCanvasHeight, selectCanvasWidth} from '../canvas';

function* validateFillSettingsSaga({width, height, color}) {
    const canvasWidth = yield select(selectCanvasWidth);
    const canvasHeight = yield select(selectCanvasHeight);
    // TODO check if in canvas area
    return true;
}

function* setFillSettingsSaga(params) {
    yield take(SET_FILL_SETTINGS_REQUEST);
    const isValid = yield call(validateFillSettingsSaga, params);
    if (isValid) {
        yield put(setFillSettingsSuccess(params));
    } else {
        yield put(setFillSettingsFailure());
    }
    return isValid;
}

export function* fillSaga() {
    yield all([setFillSettingsSaga]);
}
