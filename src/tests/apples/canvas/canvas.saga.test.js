import {expectSaga} from 'redux-saga-test-plan';

import {setCanvasSaga} from '../../../applets/canvas/canvas.saga';
import {setCanvasFailure, setCanvasRequest, setCanvasSuccess} from '../../../applets/canvas/canvas.actions';
import {minCanvasHeight, minCanvasWidth, validationMessages} from '../../../App.constants';

const payload = {
    height: minCanvasHeight,
    width: minCanvasWidth
};

const failPayload = {
    height: 0,
    width: 0
};

describe('setCanvasSaga', () => {
    it('should call setCanvasSaga and succeed', () =>
        expectSaga(setCanvasSaga)
            .dispatch(setCanvasRequest(payload))
            .put(setCanvasSuccess(payload))
            .run());

    it('should call setCanvasSaga and fail', () =>
        expectSaga(setCanvasSaga)
            .dispatch(setCanvasRequest(failPayload))
            .put(setCanvasFailure(validationMessages.canvasWidth))
            .run());
});
