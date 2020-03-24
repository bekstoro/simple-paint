import {handleActions} from 'redux-actions';

import {SET_LINE_FAILURE, SET_LINE_REQUEST, SET_LINE_SUCCESS} from './line.actions';

export const initialState = {
    errorMessage: '',
    isLoading: false,
    isSuccess: false,
    entities: []
};

export const lineReducer = handleActions({
    [SET_LINE_FAILURE]:
        (state, {payload: errorMessage}) => ({
            ...state,
            errorMessage,
            isLoading: false,
            isSuccess: false
        }),
    [SET_LINE_REQUEST]:
        (state) => ({
            ...state,
            errorMessage: '',
            isLoading: true,
            isSuccess: false
        }),
    [SET_LINE_SUCCESS]:
        (state, {payload}) => ({
            errorMessage: '',
            isLoading: false,
            isSuccess: true,
            entities: [
                ...state.entities,
                {
                    x1: payload.x1,
                    x2: payload.x2,
                    y1: payload.y1,
                    y2: payload.y2
                }
            ]
        })
}, initialState);
