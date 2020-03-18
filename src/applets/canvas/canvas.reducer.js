import {handleActions} from 'redux-actions';

import {SET_CANVAS_FAILURE, SET_CANVAS_REQUEST, SET_CANVAS_SUCCESS} from './canvas.actions';

export const initialState = {
    errorMessage: '',
    height: 0,
    isLoading: false,
    isSuccess: false,
    width: 0
};

export const canvasReducer = handleActions({
    [SET_CANVAS_FAILURE]:
        (state, {payload: errorMessage}) => ({
            ...state,
            errorMessage,
            isLoading: false,
            isSuccess: false
        }),
    [SET_CANVAS_REQUEST]:
        (state) => ({
            ...state,
            errorMessage: '',
            isLoading: true,
            isSuccess: false
        }),
    [SET_CANVAS_SUCCESS]:
        (state, {payload}) => ({
            errorMessage: '',
            height: payload.height,
            isLoading: false,
            isSuccess: true,
            width: payload.width
        })
}, initialState);
