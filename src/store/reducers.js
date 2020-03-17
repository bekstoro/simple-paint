import {combineReducers} from 'redux'

import {canvasReducer} from '../applets/canvas';
import {fillReducer} from '../applets/fill';
import {lineReducer} from '../applets/line';
import {rectangleReducer} from '../applets/rectangle';

export const rootReducer = combineReducers({
    canvas: canvasReducer,
    fill: fillReducer,
    line: lineReducer,
    rectangle: rectangleReducer
});
