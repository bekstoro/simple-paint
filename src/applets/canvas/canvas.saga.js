import {fork, put, take} from 'redux-saga/effects';
import {SET_CANVAS_SETTINGS_REQUEST, setCanvasSettingsFailure, setCanvasSettingsSuccess} from './canvas.actions';
import {maxCanvasHeight, maxCanvasWidth, minCanvasHeight, minCanvasWidth} from '../../app/App.constants';

const validateCanvasSettingsSaga = ({width, height}) =>
    width && height && width >= minCanvasWidth && width <= maxCanvasWidth && height >= minCanvasHeight && height <= maxCanvasHeight;

function* setCanvasSettingsSaga() {
    const {payload} = yield take(SET_CANVAS_SETTINGS_REQUEST);
    const isValid = validateCanvasSettingsSaga(payload);
    isValid ? yield put(setCanvasSettingsSuccess(payload)) : yield put(setCanvasSettingsFailure());
}

export function* canvasSaga() {
    yield fork(setCanvasSettingsSaga);
}
