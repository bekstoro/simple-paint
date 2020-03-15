import {all, call, put, select, take} from 'redux-saga/effects';
import {SET_RECTANGLE_SETTINGS_REQUEST, setRectangleSettingsFailure, setRectangleSettingsSuccess} from './rectangle.actions';
import {selectCanvasHeight, selectCanvasWidth} from '../canvas';

function* validateRectangleSettingsSaga({x1, y1, x2, y2}) {
    const canvasWidth = yield select(selectCanvasWidth);
    const canvasHeight = yield select(selectCanvasHeight);
    // TODO check if in canvas area
    // TODO check if no cross with line
    return true;
}

function* setRectangleSettingsSaga(params) {
    yield take(SET_RECTANGLE_SETTINGS_REQUEST);
    const isValid = yield call(validateRectangleSettingsSaga, params);
    if (isValid) {
        yield put(setRectangleSettingsSuccess(params));
    } else {
        yield put(setRectangleSettingsFailure());
    }
    return isValid;
}

export function* rectangleSaga() {
    yield all([setRectangleSettingsSaga]);
}
