import {
    SET_FILL_FAILURE,
    SET_FILL_REQUEST,
    SET_FILL_SUCCESS,
    setFillFailure,
    setFillRequest,
    setFillSuccess
} from '../../../applets/fill/fill.actions';
import {defaultFillColor, minFillHeight, minFillWidth} from '../../../App.constants';

describe('Fill action', () => {
    it('should create failure action', () => {
        const payload = 'error';
        const expectedAction = {
            type: SET_FILL_FAILURE,
            payload
        };
        expect(setFillFailure(payload)).toEqual(expectedAction);
    });

    it('should create request action', () => {
        const payload = {
            color: defaultFillColor,
            height: minFillHeight,
            width: minFillWidth
        };
        const expectedAction = {
            type: SET_FILL_REQUEST,
            payload
        };
        expect(setFillRequest(payload)).toEqual(expectedAction);
    });

    it('should create success action', () => {
        const payload = {
            color: defaultFillColor,
            height: minFillHeight,
            width: minFillWidth
        };
        const expectedAction = {
            type: SET_FILL_SUCCESS,
            payload
        };
        expect(setFillSuccess(payload)).toEqual(expectedAction);
    });
});
