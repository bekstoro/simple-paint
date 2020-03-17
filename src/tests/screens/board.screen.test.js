import React from 'react';
import configureStore from 'redux-mock-store';
import {shallow} from 'enzyme';

import {Board} from '../../screens/board.screen';

const configureMockStore = configureStore();

const initialState = {
    canvas: {
        width: 0,
        height: 0,
        isFailed: false,
        isLoading: false
    },
    fill: {
        width: 0,
        height: 0,
        color: '',
        isFailed: false,
        isLoading: false
    },
    line: {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0,
        isFailed: false,
        isLoading: false
    },
    rectangle: {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0,
        isFailed: false,
        isLoading: false
    }
};

const store = configureMockStore(initialState);

describe('Board screen', () => {
    it('should render correctly', () => {
        const component = shallow(<Board store={store}/>);
        expect(component).toMatchSnapshot();
    });
});
