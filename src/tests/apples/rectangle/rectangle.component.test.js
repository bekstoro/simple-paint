import React from 'react';
import configureStore from 'redux-mock-store';
import {shallow} from 'enzyme';

import {Rectangle} from '../../../applets/rectangle';

const configureMockStore = configureStore();

const initialState = {
    canvas: {
        width: 0,
        height: 0,
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

describe('Rectangle component', () => {
    it('should render correctly', () => {
        const component = shallow(<Rectangle store={store} handleNext={() => {}}/>);
        expect(component).toMatchSnapshot();
    });
});
