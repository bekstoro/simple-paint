import {
    SET_RECTANGLE_FAILURE,
    SET_RECTANGLE_REQUEST,
    SET_RECTANGLE_SUCCESS,
    setRectangleFailure,
    setRectangleRequest,
    setRectangleSuccess
} from '../../../applets/rectangle/rectangle.actions';
import {defaultRectangleX1, defaultRectangleX2, defaultRectangleY1, defaultRectangleY2} from '../../../App.constants';

describe('Rectangle action', () => {
    it('should create failure action', () => {
        const payload = 'error';
        const expectedAction = {
            type: SET_RECTANGLE_FAILURE,
            payload
        };
        expect(setRectangleFailure(payload)).toEqual(expectedAction);
    });

    it('should create request action', () => {
        const payload = {
            x1: defaultRectangleX1,
            x2: defaultRectangleX2,
            y1: defaultRectangleY1,
            y2: defaultRectangleY2
        };
        const expectedAction = {
            type: SET_RECTANGLE_REQUEST,
            payload
        };
        expect(setRectangleRequest(payload)).toEqual(expectedAction);
    });

    it('should create success action', () => {
        const payload = {
            x1: defaultRectangleX1,
            x2: defaultRectangleX2,
            y1: defaultRectangleY1,
            y2: defaultRectangleY2
        };
        const expectedAction = {
            type: SET_RECTANGLE_SUCCESS,
            payload
        };
        expect(setRectangleSuccess(payload)).toEqual(expectedAction);
    });
});
