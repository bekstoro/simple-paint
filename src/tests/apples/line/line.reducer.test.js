import {lineReducer} from '../../../applets/line';
import {
    SET_LINE_FAILURE,
    SET_LINE_REQUEST,
    SET_LINE_SUCCESS,
    setLineFailure,
    setLineRequest,
    setLineSuccess
} from '../../../applets/line/line.actions';
import {defaultLineX1, defaultLineX2, defaultLineY1, defaultLineY2} from '../../../App.constants';

const initialState = {
    errorMessage: '',
    isLoading: false,
    isSuccess: false,
    x1: 0,
    x2: 0,
    y1: 0,
    y2: 0
};

const payload = {
    x1: defaultLineX1,
    x2: defaultLineX2,
    y1: defaultLineY1,
    y2: defaultLineY2
};

describe('Line reducer', () => {
    it('should return the initial state', () => {
        expect(lineReducer(undefined, {})).toEqual(initialState)
    });

    it(`should handle ${SET_LINE_FAILURE}`, () => {
        expect(lineReducer(initialState, setLineFailure('error'))).toEqual({
            ...initialState,
            errorMessage: 'error'
        })
    });

    it(`should handle ${SET_LINE_REQUEST}`, () => {
        expect(lineReducer(initialState, setLineRequest(payload))).toEqual({
            ...initialState,
            isLoading: true
        })
    });

    it(`should handle ${SET_LINE_SUCCESS}`, () => {
        expect(lineReducer(initialState, setLineSuccess(payload))).toEqual({
            ...initialState,
            isSuccess: true,
            x1: payload.x1,
            x2: payload.x2,
            y1: payload.y1,
            y2: payload.y2
        })
    });
});
