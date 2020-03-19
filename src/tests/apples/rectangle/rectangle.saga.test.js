import {expectSaga} from 'redux-saga-test-plan';
import {select} from 'redux-saga-test-plan/matchers';

import {selectCanvasHeight, selectCanvasWidth} from '../../../applets/canvas';
import {setRectangleSaga} from '../../../applets/rectangle/rectangle.saga';
import {setRectangleFailure, setRectangleRequest, setRectangleSuccess} from '../../../applets/rectangle/rectangle.actions';
import {
    defaultRectangleX1,
    defaultRectangleX2,
    defaultRectangleY1,
    defaultRectangleY2,
    minCanvasHeight,
    minCanvasWidth,
    validationMessages
} from '../../../App.constants';

const payload = {
    x1: defaultRectangleX1,
    x2: defaultRectangleX2,
    y1: defaultRectangleY1,
    y2: defaultRectangleY2
};

const failPayload = {
    x1: 0,
    x2: 0,
    y1: 0,
    y2: 0
};

describe('setRectangleSaga', () => {
    it('should call setRectangleSaga and succeed', () =>
        expectSaga(setRectangleSaga)
            .provide([
                [select(selectCanvasHeight), minCanvasHeight],
                [select(selectCanvasWidth), minCanvasWidth],
            ])
            .dispatch(setRectangleRequest(payload))
            .put(setRectangleSuccess(payload))
            .run());

    it('should call setRectangleSaga and fail', () =>
        expectSaga(setRectangleSaga)
            .provide([
                [select(selectCanvasHeight), minCanvasHeight],
                [select(selectCanvasWidth), minCanvasWidth],
            ])
            .dispatch(setRectangleRequest(failPayload))
            .put(setRectangleFailure(validationMessages.point1IsOutOfCanvas))
            .run());
});
