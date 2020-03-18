import React from 'react';
import configureStore from 'redux-mock-store';
import {shallow} from 'enzyme';

import {Board} from '../../screens/board.screen';

const configureMockStore = configureStore();

const initialState = {
    canvas: {
        errorMessage: '',
        height: 0,
        isLoading: false,
        isSuccess: false,
        width: 0
    },
    fill: {
        color: '',
        errorMessage: '',
        height: 0,
        isLoading: false,
        isSuccess: false,
        width: 0
    },
    line: {
        errorMessage: '',
        isLoading: false,
        isSuccess: false,
        x1: 0,
        x2: 0,
        y1: 0,
        y2: 0
    },
    rectangle: {
        errorMessage: '',
        isLoading: false,
        isSuccess: false,
        x1: 0,
        x2: 0,
        y1: 0,
        y2: 0
    }
};

const store = configureMockStore(initialState);

describe('Board screen', () => {
    it('should render correctly', () => {
        const component = shallow(<Board store={store}/>);
        expect(component).toMatchSnapshot();
    });
});
