import {canvasReducer} from '../../../applets/canvas';
import {
    SET_CANVAS_FAILURE,
    SET_CANVAS_REQUEST,
    SET_CANVAS_SUCCESS,
    setCanvasFailure,
    setCanvasRequest,
    setCanvasSuccess
} from '../../../applets/canvas/canvas.actions';
import {minCanvasHeight, minCanvasWidth} from '../../../App.constants';

const initialState = {
    errorMessage: '',
    height: 0,
    isLoading: false,
    isSuccess: false,
    width: 0
};

const payload = {
    height: minCanvasHeight,
    width: minCanvasWidth
};

describe('Canvas reducer', () => {
    it('should return the initial state', () => {
        expect(canvasReducer(undefined, {})).toEqual(initialState)
    });

    it(`should handle ${SET_CANVAS_FAILURE}`, () => {
        expect(canvasReducer(initialState, setCanvasFailure('error'))).toEqual({
            ...initialState,
            errorMessage: 'error'
        })
    });

    it(`should handle ${SET_CANVAS_REQUEST}`, () => {
        expect(canvasReducer(initialState, setCanvasRequest(payload))).toEqual({
            ...initialState,
            isLoading: true
        })
    });

    it(`should handle ${SET_CANVAS_SUCCESS}`, () => {
        expect(canvasReducer(initialState, setCanvasSuccess(payload))).toEqual({
            ...initialState,
            isSuccess: true,
            height: payload.height,
            width: payload.width
        })
    });
});
