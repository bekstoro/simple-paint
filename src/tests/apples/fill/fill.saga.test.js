import {expectSaga} from 'redux-saga-test-plan';
import {select} from 'redux-saga-test-plan/matchers';

import {selectCanvasHeight, selectCanvasWidth} from '../../../applets/canvas';
import {setFillSaga} from '../../../applets/fill/fill.saga';
import {setFillFailure, setFillRequest, setFillSuccess} from '../../../applets/fill/fill.actions';
import {
    defaultFillColor,
    minCanvasHeight,
    minCanvasWidth,
    minFillHeight,
    minFillWidth,
    validationMessages
} from '../../../App.constants';

const payload = {
    color: defaultFillColor,
    height: minFillHeight,
    width: minFillWidth
};

const failPayload = {
    color: '',
    height: 0,
    width: 0
};

describe('setFillSaga', () => {
    it('should call setFillSaga and succeed', () =>
        expectSaga(setFillSaga)
            .provide([
                [select(selectCanvasHeight), minCanvasHeight],
                [select(selectCanvasWidth), minCanvasWidth],
            ])
            .dispatch(setFillRequest(payload))
            .put(setFillSuccess(payload))
            .run());

    it('should call setFillSaga and fail', () =>
        expectSaga(setFillSaga)
            .provide([
                [select(selectCanvasHeight), minCanvasHeight],
                [select(selectCanvasWidth), minCanvasWidth],
            ])
            .dispatch(setFillRequest(failPayload))
            .put(setFillFailure(validationMessages.fillWidthRule(minCanvasWidth)))
            .run());
});
