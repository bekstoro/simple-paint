import React from 'react';
import configureStore from 'redux-mock-store';
import {shallow} from 'enzyme';

import {Line} from '../../../applets/line';

const configureMockStore = configureStore();

const initialState = {
    line: {
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

describe('Line component', () => {
    it('should render correctly', () => {
        const component = shallow(<Line store={store} handleNext={() => {}}/>);
        expect(component).toMatchSnapshot();
    });
});
