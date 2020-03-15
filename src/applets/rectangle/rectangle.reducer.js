import {handleActions} from 'redux-actions';
import {SET_RECTANGLE_SETTINGS_FAILURE, SET_RECTANGLE_SETTINGS_REQUEST, SET_RECTANGLE_SETTINGS_SUCCESS} from './rectangle.actions';

export const initialState = {
    isFailed: false,
    isLoading: false,
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0
};

export const rectangleReducer = handleActions({
    [SET_RECTANGLE_SETTINGS_FAILURE]:
        (state) => ({
            ...state,
            isFailed: true,
            isLoading: false
        }),
    [SET_RECTANGLE_SETTINGS_REQUEST]:
        (state) => ({
            ...state,
            isFailed: false,
            isLoading: true
        }),
    [SET_RECTANGLE_SETTINGS_SUCCESS]:
        (state, {x1, y1, x2, y2}) => ({
            x1,
            y1,
            x2,
            y2,
            isFailed: false,
            isLoading: false
        })
}, initialState);
