import {handleActions} from 'redux-actions';

import {SET_FILL_FAILURE, SET_FILL_REQUEST, SET_FILL_SUCCESS} from './fill.actions';

export const initialState = {
    isFailed: false,
    isLoading: false,
    width: 0,
    height: 0,
    color: ''
};

export const fillReducer = handleActions({
    [SET_FILL_FAILURE]:
        (state) => ({
            ...state,
            isFailed: true,
            isLoading: false
        }),
    [SET_FILL_REQUEST]:
        (state) => ({
            ...state,
            isFailed: false,
            isLoading: true
        }),
    [SET_FILL_SUCCESS]:
        (state, {payload}) => ({
            width: payload.width,
            height: payload.height,
            color: payload.color,
            isFailed: false,
            isLoading: false
        })
}, initialState);
