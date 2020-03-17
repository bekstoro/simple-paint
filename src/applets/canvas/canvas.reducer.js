import {handleActions} from 'redux-actions';

import {SET_CANVAS_FAILURE, SET_CANVAS_REQUEST, SET_CANVAS_SUCCESS} from './canvas.actions';

export const initialState = {
    isFailed: false,
    isLoading: false,
    width: 0,
    height: 0,
};

export const canvasReducer = handleActions({
    [SET_CANVAS_FAILURE]:
        (state) => ({
            ...state,
            isFailed: true,
            isLoading: false
        }),
    [SET_CANVAS_REQUEST]:
        (state) => ({
            ...state,
            isFailed: false,
            isLoading: true
        }),
    [SET_CANVAS_SUCCESS]:
        (state, {payload}) => ({
            width: payload.width,
            height: payload.height,
            isFailed: false,
            isLoading: false
        })
}, initialState);
