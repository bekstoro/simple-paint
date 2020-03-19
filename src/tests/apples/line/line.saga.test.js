import {expectSaga} from 'redux-saga-test-plan';
import {select} from 'redux-saga-test-plan/matchers';

import {selectCanvasHeight, selectCanvasWidth} from '../../../applets/canvas';
import {setLineSaga} from '../../../applets/line/line.saga';
import {setLineFailure, setLineRequest, setLineSuccess} from '../../../applets/line/line.actions';
import {
    defaultLineX1,
    defaultLineX2,
    defaultLineY1,
    defaultLineY2,
    minCanvasHeight,
    minCanvasWidth,
    validationMessages
} from '../../../App.constants';

const payload = {
    x1: defaultLineX1,
    x2: defaultLineX2,
    y1: defaultLineY1,
    y2: defaultLineY2
};

const failPayload = {
    x1: 0,
    x2: 0,
    y1: 0,
    y2: 0
};

describe('setLineSaga', () => {
    it('should call setLineSaga and succeed', () =>
        expectSaga(setLineSaga)
            .provide([
                [select(selectCanvasHeight), minCanvasHeight],
                [select(selectCanvasWidth), minCanvasWidth],
            ])
            .dispatch(setLineRequest(payload))
            .put(setLineSuccess(payload))
            .run());

    it('should call setLineSaga and fail', () =>
        expectSaga(setLineSaga)
            .provide([
                [select(selectCanvasHeight), minCanvasHeight],
                [select(selectCanvasWidth), minCanvasWidth],
            ])
            .dispatch(setLineRequest(failPayload))
            .put(setLineFailure(validationMessages.point1IsOutOfCanvas))
            .run());
});
