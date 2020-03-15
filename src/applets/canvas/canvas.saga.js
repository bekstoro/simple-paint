import {all, put, take} from 'redux-saga/effects';
import {SET_CANVAS_SETTINGS_REQUEST, setCanvasSettingsFailure, setCanvasSettingsSuccess} from './canvas.actions';
import {maxCanvasHeight, maxCanvasWidth, minCanvasHeight, minCanvasWidth} from '../../app/App.constants';

const validateCanvasSettingsSaga = (width, height) =>
    width && height && width >= minCanvasWidth && width <= maxCanvasWidth && height >= minCanvasHeight && height <= maxCanvasHeight;

function* setCanvasSettingsSaga({width, height}) {
    yield take(SET_CANVAS_SETTINGS_REQUEST);
    const isValid = validateCanvasSettingsSaga(width, height);
    if (isValid) {
        yield put(setCanvasSettingsSuccess({width, height}));
    } else {
        yield put(setCanvasSettingsFailure());
    }
    return isValid;
}

export function* canvasSaga() {
    yield all([setCanvasSettingsSaga]);
}
