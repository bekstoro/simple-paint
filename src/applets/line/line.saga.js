import {all, call, put, select, take} from 'redux-saga/effects';
import {SET_LINE_SETTINGS_REQUEST, setLineSettingsFailure, setLineSettingsSuccess} from './line.actions';
import {selectCanvasHeight, selectCanvasWidth} from '../canvas';

function* validateLineSettingsSaga({x1, y1, x2, y2}) {
    const canvasWidth = yield select(selectCanvasWidth);
    const canvasHeight = yield select(selectCanvasHeight);
    // TODO check if in canvas area
    return true;
}

function* setLineSettingsSaga(params) {
    yield take(SET_LINE_SETTINGS_REQUEST);
    const isValid = yield call(validateLineSettingsSaga, params);
    if (isValid) {
        yield put(setLineSettingsSuccess(params));
    } else {
        yield put(setLineSettingsFailure());
    }
    return isValid;
}

export function* lineSaga() {
    yield all([setLineSettingsSaga]);
}
