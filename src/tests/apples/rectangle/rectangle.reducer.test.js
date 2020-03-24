import {rectangleReducer} from '../../../applets/rectangle';
import {
    SET_RECTANGLE_FAILURE,
    SET_RECTANGLE_REQUEST,
    SET_RECTANGLE_SUCCESS,
    setRectangleFailure,
    setRectangleRequest,
    setRectangleSuccess
} from '../../../applets/rectangle/rectangle.actions';
import {defaultRectangleX1, defaultRectangleX2, defaultRectangleY1, defaultRectangleY2} from '../../../App.constants';

const initialState = {
    errorMessage: '',
    isLoading: false,
    isSuccess: false,
    entities: []
};

const payload = {
    x1: defaultRectangleX1,
    x2: defaultRectangleX2,
    y1: defaultRectangleY1,
    y2: defaultRectangleY2
};

describe('Rectangle reducer', () => {
    it('should return the initial state', () => {
        expect(rectangleReducer(undefined, {})).toEqual(initialState)
    });

    it(`should handle ${SET_RECTANGLE_FAILURE}`, () => {
        expect(rectangleReducer(initialState, setRectangleFailure('error'))).toEqual({
            ...initialState,
            errorMessage: 'error'
        })
    });

    it(`should handle ${SET_RECTANGLE_REQUEST}`, () => {
        expect(rectangleReducer(initialState, setRectangleRequest(payload))).toEqual({
            ...initialState,
            isLoading: true
        })
    });

    it(`should handle ${SET_RECTANGLE_SUCCESS}`, () => {
        expect(rectangleReducer(initialState, setRectangleSuccess(payload))).toEqual({
            ...initialState,
            isSuccess: true,
            entities: [{
                x1: payload.x1,
                x2: payload.x2,
                y1: payload.y1,
                y2: payload.y2
            }]
        })
    });
});
