import {
    SET_CANVAS_FAILURE,
    SET_CANVAS_REQUEST,
    SET_CANVAS_SUCCESS,
    setCanvasFailure,
    setCanvasRequest,
    setCanvasSuccess
} from '../../../applets/canvas/canvas.actions';
import {minCanvasHeight, minCanvasWidth} from '../../../App.constants';

describe('Canvas action', () => {
    it('should create failure action', () => {
        const payload = 'error';
        const expectedAction = {
            type: SET_CANVAS_FAILURE,
            payload
        };
        expect(setCanvasFailure(payload)).toEqual(expectedAction);
    });

    it('should create request action', () => {
        const payload = {
            height: minCanvasHeight,
            width: minCanvasWidth
        };
        const expectedAction = {
            type: SET_CANVAS_REQUEST,
            payload
        };
        expect(setCanvasRequest(payload)).toEqual(expectedAction);
    });

    it('should create success action', () => {
        const payload = {
            height: minCanvasHeight,
            width: minCanvasWidth
        };
        const expectedAction = {
            type: SET_CANVAS_SUCCESS,
            payload
        };
        expect(setCanvasSuccess(payload)).toEqual(expectedAction);
    });
});
