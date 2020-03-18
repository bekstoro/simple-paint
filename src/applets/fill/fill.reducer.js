import {handleActions} from 'redux-actions';

import {SET_FILL_FAILURE, SET_FILL_REQUEST, SET_FILL_SUCCESS} from './fill.actions';

export const initialState = {
    color: '',
    errorMessage: '',
    height: 0,
    isLoading: false,
    isSuccess: false,
    width: 0
};

export const fillReducer = handleActions({
    [SET_FILL_FAILURE]:
        (state, {payload: errorMessage}) => ({
            ...state,
            errorMessage,
            isLoading: false,
            isSuccess: false
        }),
    [SET_FILL_REQUEST]:
        (state) => ({
            ...state,
            errorMessage: '',
            isLoading: true,
            isSuccess: false
        }),
    [SET_FILL_SUCCESS]:
        (state, {payload}) => ({
            color: payload.color,
            errorMessage: '',
            height: payload.height,
            isLoading: false,
            isSuccess: true,
            width: payload.width
        })
}, initialState);
