import configureStore from 'redux-mock-store';
import {
    defaultFillColor,
    defaultLineX1,
    defaultLineX2,
    defaultLineY1,
    defaultLineY2,
    defaultRectangleX1,
    defaultRectangleX2,
    defaultRectangleY1,
    defaultRectangleY2,
    minCanvasHeight,
    minCanvasWidth,
    minFillHeight,
    minFillWidth
} from '../App.constants';

const configureMockStore = configureStore();

export const mockInitialState = {
    canvas: {
        errorMessage: '',
        height: minCanvasHeight,
        isLoading: false,
        isSuccess: false,
        width: minCanvasWidth
    },
    fill: {
        color: defaultFillColor,
        errorMessage: '',
        height: minFillHeight,
        isLoading: false,
        isSuccess: false,
        width: minFillWidth
    },
    line: {
        errorMessage: '',
        isLoading: false,
        isSuccess: false,
        x1: defaultLineX1,
        x2: defaultLineX2,
        y1: defaultLineY1,
        y2: defaultLineY2
    },
    rectangle: {
        errorMessage: '',
        isLoading: false,
        isSuccess: false,
        x1: defaultRectangleX1,
        x2: defaultRectangleX2,
        y1: defaultRectangleY1,
        y2: defaultRectangleY2
    }
};

export const mockStore = configureMockStore(mockInitialState);

export const mockFunction = jest.fn();
