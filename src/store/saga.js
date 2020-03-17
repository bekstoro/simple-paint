import {all} from 'redux-saga/effects'

import {canvasSaga} from '../applets/canvas';
import {fillSaga} from '../applets/fill';
import {lineSaga} from '../applets/line';
import {rectangleSaga} from '../applets/rectangle';

export function* rootSaga() {
    yield all([
        canvasSaga(),
        fillSaga(),
        lineSaga(),
        rectangleSaga()
    ]);
}
