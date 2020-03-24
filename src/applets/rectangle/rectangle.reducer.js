import {handleActions} from 'redux-actions';

import {SET_RECTANGLE_FAILURE, SET_RECTANGLE_REQUEST, SET_RECTANGLE_SUCCESS} from './rectangle.actions';

export const initialState = {
    errorMessage: '',
    isLoading: false,
    isSuccess: false,
    entities: []
};

export const rectangleReducer = handleActions({
    [SET_RECTANGLE_FAILURE]:
        (state, {payload: errorMessage}) => ({
            ...state,
            errorMessage,
            isLoading: false,
            isSuccess: false
        }),
    [SET_RECTANGLE_REQUEST]:
        (state) => ({
            ...state,
            errorMessage: '',
            isLoading: true,
            isSuccess: false
        }),
    [SET_RECTANGLE_SUCCESS]:
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
