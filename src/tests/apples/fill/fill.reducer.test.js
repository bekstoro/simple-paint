import {fillReducer} from '../../../applets/fill';
import {
    SET_FILL_FAILURE,
    SET_FILL_REQUEST,
    SET_FILL_SUCCESS,
    setFillFailure,
    setFillRequest,
    setFillSuccess
} from '../../../applets/fill/fill.actions';
import {defaultFillColor, minFillHeight, minFillWidth} from '../../../App.constants';

const initialState = {
    color: '',
    errorMessage: '',
    height: 0,
    isLoading: false,
    isSuccess: false,
    width: 0
};

const payload = {
    color: defaultFillColor,
    height: minFillHeight,
    width: minFillWidth
};

describe('Fill reducer', () => {
    it('should return the initial state', () => {
        expect(fillReducer(undefined, {})).toEqual(initialState)
    });

    it(`should handle ${SET_FILL_FAILURE}`, () => {
        expect(fillReducer(initialState, setFillFailure('error'))).toEqual({
            ...initialState,
            errorMessage: 'error'
        })
    });

    it(`should handle ${SET_FILL_REQUEST}`, () => {
        expect(fillReducer(initialState, setFillRequest(payload))).toEqual({
            ...initialState,
            isLoading: true
        })
    });

    it(`should handle ${SET_FILL_SUCCESS}`, () => {
        expect(fillReducer(initialState, setFillSuccess(payload))).toEqual({
            ...initialState,
            isSuccess: true,
            color: payload.color,
            height: payload.height,
            width: payload.width
        })
    });
});
