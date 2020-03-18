import {
    SET_LINE_FAILURE,
    SET_LINE_REQUEST,
    SET_LINE_SUCCESS,
    setLineFailure,
    setLineRequest,
    setLineSuccess
} from '../../../applets/line/line.actions';
import {defaultLineX1, defaultLineX2, defaultLineY1, defaultLineY2} from '../../../App.constants';

describe('Line action', () => {
    it('should create failure action', () => {
        const payload = 'error';
        const expectedAction = {
            type: SET_LINE_FAILURE,
            payload
        };
        expect(setLineFailure(payload)).toEqual(expectedAction);
    });

    it('should create request action', () => {
        const payload = {
            x1: defaultLineX1,
            x2: defaultLineX2,
            y1: defaultLineY1,
            y2: defaultLineY2
        };
        const expectedAction = {
            type: SET_LINE_REQUEST,
            payload
        };
        expect(setLineRequest(payload)).toEqual(expectedAction);
    });

    it('should create success action', () => {
        const payload = {
            x1: defaultLineX1,
            x2: defaultLineX2,
            y1: defaultLineY1,
            y2: defaultLineY2
        };
        const expectedAction = {
            type: SET_LINE_SUCCESS,
            payload
        };
        expect(setLineSuccess(payload)).toEqual(expectedAction);
    });
});
